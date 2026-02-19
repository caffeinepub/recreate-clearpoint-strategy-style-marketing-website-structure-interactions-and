import { Link } from '@tanstack/react-router';
import { Award, Globe, Heart, Users, ArrowRight } from 'lucide-react';
import Section from '../components/marketing/Section';
import { PrimaryButton } from '../components/marketing/MarketingPrimitives';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import Seo from '../components/seo/Seo';

export default function AboutPage() {
  const heroRef = useRevealOnScroll();
  const valuesRef = useRevealOnScroll();
  const teamRef = useRevealOnScroll();

  const values = [
    {
      icon: Heart,
      title: 'Customer Success',
      description: 'We measure our success by the results our customers achieve. Their wins are our wins.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality platform and service in the industry.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe the best outcomes come from working together, both internally and with our clients.',
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We continuously evolve our platform to meet the changing needs of modern organizations.',
    },
  ];

  return (
    <>
      <Seo
        title="About Us | StrategyHub"
        description="Learn about our mission to help organizations execute strategy with confidence. Discover our values, team, and commitment to customer success."
      />

      {/* Hero Section */}
      <Section variant="gradient" className="pt-32 pb-20">
        <div ref={heroRef} className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Empowering Organizations to{' '}
            <span className="text-primary">Achieve More</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            We're on a mission to make strategic execution simple, transparent, and effective for organizations of all sizes.
          </p>
        </div>
      </Section>

      {/* Story Section */}
      <Section className="py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Founded in 2015, StrategyHub was born from a simple observation: most organizations struggle to bridge the gap between strategic planning and execution.
              </p>
              <p>
                Our founders, experienced strategy consultants, saw firsthand how even the best-laid plans often failed due to poor tracking, misalignment, and lack of accountability.
              </p>
              <p>
                Today, we serve over 500 organizations worldwide, helping them turn strategic vision into measurable results. Our platform has evolved significantly, but our core mission remains unchanged: make strategy execution accessible and effective for everyone.
              </p>
            </div>
          </div>
          <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center">
            <Users className="h-32 w-32 text-muted-foreground/20" />
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section variant="muted" className="py-20 lg:py-28">
        <div ref={valuesRef} className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">Our Values</h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-8 rounded-xl border space-y-4 text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="py-20 lg:py-28">
        <div ref={teamRef} className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Experienced leaders passionate about helping organizations succeed.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Chen', role: 'CEO & Co-Founder', bio: 'Former strategy consultant with 15+ years helping Fortune 500 companies execute complex transformations.' },
              { name: 'Michael Rodriguez', role: 'CTO & Co-Founder', bio: 'Technology leader with deep expertise in enterprise software and performance management systems.' },
              { name: 'Emily Thompson', role: 'Chief Customer Officer', bio: 'Dedicated to ensuring every customer achieves their strategic goals with our platform.' },
            ].map((member, index) => (
              <div key={index} className="bg-card rounded-xl overflow-hidden border">
                <div className="aspect-square bg-muted flex items-center justify-center">
                  <Users className="h-24 w-24 text-muted-foreground/20" />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section variant="gradient" className="py-20 lg:py-28">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Join Us on This Journey
          </h2>
          <p className="text-xl text-muted-foreground">
            Whether you're looking to transform your organization or join our team, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PrimaryButton asChild size="lg">
              <Link to="/contact">
                Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </PrimaryButton>
          </div>
        </div>
      </Section>
    </>
  );
}
