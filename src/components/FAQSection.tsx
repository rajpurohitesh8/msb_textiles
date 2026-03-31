import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Do you sell wholesale and retail?",
    a: "Yes! We offer both wholesale and retail prices. Contact us on WhatsApp for wholesale pricing and bulk order discounts.",
  },
  {
    q: "How can I place an order?",
    a: "You can place orders via WhatsApp, phone call, or visit our store at Shop T092, Yantebura Mall, Kantin Kwari, Kano.",
  },
  {
    q: "Do you deliver outside Kano?",
    a: "Absolutely! We deliver nationwide across Nigeria. Delivery fees vary by location. Contact us for a delivery quote.",
  },
  {
    q: "Are your fabrics original and authentic?",
    a: "100% guaranteed authentic. We source directly from manufacturers — Getzner from Austria, Swiss Atiku from Switzerland, and premium lace from trusted suppliers.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept bank transfers, cash payments, and mobile money. Payment is confirmed before dispatch for delivery orders.",
  },
  {
    q: "Can I return or exchange a fabric?",
    a: "We accept returns and exchanges for uncut fabrics within 48 hours of purchase. Please contact us immediately if there's any issue.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <HelpCircle className="w-6 h-6 text-primary" />
          </div>
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-3">FAQ</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            Frequently <span className="text-gold-gradient">Asked</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="border border-border rounded bg-card px-5"
            >
              <AccordionTrigger className="font-heading text-base font-semibold text-foreground hover:text-primary hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm font-body leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
