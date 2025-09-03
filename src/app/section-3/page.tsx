"use client";

import { motion } from "framer-motion";
import BackToPlanButton from "@/components/content/BackToPlanButton";
import Link from "next/link";
import { ChevronRight, ChevronLeft, Shield, ArrowUpDown, TrendingUp, TrendingDown } from "lucide-react";

export default function Section3Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <BackToPlanButton />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Shield className="w-8 h-8 text-purple-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              {"Section III - Les options et swaps de taux d'intérêt"}
            </h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {"1. Les options sur taux d'intérêt"}
            </h2>
            
            <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">
                {"Définition"}
              </h3>
              <p className="text-purple-800">
                {"Les options sur taux d'intérêt donnent le droit, mais non l'obligation, d'acheter (call) ou de vendre (put) un actif financier à un prix déterminé (strike) à une date donnée, moyennant le paiement d'une prime."}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  {"CAP (Call)"}
                </h3>
                <ul className="space-y-2 text-green-800">
                  <li>{"• Protection contre la hausse des taux"}</li>
                  <li>{"• Convient aux emprunteurs"}</li>
                  <li>{"• Limite le taux maximum à payer"}</li>
                  <li>{"• Permet de profiter d'une baisse des taux"}</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-lg border border-red-200">
                <h3 className="text-lg font-semibold text-red-900 mb-4 flex items-center gap-2">
                  <TrendingDown className="w-5 h-5" />
                  {"FLOOR (Put)"}
                </h3>
                <ul className="space-y-2 text-red-800">
                  <li>{"• Protection contre la baisse des taux"}</li>
                  <li>{"• Convient aux prêteurs"}</li>
                  <li>{"• Garantit un taux minimum de rémunération"}</li>
                  <li>{"• Permet de profiter d'une hausse des taux"}</li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 mb-8 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                {"COLLAR (Tunnel)"}
              </h3>
              <div className="text-yellow-800 space-y-2">
                <p>{"Combinaison d'un CAP et d'un FLOOR :"}</p>
                <ul className="ml-4 space-y-1">
                  <li>{"• Achat d'un CAP + Vente d'un FLOOR"}</li>
                  <li>{"• Limite les variations de taux dans une fourchette"}</li>
                  <li>{"• Coût réduit (prime du FLOOR compense celle du CAP)"}</li>
                  <li>{"• Perte de flexibilité en contrepartie"}</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-yellow-500 mt-4">
                <h4 className="font-semibold text-yellow-900 mb-2">Exemple pratique COLLAR :</h4>
                <div className="space-y-2 text-sm text-yellow-800">
                  <p><strong>Situation :</strong> Emprunt à taux variable de 10 M€, Euribor 3 mois actuellement à 2,5%</p>
                  <p><strong>Objectif :</strong> Limiter le taux entre 2% et 4%</p>
                  <p><strong>Solution :</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Achat d&apos;un CAP à 4% (coût : 0,15% du nominal)</li>
                    <li>Vente d&apos;un FLOOR à 2% (prime reçue : 0,10% du nominal)</li>
                    <li>Coût net du COLLAR : 0,05% du nominal = 5 000€</li>
                  </ul>
                  <p><strong>Résultat :</strong></p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                     <li>Si Euribor &gt; 4% : le CAP compense, taux effectif = 4%</li>
                     <li>Si Euribor &lt; 2% : paiement du FLOOR, taux effectif = 2%</li>
                     <li>Si 2% &le; Euribor &le; 4% : taux effectif = Euribor</li>
                   </ul>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {"2. Les swaps de taux d'intérêt"}
            </h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {"Définition"}
              </h3>
              <p className="text-blue-800">
                {"Un swap de taux d'intérêt est un contrat par lequel deux parties s'engagent à échanger des flux d'intérêts : l'une paie un taux fixe et reçoit un taux variable, l'autre fait l'inverse."}
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <ArrowUpDown className="w-5 h-5" />
                {"Éléments d'un contrat de swap"}
              </h3>
              <ul className="grid md:grid-cols-2 gap-2 text-gray-700">
                <li>{"• Montant notionnel"}</li>
                <li>{"• Date de début"}</li>
                <li>{"• Échéance"}</li>
                <li>{"• Taux fixe"}</li>
                <li>{"• Taux variable de référence"}</li>
                <li>{"• Périodicité des paiements"}</li>
              </ul>
            </div>

            <div className="bg-indigo-50 border border-indigo-200 p-6 mb-8 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-900 mb-3">
                {"Exemple pratique détaillé"}
              </h3>
              <div className="text-indigo-800 space-y-3">
                <p>{"Une entreprise a contracté un emprunt de 50 M€ à taux variable (Euribor 3 mois + 1,5%)."}</p>
                <p>{"Craignant une hausse des taux, elle conclut un swap de taux d'intérêt :"}</p>
                
                <div className="bg-white p-4 rounded border mb-4">
                  <p className="font-medium mb-2">{"Caractéristiques du swap :"}</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>{"Montant notionnel : 50 M€"}</li>
                    <li>{"Durée : 5 ans"}</li>
                    <li>{"Taux fixe payé : 3,2%"}</li>
                    <li>{"Taux variable reçu : Euribor 3 mois"}</li>
                    <li>{"Périodicité : trimestrielle"}</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                  <h4 className="font-semibold text-indigo-900 mb-2">{"Calculs trimestriels :"}</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p><strong>{"Trimestre 1 - Euribor = 2,8% :"}</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>{"Intérêts emprunt : 50M &times; (2,8% + 1,5%) &times; 1/4 = 537 500€"}</li>
                  <li>{"Paiement swap fixe : 50M &times; 3,2% &times; 1/4 = 400 000€"}</li>
                  <li>{"Réception swap variable : 50M &times; 2,8% &times; 1/4 = 350 000€"}</li>
                        <li>{"Flux net swap : -50 000€"}</li>
                        <li><strong>{"Coût total : 587 500€ (soit 4,7% annuel)"}</strong></li>
                      </ul>
                    </div>
                    <div>
                      <p><strong>{"Trimestre 2 - Euribor = 4,1% :"}</strong></p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>{"Intérêts emprunt : 50M &times; (4,1% + 1,5%) &times; 1/4 = 700 000€"}</li>
                  <li>{"Paiement swap fixe : 50M &times; 3,2% &times; 1/4 = 400 000€"}</li>
                  <li>{"Réception swap variable : 50M &times; 4,1% &times; 1/4 = 512 500€"}</li>
                        <li>{"Flux net swap : +112 500€"}</li>
                        <li><strong>{"Coût total : 587 500€ (soit 4,7% annuel)"}</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <p className="font-semibold">
                  {"Résultat : Quel que soit le niveau d'Euribor, l'entreprise paie toujours un taux effectif de 4,7% (3,2% du swap + 1,5% de marge bancaire). Le swap garantit la stabilité du coût de financement."}
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {"3. Comparaison des instruments"}
            </h2>
            
            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse border border-gray-300 rounded-lg">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 p-4 text-left font-semibold">
                      {"Instrument"}
                    </th>
                    <th className="border border-gray-300 p-4 text-left font-semibold">
                      {"Coût"}
                    </th>
                    <th className="border border-gray-300 p-4 text-left font-semibold">
                      {"Flexibilité"}
                    </th>
                    <th className="border border-gray-300 p-4 text-left font-semibold">
                      {"Usage"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-4 font-medium">
                      {"Futures"}
                    </td>
                    <td className="border border-gray-300 p-4">
                      {"Faible (dépôt de garantie)"}
                    </td>
                    <td className="border border-gray-300 p-4">
                      {"Faible (standardisé)"}
                    </td>
                    <td className="border border-gray-300 p-4">
                      {"Couverture simple"}
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 p-4 font-medium">
                      {"Options"}
                    </td>
                    <td className="border border-gray-300 p-4">
                      {"Élevé (prime à payer)"}
                    </td>
                    <td className="border border-gray-300 p-4">
                      {"Élevée (droit, pas obligation)"}
                    </td>
                    <td className="border border-gray-300 p-4">
                      {"Couverture asymétrique"}
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-4 font-medium">
                      {"Swaps"}
                    </td>
                    <td className="border border-gray-300 p-4">
                      {"Modéré (spread)"}
                    </td>
                    <td className="border border-gray-300 p-4">
                      {"Élevée (sur mesure)"}
                    </td>
                    <td className="border border-gray-300 p-4">
                      {"Transformation de flux"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                {"Stratégie de choix"}
              </h3>
              <ul className="text-green-800 space-y-1">
                <li>{"• Futures : pour une couverture simple et standardisée"}</li>
                <li>{"• Options : quand on veut garder le bénéfice d'une évolution favorable"}</li>
                <li>{"• Swaps : pour transformer la nature des flux d'intérêts"}</li>
                <li>{"• Collar : pour limiter les coûts tout en gardant une protection"}</li>
              </ul>
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
            href="/section-2"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
            {"Section II"}
          </Link>
          
          <Link
            href="/quiz"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-lg font-medium hover:from-purple-700 hover:to-purple-800 transition-all duration-200"
          >
            {"Quiz - Testez vos connaissances"}
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}