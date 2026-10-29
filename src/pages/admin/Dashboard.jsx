import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import {
  Package,
  MessageSquare,
  Star,
  Sparkles,
  Image,
} from "lucide-react";

import { ProductService } from "@/services/ProductService";
import { InquiryService } from "@/services/InquiryService";
import { ReviewService } from "@/services/ReviewService";
import { NewArrivalService } from "@/services/NewArrivalService";
import { GalleryService } from "@/services/GalleryService";

const STATUS_COLORS = {
  new: "bg-blue-500",
  contacted: "bg-yellow-500",
  negotiating: "bg-orange-500",
  paid: "bg-green-500",
  delivered: "bg-emerald-600",
  lost: "bg-red-500",
};

function StatCard({ icon: Icon, label, value, sub, to, color = "#B8860B" }) {
  const card = (
    <div className="bg-[#111] border border-white/8 hover:border-[#B8860B]/40 transition-all p-5 flex items-start gap-4">
      <div
        className="p-3 rounded-sm"
        style={{ background: `${color}18` }}
      >
        <Icon className="w-5 h-5" style={{ color }} />
      </div>

      <div>
        <p className="text-2xl font-black text-white">{value ?? 0}</p>

        <p className="text-[11px] font-semibold uppercase tracking-wider text-white/50 mt-0.5">
          {label}
        </p>

        {sub && (
          <p className="text-[10px] text-white/30 mt-1">
            {sub}
          </p>
        )}
      </div>
    </div>
  );

  return to ? <Link to={to}>{card}</Link> : card;
}

export default function Dashboard() {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: () => ProductService.list(),
  });

  const { data: inquiries = [] } = useQuery({
    queryKey: ["inquiries"],
    queryFn: () => InquiryService.list(50),
  });

  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => ReviewService.list(),
  });

  const { data: arrivals = [] } = useQuery({
    queryKey: ["arrivals"],
    queryFn: () => NewArrivalService.list(),
  });

  const { data: gallery = [] } = useQuery({
    queryKey: ["gallery"],
    queryFn: () => GalleryService.list(),
  });

  const newInquiries = inquiries.filter(
    (i) => i.status === "new"
  );

  const featuredProducts = products.filter(
    (p) => p.is_featured
  );

  const activeArrivals = arrivals.filter(
    (a) => a.is_active
  );

  const recentInquiries = inquiries.slice(0, 5);

  return (
    <div className="space-y-7">

      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="h-px w-6 bg-[#B8860B]" />

          <span className="text-[#B8860B] text-[10px] font-bold uppercase tracking-[0.3em]">
            Control Room
          </span>
        </div>

        <h1 className="text-white font-black text-2xl md:text-3xl uppercase tracking-tight">
          Admin Dashboard
        </h1>

        <p className="text-white/40 text-sm mt-1">
          Welcome back. Manage your products, inquiries, gallery and website
          content here.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">

        <StatCard
          icon={Package}
          label="Total Products"
          value={products.length}
          sub="In catalog"
          to="/admin/catalog"
        />

        <StatCard
          icon={MessageSquare}
          label="New Inquiries"
          value={newInquiries.length}
          sub="Awaiting response"
          to="/admin/inquiries"
          color="#ef4444"
        />

        <StatCard
          icon={Sparkles}
          label="Active Arrivals"
          value={activeArrivals.length}
          sub="Live on site"
          to="/admin/new-arrivals"
          color="#a78bfa"
        />

        <StatCard
          icon={Star}
          label="Featured Products"
          value={featuredProducts.length}
          sub="Homepage"
          to="/admin/catalog"
          color="#f59e0b"
        />

        <StatCard
          icon={Star}
          label="Reviews"
          value={reviews.length}
          sub="Testimonials"
          to="/admin/reviews"
          color="#22c55e"
        />

        <StatCard
          icon={Image}
          label="Gallery Items"
          value={gallery.length}
          sub="Images & Videos"
          to="/admin/gallery"
          color="#38bdf8"
        />

      </div>

      <div>

        <h2 className="text-white/60 text-[11px] font-bold uppercase tracking-widest mb-3">
          Quick Actions
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">

          {[
            {
              label: "Add Product",
              to: "/admin/catalog",
            },
            {
              label: "Post New Arrival",
              to: "/admin/new-arrivals",
            },
            {
              label: "View Inquiries",
              to: "/admin/inquiries",
            },
            {
              label: "Upload Gallery",
              to: "/admin/gallery",
            },
            {
              label: "Add Review",
              to: "/admin/reviews",
            },
            {
              label: "Settings",
              to: "/admin/settings",
            },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="flex items-center justify-center text-center px-3 py-3 border border-[#B8860B]/30 text-[#B8860B] text-[10px] font-bold uppercase tracking-widest hover:bg-[#B8860B] hover:text-black transition-all"
            >
              {item.label}
            </Link>
          ))}

        </div>

      </div>

      <div>

        <div className="flex items-center justify-between mb-3">

          <h2 className="text-white/60 text-[11px] font-bold uppercase tracking-widest">
            Recent Inquiries
          </h2>

          <Link
            to="/admin/inquiries"
            className="text-[#B8860B] text-[10px] font-bold uppercase tracking-wider hover:underline"
          >
            View All
          </Link>

        </div>

        {recentInquiries.length === 0 ? (
          <div className="bg-[#111] border border-white/8 p-8 text-center text-white/30 text-sm">
            No inquiries yet.
          </div>
        ) : (
          <div className="bg-[#111] border border-white/8 overflow-hidden">

            {recentInquiries.map((inq, index) => (
              <div
                key={inq.id}
                className={`flex items-center justify-between px-5 py-3.5 ${
                  index > 0 ? "border-t border-white/5" : ""
                }`}
              >
                <div>
                  <p className="text-white text-sm font-semibold">
                    {inq.customer_name}
                  </p>

                  <p className="text-white/40 text-[11px]">
                    {inq.product_requested || "General Inquiry"} •{" "}
                    {inq.phone_number}
                  </p>
                </div>

                <span
                  className={`px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white ${
                    STATUS_COLORS[inq.status] || "bg-gray-600"
                  }`}
                >
                  {inq.status}
                </span>
              </div>
            ))}

          </div>
        )}

      </div>

    </div>
  );
}