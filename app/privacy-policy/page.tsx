import type { Metadata } from 'next';
import AuroraBackground from '@/components/home/AuroraBackground';

export const metadata: Metadata = {
  title: 'Privacy Policy — Powerlogic',
  description: 'How Powerlogic collects, uses, stores, and protects personal information on this website.',
};

const sections = [
  {
    title: '1. Who we are',
    body: [
      'Powerlogic is a consumer electronics and accessories brand based in London, UK. This Privacy Policy explains how we handle personal information when you browse our website, contact us, or interact with our product pages and support channels.',
    ],
  },
  {
    title: '2. Information we collect',
    body: [
      'We may collect information you provide directly, such as your name, email address, message content, and any details you submit through contact forms or email.',
      'We also collect limited technical information automatically, such as device type, browser type, approximate location derived from your IP address, pages visited, referring pages, and interaction data that helps us keep the site secure and improve performance.',
      'If you subscribe to updates or contact us about an order or product, we may keep the communication history needed to respond and maintain a support record.',
    ],
  },
  {
    title: '3. How we use information',
    body: [
      'We use personal information to operate the website, respond to enquiries, provide support, improve our content and product experience, prevent fraud and abuse, maintain security, and comply with legal obligations.',
      'Where permitted by law, we may also use aggregated analytics to understand which pages are useful, which products are viewed most often, and how visitors move through the site so we can make the experience better.',
    ],
  },
  {
    title: '4. Cookies and analytics',
    body: [
      'We may use cookies, pixels, or similar technologies to remember preferences, measure traffic, and understand how the site is used. Some of these tools are essential for the website to function properly, while others help us improve performance and usability.',
      'You can usually control cookies through your browser settings. Blocking certain cookies may affect some features or the overall experience of the site.',
    ],
  },
  {
    title: '5. Sharing information',
    body: [
      'We do not sell your personal information. We may share limited data with trusted service providers that help us host the website, deliver analytics, manage email, support security, or process communications on our behalf.',
      'We may also disclose information if required by law, to respond to lawful requests, or to protect the rights, property, or safety of Powerlogic, our users, or others.',
    ],
  },
  {
    title: '6. Data retention',
    body: [
      'We keep personal information only for as long as necessary for the purposes described in this Policy, unless a longer retention period is required or permitted by law.',
      'Support messages, order-related correspondence, and similar records may be retained for a reasonable period so we can resolve issues, comply with legal obligations, and maintain business records.',
    ],
  },
  {
    title: '7. Your rights',
    body: [
      'Depending on where you live, you may have rights to access, correct, delete, restrict, or object to the use of your personal information, and in some cases to request a portable copy of your data.',
      'If you want to exercise a privacy right, contact us using the details below. We may need to verify your identity before completing your request.',
    ],
  },
  {
    title: '8. International transfers',
    body: [
      'Because the internet and our service providers may operate across different countries, your information may be processed outside your home country. When that happens, we take reasonable steps to protect it in line with applicable law.',
    ],
  },
  {
    title: '9. Children',
    body: [
      'This website is intended for a general audience and is not directed to children under 13. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, contact us so we can review and remove it where appropriate.',
    ],
  },
  {
    title: '10. Changes to this policy',
    body: [
      'We may update this Privacy Policy from time to time to reflect changes to our site, our services, or legal requirements. When we do, we will update the “Last updated” date below.',
    ],
  },
];

const highlights = [
  { label: 'Data controller', value: 'Powerlogic' },
  { label: 'Location', value: 'London, United Kingdom' },
  { label: 'Contact email', value: 'example@powerlogic.com' },
  { label: 'Last updated', value: 'July 23, 2026' },
];

export default function PrivacyPolicyPage() {
  return (
    <div style={{ background: 'var(--bg-void)', minHeight: '100vh' }}>
      <section className="relative overflow-hidden pt-28 pb-16">
        <AuroraBackground />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: 'var(--brand-blue)' }}>
              Privacy Policy
            </p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: 'var(--h1)', fontWeight: 900 }}>
              How we protect your information.
            </h1>
            <p className="max-w-2xl" style={{ color: 'var(--text-secondary)', fontSize: 'var(--body-lg)' }}>
              This page explains what we collect, why we collect it, and how you can control it when using the Powerlogic website.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item) => (
            <div
              key={item.label}
              className="glass-card p-5"
              style={{
                background: 'rgba(255,255,255,0.04)',
              }}
            >
              <div className="text-xs uppercase tracking-[0.18em] mb-2" style={{ color: 'var(--text-muted)' }}>
                {item.label}
              </div>
              <div className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </section>

      <article className="px-6 lg:px-12 pb-24">
        <div className="max-w-4xl mx-auto space-y-6">
          {sections.map((section) => (
            <section key={section.title} className="glass-card p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
                {section.title}
              </h2>
              <div className="space-y-4 text-sm sm:text-base leading-7" style={{ color: 'var(--text-secondary)' }}>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}

          <section className="glass-card p-6 sm:p-8">
            <h2 className="text-xl sm:text-2xl font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>
              Contact us
            </h2>
            <div className="space-y-3 text-sm sm:text-base leading-7" style={{ color: 'var(--text-secondary)' }}>
              <p>
                If you have any questions about this Privacy Policy or how we handle personal information, contact us at{' '}
                <a href="mailto:example@powerlogic.com" style={{ color: 'var(--brand-blue)' }}>
                  example@powerlogic.com
                </a>
                .
              </p>
              <p>Powerlogic, 46 Wickham Rd, London SE4 1NZ, UK.</p>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
