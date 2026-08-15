import { Lightbulb } from "lucide-react";

export function SolutionSection() {
  return (
    <section className="py-24 bg-gradient-to-br from-amber-50 to-purple-50 diagonal-clip-both">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-full">
              A Solução
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-purple-950">
              E Se o Evangelho Fosse Uma Reconstrução Literal do Cérebro?
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Neste livro revolucionário, Marcio Bringhenti revela como a{" "}
              <strong>neurociência confirma</strong> o que o Espírito já dizia:
              a luz da verdade em Cristo{" "}
              <strong>reconfigura os caminhos da mente</strong>.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Entre revelações espirituais e fundamentos científicos, você
              descobrirá como a graça reprograma a culpa, como a Palavra
              transforma sinapses e como{" "}
              <strong>
                pensar como o Céu é o segredo da verdadeira liberdade
              </strong>
              .
            </p>

            <div className="flex items-center gap-3 p-4 bg-amber-100 border-l-4 border-amber-500 rounded">
              <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0" />
              <p className="text-purple-900 font-medium">
                Este não é apenas um livro — é um mapa para o reencontro com
                quem você já é em Cristo.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src="/images/brain-transformation.jpg"
              alt="Transformação cerebral - das trevas à luz"
              className="rounded-2xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-400 to-purple-600 rounded-full blur-3xl opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
}
