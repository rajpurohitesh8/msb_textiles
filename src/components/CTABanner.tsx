const CTABanner = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gold-gradient opacity-10" />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">Ready to Shop?</p>
        <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
          Get Your <span className="text-gold-gradient">Premium Fabrics</span> Today
        </h2>
        <p className="text-muted-foreground font-body text-base mb-8 max-w-lg mx-auto">
          Send us a message on WhatsApp to browse our latest arrivals, get pricing, or place an order. We respond within minutes!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/message/NM6BO4W6ZOLCM1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-gradient px-8 py-4 text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded hover:opacity-90 transition-opacity"
          >
            Chat on WhatsApp
          </a>
          <a
            href="tel:09027456757"
            className="border border-gold px-8 py-4 text-primary font-body font-semibold text-sm tracking-widest uppercase rounded hover:bg-primary/10 transition-colors"
          >
            Call Now
          </a>
        </div>
        <p className="text-muted-foreground/60 text-xs font-body mt-6">
          Follow us on Instagram: @msb_textiles_ · 20K+ followers
        </p>
      </div>
    </section>
  );
};

export default CTABanner;
