import { Card, CardContent } from "@/components/ui/card";
import { Brain, Heart, Sparkles } from "lucide-react";

export function BookOverviewSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-950">
            O Que Você Vai Descobrir
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Uma jornada estruturada em três partes para transformar sua mente e
            renovar sua identidade em Cristo
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: Brain,
              title: "Fundamentos da Transformação",
              subtitle: "Parte 1",
              description:
                "Entenda o segredo sombrio da mente e como Cristo reescreve sua identidade através da neuroplasticidade espiritual.",
              color: "from-purple-600 to-purple-800",
            },
            {
              icon: Heart,
              title: "A Jornada da Identidade",
              subtitle: "Parte 2",
              description:
                "Reencontre a consciência do Céu e descubra quem você realmente é em Cristo, além da culpa e do medo.",
              color: "from-amber-500 to-amber-700",
            },
            {
              icon: Sparkles,
              title: "O Chamado da Manifestação",
              subtitle: "Parte 3",
              description:
                "Viva o Reino na Terra com a mente de Cristo em ação, transformando graça em estado mental permanente.",
              color: "from-purple-700 to-amber-600",
            },
          ].map((part, idx) => (
            <Card
              key={idx}
              className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent className="p-8 space-y-4">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${part.color} flex items-center justify-center`}
                >
                  <part.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-amber-600 mb-1">
                    {part.subtitle}
                  </p>
                  <h3 className="text-2xl font-bold text-purple-950 mb-2">
                    {part.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {part.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
