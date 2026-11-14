// Value icons from the Our Values section of communitycarecircle.com.au,
// recoloured to the brand palette.
const ORANGE = '#ef8c2e'
const NAVY = '#0e2551'
const LIGHT_BLUE = '#ceecfb'

const icons = {
  Empowerment: (
    <svg viewBox="18.5 23.023 163 153.956">
      <path
        fill={ORANGE}
        d="M163.3 140.489V59.511L100 23.023 36.951 59.367l-.25.144v80.979l63.05 36.345.25.144 63.05-36.344.249-.146zm-1-.578L100 175.823l-62.3-35.912V60.089L100 24.177l62.3 35.912v79.822z"
      />
      <path fill={ORANGE} d="M43.5 136.4l56.9 32.9 56.9-32.9V63.6l-56.9-32.9-56.9 32.9v72.8z" />
      <path
        fill={ORANGE}
        d="M31.9 56.989l33.55-19.356-.5-.866L30.9 56.412v22.029L18.5 99.3l12.4 22.204v22.085l34.05 19.643.5-.865-33.55-19.356V56.989z"
      />
      <path
        fill={ORANGE}
        d="M181.5 99.3l-12.4-20.86V56.412l-34.05-19.645-.5.866 33.55 19.356v86.022l-33.55 19.356.5.865 33.8-19.5.25-.143v-22.084L181.5 99.3z"
      />
    </svg>
  ),
  Respect: (
    <svg viewBox="20.019 19.947 160.034 160.106">
      <path
        fill={ORANGE}
        d="M118.4 100c110.3 71 52.7 128.6-18.4 18.4C29 228.7-28.6 171.1 81.6 100-28.6 29 29-28.6 100 81.6c71-110.3 128.6-52.7 18.4 18.4"
      />
    </svg>
  ),
  Inclusion: (
    <svg viewBox="20 55.7 160 89.3">
      <path
        fill={ORANGE}
        d="M100 55.7c-44.9 0-80 39.2-80 89.3h20.2c0-37.4 26.2-66.6 59.8-66.6s59.8 29.2 59.8 66.6H180c0-50.1-35.1-89.3-80-89.3z"
      />
      <path
        fill={LIGHT_BLUE}
        d="M100 78.4c-33.5 0-59.8 29.2-59.8 66.6h19.9c0-24 18.1-44.3 39.6-44.3s39.7 20.3 39.7 44.3h20.4c0-37.4-26.3-66.6-59.8-66.6z"
      />
      <path
        fill={NAVY}
        d="M99.7 100.7c-21.5 0-39.6 20.3-39.6 44.3h20.4c0-12.5 9.3-23.8 19.3-23.8S119 132.5 119 145h20.4c0-24-18.2-44.3-39.7-44.3z"
      />
    </svg>
  ),
  Authenticity: (
    <svg viewBox="38.5 20 123 160">
      <path
        fill={ORANGE}
        fillRule="evenodd"
        d="M102.887 20v117.469c32.371 0 58.613-26.296 58.613-58.734C161.5 46.296 135.258 20 102.887 20z"
      />
      <path
        fill={ORANGE}
        fillRule="evenodd"
        d="M38.5 121.266C38.5 153.704 64.742 180 97.113 180V62.532c-32.371 0-58.613 26.296-58.613 58.734z"
      />
    </svg>
  ),
}

export default function ValueIcon({ name, size = 48 }) {
  return (
    <span className="value-icon" style={{ width: size, height: size }} aria-hidden="true">
      {icons[name]}
    </span>
  )
}
