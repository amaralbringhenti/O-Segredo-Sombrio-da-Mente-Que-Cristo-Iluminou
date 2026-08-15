import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink } from "lucide-react";

export function FinalCTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-950 via-purple-900 to-black text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold">
            Está Pronto Para Transformar Sua Mente?
          </h2>

          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            A partir de hoje, sua mente pode se alinhar à verdade que o Céu
            escreveu sobre você.
            <strong className="text-amber-400">
              {" "}
              Não espere mais para experimentar a verdadeira liberdade em
              Cristo.
            </strong>
          </p>

          <div className="pt-8">
            <img
              src="/images/book-mockup.jpg"
              alt="O Segredo Sombrio da Mente Que Cristo Iluminou"
              className="w-64 h-auto mx-auto mb-8 rounded-lg shadow-2xl"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="text-xl px-10 py-7 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-purple-950 font-bold shadow-2xl glow-on-hover pulse-glow"
              asChild
            >
              <a
                href="https://loja.uiclap.com/titulo/ua141374/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BookOpen className="w-6 h-6 mr-2" />
                Comprar na Uiclap Agora
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="text-xl px-10 py-7 border-2 border-amber-400 text-amber-300 hover:bg-amber-500/20 hover:text-amber-200 font-semibold backdrop-blur-sm"
              asChild
            >
              <a
                href="https://www.amazon.com.br/dp/B0GDRV8823"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-6 h-6 mr-2" />
                Comprar na Amazon
              </a>
            </Button>
          </div>

          <p className="text-sm text-gray-400 pt-4">
            ✨ Disponível em formato digital para leitura imediata
          </p>
        </div>
      </div>
    </section>
  );
}
