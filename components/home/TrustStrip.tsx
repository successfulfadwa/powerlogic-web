import { Truck, Star, BadgeCheck, Shield, Calendar } from 'lucide-react';
import MarqueeStrip from '@/components/ui/MarqueeStrip';

const badges = [
  { Icon: Truck, text: 'Fast & Reliable Shipping' },
  { Icon: Star, text: 'Top-Rated Products' },
  { Icon: BadgeCheck, text: 'Competitive Pricing' },
  { Icon: Shield, text: 'Licensed & Insured' },
  { Icon: Calendar, text: 'Since 2021' },
];

function Badge({ Icon, text }: { Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties }>; text: string }) {
  return (
    <div
      className="flex items-center gap-3 px-6 py-3 rounded-full flex-shrink-0"
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(63,135,254,0.15)',
        backdropFilter: 'blur(24px) saturate(150%)',
        WebkitBackdropFilter: 'blur(24px) saturate(150%)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.07), 0 4px 20px rgba(0,0,0,0.3)',
      }}
    >
      <Icon size={15} style={{ color: 'var(--brand-blue)' }} />
      <span
        className="text-sm font-medium whitespace-nowrap"
        style={{ color: 'var(--text-secondary)' }}
      >
        {text}
      </span>
    </div>
  );
}

export default function TrustStrip() {
  return (
    <section
      className="py-6 relative overflow-hidden"
      style={{
        borderTop: '1px solid rgba(63,135,254,0.1)',
        borderBottom: '1px solid rgba(63,135,254,0.1)',
        background: 'rgba(5,6,10,0.7)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04), inset 0 -1px 0 rgba(255,255,255,0.02)',
      }}
    >
      <MarqueeStrip speed={25} gap={20}>
        {badges.map(({ Icon, text }) => (
          <Badge key={text} Icon={Icon} text={text} />
        ))}
      </MarqueeStrip>
    </section>
  );
}
