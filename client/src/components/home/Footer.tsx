import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Sobre o Livro</h3>
            <p className="text-sm leading-relaxed">
              Uma obra que integra neurociência e fé cristã para promover
              transformação mental e espiritual profunda.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Links Úteis</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://bringhenti.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Site do Autor
                </a>
              </li>
              <li>
                <a
                  href="https://MarcioBringhenti.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Treinamentos e Mentoria
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Onde Comprar</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://loja.uiclap.com/titulo/ua141374/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Loja Uiclap
                </a>
              </li>
              <li>
                <a
                  href="https://www.amazon.com.br/dp/B0GDRV8823"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-400 transition-colors"
                >
                  Amazon Brasil
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-800 mb-8" />

        <div className="text-center text-sm">
          <p>© 2025 Editora Bringhenti. Todos os direitos reservados.</p>
          <p className="mt-2">
            Marcio Roberto Bringhenti | @MarcioBringhenti | @EditoraBringhenti
          </p>
        </div>
      </div>
    </footer>
  );
}
