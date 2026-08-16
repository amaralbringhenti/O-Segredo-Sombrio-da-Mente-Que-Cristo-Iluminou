import { CheckCircle2 } from "lucide-react";

export function BenefitsSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-purple-950 to-purple-900 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Transformações Que Você Vai Experimentar
          </h2>

          <div className="space-y-6">
            {[
              {
                title: "Renovação Mental Baseada em Neurociência",
                description:
                  "Aprenda como a contemplação de Cristo ativa novos circuitos de percepção através da neuroplasticidade espiritual.",
              },
              {
                title: "Libertação da Culpa e do Medo",
                description:
                  "Descubra como o perdão é o código da reconstrução interior, reduzindo cortisol e aumentando bem-estar.",
              },
              {
                title: "Identidade Renovada em Cristo",
                description:
                  "Pare de tentar ser santo e desperte para quem você já é: uma nova criação, reflexo da glória de Deus.",
              },
              {
                title: "Práticas de PNL e Coaching Cristão",
                description:
                  "Exercícios práticos ao final de cada capítulo para aplicar os princípios e transformar sua vida diária.",
              },
              {
                title: "Integração de Fé e Ciência",
                description:
                  "Entenda como a mecânica quântica ilustra como a fé molda a realidade e transforma vidas de forma mensurável.",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-purple-800/30 rounded-xl border border-purple-700/50 backdrop-blur-sm hover:bg-purple-800/50 transition-all"
              >
                <CheckCircle2 className="w-6 h-6 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
