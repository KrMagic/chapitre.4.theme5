"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackToPlanButton from "@/components/content/BackToPlanButton";
import Link from "next/link";
import { ChevronLeft, Calculator, Eye, EyeOff, Lightbulb, CheckCircle } from "lucide-react";

interface PracticalCase {
  id: number;
  title: string;
  context: string;
  question: string;
  solution: string;
  methodology: string[];
  tips: string[];
}

const practicalCases: PracticalCase[] = [
  {
    id: 1,
    title: "Couverture d’un emprunt avec des futures Eurobund",
    context: "La société ALPHA doit emprunter 5 millions d’euros dans 3 mois pour financer un investissement. Le taux actuel est de 3,5% mais la direction craint une hausse des taux d’intérêt. Le cours actuel du contrat Eurobund est de 98,50.",
    question: "Quelle stratégie de couverture recommandez-vous ? Calculez le nombre de contrats nécessaires et analysez l’efficacité de la couverture si les taux montent à 4,5%.",
    solution: "**Stratégie :** Vendre des contrats Eurobund\n\n**Calcul du nombre de contrats :**\n- Montant à couvrir : 5 000 000 €\n- Nominal d’un contrat Eurobund : 100 000 €\n- Nombre de contrats = 5 000 000 / 100 000 = 50 contrats\n\n**Analyse de l’efficacité :**\n- Hausse des taux de 1% (3,5% → 4,5%)\n- Impact sur le cours Eurobund : baisse approximative de 1 point\n- Nouveau cours estimé : 97,50\n- Gain sur les futures : (98,50 - 97,50) × 1 000 × 50 = 50 000 €\n\n**Résultat :** Le gain sur les futures compense partiellement la hausse du coût d’emprunt.",
    methodology: [
      "Identifier le sens de l’exposition au risque",
      "Choisir l’instrument de couverture approprié",
      "Calculer le nombre de contrats nécessaires",
      "Évaluer l’efficacité de la couverture",
      "Analyser les coûts et bénéfices"
    ],
    tips: [
      "Pour un emprunteur, vendre des futures protège contre la hausse des taux",
      "Le ratio de couverture peut être ajusté selon la duration",
      "Surveiller les dates d’échéance des contrats"
    ]
  },
  {
    id: 2,
    title: "Mise en place d’un CAP pour protéger un emprunt",
    context: "L’entreprise BETA a un emprunt de 10 millions d’euros à taux variable (Euribor 3M + 2%). Le taux Euribor actuel est de 2%. L’entreprise souhaite limiter son exposition à une hausse des taux au-delà de 5%.",
    question: "Proposez une stratégie avec des options. Analysez les avantages et inconvénients par rapport à un swap.",
    solution: "**Stratégie :** Achat d’un CAP avec un strike à 3%\n\n**Fonctionnement :**\n- Si Euribor ≤ 3% : l’option n’est pas exercée\n- Si Euribor > 3% : l’option compense la hausse\n- Taux effectif maximum = 3% + 2% = 5%\n\n**Avantages vs Swap :**\n- **CAP :** Garde le bénéfice d’une baisse des taux\n- **CAP :** Coût initial (prime) mais pas d’engagement\n- **Swap :** Pas de prime mais taux fixe définitif\n- **Swap :** Perte du bénéfice d’une baisse des taux\n\n**Coût estimé :** Prime du CAP = 0,5% à 1% du nominal selon la volatilité",
    methodology: [
      "Définir le niveau de taux maximum acceptable",
      "Choisir le strike de l’option",
      "Comparer avec d’autres instruments (swap, collar)",
      "Évaluer le coût de la prime",
      "Analyser les scénarios de taux"
    ],
    tips: [
      "Le CAP préserve l’upside en cas de baisse des taux",
      "La prime dépend de la volatilité et de la durée",
      "Considérer un collar pour réduire le coût"
    ]
  },
  {
    id: 3,
    title: "Optimisation avec un swap de taux d’intérêt",
    context: "La société GAMMA a émis une obligation de 20 millions d’euros à taux variable (Euribor 6M + 1,5%) sur 5 ans. Elle préfère avoir une charge financière prévisible et souhaite passer en taux fixe.",
    question: "Structurez un swap de taux d’intérêt. Calculez le taux fixe effectif si le taux swap 5 ans est coté à 3,2%.",
    solution: "**Structure du swap :**\n- Notionnel : 20 millions d’euros\n- Durée : 5 ans\n- GAMMA paie : 3,2% fixe\n- GAMMA reçoit : Euribor 6M\n\n**Calcul du taux effectif :**\n- Charge sur l’obligation : Euribor 6M + 1,5%\n- Flux du swap : -3,2% + Euribor 6M\n- **Taux effectif = 3,2% + 1,5% = 4,7% fixe**\n\n**Avantages :**\n- Prévisibilité des charges financières\n- Protection contre la hausse des taux\n- Pas de prime à payer (contrairement aux options)\n\n**Inconvénients :**\n- Perte du bénéfice d’une baisse des taux\n- Engagement ferme sur 5 ans",
    methodology: [
      "Analyser la structure de financement existante",
      "Déterminer l’objectif (fixe vs variable)",
      "Structurer le swap approprié",
      "Calculer le taux effectif résultant",
      "Évaluer les risques résiduels"
    ],
    tips: [
      "Le swap transforme la nature des flux sans modifier le principal",
      "Attention à la concordance des dates de paiement",
      "Considérer le risque de contrepartie"
    ]
  }
];

export default function CasPratiquesPage() {
  const [showSolution, setShowSolution] = useState<{ [key: number]: boolean }>({});

  const toggleSolution = (caseId: number) => {
    setShowSolution(prev => ({
      ...prev,
      [caseId]: !prev[caseId]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <BackToPlanButton />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-xl shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-orange-100 rounded-lg">
              <Calculator className="w-8 h-8 text-orange-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900">
              {"Cas pratiques - Gestion du risque de taux"}
            </h1>
          </div>
          
          <p className="text-lg text-gray-600 mb-8">
            {"Mettez en pratique vos connaissances avec ces cas concrets de gestion du risque de taux d'intérêt."}
          </p>

          <div className="grid gap-6">
            {practicalCases.map((practicalCase, index) => (
              <motion.div
                key={practicalCase.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3">
                    {`Cas ${practicalCase.id} : ${practicalCase.title}`}
                  </h2>
                  
                  <div className="bg-white p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-gray-900 mb-2">
                      {"Contexte :"}
                    </h3>
                    <p className="text-gray-700">
                      {practicalCase.context}
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">
                      {"Question :"}
                    </h3>
                    <p className="text-blue-800">
                      {practicalCase.question}
                    </p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {"Méthodologie"}
                    </h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                        {"Étapes à suivre"}
                      </h4>
                      <ol className="space-y-2">
                        {practicalCase.methodology.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start gap-2">
                            <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2 py-1 rounded-full min-w-[24px] text-center">
                              {stepIndex + 1}
                            </span>
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-yellow-600" />
                        {"Conseils pratiques"}
                      </h4>
                      <ul className="space-y-2">
                        {practicalCase.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2">
                            <span className="text-yellow-500 mt-1">•</span>
                            <span className="text-gray-700">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <button
                      onClick={() => toggleSolution(practicalCase.id)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-medium hover:from-orange-700 hover:to-red-700 transition-all duration-200"
                    >
                      {showSolution[practicalCase.id] ? (
                        <>
                          <EyeOff className="w-4 h-4" />
                          {"Masquer la solution"}
                        </>
                      ) : (
                        <>
                          <Eye className="w-4 h-4" />
                          {"Voir la solution"}
                        </>
                      )}
                    </button>
                    
                    <AnimatePresence>
                      {showSolution[practicalCase.id] && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 bg-green-50 border border-green-200 rounded-lg p-4"
                        >
                          <h4 className="font-semibold text-green-900 mb-3">
                            {"Solution détaillée :"}
                          </h4>
                          <div className="text-green-800 whitespace-pre-line">
                            {practicalCase.solution}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Exercices supplémentaires */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <Calculator className="w-6 h-6 mr-3 text-purple-600" />
            Exercices d&apos;application
          </h2>

          <div className="space-y-8">
            {/* Exercice 1 */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Exercice 1 : Calcul de position de taux</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 mb-2"><strong>Situation :</strong></p>
                <p className="text-gray-700 mb-4">Une entreprise présente les éléments suivants :</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                  <li>Emprunt à taux fixe 4% : 15 M€ (échéance 3 ans)</li>
                  <li>Placement à taux variable Euribor + 0,5% : 8 M€ (échéance 2 ans)</li>
                  <li>Emprunt à taux variable Euribor + 1% : 12 M€ (échéance 4 ans)</li>
                </ul>
                <p className="text-gray-700 font-semibold">Question : Calculez la position de taux de l&apos;entreprise et analysez son risque.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 font-semibold mb-2">Solution :</p>
                <ul className="list-disc list-inside text-green-800 space-y-1">
                  <li>Actifs sensibles aux taux : 8 M€ (placement variable)</li>
                  <li>Passifs sensibles aux taux : 12 M€ (emprunt variable)</li>
                  <li>Position de taux = 8 - 12 = -4 M€ (position courte)</li>
                  <li>Risque : L&apos;entreprise craint une hausse des taux (elle paie plus qu&apos;elle ne reçoit sur la partie variable)</li>
                </ul>
              </div>
            </div>

            {/* Exercice 2 */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Exercice 2 : Optimisation d&apos;un COLLAR</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 mb-2"><strong>Situation :</strong></p>
                <p className="text-gray-700 mb-4">Une entreprise souhaite couvrir un emprunt de 20 M€ à taux variable (Euribor + 1,2%) avec un COLLAR :</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                  <li>CAP à 3,5% : coût 0,20% du nominal</li>
                  <li>FLOOR à 1,5% : prime reçue 0,12% du nominal</li>
                </ul>
                <p className="text-gray-700 font-semibold">Question : Calculez le coût net du COLLAR et déterminez le taux effectif dans différents scénarios d&apos;Euribor.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 font-semibold mb-2">Solution :</p>
                <ul className="list-disc list-inside text-green-800 space-y-1">
                  <li>Coût net COLLAR = (0,20% - 0,12%) &times; 20 M€ = 16 000€</li>
                  <li>Si Euribor = 4% : Taux effectif = 3,5% + 1,2% = 4,7% (CAP activé)</li>
                  <li>Si Euribor = 2,5% : Taux effectif = 2,5% + 1,2% = 3,7%</li>
                  <li>Si Euribor = 1% : Taux effectif = 1,5% + 1,2% = 2,7% (FLOOR activé)</li>
                </ul>
              </div>
            </div>

            {/* Exercice 3 */}
            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Exercice 3 : Comparaison d&apos;instruments de couverture</h3>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 mb-2"><strong>Situation :</strong></p>
                <p className="text-gray-700 mb-4">Pour couvrir un emprunt de 30 M€ à taux variable, trois solutions sont proposées :</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                  <li>Swap taux fixe 3,8% contre Euribor</li>
                  <li>CAP à 4% (coût : 0,25% du nominal)</li>
                  <li>Futures Euribor (marge de garantie : 2% du nominal)</li>
                </ul>
                <p className="text-gray-700 font-semibold">Question : Analysez les avantages et inconvénients de chaque solution.</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 font-semibold mb-2">Analyse comparative :</p>
                <div className="space-y-2 text-green-800">
                  <p><strong>Swap :</strong> Taux fixe garanti 3,8%, pas de coût initial, mais perte d&apos;opportunité si les taux baissent</p>
                  <p><strong>CAP :</strong> Protection asymétrique, coût 75 000€, bénéfice des baisses de taux</p>
                  <p><strong>Futures :</strong> Couverture symétrique, immobilisation 600 000€, appels de marge possibles</p>
                </div>
              </div>
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
            href="/quiz"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
            {"Quiz"}
          </Link>
          
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
          >
            {"Retour au plan du cours"}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}