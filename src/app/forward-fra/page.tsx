'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, TrendingUp, Calculator, AlertTriangle, CheckCircle } from 'lucide-react';
import BackToPlanButton from '@/components/content/BackToPlanButton';

export default function ForwardFRAPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <BackToPlanButton />
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-purple-600" />
            <h1 className="text-3xl font-bold text-gray-900">
              Les contrats Forward et FRA
            </h1>
          </div>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Les contrats à terme sur le marché de gré à gré offrent des solutions personnalisées 
            pour se protéger du risque de taux : Forward Forward et Forward Rate Agreement (FRA).
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            1. Les contrats Forward Forward (terme contre terme)
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                Caractéristiques du contrat
              </h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Le montant du capital (emprunt ou placement)</li>
                <li>• Le taux d'intérêt garanti</li>
                <li>• La date de l'opération financière</li>
                <li>• La durée de cette opération</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                Principe de fonctionnement
              </h3>
              <p className="text-green-700 text-sm">
                La banque réalise une double opération pour garantir le taux :
                elle emprunte sur le marché monétaire et prête à l'entreprise, 
                fixant le taux de manière à équilibrer ses flux.
              </p>
            </div>
          </div>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Limitation importante</h4>
                <p className="text-yellow-700 text-sm">
                  L'entreprise est couverte contre la hausse des taux d'intérêt mais 
                  <strong> ne profitera pas des gains en cas de baisse d'intérêt</strong>.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            2. Les Forward Rate Agreement (FRA)
          </h2>
          
          <div className="bg-purple-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-purple-800 mb-3">
              Principe du FRA
            </h3>
            <p className="text-purple-700 mb-4">
              Le principe est similaire aux Forward Forward mais l'emprunteur (ou le prêteur) 
              n'est pas obligé de réaliser en contrepartie un emprunt (ou un placement). 
              <strong>Seul le différentiel d'intérêts est versé</strong>.
            </p>
            
            <div className="bg-white p-4 rounded border">
              <h4 className="font-semibold text-gray-800 mb-2">Éléments de l'accord :</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Le taux d'intérêt garanti</li>
                <li>Le montant théorique (notionnel)</li>
                <li>La date prévue de l'emprunt/placement</li>
                <li>L'échéance de l'opération</li>
              </ul>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-4 rounded border">
              <h4 className="font-semibold text-red-700 mb-3">Cas 1 : Taux marché > Taux garanti</h4>
              <p className="text-gray-700 text-sm">
                Le <strong>vendeur du FRA</strong> verse le différentiel d'intérêts 
                à l'<strong>acheteur du FRA</strong>
              </p>
            </div>
            
            <div className="bg-white p-4 rounded border">
              <h4 className="font-semibold text-blue-700 mb-3">Cas 2 : Taux marché < Taux garanti</h4>
              <p className="text-gray-700 text-sm">
                L'<strong>acheteur du FRA</strong> verse le différentiel d'intérêts 
                au <strong>vendeur du FRA</strong>
              </p>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-3 text-left">Acteur</th>
                  <th className="border border-gray-300 p-3 text-center">Risque</th>
                  <th className="border border-gray-300 p-3 text-center">Action FRA</th>
                  <th className="border border-gray-300 p-3 text-center">À l'échéance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Prêteur</td>
                  <td className="border border-gray-300 p-3 text-center">Taux minimum</td>
                  <td className="border border-gray-300 p-3 text-center text-red-600">Vend un FRA</td>
                  <td className="border border-gray-300 p-3 text-center text-sm">
                    Si taux référence < taux garanti,<br/>différence versée par acheteur
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-300 p-3 font-medium">Emprunteur</td>
                  <td className="border border-gray-300 p-3 text-center">Taux maximum</td>
                  <td className="border border-gray-300 p-3 text-center text-green-600">Achète un FRA</td>
                  <td className="border border-gray-300 p-3 text-center text-sm">
                    Si taux référence > taux garanti,<br/>différence versée par vendeur
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            3. Exemple pratique FRA
          </h2>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">
              Situation
            </h3>
            <p className="text-blue-700">
              Un trésorier souhaite emprunter <strong>10 000 000€</strong> dans 2 mois 
              pour une durée de 3 mois. Il contracte avec sa banque l'achat d'un FRA. 
              La banque lui garantit un taux de <strong>2,5%</strong> pour son emprunt. 
              Le taux de référence est l'Euribor 3 mois.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded border">
              <h4 className="font-semibold text-green-700 mb-3">
                Hypothèse 1 : Euribor = 2,9%
              </h4>
              <div className="space-y-2">
                <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                  <p>Taux marché (2,9%) > Taux garanti (2,5%)</p>
                  <p>Différentiel = 2,9% - 2,5% = 0,4%</p>
                  <p className="text-green-600 font-semibold">
                    Banque verse : 10M€ &times; 0,4% &times; 3/12 = 10 000€
                  </p>
                </div>
                <p className="text-sm text-gray-700">
                  L'entreprise emprunte à 2,9% mais reçoit 10 000€, 
                  soit un coût effectif de 2,5%.
                </p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded border">
              <h4 className="font-semibold text-red-700 mb-3">
                Hypothèse 2 : Euribor = 2,3%
              </h4>
              <div className="space-y-2">
                <div className="bg-gray-50 p-3 rounded font-mono text-sm">
                  <p>Taux marché (2,3%) < Taux garanti (2,5%)</p>
                  <p>Différentiel = 2,5% - 2,3% = 0,2%</p>
                  <p className="text-red-600 font-semibold">
                    Entreprise verse : 10M€ &times; 0,2% &times; 3/12 = 5 000€
                  </p>
                </div>
                <p className="text-sm text-gray-700">
                  L'entreprise emprunte à 2,3% mais verse 5 000€, 
                  soit un coût effectif de 2,5%.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-green-800 mb-2">Résultat</h4>
                <p className="text-green-700 text-sm">
                  Dans les deux cas, l'entreprise paie effectivement 2,5% d'intérêt, 
                  quel que soit le niveau de l'Euribor. Le FRA garantit parfaitement le taux.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg"
        >
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-orange-600 mt-0.5" />
            <div>
              <h3 className="text-lg font-semibold text-orange-900 mb-2">
                Limitation des contrats Forward/FRA
              </h3>
              <p className="text-orange-800">
                L'entreprise se protège contre une hausse ou une baisse du taux mais 
                <strong> ne peut pas profiter d'une évolution favorable des taux</strong>. 
                C'est la différence principale avec les options qui offrent plus de flexibilité.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="flex justify-between items-center"
        >
          <Link
            href="/section-2"
            className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Section II - Futures
          </Link>
          
          <Link
            href="/section-3"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Section III - Options et Swaps
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}