import { Link } from '@tanstack/react-router';
import { Clock } from 'lucide-react';
import Section from '../components/marketing/Section';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';
import Seo from '../components/seo/Seo';
import { resources } from '../data/resources';

export default function ResourcesListPage() {
  const heroRef = useRevealOnScroll();
  const gridRef = useRevealOnScroll();

  return (
    <>
      <Seo
        title="Resources & Insights | StrategyHub"
        description="Explore our library of articles, guides, and best practices for strategic performance management. Learn from industry experts and real-world success stories."
      />

      {/* Hero Section */}
      <Section variant="gradient" className="pt-32 pb-20">
        <div ref={heroRef} className="text-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Resources & <span className="text-primary">Insights</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground">
            Expert guidance, best practices, and proven strategies to help you succeed with strategic performance management.
          </p>
        </div>
      </Section>

      {/* Resources Grid */}
      <Section className="py-20 lg:py-28">
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <Link
              key={resource.slug}
              to="/resources/$slug"
              params={{ slug: resource.slug }}
              className="group bg-card rounded-xl overflow-hidden border hover:shadow-xl transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
                <h2 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {resource.title}
                </h2>
                <p className="text-muted-foreground line-clamp-3">{resource.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground pt-2">
                  <span>{resource.author}</span>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{resource.readTime}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
