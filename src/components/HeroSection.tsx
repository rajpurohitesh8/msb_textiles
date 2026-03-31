import heroImage from "@/assets/hero-fabrics.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium African textile fabrics"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-primary font-body text-sm tracking-[0.4em] uppercase mb-6 animate-fade-up">
          Est. — Kano, Nigeria
        </p>
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <span className="text-gold-gradient">MSB</span>{" "}
          <span className="text-foreground">Textiles</span>
        </h1>
        <p className="text-muted-foreground font-body text-lg md:text-xl max-w-2xl mx-auto mb-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          Home of Unique & Quality Fabrics ✨
        </p>
        <p className="text-muted-foreground/70 font-body text-sm tracking-widest uppercase mb-10 animate-fade-up" style={{ animationDelay: "0.4s" }}>
          Sarkinmenlace · Getzner · Swiss Atiku · Cashmere
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
          <a
            href="https://wa.me/message/NM6BO4W6ZOLCM1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-gradient px-8 py-4 text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded transition-all hover:opacity-90"
          >
            Shop on WhatsApp
          </a>
          <a
            href="#collections"
            className="border border-gold px-8 py-4 text-primary font-body font-semibold text-sm tracking-widest uppercase rounded transition-all hover:bg-primary/10"
          >
            View Collections
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-primary/40" />
      </div>
    </section>
  );
};

export default HeroSection;
