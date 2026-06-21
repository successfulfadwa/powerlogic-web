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

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(63,135,254,0.6) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      {/* Horizontal scan line */}
      <div
        className="absolute left-0 right-0 h-px pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(63,135,254,0.5), rgba(63,224,254,0.3), transparent)',
          animation: 'scan-line 8s ease-in-out infinite',
          top: '30%',
        }}
      />

      <style>{`
        @keyframes scan-line {
          0% { transform: translateY(-40vh); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(80vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
