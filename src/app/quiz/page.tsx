"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BackToPlanButton from "@/components/content/BackToPlanButton";
import Link from "next/link";
import { ChevronRight, ChevronLeft, CheckCircle, XCircle, Award, RotateCcw } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Qu'est-ce qu'une position de taux fermée ?",
    options: [
      "Une position où les échéances d'actifs et de passifs coïncident",
      "Une position où l'entreprise n'a que des actifs à taux fixe",
      "Une position où l'entreprise n'a que des passifs à taux variable",
      "Une position où les taux sont bloqués définitivement"
    ],
    correct: 0,
    explanation: "Une position fermée signifie que les échéances et les montants des actifs et passifs sensibles aux taux coïncident, neutralisant ainsi le risque de taux."
  },
  {
    id: 2,
    question: "Un emprunteur à taux fixe craint principalement :",
    options: [
      "Une hausse des taux d'intérêt",
      "Une baisse des taux d'intérêt",
      "La volatilité des taux",
      "L'inflation"
    ],
    correct: 1,
    explanation: "Un emprunteur à taux fixe craint une baisse des taux car il continue à payer un taux élevé alors que les conditions de marché se sont améliorées."
  },
  {
    id: 3,
    question: "Quelle est la valeur nominale d'un contrat Eurobund ?",
    options: [
      "50 000 €",
      "100 000 €",
      "250 000 €",
      "1 000 000 €"
    ],
    correct: 1,
    explanation: "Un contrat Eurobund a une valeur nominale de 100 000 €, ce qui permet une granularité appropriée pour la couverture."
  },
  {
    id: 4,
    question: "Pour couvrir un emprunt de 25 M€ avec des contrats Euribor 3 mois (1 M€), combien de contrats faut-il ?",
    options: [
      "20 contrats",
      "25 contrats",
      "30 contrats",
      "50 contrats"
    ],
    correct: 1,
    explanation: "Nombre de contrats = 25 000 000 € &divide; 1 000 000 € = 25 contrats pour couvrir exactement le montant de l'emprunt."
  },
  {
    id: 5,
    question: "Un CAP est :",
    options: [
      "Un plancher de taux d'intérêt",
      "Un plafond de taux d'intérêt",
      "Un taux d'intérêt fixe",
      "Un écart de taux"
    ],
    correct: 1,
    explanation: "Un CAP est un plafond (ceiling) qui protège l'emprunteur contre une hausse des taux au-delà d'un niveau déterminé."
  },
  {
    id: 6,
    question: "Dans un COLLAR, l'entreprise :",
    options: [
      "Achète un CAP et un FLOOR",
      "Vend un CAP et un FLOOR",
      "Achète un CAP et vend un FLOOR",
      "Vend un CAP et achète un FLOOR"
    ],
    correct: 2,
    explanation: "Un COLLAR consiste à acheter un CAP (protection contre la hausse) et vendre un FLOOR (accepter un taux minimum), créant un tunnel de taux."
  },
  {
    id: 7,
    question: "Dans un FRA, si l'Euribor de référence est supérieur au taux garanti :",
    options: [
      "L'emprunteur reçoit un différentiel",
      "L'emprunteur paie un différentiel",
      "Aucun flux n'est échangé",
      "Le contrat est annulé"
    ],
    correct: 0,
    explanation: "Si l'Euribor > taux garanti, l'emprunteur reçoit la différence car le FRA le protège contre la hausse des taux."
  },
  {
    id: 8,
    question: "Dans un swap de taux d'intérêt, l'entreprise :",
    options: [
      "Échange seulement des capitaux",
      "Échange des flux d'intérêts de nature différente",
      "Échange des devises",
      "Échange des échéances"
    ],
    correct: 1,
    explanation: "Un swap de taux d'intérêt consiste à échanger des flux d'intérêts de nature différente (fixe contre variable) sur un même montant notionnel."
  }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setShowExplanation(false);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setShowExplanation(false);
  };

  const score = selectedAnswers.reduce((acc, answer, index) => {
    return acc + (answer === questions[index].correct ? 1 : 0);
  }, 0);

  const percentage = Math.round((score / questions.length) * 100);

  if (showResults) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <BackToPlanButton />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 text-center"
          >
            <div className="mb-6">
              <Award className={`w-20 h-20 mx-auto mb-4 ${
                percentage >= 80 ? 'text-green-500' : 
                percentage >= 60 ? 'text-yellow-500' : 'text-red-500'
              }`} />
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {"Quiz terminé !"}
              </h1>
              <p className="text-xl text-gray-600">
                {`Votre score : ${score}/${questions.length} (${percentage}%)`}
              </p>
            </div>

            <div className={`p-6 rounded-lg mb-6 ${
              percentage >= 80 ? 'bg-green-50 border border-green-200' : 
              percentage >= 60 ? 'bg-yellow-50 border border-yellow-200' : 
              'bg-red-50 border border-red-200'
            }`}>
              <p className={`text-lg font-medium ${
                percentage >= 80 ? 'text-green-800' : 
                percentage >= 60 ? 'text-yellow-800' : 'text-red-800'
              }`}>
                {percentage >= 80 ? "Excellent ! Vous maîtrisez bien le risque de taux." :
                 percentage >= 60 ? "Bien ! Quelques révisions vous aideront à progresser." :
                 "Il serait bon de revoir les concepts avant de continuer."}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-200"
              >
                <RotateCcw className="w-5 h-5" />
                {"Recommencer"}
              </button>
              
              <Link
                href="/cas-pratiques"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-medium hover:from-orange-700 hover:to-red-700 transition-all duration-200"
              >
                {"Cas pratiques"}
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isAnswered = selectedAnswers[currentQuestion] !== undefined;
  const selectedAnswer = selectedAnswers[currentQuestion];

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
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              {"Quiz - Le Risque de Taux"}
            </h1>
            <div className="text-sm text-gray-500">
              {`Question ${currentQuestion + 1} sur ${questions.length}`}
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mb-8">
            <div 
              className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {question.question}
              </h2>
              
              <div className="space-y-3 mb-6">
                {question.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === question.correct;
                  
                  let buttonClass = "w-full p-4 text-left border-2 rounded-lg transition-all duration-200 ";
                  
                  if (!isAnswered) {
                    buttonClass += "border-gray-200 hover:border-blue-300 hover:bg-blue-50";
                  } else {
                    if (isCorrect) {
                      buttonClass += "border-green-500 bg-green-50 text-green-800";
                    } else if (isSelected && !isCorrect) {
                      buttonClass += "border-red-500 bg-red-50 text-red-800";
                    } else {
                      buttonClass += "border-gray-200 bg-gray-50 text-gray-600";
                    }
                  }
                  
                  return (
                    <button
                      key={index}
                      onClick={() => !isAnswered && handleAnswer(index)}
                      disabled={isAnswered}
                      className={buttonClass}
                    >
                      <div className="flex items-center justify-between">
                        <span>{option}</span>
                        {isAnswered && (
                          <div>
                            {isCorrect && <CheckCircle className="w-5 h-5 text-green-600" />}
                            {isSelected && !isCorrect && <XCircle className="w-5 h-5 text-red-600" />}
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
              
              {showExplanation && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-r-lg"
                >
                  <p className="text-blue-800">
                    <strong>{"Explication : "}</strong>
                    {question.explanation}
                  </p>
                </motion.div>
              )}
              
              {showExplanation && (
                <div className="flex justify-end">
                  <button
                    onClick={nextQuestion}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-lg font-medium hover:from-orange-700 hover:to-red-700 transition-all duration-200"
                  >
                    {currentQuestion < questions.length - 1 ? "Question suivante" : "Voir les résultats"}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex justify-start"
        >
          <Link
            href="/section-3"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg font-medium hover:bg-gray-700 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
            {"Section III"}
          </Link>
        </motion.div>
      </div>
    </div>
  );
}