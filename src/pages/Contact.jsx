import { useState } from 'react';
import { Mail, MapPin, Send, Instagram, Youtube, Download } from 'lucide-react';
import PageLayout from '../components/ui/PageLayout';
import SectionTitle from '../components/SectionTitle';
import ScrollReveal from '../components/ui/ScrollReveal';
import Button from '../components/ui/Button';

const enquiryTypes = [
  'Music / Composition',
  'Production',
  'Academic / Educational',
  'Curation',
  'Commissions',
  'Collaboration',
];

const socialLinks = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: 'https://www.youtube.com/@SoundsOfKolachi' },
  { icon: Mail, label: 'Email', href: 'mailto:info@ahsanbari.com' },
];

const CV_PATH = `${import.meta.env.BASE_URL}Ahsan-Bari-CV.pdf`;

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    const subject = encodeURIComponent(form.subject || 'Professional Enquiry');
    window.location.href = `mailto:info@ahsanbari.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputClass =
    'w-full px-4 py-3 bg-surface-muted border border-border text-foreground text-sm placeholder:text-foreground-muted/60 focus:border-accent focus:outline-none transition-colors';

  return (
    <PageLayout>
      <SectionTitle
        title="Contact"
        subtitle="Professional Enquiries · Contact Information · Social / Streaming Links"
      />

      <ScrollReveal>
        <div className="flex flex-wrap justify-center gap-2 mb-14 max-w-3xl mx-auto">
          {enquiryTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setForm((prev) => ({ ...prev, subject: type }))}
              className={`px-4 py-2 text-[10px] uppercase tracking-[0.14em] border transition-colors ${
                form.subject === type
                  ? 'border-accent text-accent'
                  : 'border-border text-foreground-muted hover:border-accent hover:text-accent'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </ScrollReveal>

      <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
        <div className="lg:col-span-2 space-y-8">
          <ScrollReveal>
            <p className="text-foreground-muted leading-relaxed">
              For collaborations, performances, or academic engagements, reach out
              via email. We are always excited to connect with talented artists and
              creative partners.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="space-y-6">
              <a
                href="mailto:info@ahsanbari.com"
                className="flex items-center gap-4 group"
              >
                <div className="p-3 border border-border group-hover:border-accent transition-colors">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-foreground-muted">
                    Email
                  </p>
                  <p className="text-foreground group-hover:text-accent transition-colors">
                    info@ahsanbari.com
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="p-3 border border-border">
                  <MapPin size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-foreground-muted">
                    Based in
                  </p>
                  <p className="text-foreground">Karachi, Pakistan</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <Button href={CV_PATH} download variant="secondary">
              <Download size={16} className="mr-2" />
              Download CV
            </Button>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div>
              <p className="text-xs uppercase tracking-widest text-foreground-muted mb-4">
                Connect
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const SocialIcon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      className="p-3 border border-border text-foreground-muted hover:text-accent hover:border-accent transition-all"
                      aria-label={social.label}
                    >
                      <SocialIcon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.15} className="lg:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="p-8 md:p-10 bg-surface-elevated border border-border"
            noValidate
          >
            {submitted ? (
              <div className="text-center py-12">
                <p className="font-heading text-2xl text-foreground">Thank you!</p>
                <p className="mt-3 text-foreground-muted text-sm">
                  Your email client should open shortly. If it doesn&apos;t, reach
                  us directly at{' '}
                  <a href="mailto:info@ahsanbari.com" className="text-accent">
                    info@ahsanbari.com
                  </a>
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-xs uppercase tracking-widest text-accent hover:text-accent-light transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs uppercase tracking-widest text-foreground-muted mb-2"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs uppercase tracking-widest text-foreground-muted mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      className={inputClass}
                      placeholder="you@email.com"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="mb-5">
                  <label
                    htmlFor="subject"
                    className="block text-xs uppercase tracking-widest text-foreground-muted mb-2"
                  >
                    Enquiry type
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Music / Composition, Production, Academic..."
                  />
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-widest text-foreground-muted mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-y min-h-[140px]`}
                    placeholder="Tell us about your project or enquiry..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  <Send size={16} className="mr-2" />
                  Send Message
                </Button>
              </>
            )}
          </form>
        </ScrollReveal>
      </div>
    </PageLayout>
  );
}
