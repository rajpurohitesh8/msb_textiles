import fabricLace from "@/assets/fabric-lace.jpg";
import fabricGetzner from "@/assets/fabric-getzner.jpg";
import fabricCashmere from "@/assets/fabric-cashmere.jpg";
import fabricAtiku from "@/assets/fabric-atiku.jpg";

const collections = [
  { name: "Sarkinmenlace", description: "Exquisite lace fabrics with intricate detailing", image: fabricLace },
  { name: "Getzner", description: "Premium Magnum Gold & quality brocade", image: fabricGetzner },
  { name: "Cashmere", description: "Luxurious soft-touch senator materials", image: fabricCashmere },
  { name: "Swiss Atiku", description: "Fine Swiss cotton with elegant embroidery", image: fabricAtiku },
];

const CollectionsSection = () => {
  return (
    <section id="collections" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Our Collections</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Premium <span className="text-gold-gradient">Fabrics</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((item) => (
            <div
              key={item.name}
              className="group relative overflow-hidden rounded bg-card border border-border hover:border-primary/40 transition-all duration-500"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  width={640}
                  height={800}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-1">{item.name}</h3>
                <p className="text-muted-foreground text-sm font-body">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionsSection;
