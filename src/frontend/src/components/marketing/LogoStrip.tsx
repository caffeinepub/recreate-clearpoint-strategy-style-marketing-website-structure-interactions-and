import Section from './Section';

export default function LogoStrip() {
  return (
    <Section variant="muted" className="py-12">
      <div className="text-center space-y-8">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
          Trusted by 500+ Organizations Worldwide
        </p>
        <div className="flex items-center justify-center">
          <img
            src="/assets/generated/partner-logos-strip.dim_1600x200.png"
            alt="Partner organizations logos"
            className="w-full max-w-5xl h-auto opacity-60"
          />
        </div>
      </div>
    </Section>
  );
}
