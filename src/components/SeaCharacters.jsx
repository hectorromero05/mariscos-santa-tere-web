export function ShrimpMascot({ className = '' }) {
  return <div className={`mascot shrimp ${className}`} aria-hidden="true"><span className="hat">▰</span><span className="body">🦐</span><span className="bubble one">○</span><span className="bubble two">○</span></div>;
}
export function OctopusMascot({ className = '' }) {
  return <div className={`mascot octopus ${className}`} aria-hidden="true"><span>🐙</span><small>¡caile!</small></div>;
}
export function ChefBadge({ className = '' }) {
  return <div className={`chef-badge ${className}`} aria-hidden="true"><span>👨‍🍳</span><b>Santa Tere</b></div>;
}
