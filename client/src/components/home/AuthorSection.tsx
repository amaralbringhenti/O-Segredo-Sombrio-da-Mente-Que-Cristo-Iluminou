import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function AuthorSection() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        backgroundImage: "url(/images/author-section-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/95 via-purple-900/90 to-black/95" />

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Sobre o Autor
            </h2>
            <Separator className="w-24 mx-auto bg-amber-500 h-1" />
          </div>

          <Card className="bg-white/10 backdrop-blur-lg border-purple-700/50">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6 text-white">
                <h3 className="text-3xl font-bold text-amber-400">
                  Marcio Bringhenti
                </h3>

                <p className="text-lg text-gray-200 leading-relaxed">
                  <strong>Cristão | Hipnoterapeuta | Master PNL | Coach</strong>
                </p>

                <p className="text-lg text-gray-200 leading-relaxed">
                  Marcio Bringhenti é um pioneiro na integração entre fé cristã
                  e neurociência aplicada. Com formação em Programação
                  Neurolinguística, Hipnose Conversacional e Coaching, ele
                  dedica sua vida a ajudar pessoas a renovarem suas mentes
                  segundo os princípios do Reino de Deus.
                </p>

                <p className="text-lg text-gray-200 leading-relaxed">
                  Autor de centenas de obras, Marcio é conhecido por sua
                  abordagem única que harmoniza
                  <strong>
                    {" "}
                    Escrituras, PNL, Coaching e Hipnose Cristã
                  </strong>{" "}
                  para promover cura interior e transformação espiritual
                  profunda.
                </p>

                <div className="pt-4">
                  <p className="text-xl font-semibold text-amber-300 italic">
                    "Um Pequeno Cristo Ajudando a Transformar Vidas Até Depois
                    do Fim!"
                  </p>
                </div>

                <div className="flex flex-wrap gap-4 pt-6">
                  <Button
                    variant="outline"
                    className="border-amber-400 text-amber-300 hover:bg-amber-500/20"
                    asChild
                  >
                    <a
                      href="https://bringhenti.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Conheça Mais
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    className="border-amber-400 text-amber-300 hover:bg-amber-500/20"
                    asChild
                  >
                    <a
                      href="https://MarcioBringhenti.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Treinamentos
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
