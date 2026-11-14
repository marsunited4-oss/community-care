// Official "I love NDIS, Registered NDIS Provider" logo supplied by Community Care Circle.
export default function NdisBadge({ className = '' }) {
  return (
    <span className={`ndis-badge ${className}`}>
      <img src="/logos/ndis-registered.png" alt="I love NDIS. Registered NDIS Provider" />
    </span>
  )
}
