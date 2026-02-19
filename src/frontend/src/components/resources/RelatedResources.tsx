import { Link } from '@tanstack/react-router';
import { Clock } from 'lucide-react';
import type { Resource } from '../../data/resources';

interface RelatedResourcesProps {
  resources: Resource[];
}

export default function RelatedResources({ resources }: RelatedResourcesProps) {
  if (resources.length === 0) return null;

  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold">Related Resources</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {resources.map((resource) => (
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
              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                {resource.title}
              </h3>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{resource.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
