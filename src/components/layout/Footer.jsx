import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, MessageCircle } from "lucide-react";
import { LOGO_URL, getWhatsAppGeneralUrl } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="gold-hairline w-full" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <img
              src={LOGO_URL}
              alt="Kay Amazing Grace Global"
              className="h-16 w-auto object-contain brightness-0 invert mb-4"
            />
            <p className="text-sm text-primary-foreground/50 leading-relaxed">
              Quality okirika, thrift bales &amp; fashion — for retail buyers and resellers. Based in Aba, Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent mb-6">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { path: "/shop", label: "Shop All" },
                { path: "/shop?filter=new_drop", label: "New Arrivals" },
                { path: "/shop?filter=best_seller", label: "Best Sellers" },
                { path: "/about", label: "About Us" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent mb-6">
              Categories
            </h4>
            <div className="flex flex-col gap-3">
              {["Men's Wear", "Ladies Wear", "Children's Wear", "Corporate Wear", "Shoes & Slippers"].map(
                (cat) => (
                  <Link
                    key={cat}
                    to="/shop"
                    className="text-sm text-primary-foreground/50 hover:text-accent transition-colors"
                  >
                    {cat}
                  </Link>
                )
              )}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[11px] font-medium uppercase tracking-[0.2em] text-accent mb-6">
              Visit Us
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                <p className="text-sm text-primary-foreground/50 leading-relaxed">
                  97/98 Ndoki by East off Ngwa Road, Aba, Abia State
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <p className="text-sm text-primary-foreground/50">
                  08035239489
                </p>
              </div>
              <a
                href={getWhatsAppGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-accent/30 text-accent text-xs uppercase tracking-[0.15em] hover:bg-accent hover:text-foreground transition-all duration-300 w-fit"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="gold-hairline w-full mt-12 mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/30 tracking-wider">
            © 2024 Kay Amazing Grace Global. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/30 tracking-wider">
            QUALITY · TRUST · VALUE — ABA, NIGERIA
          </p>
        </div>
      </div>
    </footer>
  );
}