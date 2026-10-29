import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { WA_URL, WA_PRICING_URL } from "@/lib/seo";

const WaIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const FAQS = [
  {
    q: "Where can I buy okirika bales in Aba?",
    a: "You can buy quality okirika bales from Kay Amazing Grace Global, located at 97/98 Ndoki by East off Ngwa Road, Aba, Abia State, Nigeria. You can also order via WhatsApp: 08035239489 and arrange delivery anywhere in Nigeria."
  },
  {
    q: "Who sells thrift clothing bales in Nigeria?",
    a: "Kay Amazing Grace Global is a leading wholesale thrift and okirika bale supplier in Nigeria, based in Aba. We supply resellers, boutique owners, and bulk buyers nationwide with Grade A quality bales."
  },
  {
    q: "Does Kay Amazing Grace Global sell one by one?",
    a: "No. Kay Amazing Grace Global is a wholesale-only supplier. We sell in bales and bulk quantities to resellers, retailers, and traders across Nigeria. We do not sell individual clothing items."
  },
  {
    q: "Does Kay Amazing Grace Global sell in bulk?",
    a: "Yes. We specialize in wholesale bulk bale supply — including mixed bales, Korea bales, ladies bales, men's bales, children's bales, shoes bales, and more. Contact us for bulk pricing."
  },
  {
    q: "What types of bales are available?",
    a: "We supply: Mixed bales, Korea bales, Ladies wear bales, Men's wear bales, Children's wear bales, Corporate wear bales, Casual wear bales, Sportswear bales, Shoes & slippers bales, Bags & accessories bales, and Underwear & nightwear bales."
  },
  {
    q: "Can resellers buy from Kay Amazing Grace Global?",
    a: "Absolutely. We supply resellers, boutique owners, market traders, and wholesale buyers across Nigeria. New resellers are welcome. Contact us on WhatsApp to get current bale pricing and availability."
  },
  {
    q: "Does Kay Amazing Grace Global deliver outside Aba?",
    a: "Yes. We supply bales nationwide across all 36 states in Nigeria. Once your order is confirmed and payment is made, we arrange delivery to your location via reliable logistics partners."
  },
  {
    q: "How do I request current bale pricing?",
    a: "Send a WhatsApp message to 08035239489. State the bale type and quantity you need. Our team will respond promptly with current pricing, photos, and availability."
  },
  {
    q: "What is the minimum order quantity?",
    a: "Minimum order is one bale. However, buying in larger quantities attracts better wholesale pricing. Contact us on WhatsApp to discuss bulk pricing for 2 or more bales."
  },
  {
    q: "How do I know the quality of bales before buying?",
    a: "We send clear photos and videos of available bales via WhatsApp before you make payment. All our bales are Grade A quality — carefully inspected and sorted at our Aba warehouse."
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept bank transfers and cash payments. Full details are provided when you confirm your order via WhatsApp."
  },
  {
    q: "Where is Kay Amazing Grace Global located?",
    a: "We are located at 97/98 Ndoki by East off Ngwa Road, Aba, Abia State, Nigeria. Open Monday to Saturday, 8am to 6pm. Call or WhatsApp 08035239489 before visiting."
  },
  {
    q: "Where can I buy second-hand clothes wholesale in Nigeria?",
    a: "The best place to buy second-hand clothes wholesale in Nigeria is Aba, Abia State. Kay Amazing Grace Global is located on Ngwa Road, Aba, and supplies quality okirika bales to buyers across all 36 states in Nigeria."
  },
  {
    q: "Do you supply children thrift bales?",
    a: "Yes. We supply children okirika bales containing baby clothes, toddler wear, girls and boys clothing, school wear, kids jackets, and nightwear. WhatsApp 08035239489 to request children bale pricing and photos."
  },
  {
    q: "Do you sell shoe bales in Nigeria?",
    a: "Yes. Kay Amazing Grace Global supplies wholesale shoe bales including men's, women's, and children's footwear — sneakers, heels, flats, sandals, slippers, and boots. Sourced from UK, USA, and Korea. WhatsApp 08035239489."
  },
  {
    q: "Can boutique owners buy from you?",
    a: "Absolutely. Many boutique owners across Lagos, Abuja, Enugu, Port Harcourt, and Southeast Nigeria buy from us. Korea bales and ladies wear bales are most popular with boutiques. Contact us on WhatsApp: 08035239489."
  },
  {
    q: "Do you supply to Ariaria market traders?",
    a: "Yes. We are based in Aba near Ariaria and supply Ariaria market traders, Ngwa Road traders, and buyers from markets across Nigeria. Walk-in buyers are welcome Monday to Saturday, 8am–6pm."
  },
  {
    q: "How can I reserve a bale?",
    a: "To reserve a bale, WhatsApp us on 08035239489 and state the bale type and quantity. We will confirm availability, send photos, and hold the bale for you upon deposit or payment confirmation."
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/8">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-white font-semibold text-[14px] leading-snug pr-4">{faq.q}</span>
        <ChevronDown className={`w-4 h-4 text-[#B8860B] shrink-0 mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <p className="text-white/55 text-[13px] leading-relaxed pb-5 pr-8">
          {faq.a}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  useEffect(() => {
    document.title = "FAQs | Okirika Bale Questions Answered — Kay Amazing Grace Global";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Frequently asked questions about buying okirika bales from Kay Amazing Grace Global in Aba, Nigeria. Learn about bale types, pricing, delivery, and how to order.");
  }, []);

  return (
    <div className="pt-[70px] min-h-screen bg-[#080808] text-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 text-[10px] text-white/30 uppercase tracking-widest mb-8">
          <Link to="/" className="hover:text-[#B8860B] transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-[#B8860B]">FAQ</span>
        </nav>

        {/* Header */}
        <p className="text-[10px] uppercase tracking-[0.3em] text-[#B8860B] mb-2">Common Questions</p>
        <h1 className="text-3xl sm:text-4xl font-heading font-light italic text-white mb-3">
          Frequently Asked Questions
        </h1>
        <div className="h-px w-16 bg-[#B8860B] mb-4" />
        <p className="text-white/50 text-sm mb-10">
          Everything you need to know about buying okirika and thrift bales from Kay Amazing Grace Global in Aba, Nigeria.
        </p>

        {/* FAQ List */}
        <div className="mb-12">
          {FAQS.map((faq, i) => (
            <FAQItem key={i} faq={faq} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="p-6 border border-[#B8860B]/20 bg-[#B8860B]/5">
          <h3 className="text-white font-bold text-lg mb-2">Still have questions?</h3>
          <p className="text-white/40 text-sm mb-4">Contact us directly on WhatsApp. We respond fast.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#B8860B] text-black text-[11px] font-black uppercase tracking-widest hover:bg-[#D4A017] transition-colors">
              <WaIcon /> Chat on WhatsApp
            </a>
            <a href={WA_PRICING_URL} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#B8860B]/40 text-[#B8860B] text-[11px] font-bold uppercase tracking-widest hover:border-[#B8860B] transition-colors">
              Request Bale Pricing
            </a>
          </div>
        </div>

        {/* Internal links */}
        <div className="mt-8 pt-6 border-t border-white/8">
          <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 mb-4">Explore More</p>
          <div className="flex flex-wrap gap-3">
            {[
              { to: "/shop", label: "Browse Bale Categories" },
              { to: "/seo/okirika-bales-aba", label: "Okirika Bales in Aba" },
              { to: "/seo/korea-bales", label: "Korea Bales" },
              { to: "/blog", label: "Read Our Blog" },
              { to: "/contact", label: "Contact Us" },
            ].map(({ to, label }) => (
              <Link key={to} to={to} className="text-[11px] text-white/30 hover:text-[#B8860B] underline underline-offset-2 transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}