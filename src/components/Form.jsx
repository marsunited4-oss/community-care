import { useId, useState } from 'react'
import { CircleCheck } from 'lucide-react'
import { contact } from '../data/site'
import { FormError, sendForm } from '../lib/sendForm'

export function Field({ label, required, as = 'input', children, full, hint, ...props }) {
  const id = useId()
  const Tag = as
  return (
    <div className={`field ${full ? 'field--full' : ''}`}>
      <label htmlFor={id}>
        {label} {required ? <span className="req" aria-hidden="true">*</span> : <span className="opt">(optional)</span>}
      </label>
      <Tag id={id} required={required} placeholder={label} {...props}>
        {children}
      </Tag>
      {hint && <small className="field__hint">{hint}</small>}
    </div>
  )
}

export function FileField({ label, name, required, full, multiple }) {
  const id = useId()
  return (
    <div className={`field ${full ? 'field--full' : ''}`}>
      <label htmlFor={id}>
        {label} {required ? <span className="req" aria-hidden="true">*</span> : <span className="opt">(optional)</span>}
      </label>
      <input id={id} type="file" name={name} required={required} multiple={multiple} accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" />
    </div>
  )
}

export function RadioGroup({ label, name, options, required }) {
  return (
    <fieldset className="field field--radio">
      <legend>
        {label} {required && <span className="req" aria-hidden="true">*</span>}
      </legend>
      <div>
        {options.map((o) => (
          <label key={o}>
            <input type="radio" name={name} value={o} required={required} /> {o}
          </label>
        ))}
      </div>
    </fieldset>
  )
}

// Wraps a form, emails it to Community Care Circle (via EmailJS) and swaps it
// for a thank-you message once it has been sent.
export function FormCard({ title, intro, submitLabel = 'Submit', successTitle, successText, children }) {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [problem, setProblem] = useState('')
  const sent = status === 'sent'

  const handle = async (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    setStatus('sending')
    try {
      await sendForm(title, data)
      setStatus('sent')
    } catch (err) {
      setProblem(err instanceof FormError ? err.message : '')
      setStatus('error')
    }
  }

  return (
    <div className="form-block">
      {title && <h2>{title}</h2>}
      {intro && <p>{intro}</p>}
      <div className="form-card">
        {sent ? (
          <div className="form-success" role="status">
            <CircleCheck size={48} aria-hidden="true" />
            <h3>{successTitle}</h3>
            <p>{successText}</p>
            <button type="button" className="btn btn--outline" onClick={() => setStatus('idle')}>
              Submit another response
            </button>
          </div>
        ) : (
          <form onSubmit={handle}>
            <p className="form-note">
              Fields marked <span className="req">*</span> are required.
            </p>
            <div className="form-grid">{children}</div>
            <div className="hp" aria-hidden="true">
              <label>
                Leave this field empty
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </label>
            </div>
            {status === 'error' && (
              <p className="form-error" role="alert">
                {problem ||
                  `Sorry, your message could not be sent. Please call ${contact.phones[0].label} or email ${contact.email}.`}
              </p>
            )}
            <button type="submit" className="btn btn--primary btn--block" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : submitLabel}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
