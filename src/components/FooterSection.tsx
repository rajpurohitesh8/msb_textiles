const FooterSection = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-heading text-3xl font-bold mb-4">
          <span className="text-gold-gradient">MSB</span>{" "}
          <span className="text-foreground">Textiles</span>
        </h2>
        <p className="text-muted-foreground font-body text-sm mb-8 max-w-md mx-auto">
          Shop no T092, Yantebura Mall, 1st Floor, Opposite UBA Plaza Line, Kantin Kwari, Kano, Nigeria
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href="https://wa.me/message/NM6BO4W6ZOLCM1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold-gradient px-6 py-3 text-primary-foreground font-body font-semibold text-sm tracking-widest uppercase rounded hover:opacity-90 transition-opacity"
          >
            WhatsApp Us
          </a>
          <a
            href="tel:09027456757"
            className="border border-gold px-6 py-3 text-primary font-body font-semibold text-sm tracking-widest uppercase rounded hover:bg-primary/10 transition-colors"
          >
            Call 09027456757
          </a>
        </div>
        <p className="text-muted-foreground/50 text-xs font-body">
          © {new Date().getFullYear()} MSB Textiles. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
