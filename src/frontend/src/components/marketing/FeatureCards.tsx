import { Target, BarChart3, Users, Zap, Shield, Workflow } from 'lucide-react';

export default function FeatureCards() {
  const features = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Build and cascade goals across your organization with our intuitive planning tools.',
    },
    {
      icon: BarChart3,
      title: 'Performance Tracking',
      description: 'Monitor progress in real-time with customizable dashboards and automated reporting.',
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Align teams and foster transparency with built-in communication and sharing features.',
    },
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Streamline processes with automated task management and approval workflows.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Rest easy with bank-level encryption and comprehensive access controls.',
    },
    {
      icon: Zap,
      title: 'Quick Implementation',
      description: 'Get up and running fast with guided setup and expert onboarding support.',
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className="group bg-card p-8 rounded-xl border hover:shadow-xl hover:border-primary/50 transition-all duration-300"
        >
          <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
            <feature.icon className="h-7 w-7 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
            {feature.title}
          </h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
