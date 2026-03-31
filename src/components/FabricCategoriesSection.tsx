import { Sparkles, Crown, Gem, Shirt, CircleDot, Ribbon } from "lucide-react";

const categories = [
  { icon: Crown, name: "Lace", desc: "French, Swiss & African lace in all colors" },
  { icon: Gem, name: "Getzner Magnum Gold", desc: "Original Getzner brocade from Austria" },
  { icon: Shirt, name: "Swiss Atiku", desc: "Premium Swiss cotton for senators & agbada" },
  { icon: Sparkles, name: "Cashmere", desc: "Soft luxury cashmere for special occasions" },
  { icon: CircleDot, name: "Shadda / Guinea", desc: "Quality bazin riche & guinea brocade" },
  { icon: Ribbon, name: "Accessories", desc: "Matching caps, embroidery threads & trims" },
];

const FabricCategoriesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Explore</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Fabric <span className="text-gold-gradient">Categories</span>
          </h2>
          <p className="text-muted-foreground font-body text-base mt-4 max-w-xl mx-auto">
            We stock a wide range of premium fabrics for every style and occasion
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="https://wa.me/message/NM6BO4W6ZOLCM1"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-6 rounded bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <cat.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-1">{cat.name}</h3>
              <p className="text-muted-foreground text-xs font-body">{cat.desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FabricCategoriesSection;
