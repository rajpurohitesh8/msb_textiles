import storeImage from "@/assets/store-interior.jpg";

const StoreShowcase = () => {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative rounded overflow-hidden">
          <img
            src={storeImage}
            alt="MSB Textiles store interior"
            loading="lazy"
            width={1280}
            height={720}
            className="w-full h-80 lg:h-[480px] object-cover rounded"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded" />
        </div>

        <div>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Our Store</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
            Visit <span className="text-gold-gradient">Kantin Kwari</span>
          </h2>
          <p className="text-muted-foreground font-body text-base leading-relaxed mb-6">
            Located in the heart of Africa's largest textile market — Kantin Kwari, Kano. Our shop at Yantebura Mall offers a wide selection of premium fabrics in a comfortable, organized environment.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Air-conditioned shopping environment",
              "Thousands of fabrics on display",
              "Expert staff to help you choose",
              "Opposite UBA Plaza Line for easy access",
              "Open 7 days a week",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground/80 font-body text-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="https://maps.google.com/?q=Yantebura+Mall+Kantin+Kwari+Kano+Nigeria"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold-gradient px-6 py-3 text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded hover:opacity-90 transition-opacity"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default StoreShowcase;
