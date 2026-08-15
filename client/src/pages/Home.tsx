import React from "react";
/* Design Philosophy: Iluminismo Espiritual Contemporâneo
 * - Contraste Luminoso: Dourado/branco vs roxo profundo/preto
 * - Assimetria Intencional: Layouts diagonais e sobreposições
 * - Hierarquia Tipográfica Forte: Playfair Display + Inter
 * - Elementos Visuais: Gradientes luminosos, efeitos de luz divina
 */

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  BookOpen, 
  Brain, 
  Heart, 
  Lightbulb, 
  Sparkles, 
  Star,
  ExternalLink,
  CheckCircle2,
  Quote
} from "lucide-react";

const PAINS = [
  "Pensamentos de culpa que não desaparecem, mesmo após oração",
  "Medo e ansiedade que sabotam sua vida espiritual",
  "Padrões mentais antigos que parecem impossíveis de quebrar",
  "Sensação de estar preso entre fé e dúvida constante"
];

const BOOK_PARTS = [
  {
    icon: Brain,
    title: "Fundamentos da Transformação",
    subtitle: "Parte 1",
    description: "Entenda o segredo sombrio da mente e como Cristo reescreve sua identidade através da neuroplasticidade espiritual.",
    color: "from-purple-600 to-purple-800"
  },
  {
    icon: Heart,
    title: "A Jornada da Identidade",
    subtitle: "Parte 2",
    description: "Reencontre a consciência do Céu e descubra quem você realmente é em Cristo, além da culpa e do medo.",
    color: "from-amber-500 to-amber-700"
  },
  {
    icon: Sparkles,
    title: "O Chamado da Manifestação",
    subtitle: "Parte 3",
    description: "Viva o Reino na Terra com a mente de Cristo em ação, transformando graça em estado mental permanente.",
    color: "from-purple-700 to-amber-600"
  }
];

const BENEFITS = [
  {
    title: "Renovação Mental Baseada em Neurociência",
    description: "Aprenda como a contemplação de Cristo ativa novos circuitos de percepção através da neuroplasticidade espiritual."
  },
  {
    title: "Libertação da Culpa e do Medo",
    description: "Descubra como o perdão é o código da reconstrução interior, reduzindo cortisol e aumentando bem-estar."
  },
  {
    title: "Identidade Renovada em Cristo",
    description: "Pare de tentar ser santo e desperte para quem você já é: uma nova criação, reflexo da glória de Deus."
  },
  {
    title: "Práticas de PNL e Coaching Cristão",
    description: "Exercícios práticos ao final de cada capítulo para aplicar os princípios e transformar sua vida diária."
  },
  {
    title: "Integração de Fé e Ciência",
    description: "Entenda como a mecânica quântica ilustra como a fé molda a realidade e transforma vidas de forma mensurável."
  }
];

const TESTIMONIALS = [
  {
    quote: "Este livro mudou completamente minha perspectiva sobre renovação mental. A forma como Marcio integra neurociência e fé é revolucionária!",
    author: "Ana Paula S.",
    role: "Psicóloga Cristã"
  },
  {
    quote: "Finalmente entendi como minha mente pode ser transformada de verdade. Os exercícios práticos fizeram toda a diferença na minha jornada espiritual.",
    author: "Carlos Eduardo M.",
    role: "Pastor"
  },
  {
    quote: "Profundo, prático e transformador. Cada capítulo trouxe revelações que me libertaram de padrões mentais antigos. Recomendo fortemente!",
    author: "Juliana R.",
    role: "Coach de Vida"
  }
];

const FAQS = [
  {
    q: "Este livro é baseado na Bíblia?",
    a: "Sim! Cada princípio está ancorado nas Escrituras. A Bíblia é a autoridade máxima, e este livro é uma ferramenta de apoio para ajudá-lo a crescer espiritualmente."
  },
  {
    q: "Preciso ter conhecimento em neurociência para entender?",
    a: "Não! O livro foi escrito de forma acessível para qualquer pessoa. Os conceitos científicos são explicados de maneira simples e sempre conectados à fé cristã."
  },
  {
    q: "Como este livro é diferente de outros sobre desenvolvimento pessoal?",
    a: "Este livro integra neurociência, PNL, coaching e hipnose conversacional com princípios bíblicos sólidos. Não é autoajuda secular, mas transformação fundamentada em Cristo."
  },
  {
    q: "O livro substitui acompanhamento profissional?",
    a: "Não. Se você enfrenta desafios de saúde física ou emocional, busque profissionais qualificados. Este livro é um recurso complementar para fortalecer sua fé e renovar sua mente."
  },
  {
    q: "Em quanto tempo verei resultados?",
    a: "A transformação é um processo. Com dedicação aos exercícios práticos e abertura ao Espírito Santo, muitos leitores relatam mudanças significativas nas primeiras semanas."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Dramatic entrance with divine light */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-black"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay'
        }}
      >
        {/* Overlay gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-purple-950/40 to-black/80" />
        
        <div className="container relative z-10 text-center px-6 py-20">
          <div className="max-w-5xl mx-auto space-y-8 animate-fade-in-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 border border-amber-500/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span className="text-amber-200 text-sm font-medium">Neurociência + Fé = Transformação Real</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight tracking-tight">
              O Segredo Sombrio<br />
              <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
                da Mente Que Cristo
              </span><br />
              Iluminou
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Descubra como a luz da verdade em Cristo reconstrói os lugares escuros da alma. 
              Entre revelações espirituais e neurociência, encontre o caminho para a verdadeira liberdade.
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
                <a href="https://loja.uiclap.com/titulo/ua141374/" target="_blank" rel="noopener noreferrer">
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
                <a href="https://www.amazon.com.br/dp/B0GDRV8823" target="_blank" rel="noopener noreferrer">
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
              <span className="ml-2">Livro 196 de 10.000 da Editora Bringhenti</span>
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

      {/* Problem Section - Identifying the pain */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-950 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-5xl font-bold">
              Você Reconhece Esses Sinais?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              {PAINS.map((pain, idx) => (
                <Card key={idx} className="bg-purple-900/30 border-purple-700/50 backdrop-blur-sm">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                    <p className="text-gray-200 text-lg">{pain}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <p className="text-xl text-gray-300 italic">
              "Há lugares na mente que se tornaram sombras — memórias de dor, culpa e medo que ainda ecoam, mesmo depois da fé."
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section - The promise with diagonal cut */}
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
                Neste livro revolucionário, Marcio Bringhenti revela como a <strong>neurociência confirma</strong> o que o Espírito já dizia: 
                a luz da verdade em Cristo <strong>reconfigura os caminhos da mente</strong>.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Entre revelações espirituais e fundamentos científicos, você descobrirá como a graça reprograma a culpa, 
                como a Palavra transforma sinapses e como <strong>pensar como o Céu é o segredo da verdadeira liberdade</strong>.
              </p>
              
              <div className="flex items-center gap-3 p-4 bg-amber-100 border-l-4 border-amber-500 rounded">
                <Lightbulb className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <p className="text-purple-900 font-medium">
                  Este não é apenas um livro — é um mapa para o reencontro com quem você já é em Cristo.
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

      {/* Book Overview Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-950">
              O Que Você Vai Descobrir
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Uma jornada estruturada em três partes para transformar sua mente e renovar sua identidade em Cristo
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {BOOK_PARTS.map((part, idx) => (
              <Card key={idx} className="border-2 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 space-y-4">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${part.color} flex items-center justify-center`}>
                    <part.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-amber-600 mb-1">{part.subtitle}</p>
                    <h3 className="text-2xl font-bold text-purple-950 mb-2">{part.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{part.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Clear value propositions */}
      <section className="py-24 bg-gradient-to-br from-purple-950 to-purple-900 text-white">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Transformações Que Você Vai Experimentar
            </h2>
            
            <div className="space-y-6">
              {BENEFITS.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-4 p-6 bg-purple-800/30 rounded-xl border border-purple-700/50 backdrop-blur-sm hover:bg-purple-800/50 transition-all">
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

      {/* Author Section with diagonal background */}
      <section 
        className="py-24 relative overflow-hidden"
        style={{
          backgroundImage: 'url(/images/author-section-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
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
                    Marcio Bringhenti é um pioneiro na integração entre fé cristã e neurociência aplicada. 
                    Com formação em Programação Neurolinguística, Hipnose Conversacional e Coaching, 
                    ele dedica sua vida a ajudar pessoas a renovarem suas mentes segundo os princípios do Reino de Deus.
                  </p>
                  
                  <p className="text-lg text-gray-200 leading-relaxed">
                    Autor de centenas de obras, Marcio é conhecido por sua abordagem única que harmoniza 
                    <strong> Escrituras, PNL, Coaching e Hipnose Cristã</strong> para promover cura interior e 
                    transformação espiritual profunda.
                  </p>
                  
                  <div className="pt-4">
                    <p className="text-xl font-semibold text-amber-300 italic">
                      "Um Pequeno Cristo Ajudando a Transformar Vidas Até Depois do Fim!"
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 pt-6">
                    <Button 
                      variant="outline" 
                      className="border-amber-400 text-amber-300 hover:bg-amber-500/20"
                      asChild
                    >
                      <a href="https://bringhenti.com.br" target="_blank" rel="noopener noreferrer">
                        Conheça Mais
                      </a>
                    </Button>
                    
                    <Button 
                      variant="outline" 
                      className="border-amber-400 text-amber-300 hover:bg-amber-500/20"
                      asChild
                    >
                      <a href="https://MarcioBringhenti.com.br" target="_blank" rel="noopener noreferrer">
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

      {/* Testimonials Section */}
      <section 
        className="py-24 relative"
        style={{
          backgroundImage: 'url(/images/testimonial-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-purple-950/90 to-black/95" />
        
        <div className="container relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
            O Que os Leitores Dizem
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {TESTIMONIALS.map((testimonial, idx) => (
              <Card key={idx} className="bg-white/10 backdrop-blur-lg border-purple-700/50 hover:bg-white/15 transition-all">
                <CardContent className="p-6 space-y-4">
                  <Quote className="w-8 h-8 text-amber-400" />
                  <p className="text-gray-200 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="font-bold text-amber-300">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-950 mb-16">
              Perguntas Frequentes
            </h2>
            
            <div className="space-y-6">
              {FAQS.map((faq, idx) => (
                <Card key={idx} className="border-2 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-purple-950 mb-3">{faq.q}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section - Strong closing */}
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
              A partir de hoje, sua mente pode se alinhar à verdade que o Céu escreveu sobre você. 
              <strong className="text-amber-400"> Não espere mais para experimentar a verdadeira liberdade em Cristo.</strong>
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
                <a href="https://loja.uiclap.com/titulo/ua141374/" target="_blank" rel="noopener noreferrer">
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
                <a href="https://www.amazon.com.br/dp/B0GDRV8823" target="_blank" rel="noopener noreferrer">
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

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-12">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Sobre o Livro</h3>
              <p className="text-sm leading-relaxed">
                Uma obra que integra neurociência e fé cristã para promover transformação mental e espiritual profunda.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Links Úteis</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://bringhenti.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                    Site do Autor
                  </a>
                </li>
                <li>
                  <a href="https://MarcioBringhenti.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                    Treinamentos e Mentoria
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-bold text-lg mb-4">Onde Comprar</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://loja.uiclap.com/titulo/ua141374/" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                    Loja Uiclap
                  </a>
                </li>
                <li>
                  <a href="https://www.amazon.com.br/dp/B0GDRV8823" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
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
    </div>
  );
}
