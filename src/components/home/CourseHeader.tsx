"use client";

import { motion } from "framer-motion";
import { TrendingUp, Clock, BookOpen, Award } from "lucide-react";

export default function CourseHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white"
    >
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6"
          >
            <TrendingUp className="w-10 h-10" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              {"Le Risque de Taux"}
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-2"
          >
            {"Maîtrisez les instruments financiers pour gérer les risques de taux d'intérêt. Découvrez les futures, forwards, options et swaps utilisés par les trésoriers d'entreprise."}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4"
          >
            <div className="flex items-center gap-2 bg-white/20 px-3 sm:px-4 py-2 rounded-full">
              <Award className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium">{"Niveau DSCG"}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-3 sm:px-4 py-2 rounded-full">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium">{"2h de formation"}</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 px-3 sm:px-4 py-2 rounded-full">
              <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium">{"6 sections"}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}