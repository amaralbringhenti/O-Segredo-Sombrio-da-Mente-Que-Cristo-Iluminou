/* Design Philosophy: Iluminismo Espiritual Contemporâneo
 * - Contraste Luminoso: Dourado/branco vs roxo profundo/preto
 * - Assimetria Intencional: Layouts diagonais e sobreposições
 * - Hierarquia Tipográfica Forte: Playfair Display + Inter
 * - Elementos Visuais: Gradientes luminosos, efeitos de luz divina
 */

import { HeroSection } from "@/components/home/HeroSection";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SolutionSection } from "@/components/home/SolutionSection";
import { BookOverviewSection } from "@/components/home/BookOverviewSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { AuthorSection } from "@/components/home/AuthorSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { Footer } from "@/components/home/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <BookOverviewSection />
      <BenefitsSection />
      <AuthorSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}
