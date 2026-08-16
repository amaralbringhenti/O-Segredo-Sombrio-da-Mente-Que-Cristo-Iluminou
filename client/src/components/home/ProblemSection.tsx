import { Card, CardContent } from "@/components/ui/card";

export function ProblemSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-purple-950 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold">
            Você Reconhece Esses Sinais?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {[
              "Pensamentos de culpa que não desaparecem, mesmo após oração",
              "Medo e ansiedade que sabotam sua vida espiritual",
              "Padrões mentais antigos que parecem impossíveis de quebrar",
              "Sensação de estar preso entre fé e dúvida constante",
            ].map((pain, idx) => (
              <Card
                key={idx}
                className="bg-purple-900/30 border-purple-700/50 backdrop-blur-sm"
              >
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                  <p className="text-gray-200 text-lg">{pain}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-xl text-gray-300 italic">
            "Há lugares na mente que se tornaram sombras — memórias de dor,
            culpa e medo que ainda ecoam, mesmo depois da fé."
          </p>
        </div>
      </div>
    </section>
  );
}
