"use client";

import { motion } from "framer-motion";
import BackToPlanButton from "@/components/content/BackToPlanButton";
import Link from "next/link";
import { ChevronRight, ChevronLeft, TrendingUp, Calculator, Euro, Calendar } from "lucide-react";

export default function Section2Page() {
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
            <div className="p-3 bg-blue-100 rounded-lg">
              <TrendingUp className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              {"Section II - Les contrats futures"}
            </h1>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                {"Définition"}
              </h3>
              <p className="text-blue-800">
                {"Les contrats futures sont des instruments financiers dérivés qui permettent de se couvrir contre les fluctuations des taux d'intérêt. Ils sont standardisés et négociés sur des marchés organisés."}
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {"1. Le contrat Eurobund"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Euro className="w-5 h-5" />
                  {"Caractéristiques"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{"• Nominal : 100 000 €"}</li>
                  <li>{"• Durée : 8,5 à 10,5 ans"}</li>
                  <li>{"• Coupon : 6%"}</li>
                  <li>{"• Cotation : en pourcentage du nominal"}</li>
                  <li>{"• Tick minimum : 0,01 point = 10 €"}</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  {"Calcul du gain"}
                </h3>
                <div className="text-green-800">
                  <p className="mb-2">{"Gain = (Cours de vente - Cours d'achat) &times; 1 000"}</p>
              <p className="text-sm">{"Exemple : (98,50 - 98,00) &times; 1 000 = 500 €"}</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 p-6 mb-8 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-900 mb-3">
                {"Exemple pratique : Couverture d'un emprunt"}
              </h3>
              <div className="text-yellow-800 space-y-2">
                <p>{"Une entreprise doit emprunter 10 millions d'euros dans 3 mois."}</p>
                <p>{"Elle craint une hausse des taux et veut se couvrir."}</p>
                <p className="font-medium">{"Solution : Vendre des contrats Eurobund"}</p>
                <p>{"Nombre de contrats = 10 000 000 / 100 000 = 100 contrats"}</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {"2. Le contrat Euribor 3 mois"}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {"Caractéristiques"}
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{"• Nominal : 1 000 000 €"}</li>
                  <li>{"• Durée : 3 mois"}</li>
                  <li>{"• Cotation : 100 - taux Euribor 3 mois"}</li>
                  <li>{"• Tick minimum : 0,005 point = 12,50 €"}</li>
                </ul>
              </div>
              
              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-lg font-semibold text-purple-900 mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  {"Calcul du gain"}
                </h3>
                <div className="text-purple-800">
                  <p className="mb-2">{"Gain = (Cours de vente - Cours d'achat) &times; 2 500"}</p>
              <p className="text-sm">{"Exemple : (97,50 - 97,00) &times; 2 500 = 1 250 €"}</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border border-red-200 p-6 mb-8 rounded-lg">
              <h3 className="text-lg font-semibold text-red-900 mb-3">
                {"Stratégies de couverture"}
              </h3>
              <div className="text-red-800 space-y-3">
                <div>
                  <p className="font-medium">{"Position longue (achat) :"}</p>
                  <p>{"• Se couvrir contre une baisse des taux"}</p>
                  <p>{"• Convient aux prêteurs"}</p>
                </div>
                <div>
                  <p className="font-medium">{"Position courte (vente) :"}</p>
                  <p>{"• Se couvrir contre une hausse des taux"}</p>
                  <p>{"• Convient aux emprunteurs"}</p>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                {"Exemple pratique : Couverture Euribor 3 mois"}
              </h3>
              
              <div className="bg-white p-4 rounded border mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">{"Situation :"}</h4>
                <p className="text-gray-700 mb-2">
                  {"En janvier N, une entreprise souhaitant emprunter en mai "}<strong>{"10 M€"}</strong>{" sur 3 mois, décide de se couvrir le 02 janvier avec un contrat Euribor 3 mois à échéance fin avril N."}
                </p>
                <p className="text-gray-700">
                  {"Cours à terme : "}<strong>{"99,4"}</strong>
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-red-700 mb-3">{"1. Taux garanti"}</h4>
                  <div className="space-y-2">
                    <p className="text-gray-700">{"Calcul :"}</p>
                    <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                      <p>{"Taux = 100 - 99,4 = "}<strong>{"0,6%"}</strong></p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-blue-700 mb-3">{"2. Nombre de contrats"}</h4>
                  <div className="space-y-2">
                    <p className="text-gray-700">{"Calcul :"}</p>
                    <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                      <p>{"Montant : 10 000 000 €"}</p>
                      <p>{"Nominal Euribor : 1 000 000 €"}</p>
                      <p className="border-t pt-2 mt-2">
                        {"Contrats = 10 000 000 / 1 000 000 = "}<strong>{"10 contrats"}</strong>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-700 mb-3">{"3. Risque identifié"}</h4>
                  <p className="text-red-600 mb-2">
                    <strong>{"Hausse des taux"}</strong>{" d'intérêt qui augmenterait le coût de l'emprunt futur"}
                  </p>
                  <p className="text-gray-700 text-sm">
                    {"Solution : Vendre 10 contrats Euribor 3 mois"}
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-purple-700 mb-3">{"4. Résultat si taux = 1,1% en mai"}</h4>
                  <div className="space-y-2">
                    <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                      <p>{"Cours final : 100 - 1,1 = 98,9"}</p>
                      <p>{"Gain futures : (99,4 - 98,9) &times; 2 500 &times; 10"}</p>
                      <p className="text-green-600 font-semibold">
                        {"= "}<strong>{"12 500 €"}</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">{"Mécanisme de couverture :"}</h4>
                <p className="text-yellow-700 text-sm">
                  {"L'entreprise vend des contrats Euribor à terme. Si les taux montent, elle gagne sur les futures ce qu'elle perd sur son emprunt plus cher, garantissant ainsi un taux d'emprunt effectif de 0,6%."}
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {"3. Calcul du nombre de contrats"}
            </h2>
            
            <div className="bg-indigo-50 border border-indigo-200 p-6 mb-8 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-900 mb-3">
                {"Formule générale"}
              </h3>
              <div className="text-indigo-800">
                <p className="font-mono bg-white p-3 rounded border mb-3">
                  {"Nombre de contrats = Montant à couvrir / Nominal du contrat"}
                </p>
                <p className="text-sm">
                  {"Cette formule doit être ajustée en fonction de la duration et de la sensibilité des instruments."}
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">
                {"Exemple pratique : Couverture Eurobund"}
              </h3>
              
              <div className="bg-white p-4 rounded border mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">{"Situation :"}</h4>
                <p className="text-gray-700 mb-2">
                  {"À la mi-mai N, un investisseur détient pour "}<strong>{"20 millions d'euros"}</strong>{" d'obligations à 10 ans qu'il compte vendre dans un mois."}
                </p>
                <p className="text-gray-700 mb-2">
                  {"Le cours à terme se situe pour cette échéance à "}<strong>{"95"}</strong>{" (c'est-à-dire 95% du nominal)."}
                </p>
                <p className="text-gray-700">
                  {"Le dépôt de garantie s'élève à "}<strong>{"2 500€ par contrat"}</strong>{"."}  
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-red-700 mb-3">{"1. Quel est le risque ?"}</h4>
                  <p className="text-gray-700 mb-2">
                    {"L'investisseur craint une "}<strong>{"hausse des taux d'intérêt"}</strong>{" qui provoquerait :"}
                  </p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>{"Une baisse de la valeur de son portefeuille obligataire"}</li>
                    <li>{"Une moins-value lors de la vente"}</li>
                  </ul>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-blue-700 mb-3">{"2. Nombre de contrats à vendre"}</h4>
                  <div className="space-y-2">
                    <p className="text-gray-700">{"Calcul :"}</p>
                    <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                      <p>{"Montant à couvrir : 20 000 000 €"}</p>
                      <p>{"Valeur nominale Eurobund : 100 000 €"}</p>
                      <p className="border-t pt-2 mt-2">
                        {"Nombre de contrats = 20 000 000 / 100 000 = "}<strong>{"200 contrats"}</strong>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-green-700 mb-3">{"3. Dépôt de garantie"}</h4>
                  <div className="space-y-2">
                    <p className="text-gray-700">{"Calcul :"}</p>
                    <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                      <p>{"200 contrats &times; 2 500 € = "}<strong>{"500 000 €"}</strong></p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border">
                  <h4 className="font-semibold text-purple-700 mb-3">{"4. Résultat si cours = 93 à l'échéance"}</h4>
                  <div className="space-y-2">
                    <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                      <p>{"Gain sur futures :"}</p>
                      <p>{"(95 - 93) &times; 100 000 € &times; 200 = "}<strong>{"40 000 000 €"}</strong></p>
                      <p className="text-green-600 font-semibold mt-2">
                        {"Plus-value de 40M€ compensant la baisse du portefeuille"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">{"Mécanisme de couverture :"}</h4>
                <p className="text-yellow-700 text-sm">
                  {"L'investisseur vend des contrats Eurobund à terme. Si les taux montent (cours baisse), il gagne sur les futures ce qu'il perd sur son portefeuille obligataire, réalisant ainsi une couverture parfaite."}
                </p>
              </div>
            </div>

            <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-2">
                {"Points clés à retenir"}
              </h3>
              <ul className="text-green-800 space-y-1">
                <li>{"• Les futures permettent une couverture efficace contre le risque de taux"}</li>
                <li>{"• Le choix du contrat dépend de la nature du risque (court ou long terme)"}</li>
                <li>{"• La position (achat/vente) dépend du sens de l'exposition au risque"}</li>
                <li>{"• Le calcul du nombre de contrats nécessite une analyse précise"}</li>
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
            href="/section-1"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
            {"Section I"}
          </Link>
          
          <Link
            href="/section-3"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
          >
            {"Section III - Options et swaps"}
            <ChevronRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}