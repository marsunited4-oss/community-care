import { useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, X } from 'lucide-react'
import { team } from '../data/site'
import { BrandIcon } from './Icon'

export default function TeamGrid() {
  const dialog = useRef(null)
  const [person, setPerson] = useState(null)

  const open = (m) => {
    setPerson(m)
    dialog.current.showModal()
  }
  const close = () => dialog.current.close()

  return (
    <>
      <ul className="team-grid">
        {team.map((m) => (
          <li key={m.name} className="team-card">
            <button type="button" className="team-card__photo" onClick={() => open(m)} aria-label={`Meet ${m.name}`}>
              <img src={m.photo} alt="" loading="lazy" />
              <span className="team-card__arrow" aria-hidden="true">
                <ArrowUpRight size={20} />
              </span>
            </button>
            <p className="team-card__role">{m.role}</p>
            <h3>{m.name}</h3>
            <button type="button" className="team-card__meet" onClick={() => open(m)}>
              Meet {m.first} <ArrowRight size={18} aria-hidden="true" />
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialog}
        className="team-dialog"
        aria-labelledby="team-dialog-name"
        onClick={(e) => e.target === dialog.current && close()}
      >
        {person && (
          <div className="team-dialog__inner">
            <button type="button" className="team-dialog__close" onClick={close} aria-label="Close">
              <X size={22} />
            </button>
            <div className="team-dialog__head">
              <img src={person.photo} alt={`Portrait of ${person.name}`} />
              <div>
                <p className="team-card__role">{person.role}</p>
                <h2 id="team-dialog-name">{person.name}</h2>
                <a href={person.linkedin} target="_blank" rel="noreferrer" className="text-link">
                  <BrandIcon name="LinkedIn" size={16} /> LinkedIn
                </a>
              </div>
            </div>
            {person.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        )}
      </dialog>
    </>
  )
}
