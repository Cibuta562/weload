// Decorative animated route network for the hero background (Tive-style).
// Pure SVG + CSS animations — no client JS required.

const nodes = [
  { x: 180, y: 150 },
  { x: 360, y: 95 },
  { x: 545, y: 180 },
  { x: 720, y: 120 },
  { x: 905, y: 210 },
  { x: 1080, y: 140 },
  { x: 300, y: 330 },
  { x: 500, y: 400 },
  { x: 690, y: 320 },
  { x: 880, y: 410 },
  { x: 1060, y: 350 },
];

// curved routes between selected nodes (great-circle-ish arcs)
const routes = [
  "M180,150 Q360,40 545,180",
  "M545,180 Q700,40 905,210",
  "M905,210 Q1010,90 1080,140",
  "M300,330 Q420,260 500,400",
  "M500,400 Q620,300 690,320",
  "M690,320 Q820,280 880,410",
  "M880,410 Q1000,330 1060,350",
  "M180,150 Q260,260 300,330",
  "M720,120 Q820,210 905,210",
];

export default function HeroMap({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 500"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      aria-hidden="true"
      fill="none"
    >
      {/* faint base grid of dots */}
      <defs>
        <pattern id="dots" width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.2" fill="#5363ab" fillOpacity="0.18" />
        </pattern>
        <linearGradient id="routeGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#f15928" stopOpacity="0.1" />
          <stop offset="50%" stopColor="#f37044" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#f15928" stopOpacity="0.1" />
        </linearGradient>
      </defs>

      <rect width="1200" height="500" fill="url(#dots)" />

      {/* static faint route base */}
      {routes.map((d, i) => (
        <path key={`b${i}`} d={d} stroke="#5363ab" strokeOpacity="0.22" strokeWidth="1.4" />
      ))}

      {/* animated dashed routes */}
      {routes.map((d, i) => (
        <path
          key={`a${i}`}
          d={d}
          stroke="url(#routeGrad)"
          strokeWidth="1.8"
          strokeLinecap="round"
          className={i % 2 ? "animate-dash-slow" : "animate-dash"}
        />
      ))}

      {/* pulsing nodes */}
      {nodes.map((n, i) => (
        <g key={`n${i}`}>
          <circle cx={n.x} cy={n.y} r="9" fill="#f15928" fillOpacity="0.12" />
          <circle
            cx={n.x}
            cy={n.y}
            r="3.4"
            fill="#f37044"
            className="animate-node"
            style={{ animationDelay: `${(i % 5) * 0.4}s` }}
          />
        </g>
      ))}
    </svg>
  );
}
