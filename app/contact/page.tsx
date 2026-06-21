'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, MapPin, Mail, AlertCircle } from 'lucide-react';
import AuroraBackground from '@/components/home/AuroraBackground';
import SplitText from '@/components/ui/SplitText';
import MagneticButton from '@/components/ui/MagneticButton';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface Errors {
  name?: string;
  email?: string;
  message?: string;
}

function Field({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  placeholder,
  textarea,
}: {
  label: string;
  name: keyof FormData;
  type?: string;
  value: string;
  onChange: (name: keyof FormData, val: string) => void;
  error?: string;
  placeholder: string;
  textarea?: boolean;
}) {
  const [focused, setFocused] = useState(false);

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: 'var(--glass-fill)',
    border: `1px solid ${error ? '#ff4444' : focused ? 'rgba(63,135,254,0.5)' : 'var(--glass-border)'}`,
    borderRadius: '14px',
    padding: '1rem 1.25rem',
    color: 'var(--text-primary)',
    fontSize: '0.95rem',
    outline: 'none',
    backdropFilter: 'blur(16px)',
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
    boxShadow: focused ? '0 0 0 3px rgba(63,135,254,0.1)' : 'none',
    resize: 'none',
    fontFamily: 'inherit',
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>
        {label}
      </label>
      {textarea ? (
        <textarea
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          rows={5}
          style={inputStyle}
        />
      ) : (
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(name, e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          placeholder={placeholder}
          style={inputStyle}
        />
      )}
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs flex items-center gap-1.5"
          style={{ color: '#ff4444' }}
        >
          <AlertCircle size={12} /> {error}
        </motion.p>
      )}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (name: keyof FormData, val: string) => {
    setForm((prev) => ({ ...prev, [name]: val }));
    if (errors[name as keyof Errors]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: Errors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    else if (form.message.trim().length < 10) newErrors.message = 'Message is too short';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div style={{ background: 'var(--bg-void)', minHeight: '100vh' }}>
      {/* Header */}
      <section className="relative overflow-hidden pt-28 pb-16">
        <AuroraBackground />
        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
            style={{ color: 'var(--brand-blue)' }}
          >
            Get in Touch
          </motion.p>
          <h1
            className="font-black leading-tight mb-6"
            style={{ fontSize: 'var(--h1)', fontWeight: 900 }}
          >
            <SplitText by="words" delay={0.3} stagger={0.08}>Let's Talk.</SplitText>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            style={{ color: 'var(--text-secondary)', fontSize: 'var(--body-lg)' }}
          >
            Questions, wholesale enquiries, or just want to say hello — we're here.
          </motion.p>
        </div>
      </section>

      {/* Form + info */}
      <section className="py-16 px-6 lg:px-12 pb-28">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-5 gap-12">
          {/* Contact info sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card p-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(63,135,254,0.1)', border: '1px solid rgba(63,135,254,0.2)' }}
                >
                  <MapPin size={18} style={{ color: 'var(--brand-blue)' }} />
                </div>
                <div>
                  <div className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Address</div>
                  <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                    46 Wickham Rd<br />London SE4 1NZ, UK
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6"
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(63,135,254,0.1)', border: '1px solid rgba(63,135,254,0.2)' }}
                >
                  <Mail size={18} style={{ color: 'var(--brand-blue)' }} />
                </div>
                <div>
                  <div className="font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>Email</div>
                  <a
                    href="mailto:example@powerlogic.com"
                    className="text-sm"
                    style={{ color: 'var(--brand-blue)' }}
                  >
                    example@powerlogic.com
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="glass-card p-6"
            >
              <div className="text-sm font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                Response Time
              </div>
              <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                We aim to respond within 24 hours on business days (Mon–Fri, GMT).
              </div>
            </motion.div>
          </div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="glass-card p-8 lg:p-10">
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    >
                      <CheckCircle
                        size={64}
                        style={{
                          color: 'var(--brand-blue)',
                          filter: 'drop-shadow(0 0 20px rgba(63,135,254,0.6))',
                          marginBottom: '1.5rem',
                        }}
                      />
                    </motion.div>
                    <h3 className="text-2xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                      Message sent!
                    </h3>
                    <p style={{ color: 'var(--text-secondary)' }}>
                      We'll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    <div className="grid sm:grid-cols-2 gap-5">
                      <Field
                        label="Name"
                        name="name"
                        value={form.name}
                        onChange={update}
                        error={errors.name}
                        placeholder="Your name"
                      />
                      <Field
                        label="Email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={update}
                        error={errors.email}
                        placeholder="your@email.com"
                      />
                    </div>
                    <Field
                      label="Subject (optional)"
                      name="subject"
                      value={form.subject}
                      onChange={update}
                      placeholder="What's this about?"
                    />
                    <Field
                      label="Message"
                      name="message"
                      value={form.message}
                      onChange={update}
                      error={errors.message}
                      placeholder="Tell us what you need..."
                      textarea
                    />

                    <MagneticButton data-cursor="Send">
                      <button
                        type="submit"
                        className="btn-glow w-full justify-center"
                        disabled={loading}
                        style={{ cursor: loading ? 'wait' : 'none', opacity: loading ? 0.8 : 1 }}
                      >
                        {loading ? (
                          <>
                            <motion.div
                              className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                              animate={{ rotate: 360 }}
                              transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                            />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message <Send size={16} />
                          </>
                        )}
                      </button>
                    </MagneticButton>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
