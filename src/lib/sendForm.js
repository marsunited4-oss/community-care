// Sends a website form to Community Care Circle through EmailJS (free plan).
// Uses EmailJS's REST API directly, so no extra package is needed.
// Attached files are uploaded to Cloudinary first and their links are put in the
// email body, because EmailJS's free plan cannot carry attachments.
// Keys come from environment variables (see .env.example). They are public by
// design; restrict them in the EmailJS and Cloudinary dashboards.

const env = import.meta.env
const SERVICE_ID = env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = env.VITE_EMAILJS_PUBLIC_KEY
const CLOUD_NAME = env.VITE_CLOUDINARY_CLOUD_NAME
const UPLOAD_PRESET = env.VITE_CLOUDINARY_UPLOAD_PRESET

const MAX_FILE_MB = 10
const ALLOWED = /\.(pdf|docx?|jpe?g|png)$/i

// An error whose text is safe to show to the visitor.
export class FormError extends Error {}

// "firstName" -> "First Name"
const prettify = (key) => key.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/^./, (c) => c.toUpperCase())

const ROOT_FOLDER = 'website-applications'

// Folder for one applicant: website-applications/Jane Smith
const folderFor = (name) => `${ROOT_FOLDER}/${name.replace(/[^\p{L}\p{N} _-]/gu, '').replace(/\s+/g, ' ').trim() || 'Unknown'}`

async function uploadFile(file, folder) {
  if (!CLOUD_NAME || !UPLOAD_PRESET) throw new Error('File uploads are not configured')
  if (!ALLOWED.test(file.name)) throw new FormError(`${file.name} is not a supported file type. Please use PDF, Word, JPG or PNG.`)
  if (file.size > MAX_FILE_MB * 1024 * 1024) throw new FormError(`${file.name} is larger than ${MAX_FILE_MB} MB.`)

  const body = new FormData()
  body.append('file', file)
  body.append('upload_preset', UPLOAD_PRESET)
  body.append('asset_folder', folder)
  const res = await fetch(`https://api.cloudinary.com/v1_1/${CLOUD_NAME}/auto/upload`, { method: 'POST', body })
  if (!res.ok) throw new Error(`Upload failed (${res.status})`)
  return (await res.json()).secure_url
}

export async function sendForm(formName, data) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) throw new Error('Email is not configured')

  // Spam trap: real visitors never see or fill this field.
  if (data.get('website')) return

  const get = (key) => String(data.get(key) ?? '').trim()
  const name = `${get('firstName')} ${get('lastName')}`.trim()
  const folder = folderFor(name)

  // Upload every chosen file into the applicant's folder, then list its link under the field's name.
  const fileLines = []
  for (const key of new Set(data.keys())) {
    const files = data.getAll(key).filter((v) => v instanceof File && v.size > 0)
    const links = await Promise.all(files.map((f) => uploadFile(f, folder)))
    links.forEach((url, i) => fileLines.push(`${prettify(key)}${links.length > 1 ? ` ${i + 1}` : ''}: ${url}`))
  }

  const fields = [...data.entries()].filter(([key, value]) => key !== 'website' && typeof value === 'string' && value.trim())

  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: SERVICE_ID,
      template_id: TEMPLATE_ID,
      user_id: PUBLIC_KEY,
      template_params: {
        form_name: formName,
        subject: `${formName}${name ? ` from ${name}` : ''}`,
        from_name: name,
        reply_to: get('email'),
        message: [...fields.map(([key, value]) => `${prettify(key)}: ${value.trim()}`), ...fileLines].join('\n'),
      },
    }),
  })
  if (!res.ok) throw new Error(`Email failed (${res.status})`)
}
