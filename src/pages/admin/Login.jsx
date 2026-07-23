import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/supabase/client";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const EAGLE_LOGO =
  "https://media.base44.com/images/public/69edd82e4a975eaa5f121f62/03bd86246_ChatGPT_Image_May_7__2026__04_17_01_PM-removebg-preview.png";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      navigate("/admin");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="bg-[#111] border border-[#B8860B]/30 p-8">
          <div className="text-center mb-8">
            <img
              src={EAGLE_LOGO}
              className="h-20 mx-auto mb-4"
              alt=""
            />

            <h1 className="text-white text-2xl font-bold">
              Admin Login
            </h1>

            <p className="text-white/50 mt-2">
              Sign in to continue
            </p>
          </div>

          <form onSubmit={login} className="space-y-4">
            <input
              className="admin-input"
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />

            <input
              className="admin-input"
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />

            <button
              disabled={loading}
              className="w-full bg-[#B8860B] py-3 text-black font-bold uppercase"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}