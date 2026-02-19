import { Link } from '@tanstack/react-router';
import { BarChart3, Target, Users, Workflow, ArrowRight, CheckCircle2 } from 'lucide-react';
import Section from '../components/marketing/Section';
import { PrimaryButton } from '../components/marketing/MarketingPrimitives';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import Seo from '../components/seo/Seo';

export default function PlatformPage() {
  const heroRef = useRevealOnScroll();
  const capabilitiesRef = useRevealOnScroll();
  const integrationsRef = useRevealOnScroll();

  const capabilities = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Build comprehensive strategic plans with cascading goals, objectives, and key results. Align your entire organization around a unified vision.',
      features: ['Goal hierarchies', 'OKR framework support', 'Multi-year planning', 'Scenario modeling'],
    },
    {
      icon: BarChart3,
      title: 'Performance Tracking',
      description: 'Monitor progress in real-time with automated data collection and intuitive dashboards. Make data-driven decisions with confidence.',
      features: ['Real-time dashboards', 'Custom KPI tracking', 'Automated reporting', 'Trend analysis'],
    },
    {
      icon: Workflow,
      title: 'Process Management',
      description: 'Streamline workflows and ensure accountability with automated task management and approval processes.',
      features: ['Workflow automation', 'Task assignments', 'Approval chains', 'Deadline tracking'],
    },
    {
      icon: Users,
      title: 'Collaboration Tools',
      description: 'Foster alignment and transparency with built-in communication, commenting, and document sharing capabilities.',
      features: ['Team collaboration', 'Document management', 'Activity feeds', 'Notifications'],
    },
  ];

  return (
    <>
      <Seo
        title="Platform Features | StrategyHub"
        description="Discover the comprehensive features of our strategic performance management platform. From planning to execution, we provide everything you need to succeed."
      />

      {/* Hero Section */}
      <Section variant="gradient" className="pt-32 pb-20">
        <div ref={heroRef} className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            A Complete Platform for{' '}
            <span className="text-primary">Strategic Success</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            Everything you need to plan, execute, and measure your organization's strategy in one integrated platform.
          </p>
          <PrimaryButton asChild size="lg">
            <Link to="/contact">
              Request a Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </PrimaryButton>
        </div>
      </Section>

      {/* Core Capabilities */}
      <Section className="py-20 lg:py-28">
        <div ref={capabilitiesRef} className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">Core Capabilities</h2>
            <p className="text-xl text-muted-foreground">
              Powerful features designed to support every stage of your strategic journey.
            </p>
          </div>
          <div className="space-y-24">
            {capabilities.map((capability, index) => (
              <div
                key={index}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <capability.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold">{capability.title}</h3>
                  <p className="text-lg text-muted-foreground">{capability.description}</p>
                  <ul className="space-y-3">
                    {capability.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-video bg-muted rounded-2xl flex items-center justify-center">
                    <capability.icon className="h-24 w-24 text-muted-foreground/20" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Integrations */}
      <Section variant="muted" className="py-20 lg:py-28">
        <div ref={integrationsRef} className="text-center max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">Seamless Integrations</h2>
          <p className="text-xl text-muted-foreground">
            Connect with the tools you already use. Our platform integrates with popular business applications to streamline your workflow.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="aspect-square bg-card rounded-xl flex items-center justify-center border hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl font-bold text-muted-foreground/20">Logo</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 lg:py-28">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            See the Platform in Action
          </h2>
          <p className="text-xl text-muted-foreground">
            Schedule a personalized demo and discover how our platform can transform your strategic execution.
          </p>
          <PrimaryButton asChild size="lg">
            <Link to="/contact">
              Schedule Your Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </PrimaryButton>
        </div>
      </Section>
    </>
  );
}
