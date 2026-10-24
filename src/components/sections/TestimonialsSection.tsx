import { testimonials } from "@/lib/site-data";

export function TestimonialsSection() {
  if (testimonials.length === 0) return null;
  return (
    <section className="studio-section site-shell" aria-label="Client testimonials">
      <div className="studio-section-heading" data-reveal>
        <div>
          <p className="eyebrow">What clients say</p>
          <h2>Word from around the Upstate.</h2>
        </div>
      </div>
      <div className="studio-testimonial-grid">
        {testimonials.map((testimonial) => (
          <figure
            className="studio-testimonial"
            key={`${testimonial.name}-${testimonial.location}`}
            data-reveal
          >
            <blockquote>{testimonial.quote}</blockquote>
            <figcaption>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
              <span>{testimonial.location}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
