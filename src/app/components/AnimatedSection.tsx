import { forwardRef, ReactNode } from "react";

interface AnimatedSectionProps {
  id: string;
  backgroundColor: string;
  children: ReactNode;
  className?: string;
}

const AnimatedSection = forwardRef<HTMLElement, AnimatedSectionProps>(
  ({ id, backgroundColor, children, className = "" }, ref) => {
    return (
      <section
        id={id}
        ref={ref}
        className={`section-padding ${className}`}
        style={{ backgroundColor }}
      >
        <div className="container mx-auto max-w-7xl">{children}</div>
      </section>
    );
  }
);

AnimatedSection.displayName = "AnimatedSection";

export default AnimatedSection;
