import CourseHeader from "@/components/home/CourseHeader";
import CoursePlan from "@/components/home/CoursePlan";
import MobileNavigation from "@/components/navigation/MobileNavigation";
import { BookOpen, TrendingUp, BarChart3, Target, Brain, FileText } from 'lucide-react';

export default function Home() {
  const sections = [
    {
      title: "Introduction",
      description: "Comprendre les enjeux du risque de taux pour les trésoriers d'entreprise",
      href: "/introduction",
      icon: BookOpen,
      color: "blue",
      delay: 0.1
    },
    {
      title: "Section I",
      description: "L'analyse du risque en fonction de la position de taux",
      href: "/section-1",
      icon: TrendingUp,
      color: "green",
      delay: 0.2
    },
    {
      title: "Section II",
      description: "Les contrats futures sur taux d'intérêt",
      href: "/section-2",
      icon: BarChart3,
      color: "purple",
      delay: 0.3
    },
    {
      title: "Section II-bis",
      description: "Les contrats Forward et FRA (marché de gré à gré)",
      href: "/forward-fra",
      icon: Target,
      color: "cyan",
      delay: 0.35
    },
    {
      title: "Section III",
      description: "Les options et swaps de taux d'intérêt",
      href: "/section-3",
      icon: Target,
      color: "orange",
      delay: 0.4
    },
    {
      title: "Quiz",
      description: "Testez vos connaissances sur le risque de taux",
      href: "/quiz",
      icon: Brain,
      color: "red",
      delay: 0.5
    },
    {
      title: "Cas pratiques",
      description: "Applications concrètes et exercices de gestion du risque",
      href: "/cas-pratiques",
      icon: FileText,
      color: "indigo",
      delay: 0.6
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <MobileNavigation />
      <CourseHeader />
      <CoursePlan />
    </div>
  );
}
