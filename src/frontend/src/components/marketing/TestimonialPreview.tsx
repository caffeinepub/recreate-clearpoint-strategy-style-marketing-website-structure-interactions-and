import { Quote } from 'lucide-react';
import Section from './Section';

export default function TestimonialPreview() {
  const testimonials = [
    {
      quote: "StrategyHub transformed how we execute our strategic plan. We've seen a 45% improvement in goal completion rates.",
      author: 'Jennifer Martinez',
      role: 'Chief Strategy Officer',
      company: 'Healthcare Systems Inc.',
    },
    {
      quote: 'The platform made it easy to align our entire organization around our strategic priorities. Game changer for us.',
      author: 'David Chen',
      role: 'VP of Operations',
      company: 'Tech Innovations Corp',
    },
    {
      quote: 'Finally, a tool that bridges the gap between planning and execution. Our board loves the transparency.',
      author: 'Sarah Williams',
      role: 'Executive Director',
      company: 'Community Foundation',
    },
  ];

  return (
    <Section className="py-20 lg:py-28">
      <div className="space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Trusted by Leading Organizations
          </h2>
          <p className="text-xl text-muted-foreground">
            See what our customers have to say about their experience with StrategyHub.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card p-8 rounded-xl border space-y-6">
              <Quote className="h-10 w-10 text-primary/20" />
              <p className="text-lg">{testimonial.quote}</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                  <span className="text-lg font-semibold">
                    {testimonial.author.split(' ').map((n) => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
