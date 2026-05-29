import React from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Package, MessageSquare, Star, Sparkles, Image, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const STATUS_COLORS = {
  new: "bg-blue-500",
  contacted: "bg-yellow-500",
  negotiating: "bg-orange-500",
  paid: "bg-green-500",
  delivered: "bg-emerald-600",
  lost: "bg-red-500",
};

function StatCard({ icon: Icon, label, value, sub, to, color = "#B8860B" }) {
  const inner = (
    <div className="bg-[#111] border border-white/8 hover:border-[#B8860B]/40 transition-all p-5 flex items-start gap-4">
      <div className="p-3 rounded-sm" style={{ background: `${color}18` }}>
        <Icon className="w-5 h-5" style={{ color }} />
      </div>
      <div>
        <p className="text-2xl font-black text-white">{value ?? "—"}</p>
        <p className="text-[11px] font-semibold uppercase tracking-wider text-white/50 mt-0.5">{label}</p>
        {sub && <p className="text-[10px] text-white/30 mt-1">{sub}</p>}
      </div>
    </div>
  );
  return to ? <Link to={to}>{inner}</Link> : inner;
}

export default function Dashboard() {
  const { data: products = [] } = useQuery({ queryKey: ["products"], queryFn: () => base44.entities.Product.list() });
  const { data: inquiries = [] } = useQuery({ queryKey: ["inquiries"], queryFn: () => base44.entities.Inquiry.list("-created_date", 50) });
  const { data: reviews = [] } = useQuery({ queryKey: ["reviews"], queryFn: () => base44.entities.Review.list() });
  const { data: arrivals = [] } = useQuery({ queryKey: ["arrivals"], queryFn: () => base44.entities.NewArrival.list() });
  const { data: gallery = [] } = useQuery({ queryKey: ["gallery"], queryFn: () => base44.entities.GalleryImage.list() });

  const newInquiries = inquiries.filter(i => i.status === "new");
  const featuredProducts = products.filter(p => p.is_featured);
  const activeArrivals = arrivals.filter(a => a.is_active);

  const recentInquiries = inquiries.slice(0, 5);

  return (
    <div className="space-y-7">
      {/* Header */}
      <div>
        <div className="flex items-center gap-2 mb-1">
          <div className="h-px w-6 bg-[#B8860B]" />
          <span className="text-[#B8860B] text-[10px] font-bold uppercase tracking-[0.3em]">Control Room</span>
        </div>
        <h1 className="text-white font-black text-2xl md:text-3xl uppercase tracking-tight">Admin Dashboard</h1>
        <p className="text-white/40 text-sm mt-1">Welcome back. Manage your bales, inquiries, gallery, and website content here.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3">
        <StatCard icon={Package} label="Total Products" value={products.length} sub="In catalog" to="/admin/catalog" />
        <StatCard icon={MessageSquare} label="New Inquiries" value={newInquiries.length} sub="Awaiting response" to="/admin/inquiries" color="#ef4444" />
        <StatCard icon={Sparkles} label="Active Arrivals" value={activeArrivals.length} sub="Live on site" to="/admin/new-arrivals" color="#a78bfa" />
        <StatCard icon={Star} label="Featured Products" value={featuredProducts.length} sub="On homepage" to="/admin/catalog" color="#f59e0b" />
        <StatCard icon={Star} label="Reviews" value={reviews.length} sub="Customer testimonials" to="/admin/reviews" color="#22c55e" />
        <StatCard icon={Image} label="Gallery Items" value={gallery.length} sub="Images & videos" to="/admin/gallery" color="#38bdf8" />
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-white/60 text-[11px] font-bold uppercase tracking-widest mb-3">Quick Actions</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {[
            { label: "Add Bale / Product", to: "/admin/catalog" },
            { label: "Post New Arrival", to: "/admin/new-arrivals" },
            { label: "View Inquiries", to: "/admin/inquiries" },
            { label: "Upload Gallery", to: "/admin/gallery" },
            { label: "Add Testimonial", to: "/admin/reviews" },
            { label: "Site Settings", to: "/admin/settings" },
          ].map(a => (
            <Link
              key={a.to}
              to={a.to}
              className="flex items-center justify-center text-center px-3 py-3 border border-[#B8860B]/30 text-[#B8860B] text-[10px] font-bold uppercase tracking-widest hover:bg-[#B8860B] hover:text-black transition-all"
            >
              {a.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Inquiries */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-white/60 text-[11px] font-bold uppercase tracking-widest">Recent Inquiries</h2>
          <Link to="/admin/inquiries" className="text-[#B8860B] text-[10px] font-bold uppercase tracking-wider hover:underline">View All</Link>
        </div>
        {recentInquiries.length === 0 ? (
          <div className="bg-[#111] border border-white/8 p-8 text-center text-white/30 text-sm">No inquiries yet</div>
        ) : (
          <div className="bg-[#111] border border-white/8 overflow-hidden">
            {recentInquiries.map((inq, i) => (
              <div key={inq.id} className={`flex items-center justify-between px-5 py-3.5 ${i > 0 ? "border-t border-white/5" : ""}`}>
                <div>
                  <p className="text-white text-sm font-semibold">{inq.customer_name}</p>
                  <p className="text-white/40 text-[11px]">{inq.product_requested || "General inquiry"} · {inq.phone_number}</p>
                </div>
                <span className={`px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white ${STATUS_COLORS[inq.status] || "bg-gray-600"}`}>
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