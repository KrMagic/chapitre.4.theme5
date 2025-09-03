"use client";

import { motion } from "framer-motion";
import BackToPlanButton from "@/components/content/BackToPlanButton";
import Link from "next/link";
import { ChevronRight, TrendingUp, AlertTriangle, Shield } from "lucide-react";

export default function IntroductionPage() {
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
            <div className="p-3 bg-blue-100 rounded-lg">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {"Introduction au Risque de Taux"}
            </h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 sm:p-6 mb-6 sm:mb-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">
                    {"Enjeu majeur pour les entreprises"}
                  </h3>
                  <p className="text-blue-800">
                    {"Les trésoriers d'entreprise sont soumis aux aléas liés à l'évolution des taux d'intérêt sur le marché. Les risques sont différents selon qu'ils s'agissent de taux fixe ou de taux variable et qu'ils portent sur un actif ou sur un passif."}
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
              {"Qu'est-ce que le risque de taux ?"}
            </h2>
            
            <p className="text-gray-700 mb-6">
              {"Le risque de taux porte aussi sur l'évolution des taux en vue des opérations futures envisagées (emprunt ou prêt futur). Il s'analyse en fonction des situations :"}
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-green-50 p-4 sm:p-6 rounded-lg border border-green-200">
                <h3 className="text-base sm:text-lg font-semibold text-green-900 mb-3">
                  {"Types d'opérations"}
                </h3>
                <ul className="space-y-2 text-green-800">
                  <li>{"• Emprunt ou prêt existant"}</li>
                  <li>{"• Portefeuille d'obligations à l'actif"}</li>
                  <li>{"• Opérations futures envisagées"}</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-4 sm:p-6 rounded-lg border border-purple-200">
                <h3 className="text-base sm:text-lg font-semibold text-purple-900 mb-3">
                  {"Types de taux"}
                </h3>
                <ul className="space-y-2 text-purple-800">
                  <li>{"• Taux fixe"}</li>
                  <li>{"• Taux variable"}</li>
                </ul>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-gray-50 p-4 sm:p-6 rounded-lg mb-6 sm:mb-8"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4">
                {"Analyse des risques selon les situations"}
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <h4 className="text-base sm:text-lg font-medium text-gray-700 mb-3">{"Opérations existantes"}</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-2 text-left">{"Évolution des taux"}</th>
                          <th className="border border-gray-300 p-2 text-center">{"Prêt à taux fixe"}</th>
                          <th className="border border-gray-300 p-2 text-center">{"Prêt à taux variable"}</th>
                          <th className="border border-gray-300 p-2 text-center">{"Emprunt à taux fixe"}</th>
                          <th className="border border-gray-300 p-2 text-center">{"Emprunt à taux variable"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2 font-medium">{"Hausse des taux"}</td>
                          <td className="border border-gray-300 p-2 text-center text-red-600">{"Risque"}</td>
                          <td className="border border-gray-300 p-2 text-center text-green-600">{"Gain"}</td>
                          <td className="border border-gray-300 p-2 text-center text-green-600">{"Gain"}</td>
                          <td className="border border-gray-300 p-2 text-center text-red-600">{"Risque"}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-medium">{"Baisse des taux"}</td>
                          <td className="border border-gray-300 p-2 text-center text-green-600">{"Gain"}</td>
                          <td className="border border-gray-300 p-2 text-center text-red-600">{"Risque"}</td>
                          <td className="border border-gray-300 p-2 text-center text-red-600">{"Risque"}</td>
                          <td className="border border-gray-300 p-2 text-center text-green-600">{"Gain"}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-base sm:text-lg font-medium text-gray-700 mb-3">{"Opérations futures"}</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 text-xs sm:text-sm">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-2 text-left">{"Évolution des taux"}</th>
                          <th className="border border-gray-300 p-2 text-center">{"Prêt futur à taux fixe"}</th>
                          <th className="border border-gray-300 p-2 text-center">{"Prêt futur à taux variable"}</th>
                          <th className="border border-gray-300 p-2 text-center">{"Emprunt futur à taux fixe"}</th>
                          <th className="border border-gray-300 p-2 text-center">{"Emprunt futur à taux variable"}</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-2 font-medium">{"Hausse des taux"}</td>
                          <td className="border border-gray-300 p-2 text-center text-green-600">{"Gain"}</td>
                          <td className="border border-gray-300 p-2 text-center text-red-600">{"Risque"}</td>
                          <td className="border border-gray-300 p-2 text-center text-red-600">{"Risque"}</td>
                          <td className="border border-gray-300 p-2 text-center text-green-600">{"Gain"}</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-2 font-medium">{"Baisse des taux"}</td>
                          <td className="border border-gray-300 p-2 text-center text-red-600">{"Risque"}</td>
                          <td className="border border-gray-300 p-2 text-center text-green-600">{"Gain"}</td>
                          <td className="border border-gray-300 p-2 text-center text-green-600">{"Gain"}</td>
                          <td className="border border-gray-300 p-2 text-center text-red-600">{"Risque"}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                <p className="text-yellow-800 text-sm">
                  <strong>{"Note importante :"}</strong> {"Une augmentation du taux d'intérêt aura une incidence négative sur un portefeuille obligataire."}
                </p>
              </div>
            </motion.div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-4 sm:p-6 mb-6 sm:mb-8 rounded-r-lg">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-orange-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-orange-900 mb-2">
                    {"Solutions de couverture"}
                  </h3>
                  <p className="text-orange-800 mb-4">
                    {"Pour faire face à ces risques, de nombreux produits dérivés ont été développés :"}
                  </p>
                  <ul className="space-y-2 text-orange-800">
                    <li>{"• Contrats à terme sur le marché organisé : futures"}</li>
                    <li>{"• Contrats à terme sur le marché gré à gré : forwards"}</li>
                    <li>{"• Options financières"}</li>
                    <li>{"• Swaps de taux"}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-end"
        >
          <Link
            href="/section-1"
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-sm sm:text-base"
          >
            {"Section I - Analyse du risque"}
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}