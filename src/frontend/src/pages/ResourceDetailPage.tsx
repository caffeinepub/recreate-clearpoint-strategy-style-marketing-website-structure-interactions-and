import { Link, useParams } from '@tanstack/react-router';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import Section from '../components/marketing/Section';
import RelatedResources from '../components/resources/RelatedResources';
import { SecondaryButton } from '../components/marketing/MarketingPrimitives';
import Seo from '../components/seo/Seo';
import { resources } from '../data/resources';

export default function ResourceDetailPage() {
  const { slug } = useParams({ from: '/resources/$slug' });
  const resource = resources.find((r) => r.slug === slug);

  if (!resource) {
    return (
      <Section className="py-20">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Resource Not Found</h1>
          <p className="text-muted-foreground">The resource you're looking for doesn't exist.</p>
          <SecondaryButton asChild>
            <Link to="/resources">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Link>
          </SecondaryButton>
        </div>
      </Section>
    );
  }

  const relatedResources = resources
    .filter((r) => r.slug !== slug && r.category === resource.category)
    .slice(0, 3);

  return (
    <>
      <Seo
        title={`${resource.title} | StrategyHub`}
        description={resource.excerpt}
      />

      <article>
        {/* Header */}
        <Section variant="muted" className="pt-32 pb-12">
          <div className="max-w-4xl mx-auto space-y-6">
            <SecondaryButton asChild size="sm">
              <Link to="/resources">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Resources
              </Link>
            </SecondaryButton>
            <div className="space-y-4">
              <div className="text-sm text-primary font-medium">{resource.category}</div>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                {resource.title}
              </h1>
              <p className="text-xl text-muted-foreground">{resource.excerpt}</p>
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="font-medium">{resource.author}</span>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{resource.date}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{resource.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Cover Image */}
        <Section className="py-0">
          <div className="max-w-5xl mx-auto">
            <img
              src={resource.coverImage}
              alt={resource.title}
              className="w-full aspect-video object-cover rounded-2xl shadow-xl"
            />
          </div>
        </Section>

        {/* Content */}
        <Section className="py-16">
          <div className="max-w-3xl mx-auto prose prose-lg prose-slate dark:prose-invert">
            {resource.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </Section>

        {/* Related Resources */}
        {relatedResources.length > 0 && (
          <Section variant="muted" className="py-16">
            <RelatedResources resources={relatedResources} />
          </Section>
        )}
      </article>
    </>
  );
}
