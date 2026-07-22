import type { Metadata } from 'next';
import AuroraBackground from '@/components/home/AuroraBackground';

export const metadata: Metadata = {
  title: 'Terms of Use — Powerlogic',
  description: 'Terms governing your use of the Powerlogic website and related services.',
};

const sections = [
  {
    title: '1. Acceptance of these terms',
    body: [
      'By accessing or using the Powerlogic website, you agree to these Terms of Use. If you do not agree, do not use the site.',
      'We may update these terms from time to time. Continued use of the site after changes become effective means you accept the updated terms.',
    ],
  },
  {
    title: '2. Website purpose',
    body: [
      'This website is provided to showcase Powerlogic products, share company information, and allow visitors to contact us. Content on the site is for general information and marketing purposes unless we clearly state otherwise.',
      'Any product specifications, availability, images, pricing, or descriptions may change without notice and may occasionally contain errors that we may correct.',
    ],
  },
  {
    title: '3. User responsibilities',
    body: [
      'You agree to use the website lawfully and respectfully. You must not attempt to disrupt the site, copy content in violation of our rights, submit false information, or use the site for fraudulent or harmful activity.',
      'You are responsible for the accuracy of the information you submit through contact forms, email, or other communication channels.',
    ],
  },
  {
    title: '4. Intellectual property',
    body: [
      'Unless stated otherwise, the site design, branding, logos, text, graphics, product images, and other materials are owned by or licensed to Powerlogic and are protected by intellectual property laws.',
      'You may view, print, or share content for personal and non-commercial use where allowed by law, but you may not reproduce or distribute site content without permission.',
    ],
  },
  {
    title: '5. Orders, pricing, and product information',
    body: [
      'If we offer a purchase flow, quotation, or checkout experience, any purchase-specific terms shown during that process form part of the applicable order terms.',
      'We try to keep product information accurate, but we do not guarantee that every description, image, or price is error-free. We may cancel or correct an order or enquiry where necessary, subject to applicable law.',
    ],
  },
  {
    title: '6. Third-party links and services',
    body: [
      'The site may contain links to third-party websites or services. Those third-party sites are governed by their own terms and privacy practices, and we are not responsible for their content or policies.',
    ],
  },
  {
    title: '7. Disclaimer of warranties',
    body: [
      'The website is provided on an “as is” and “as available” basis. To the fullest extent permitted by law, we disclaim warranties that the site will always be uninterrupted, error-free, secure, or free from harmful components.',
    ],
  },
  {
    title: '8. Limitation of liability',
    body: [
      'To the fullest extent permitted by law, Powerlogic will not be liable for indirect, incidental, special, consequential, or punitive damages arising from or related to your use of the site.',
      'Nothing in these terms limits liability that cannot be excluded under applicable law.',
    ],
  },
  {
    title: '9. Suspension or termination',
    body: [
      'We may suspend, restrict, or terminate access to the website if we reasonably believe someone is misusing the site, violating these terms, or creating security or legal risk.',
    ],
  },
  {
    title: '10. Governing law',
    body: [
      'These Terms of Use are governed by the laws of England and Wales, and the courts of England and Wales will have jurisdiction over disputes unless applicable law says otherwise.',
    ],
  },
];

const highlights = [
  { label: 'Company', value: 'Powerlogic' },
  { label: 'Website use', value: 'Informational and product browsing' },
  { label: 'Jurisdiction', value: 'England and Wales' },
  { label: 'Last updated', value: 'July 23, 2026' },
];

export default function TermsOfUsePage() {
  return (
    <div style={{ background: 'var(--bg-void)', minHeight: '100vh' }}>
      <section className="relative overflow-hidden pt-28 pb-16">
        <AuroraBackground />
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-5" style={{ color: 'var(--brand-blue)' }}>
              Terms of Use
            </p>
            <h1 className="font-black leading-tight mb-6" style={{ fontSize: 'var(--h1)', fontWeight: 900 }}>
              Rules for using the site.
            </h1>
            <p className="max-w-2xl" style={{ color: 'var(--text-secondary)', fontSize: 'var(--body-lg)' }}>
              These terms explain how you may use the Powerlogic website and what you can expect from the content on it.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-12 pb-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map((item) => (
            <div key={item.label} className="glass-card p-5" style={{ background: 'rgba(255,255,255,0.04)' }}>
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
              Contact
            </h2>
            <div className="space-y-3 text-sm sm:text-base leading-7" style={{ color: 'var(--text-secondary)' }}>
              <p>
                Questions about these Terms of Use? Email{' '}
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
