import { Scissors, Palette, Ruler, Gift, Truck, ShieldCheck, Clock, CreditCard } from "lucide-react";

const services = [
  { icon: Scissors, title: "Custom Cutting", desc: "Fabrics cut to your exact measurements and preferences" },
  { icon: Palette, title: "Color Matching", desc: "Expert help finding the perfect shade for your occasion" },
  { icon: Ruler, title: "Measurement Advice", desc: "Guidance on how much fabric you need for any outfit" },
  { icon: Gift, title: "Gift Packaging", desc: "Beautiful packaging for fabric gifts and celebrations" },
  { icon: Truck, title: "Nationwide Delivery", desc: "We deliver across Nigeria — fast and secure shipping" },
  { icon: ShieldCheck, title: "Quality Guarantee", desc: "100% authentic fabrics with verified quality assurance" },
  { icon: Clock, title: "Same-Day Pickup", desc: "Order and pick up from our Kantin Kwari store same day" },
  { icon: CreditCard, title: "Flexible Payment", desc: "Bank transfer, cash, or mobile payment accepted" },
];

const ServicesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">What We Offer</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Our <span className="text-gold-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground font-body text-base mt-4 max-w-xl mx-auto">
            More than just fabrics — we provide a complete textile shopping experience
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="p-6 rounded bg-card border border-border hover:border-primary/40 transition-all duration-300 group"
            >
              <div className="w-11 h-11 rounded bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm font-body leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
