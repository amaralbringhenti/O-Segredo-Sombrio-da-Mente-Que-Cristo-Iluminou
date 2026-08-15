import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section
      className="py-24 relative"
      style={{
        backgroundImage: "url(/images/testimonial-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/90 to-black/95" />

      <div className="container relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          O Que os Leitores Dizem
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              quote:
                "Este livro mudou completamente minha perspectiva sobre renovação mental. A forma como Marcio integra neurociência e fé é revolucionária!",
              author: "Ana Paula S.",
              role: "Psicóloga Cristã",
            },
            {
              quote:
                "Finalmente entendi como minha mente pode ser transformada de verdade. Os exercícios práticos fizeram toda a diferença na minha jornada espiritual.",
              author: "Carlos Eduardo M.",
              role: "Pastor",
            },
            {
              quote:
                "Profundo, prático e transformador. Cada capítulo trouxe revelações que me libertaram de padrões mentais antigos. Recomendo fortemente!",
              author: "Juliana R.",
              role: "Coach de Vida",
            },
          ].map((testimonial, idx) => (
            <Card
              key={idx}
              className="bg-white/10 backdrop-blur-lg border-purple-700/50 hover:bg-white/15 transition-all"
            >
              <CardContent className="p-6 space-y-4">
                <Quote className="w-8 h-8 text-amber-400" />
                <p className="text-gray-200 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div>
                  <p className="font-bold text-amber-300">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
