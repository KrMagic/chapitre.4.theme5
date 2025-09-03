"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { LucideIcon, ChevronRight } from "lucide-react";

interface SectionBlockProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  color: string;
  delay: number;
}

export default function SectionBlock({
  title,
  description,
  href,
  icon: Icon,
  color,
  delay,
}: SectionBlockProps) {
  const colorClasses = {
    blue: "from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700",
    green: "from-green-500 to-green-600 hover:from-green-600 hover:to-green-700",
    purple: "from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700",
    orange: "from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700",
    red: "from-red-500 to-red-600 hover:from-red-600 hover:to-red-700",
    indigo: "from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group"
    >
      <Link href={href}>
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-4 sm:p-6 border border-gray-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 sm:gap-4 flex-1">
              <div className={`p-2 sm:p-3 rounded-lg bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} text-white flex-shrink-0`}>
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 leading-tight">
                  {title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 justify-end sm:justify-start">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 sm:px-6 py-2 bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} text-white rounded-lg font-medium text-sm transition-all duration-200 whitespace-nowrap`}
              >
                {"Commencer"}
              </motion.button>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-gray-600 transition-colors flex-shrink-0" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}