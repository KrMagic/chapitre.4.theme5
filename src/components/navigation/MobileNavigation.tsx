"use client";

import { useState, type ComponentType, type SVGProps } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, BookOpen, TrendingUp, BarChart3, Target, Brain, FileText } from "lucide-react";

interface NavigationItem {
  title: string;
  href: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  color: string;
}

const navigationItems: NavigationItem[] = [
  {
    title: "Accueil",
    href: "/",
    icon: Home,
    color: "text-gray-600"
  },
  {
    title: "Introduction",
    href: "/introduction",
    icon: BookOpen,
    color: "text-blue-600"
  },
  {
    title: "Section I - Analyse du risque",
    href: "/section-1",
    icon: TrendingUp,
    color: "text-green-600"
  },
  {
    title: "Section II - Contrats futures",
    href: "/section-2",
    icon: BarChart3,
    color: "text-purple-600"
  },
  {
    title: "Section II-bis - Forward/FRA",
    href: "/forward-fra",
    icon: Target,
    color: "text-cyan-600"
  },
  {
    title: "Section III - Options et swaps",
    href: "/section-3",
    icon: Target,
    color: "text-orange-600"
  },
  {
    title: "Quiz",
    href: "/quiz",
    icon: Brain,
    color: "text-red-600"
  },
  {
    title: "Cas pratiques",
    href: "/cas-pratiques",
    icon: FileText,
    color: "text-indigo-600"
  }
];

export default function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Menu Button - Fixed position on mobile */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        onClick={toggleMenu}
        className="fixed top-4 right-4 z-50 lg:hidden bg-white shadow-lg rounded-full p-3 border border-gray-200"
        aria-label="Menu de navigation"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-gray-700" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="w-6 h-6 text-gray-700" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={closeMenu}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-45 lg:hidden overflow-y-auto"
          >
            <div className="p-6 pt-20">
              <div className="mb-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  Le Risque de Taux
                </h2>
                <p className="text-sm text-gray-600">
                  Navigation du cours
                </p>
              </div>

              <nav className="space-y-2">
                {navigationItems.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 group"
                      >
                        <div className={`p-2 rounded-lg bg-gray-100 group-hover:bg-gray-200 transition-colors ${item.color}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <span className="text-sm font-medium text-gray-900 block leading-tight">
                            {item.title}
                          </span>
                        </div>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="text-xs text-gray-500 text-center">
                  Formation DSCG - Gestion du risque de taux
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}