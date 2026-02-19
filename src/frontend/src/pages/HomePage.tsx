import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle2, TrendingUp, Users, Zap } from 'lucide-react';
import Section from '../components/marketing/Section';
import FeatureCards from '../components/marketing/FeatureCards';
import TestimonialPreview from '../components/marketing/TestimonialPreview';
import LogoStrip from '../components/marketing/LogoStrip';
import { PrimaryButton, SecondaryButton } from '../components/marketing/MarketingPrimitives';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import Seo from '../components/seo/Seo';
import { resources } from '../data/resources';

export default function HomePage() {
  const heroRef = useRevealOnScroll();
  const featuresRef = useRevealOnScroll();
  const benefitsRef = useRevealOnScroll();
  const resourcesRef = useRevealOnScroll();

  const featuredResources = resources.slice(0, 3);

  return (
    <>
      <Seo
        title="Strategic Performance Management Platform | StrategyHub"
        description="Transform your organization's strategy execution with our comprehensive performance management platform. Align teams, track progress, and achieve measurable results."
      />

      {/* Hero Section */}
      <Section variant="gradient" className="pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div ref={heroRef} className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              Execute Strategy with{' '}
              <span className="text-primary">Confidence</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              The complete platform for strategic planning, performance tracking, and organizational alignment. Turn your vision into measurable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <PrimaryButton asChild size="lg">
                <Link to="/contact">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </PrimaryButton>
              <SecondaryButton asChild size="lg">
                <Link to="/platform">Learn More</Link>
              </SecondaryButton>
            </div>
          </div>
          <div className="relative">
            <img
              src="/assets/generated/hero-illustration.dim_1600x900.png"
              alt="Strategic performance management dashboard visualization"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </Section>

      {/* Logo Strip */}
      <LogoStrip />

      {/* Features Section */}
      <Section className="py-20 lg:py-28">
        <div ref={featuresRef} className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Everything You Need to Drive Results
            </h2>
            <p className="text-xl text-muted-foreground">
              Powerful features designed to simplify strategic execution and accelerate performance across your organization.
            </p>
          </div>
          <FeatureCards />
        </div>
      </Section>

      {/* Benefits Section */}
      <Section variant="muted" className="py-20 lg:py-28">
        <div ref={benefitsRef} className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Why Leading Organizations Choose Us
            </h2>
            <div className="space-y-6">
              {[
                {
                  icon: TrendingUp,
                  title: 'Proven Results',
                  description: 'Organizations see an average 40% improvement in goal achievement within the first year.',
                },
                {
                  icon: Users,
                  title: 'Team Alignment',
                  description: 'Connect strategy to daily work, ensuring everyone understands their role in success.',
                },
                {
                  icon: Zap,
                  title: 'Fast Implementation',
                  description: 'Get up and running in weeks, not months, with our guided onboarding process.',
                },
              ].map((benefit, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-card p-8 rounded-2xl shadow-lg border">
              <div className="text-5xl font-bold text-primary mb-2">92%</div>
              <p className="text-lg font-medium mb-2">Customer Satisfaction</p>
              <p className="text-muted-foreground">
                Our clients consistently rate us highly for ease of use and impact on their strategic outcomes.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-lg border">
              <div className="text-5xl font-bold text-primary mb-2">500+</div>
              <p className="text-lg font-medium mb-2">Organizations Served</p>
              <p className="text-muted-foreground">
                From startups to Fortune 500 companies across healthcare, education, government, and more.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonial Section */}
      <TestimonialPreview />

      {/* Resources Preview */}
      <Section className="py-20 lg:py-28">
        <div ref={resourcesRef} className="space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Insights & Best Practices
            </h2>
            <p className="text-xl text-muted-foreground">
              Learn from industry experts and discover proven strategies for performance management success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredResources.map((resource) => (
              <Link
                key={resource.slug}
                to="/resources/$slug"
                params={{ slug: resource.slug }}
                className="group bg-card rounded-xl overflow-hidden border hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={resource.coverImage}
                    alt={resource.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="text-sm text-primary font-medium">{resource.category}</div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2">{resource.excerpt}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <span>{resource.readTime}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <SecondaryButton asChild size="lg">
              <Link to="/resources">
                View All Resources <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </SecondaryButton>
          </div>
        </div>
      </Section>

      {/* Final CTA */}
      <Section variant="gradient" className="py-20 lg:py-28">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Ready to Transform Your Strategy Execution?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join hundreds of organizations that have achieved breakthrough results with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PrimaryButton asChild size="lg">
              <Link to="/contact">
                Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </PrimaryButton>
            <SecondaryButton asChild size="lg">
              <Link to="/platform">Explore Features</Link>
            </SecondaryButton>
          </div>
          <div className="flex items-center justify-center gap-8 pt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>Free 30-day trial</span>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
