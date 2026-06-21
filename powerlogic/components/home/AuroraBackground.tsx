'use client';

export default function AuroraBackground() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Orb 1 — blue, top-left */}
      <div
        className="absolute rounded-full"
        style={{
          width: '70vw',
          height: '70vw',
          top: '-20%',
          left: '-15%',
          background: 'radial-gradient(circle, rgba(63,135,254,0.18) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'aurora-drift-1 35s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Orb 2 — violet, right */}
      <div
        className="absolute rounded-full"
        style={{
          width: '60vw',
          height: '60vw',
          top: '10%',
          right: '-20%',
          background: 'radial-gradient(circle, rgba(123,92,255,0.12) 0%, transparent 70%)',
          filter: 'blur(100px)',
          animation: 'aurora-drift-2 42s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Orb 3 — cyan, bottom-center */}
      <div
        className="absolute rounded-full"
        style={{
          width: '50vw',
          height: '50vw',
          bottom: '-10%',
          left: '25%',
          background: 'radial-gradient(circle, rgba(63,224,254,0.08) 0%, transparent 70%)',
          filter: 'blur(120px)',
          animation: 'aurora-drift-3 28s ease-in-out infinite',
          willChange: 'transform',
        }}
      />

      {/* Subtle noise overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }}
      />
    </div>
  );
}
