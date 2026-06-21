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
        background: 'var(--glass-fill)',
        border: '1px solid var(--glass-border)',
        backdropFilter: 'blur(16px)',
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
        borderTop: '1px solid var(--glass-border)',
        borderBottom: '1px solid var(--glass-border)',
        background: 'rgba(10,11,15,0.6)',
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
