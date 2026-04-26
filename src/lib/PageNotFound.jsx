import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-background">
      <p className="text-[10px] uppercase tracking-[0.3em] text-accent mb-4">Page Not Found</p>
      <h1 className="text-6xl md:text-8xl font-heading font-light italic text-foreground mb-4">
        404
      </h1>
      <p className="text-muted-foreground text-sm mb-8">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 px-8 py-3 border border-foreground text-foreground text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-foreground hover:text-background transition-all duration-300"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        Back to Home
      </Link>
    </div>
  );
}