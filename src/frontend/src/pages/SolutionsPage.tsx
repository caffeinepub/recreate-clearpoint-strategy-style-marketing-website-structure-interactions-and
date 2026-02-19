import { Link } from '@tanstack/react-router';
import { Building2, GraduationCap, Heart, Landmark, ArrowRight } from 'lucide-react';
import Section from '../components/marketing/Section';
import { PrimaryButton, SecondaryButton } from '../components/marketing/MarketingPrimitives';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import Seo from '../components/seo/Seo';

export default function SolutionsPage() {
  const heroRef = useRevealOnScroll();
  const industriesRef = useRevealOnScroll();

  const industries = [
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Improve patient outcomes and operational efficiency with strategic alignment across your healthcare organization.',
      benefits: [
        'Quality improvement tracking',
        'Regulatory compliance management',
        'Patient satisfaction metrics',
        'Clinical performance dashboards',
      ],
    },
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'Align academic and administrative goals to enhance student success and institutional effectiveness.',
      benefits: [
        'Accreditation readiness',
        'Student outcome tracking',
        'Program assessment',
        'Strategic enrollment management',
      ],
    },
    {
      icon: Landmark,
      title: 'Government',
      description: 'Drive transparency and accountability in public sector performance management and strategic planning.',
      benefits: [
        'Citizen service metrics',
        'Budget alignment',
        'Performance reporting',
        'Cross-department collaboration',
      ],
    },
    {
      icon: Building2,
      title: 'Enterprise',
      description: 'Scale strategic execution across global operations with enterprise-grade security and flexibility.',
      benefits: [
        'Multi-entity management',
        'Advanced analytics',
        'Custom workflows',
        'Enterprise integrations',
      ],
    },
  ];

  return (
    <>
      <Seo
        title="Industry Solutions | StrategyHub"
        description="Tailored strategic performance management solutions for healthcare, education, government, and enterprise organizations. Discover how we serve your industry."
      />

      {/* Hero Section */}
      <Section variant="gradient" className="pt-32 pb-20">
        <div ref={heroRef} className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Solutions Tailored to{' '}
            <span className="text-primary">Your Industry</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            We understand the unique challenges of your sector and provide specialized solutions that drive measurable results.
          </p>
        </div>
      </Section>

      {/* Industries */}
      <Section className="py-20 lg:py-28">
        <div ref={industriesRef} className="space-y-20">
          {industries.map((industry, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <industry.icon className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-4xl font-bold">{industry.title}</h2>
                <p className="text-lg text-muted-foreground">{industry.description}</p>
                <div className="space-y-3">
                  <h3 className="font-semibold text-lg">Key Benefits:</h3>
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-4 pt-4">
                  <PrimaryButton asChild>
                    <Link to="/contact">Learn More</Link>
                  </PrimaryButton>
                  <SecondaryButton asChild>
                    <Link to="/resources">Case Studies</Link>
                  </SecondaryButton>
                </div>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="aspect-square bg-muted rounded-2xl flex items-center justify-center">
                  <industry.icon className="h-32 w-32 text-muted-foreground/20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Services Section */}
      <Section variant="muted" className="py-20 lg:py-28">
        <div className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">Professional Services</h2>
            <p className="text-xl text-muted-foreground">
              Expert guidance to ensure your success from implementation through optimization.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Implementation',
                description: 'Guided setup and configuration tailored to your organizational structure and strategic framework.',
              },
              {
                title: 'Training & Enablement',
                description: 'Comprehensive training programs to ensure your team maximizes platform value from day one.',
              },
              {
                title: 'Strategic Consulting',
                description: 'Expert advisory services to refine your strategic planning process and performance methodology.',
              },
            ].map((service, index) => (
              <div key={index} className="bg-card p-8 rounded-xl border space-y-4">
                <h3 className="text-2xl font-bold">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 lg:py-28">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's discuss how our solutions can address your specific challenges and goals.
          </p>
          <PrimaryButton asChild size="lg">
            <Link to="/contact">
              Contact Our Team <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </PrimaryButton>
        </div>
      </Section>
    </>
  );
}
