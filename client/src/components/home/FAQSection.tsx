import { Card, CardContent } from "@/components/ui/card";

export function FAQSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-950 mb-16">
            Perguntas Frequentes
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "Este livro é baseado na Bíblia?",
                a: "Sim! Cada princípio está ancorado nas Escrituras. A Bíblia é a autoridade máxima, e este livro é uma ferramenta de apoio para ajudá-lo a crescer espiritualmente.",
              },
              {
                q: "Preciso ter conhecimento em neurociência para entender?",
                a: "Não! O livro foi escrito de forma acessível para qualquer pessoa. Os conceitos científicos são explicados de maneira simples e sempre conectados à fé cristã.",
              },
              {
                q: "Como este livro é diferente de outros sobre desenvolvimento pessoal?",
                a: "Este livro integra neurociência, PNL, coaching e hipnose conversacional com princípios bíblicos sólidos. Não é autoajuda secular, mas transformação fundamentada em Cristo.",
              },
              {
                q: "O livro substitui acompanhamento profissional?",
                a: "Não. Se você enfrenta desafios de saúde física ou emocional, busque profissionais qualificados. Este livro é um recurso complementar para fortalecer sua fé e renovar sua mente.",
              },
              {
                q: "Em quanto tempo verei resultados?",
                a: "A transformação é um processo. Com dedicação aos exercícios práticos e abertura ao Espírito Santo, muitos leitores relatam mudanças significativas nas primeiras semanas.",
              },
            ].map((faq, idx) => (
              <Card
                key={idx}
                className="border-2 hover:shadow-lg transition-all"
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-purple-950 mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
