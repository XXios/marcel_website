interface ObjektReviewProps {
  name: string;
  text: string;
  rating: number;
}

export default function ObjektReview({ name, text, rating }: ObjektReviewProps) {
  return (
    <div className="bg-surface rounded-2xl p-8 md:p-10 border border-border">
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${i < rating ? "text-accent" : "text-foreground-muted/20"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-foreground text-lg leading-relaxed mb-6">
        &ldquo;{text}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
          <span className="text-accent font-semibold text-sm">
            {name.charAt(0).toUpperCase()}
          </span>
        </div>
        <div>
          <p className="font-medium text-foreground text-sm">{name}</p>
          <p className="text-foreground-muted text-xs">Kundenbewertung</p>
        </div>
      </div>
    </div>
  );
}
