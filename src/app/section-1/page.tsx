"use client";

import { motion } from "framer-motion";
import BackToPlanButton from "@/components/content/BackToPlanButton";
import Link from "next/link";
import { ChevronRight, ChevronLeft, BarChart3, TrendingUp, TrendingDown } from "lucide-react";

export default function Section1Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <BackToPlanButton />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-green-100 rounded-lg">
              <BarChart3 className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              {"Section I - L'analyse du risque en fonction de la position de taux"}
            </h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-green-50 border-l-4 border-green-500 p-4 sm:p-6 mb-6 sm:mb-8 rounded-r-lg">
              <h3 className="text-base sm:text-lg font-semibold text-green-900 mb-2">
                {"Concept clé : La position de taux"}
              </h3>
              <p className="text-green-800">
                {"Pour analyser le risque lié à la variation de taux d'intérêt auquel une entreprise est exposée, il faut déterminer sa position de taux. La position de taux se calcule par la différence entre les actifs et les dettes au bilan : (placement - financement) ou (prêts - emprunts)."}
              </p>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              {"Types de positions"}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-gray-50 p-4 sm:p-6 rounded-lg border border-gray-200">
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                  {"Position fermée"}
                </h3>
                <p className="text-gray-700">
                  {"Elle est nulle ou quasi-nulle"}
                </p>
              </div>
              
              <div className="bg-blue-50 p-4 sm:p-6 rounded-lg border border-blue-200">
                <h3 className="text-base sm:text-lg font-semibold text-blue-900 mb-3">
                  {"Position ouverte et longue"}
                </h3>
                <p className="text-blue-800">
                  {"Les actifs sont supérieurs aux passifs"}
                </p>
              </div>
              
              <div className="bg-red-50 p-4 sm:p-6 rounded-lg border border-red-200">
                <h3 className="text-base sm:text-lg font-semibold text-red-900 mb-3">
                  {"Position ouverte et courte"}
                </h3>
                <p className="text-red-800">
                  {"Les actifs sont inférieurs aux passifs"}
                </p>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              {"1. Position de taux pour des taux fixes"}
            </h2>
            
            <div className="overflow-x-auto mb-6 sm:mb-8">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-2 sm:p-4 text-left font-semibold text-sm sm:text-base">
                      {"Situations"}
                    </th>
                    <th className="border border-gray-300 p-2 sm:p-4 text-left font-semibold text-sm sm:text-base">
                      {"Risques identifiés"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-2 sm:p-4 text-sm sm:text-base">
                      {"Emprunteur à taux fixe"}
                    </td>
                    <td className="border border-gray-300 p-2 sm:p-4 text-sm sm:text-base">
                      <div className="flex items-center gap-2">
                        <TrendingDown className="w-5 h-5 text-red-500" />
                        {"Baisse des taux d'intérêt sur le marché (perte d'opportunité)"}
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4">
                      {"Prêteurs à taux fixes ou portefeuille d'obligations à taux fixe"}
                    </td>
                    <td className="border border-gray-300 p-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-red-500" />
                        {"Hausse des taux d'intérêts sur le marché : ne profite pas de la hausse et la valeur du portefeuille d'obligations se déprécie"}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-lg">
              <p className="text-yellow-800 font-medium">
                {"⚠️ La position longue à taux fixe (actif à taux fixe > dette à taux fixe) est exposée à une hausse des taux d'intérêts."}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {"2. Position de taux pour des taux variables"}
            </h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-4 text-left font-semibold">
                      {"Situations"}
                    </th>
                    <th className="border border-gray-300 p-4 text-left font-semibold">
                      {"Risques identifiés"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-4">
                      {"Emprunteur à taux variable"}
                    </td>
                    <td className="border border-gray-300 p-4">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-red-500" />
                        {"Hausse des taux d'intérêt sur le marché"}
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4">
                      {"Prêteur à taux variables ou portefeuille d'obligations à taux variable"}
                    </td>
                    <td className="border border-gray-300 p-4">
                      <div className="flex items-center gap-2">
                        <TrendingDown className="w-5 h-5 text-red-500" />
                        {"Baisse des taux d'intérêts sur le marché"}
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
              <p className="text-red-800 font-medium">
                {"⚠️ La position courte à taux variable (actif à taux variable < passif à taux variable) est exposée à une hausse des taux."}
              </p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {"Objectif de la gestion de taux"}
              </h3>
              <p className="text-blue-800">
                {"L'objectif de la gestion de taux est de fermer sa position de taux. Pour fermer sa position de taux, il faut faire appel à des produits dérivés (marché à terme ou option financière) mais cela a un coût."}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-between"
        >
          <Link
            href="/introduction"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
            {"Introduction"}
          </Link>
          
          <Link
            href="/section-2"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg font-medium hover:from-green-700 hover:to-green-800 transition-all duration-200"
          >
            {"Section II - Contrats futures"}
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}