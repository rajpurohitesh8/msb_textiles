import { TrendingUp, Users, Package, Award } from "lucide-react";

const stats = [
  { icon: Package, value: "2,500+", label: "Products Available" },
  { icon: Users, value: "20K+", label: "Happy Customers" },
  { icon: TrendingUp, value: "2,561", label: "Catalogue Posts" },
  { icon: Award, value: "RC: 6954926", label: "Registered Business" },
];

const StatsSection = () => {
  return (
    <section className="py-16 px-6 border-y border-border bg-secondary/30">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <stat.icon className="w-5 h-5 text-primary" />
            </div>
            <p className="font-heading text-2xl md:text-3xl font-bold text-gold-gradient">{stat.value}</p>
            <p className="text-muted-foreground text-sm font-body mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
