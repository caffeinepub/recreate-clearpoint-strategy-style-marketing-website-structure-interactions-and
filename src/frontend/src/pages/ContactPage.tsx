import { useState } from 'react';
import { Mail, MapPin, Phone, CheckCircle2 } from 'lucide-react';
import Section from '../components/marketing/Section';
import FormField from '../components/marketing/FormField';
import { PrimaryButton } from '../components/marketing/MarketingPrimitives';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import Seo from '../components/seo/Seo';
import { useSaveContact } from '../hooks/useSaveContact';

export default function ContactPage() {
  const heroRef = useRevealOnScroll();
  const formRef = useRevealOnScroll();
  const { mutate: saveContact, isPending, isSuccess, isError } = useSaveContact();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.organization.trim()) {
      newErrors.organization = 'Organization is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    saveContact(formData);
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  if (isSuccess) {
    return (
      <>
        <Seo
          title="Thank You | StrategyHub"
          description="Thank you for contacting us. We'll be in touch soon."
        />
        <Section className="py-32">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
              <CheckCircle2 className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold">Thank You!</h1>
            <p className="text-xl text-muted-foreground">
              We've received your message and will get back to you within 24 hours.
            </p>
            <PrimaryButton
              onClick={() => {
                setFormData({ name: '', email: '', organization: '', message: '' });
                window.location.href = '/';
              }}
            >
              Return to Home
            </PrimaryButton>
          </div>
        </Section>
      </>
    );
  }

  return (
    <>
      <Seo
        title="Contact Us | StrategyHub"
        description="Get in touch with our team to learn more about our strategic performance management platform. We're here to help you succeed."
      />

      {/* Hero Section */}
      <Section variant="gradient" className="pt-32 pb-20">
        <div ref={heroRef} className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Let's Start a <span className="text-primary">Conversation</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            Ready to transform your strategic execution? Our team is here to answer your questions and help you get started.
          </p>
        </div>
      </Section>

      {/* Contact Form & Info */}
      <Section className="py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-lg text-muted-foreground">
                Fill out the form and our team will reach out to you within 24 hours. Or contact us directly using the information below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:hello@strategyhub.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    hello@strategyhub.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a
                    href="tel:+18005551234"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +1 (800) 555-1234
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Office</h3>
                  <p className="text-muted-foreground">
                    123 Strategy Lane<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef}>
            <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl border space-y-6">
              <FormField
                label="Name"
                id="name"
                required
                error={errors.name}
              >
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={isPending}
                />
              </FormField>

              <FormField
                label="Email"
                id="email"
                required
                error={errors.email}
              >
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={isPending}
                />
              </FormField>

              <FormField
                label="Organization"
                id="organization"
                required
                error={errors.organization}
              >
                <input
                  type="text"
                  id="organization"
                  value={formData.organization}
                  onChange={(e) => handleChange('organization', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  disabled={isPending}
                />
              </FormField>

              <FormField
                label="Message"
                id="message"
                required
                error={errors.message}
                helpText="Tell us about your needs and how we can help"
              >
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  disabled={isPending}
                />
              </FormField>

              {isError && (
                <div className="p-4 rounded-lg bg-destructive/10 text-destructive text-sm">
                  There was an error submitting your message. Please try again.
                </div>
              )}

              <PrimaryButton
                type="submit"
                className="w-full"
                disabled={isPending}
              >
                {isPending ? 'Sending...' : 'Send Message'}
              </PrimaryButton>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
