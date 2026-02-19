interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="group relative bg-white rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-accent/30 transition-all duration-300">
      <div className="mb-5 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent-light text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-primary mb-3">{title}</h3>
      <p className="text-foreground-muted leading-relaxed">{description}</p>
    </div>
  );
}
