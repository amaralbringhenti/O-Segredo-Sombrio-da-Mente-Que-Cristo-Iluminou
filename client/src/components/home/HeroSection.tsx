import { Button } from "@/components/ui/button";
import { Sparkles, BookOpen, ExternalLink, Star } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-black"
      style={{
        backgroundImage: "url(/images/hero-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
      }}
    >
      {/* Overlay gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-purple-950/40 to-black/80" />

      <div className="container relative z-10 text-center px-6 py-20">
        <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-200 text-sm font-medium">
              Neurociência + Fé = Transformação Real
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
            O Segredo Sombrio
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
              da Mente Que Cristo
            </span>
            <br />
            Iluminou
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Descubra como a luz da verdade em Cristo reconstrói os lugares
            escuros da alma. Entre revelações espirituais e neurociência,
            encontre o caminho para a verdadeira liberdade.
          </p>

          {/* Author */}
          <p className="text-lg text-amber-300 font-medium">
            Por Marcio Bringhenti | Hipnoterapeuta | Master PNL | Coach
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button
              size="lg"
              className="text-lg px-8 py-6 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-purple-950 font-bold shadow-2xl glow-on-hover pulse-glow"
              asChild
            >
              <a
                href="https://loja.uiclap.com/titulo/ua141374/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Comprar na Uiclap
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 border-2 border-amber-400 text-amber-300 hover:bg-amber-500/20 hover:text-amber-200 font-semibold backdrop-blur-sm"
              asChild
            >
              <a
                href="https://www.amazon.com.br/dp/B0GDRV8823"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Comprar na Amazon
              </a>
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex items-center justify-center gap-2 text-amber-200/80 text-sm pt-4">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span className="ml-2">
              Livro 196 de 10.000 da Editora Bringhenti
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-amber-400 rounded-full" />
        </div>
      </div>
    </section>
  );
}
