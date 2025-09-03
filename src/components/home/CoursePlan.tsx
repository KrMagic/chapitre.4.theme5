"use client";

import { motion } from "framer-motion";
import { Target, Rocket, TrendingUp, BarChart3, PieChart, HelpCircle, Award } from "lucide-react";
import SectionBlock from "./SectionBlock";

const sections = [
  {
    title: "Introduction",
    description: "Comprendre les enjeux du risque de taux pour les entreprises",
    href: "/introduction",
    icon: Rocket,
    color: "blue",
  },
  {
    title: "Section I - Analyse du risque",
    description: "Position de taux et identification des risques",
    href: "/section-1",
    icon: TrendingUp,
    color: "green",
  },
  {
    title: "Section II - Contrats futures",
    description: "Couverture avec les marchés organisés",
    href: "/section-2",
    icon: BarChart3,
    color: "purple",
  },
  {
    title: "Section III - Options et swaps",
    description: "Instruments dérivés avancés",
    href: "/section-3",
    icon: PieChart,
    color: "indigo",
  },
  {
    title: "Quiz",
    description: "Testez vos connaissances",
    href: "/quiz",
    icon: HelpCircle,
    color: "orange",
  },
  {
    title: "Cas pratiques",
    description: "Applications concrètes et exercices",
    href: "/cas-pratiques",
    icon: Award,
    color: "red",
  },
];

export default function CoursePlan() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <div className="inline-flex items-center gap-3 mb-4">
          <Target className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            {"Plan du cours"}
          </h2>
        </div>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
          {"Suivez un parcours structuré pour maîtriser la gestion du risque de taux d'intérêt"}
        </p>
      </motion.div>

      <div className="space-y-4">
        {sections.map((section, index) => (
          <SectionBlock
            key={section.href}
            title={section.title}
            description={section.description}
            href={section.href}
            icon={section.icon}
            color={section.color}
            delay={0.1 * (index + 1)}
          />
        ))}
      </div>
    </div>
  );
}