import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, MessageCircle, Clock, Mail } from "lucide-react";
import { getWhatsAppGeneralUrl } from "@/lib/constants";

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Our Store",
    value: "97/98 Ndoki by East off Ngwa Road, Aba, Abia State, Nigeria",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "08035239489 / 08168478036",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday – Saturday: 8:00 AM – 6:00 PM",
  },
];

export default function Contact() {
  return (
    <div className="pt-20 md:pt-24 min-h-screen">
      <div className="px-4 sm:px-6 max-w-7xl mx-auto py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-4">Get in Touch</p>
          <h1 className="text-4xl md:text-6xl font-heading font-light italic mb-6">
            Contact Us
          </h1>
          <p className="text-muted-foreground leading-relaxed">
            Ready to shop? Have a question? We'd love to hear from you.
            Reach out directly on WhatsApp for the fastest response.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {/* Contact details */}
          <div className="space-y-8">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-accent/20">
                  <info.icon className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-accent mb-1">
                    {info.label}
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">{info.value}</p>
                </div>
              </motion.div>
            ))}

            <div className="gold-hairline" />

            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent mb-4">
                Quick Order
              </p>
              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-[#20BD5A] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Map placeholder / Visual */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-foreground p-8 md:p-12 flex flex-col justify-center"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-6">
              Our Location
            </p>
            <h3 className="text-2xl font-heading italic text-background mb-4">
              Kay Amazing Grace Global
            </h3>
            <p className="text-sm text-background/50 leading-relaxed mb-6">
              Located in the heart of Aba's bustling fashion district,
              our store is easily accessible from Ngwa Road.
              Visit us to experience our curated collection in person.
            </p>
            <div className="space-y-2 text-sm text-background/70">
              <p>97/98 Ndoki by East off Ngwa Road</p>
              <p>Aba, Abia State, Nigeria</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}