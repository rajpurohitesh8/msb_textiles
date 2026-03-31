import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alhaji Musa",
    location: "Lagos",
    text: "MSB Textiles never disappoints! The Getzner quality is always top-notch. I've been a loyal customer for years.",
    rating: 5,
  },
  {
    name: "Ibrahim Suleiman",
    location: "Abuja",
    text: "Best Swiss Atiku I've ever purchased. The delivery was fast and the fabric was exactly as described. Highly recommended!",
    rating: 5,
  },
  {
    name: "Hajiya Fatima",
    location: "Kano",
    text: "Their lace collection is unmatched in Kantin Kwari. Fair prices and excellent customer service every single time.",
    rating: 5,
  },
  {
    name: "Engr. Ahmed",
    location: "Kaduna",
    text: "I order wholesale for my boutique and MSB always delivers authentic quality. Their cashmere is the finest I've seen.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Testimonials</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            What Our <span className="text-gold-gradient">Customers</span> Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-6 md:p-8 rounded bg-secondary/40 border border-border relative">
              <Quote className="w-8 h-8 text-primary/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 font-body text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div>
                <p className="font-heading text-base font-semibold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-xs font-body">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
