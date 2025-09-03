"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import MobileNavigation from "@/components/navigation/MobileNavigation";

export default function BackToPlanButton() {
  return (
    <>
      <MobileNavigation />
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
        className="mb-4 sm:mb-6"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="hidden sm:inline">{"Retour au plan du cours"}</span>
          <span className="sm:hidden">{"Retour"}</span>
        </Link>
      </motion.div>
    </>
  );
}