import React, { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import {
  LayoutDashboard, Package, MessageSquare, Star, Image,
  Settings, Sparkles, Menu, X, LogOut, ChevronRight
} from "lucide-react";
import { base44 } from "@/api/base44Client";

const EAGLE_LOGO = "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/03bd86246_ChatGPT_Image_May_7__2026__04_17_01_PM-removebg-preview.png";

const navItems = [
  { path: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { path: "/admin/catalog", label: "Bale Catalog", icon: Package },
  { path: "/admin/new-arrivals", label: "New Arrivals", icon: Sparkles },
  { path: "/admin/inquiries", label: "Inquiries / CRM", icon: MessageSquare },
  { path: "/admin/reviews", label: "Reviews", icon: Star },
  { path: "/admin/gallery", label: "Gallery & Media", icon: Image },
  { path: "/admin/settings", label: "Site Settings", icon: Settings },
];

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const isActive = (item) =>
    item.exact ? location.pathname === item.path : location.pathname.startsWith(item.path);

  const handleLogout = () => base44.auth.logout("/");

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Brand */}
      <div className="px-5 py-5 border-b border-[#B8860B]/20">
        <div className="flex items-center gap-3">
          <img src={EAGLE_LOGO} alt="Logo" className="h-10 w-auto object-contain" />
          <div>
            <p className="text-white font-bold text-[13px] leading-tight">Kay Amazing Grace</p>
            <p className="text-[#B8860B] text-[9px] font-bold uppercase tracking-[0.2em]">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map(({ path, label, icon: Icon, exact }) => {
          const active = isActive({ path, exact });
          return (
            <Link
              key={path}
              to={path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 text-[12px] font-semibold uppercase tracking-wider transition-all duration-150 group ${
                active
                  ? "bg-[#B8860B] text-black"
                  : "text-white/55 hover:text-white hover:bg-white/5"
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {label}
              {active && <ChevronRight className="w-3 h-3 ml-auto" />}
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="px-3 py-4 border-t border-white/8">
        <Link
          to="/"
          className="flex items-center gap-3 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-white/40 hover:text-white transition-colors"
        >
          <ChevronRight className="w-3.5 h-3.5 rotate-180" />
          View Website
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-wider text-white/40 hover:text-red-400 transition-colors w-full"
        >
          <LogOut className="w-3.5 h-3.5" />
          Logout
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-[#080808] text-white overflow-hidden">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-60 bg-[#0d0d0d] border-r border-[#B8860B]/20 shrink-0">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/70" onClick={() => setSidebarOpen(false)} />
          <aside className="relative z-10 w-64 bg-[#0d0d0d] border-r border-[#B8860B]/20 flex flex-col">
            <SidebarContent />
          </aside>
        </div>
      )}

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header className="flex items-center justify-between px-5 py-3.5 bg-[#0d0d0d] border-b border-[#B8860B]/20 shrink-0">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-1.5 text-white/60 hover:text-white"
          >
            <Menu className="w-5 h-5" />
          </button>
          <div className="hidden lg:block">
            <p className="text-[11px] text-white/40 uppercase tracking-widest">
              Kay Amazing Grace Global — Admin Control Panel
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B8860B] animate-pulse" />
            <span className="text-[10px] text-white/40 uppercase tracking-wider">Live</span>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-5 md:p-7">
          <Outlet />
        </main>
      </div>
    </div>
  );
}