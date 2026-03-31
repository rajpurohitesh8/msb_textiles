import { MapPin, Phone, Truck, Store } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Why Choose Us</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Trusted <span className="text-gold-gradient">Quality</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            { icon: Store, title: "Wholesale & Retail", desc: "Best prices for bulk and individual purchases" },
            { icon: Truck, title: "Pickup or Delivery", desc: "Convenient options to get your fabrics" },
            { icon: MapPin, title: "Visit Our Store", desc: "Shop T092, Yantebura Mall, 1st Floor, Kantin Kwari, Kano" },
            { icon: Phone, title: "Call Us", desc: "09027456757 — We're always happy to help" },
          ].map((item) => (
            <div key={item.title} className="flex gap-5 p-6 rounded bg-secondary/50 border border-border">
              <div className="flex-shrink-0 w-12 h-12 rounded bg-primary/10 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-sm font-body">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground text-xs tracking-widest uppercase font-body">RC: 6954926</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
