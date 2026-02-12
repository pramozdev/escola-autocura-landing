"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import miniLogo from "@/images/logo-mini.png";
import balaoDuvida from "@/images/balao-duvida.png";
import fotoTres from "@/images/foto-tres.png";
import mariaAssuncao from "@/images/maria-assuncao.png";
import autocuraSectionBg from "@/images/autocura-section.png";

const sectionShell = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

const heroBullets = [
  "• Para quem sente que repete os mesmos padrões, ano após ano.",
  "• Para quem conhece o trabalho da Alex e quer viver o MÉTODO AUTOCURA ao vivo.",
  "• Para quem quer começar 2026 com mais leveza, clareza e direção.",
];

const contentSections = [
  {
    id: "section-01",
    number: "01",
    subtitle: "O que acontece quando a",
    title: "ESCOLA AUTOCURA desce à cidade",
    description: "Durante janeiro, Braga recebe um ciclo completo de práticas e encontros do MÉTODO AUTOCURA, para quem deseja aprofundar a sua AUTOCURA pessoal, receber acompanhamento de TERAPEUTAS AUTOCURA, experienciar o MÉTODO ao vivo com segurança e rigor e sentir o campo da Escola AUTOCURA na cidade. Na prática, isto significa que: em vez de ver a Alex só em vídeo ou ler os livros sozinho, vai ter um mês em que o MÉTODO AUTOCURA está instalado em Braga, com TERAPEUTAS, práticas e encontros pensados para o ajudar a libertar peso emocional, quebrar padrões repetidos e alinhar a sua vida com a sua alma.",
    image: autocuraSectionBg,
  },
  {
    id: "section-02",
    number: "02",
    subtitle: "Escolha como quer viver",
    title: "AUTOCURA em Braga",
    description: "Em Janeiro de 2026, AUTOCURA EM DIGRESSÃO — BRAGA traz o MÉTODO AUTOCURA até à sua cidade, ao vivo, no Caminhos Prá Saúde. Durante várias semanas vai poder viver: meditações guiadas para limpar o peso do ano, limpezas espirituais presenciais, experiências temáticas sobre corpo, emoções, relações e propósito, terapeutas AUTOCURA ali, consigo, para orientar o seu caminho com método e segurança. Não é assistir. É viver AUTOCURA. Num campo presencial, protegido, acompanhado.",
    image: fotoTres,
  },
  {
    id: "section-03",
    number: "03",
    subtitle: "Sessões Presenciais de",
    title: "Limpeza Espiritual",
    description: "Durante várias semanas, no espaço Caminhos Prá Saúde, vão acontecer encontros presenciais onde vai poder: Sentar-se numa sala em Braga, com outras pessoas na mesma intenção, e ser guiado em meditações para limpar o peso do ano e alinhar a vida com a alma. Participar em sessões presenciais de limpeza espiritual para soltar culpa, medo, exaustão e padrões que já não fazem sentido. Estar frente a frente com TERAPEUTAS AUTOCURA, levar questões e receber orientação dentro do método para relações, trabalho, família e decisões.",
    image: mariaAssuncao,
  },
];

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("section-00");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [typedText, setTypedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [answerText, setAnswerText] = useState("");
  const [answerTypingDone, setAnswerTypingDone] = useState(false);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const answerTypingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["section-00", "section-01", "section-02", "section-03"];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFaqClick = (index: number) => {
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    if (answerTypingTimeoutRef.current) clearTimeout(answerTypingTimeoutRef.current);

    setActiveFaq(index);
    setTypedText("");
    setTypingDone(false);
    setAnswerText("");
    setAnswerTypingDone(false);

    const faqItem = faqItems[index];
    const fullText = faqItem.questionLines.join(" ");
    let currentText = "";
    let charIndex = 0;

    const typeQuestion = () => {
      if (charIndex < fullText.length) {
        currentText += fullText[charIndex];
        setTypedText(currentText);
        charIndex++;
        typingTimeoutRef.current = setTimeout(typeQuestion, 30);
      } else {
        setTypingDone(true);
        startAnswerTyping();
      }
    };

    const startAnswerTyping = () => {
      const answer = faqItem.answer;
      let answerCurrentText = "";
      let answerCharIndex = 0;

      const typeAnswer = () => {
        if (answerCharIndex < answer.length) {
          answerCurrentText += answer[answerCharIndex];
          setAnswerText(answerCurrentText);
          answerCharIndex++;
          answerTypingTimeoutRef.current = setTimeout(typeAnswer, 25);
        } else {
          setAnswerTypingDone(true);
        }
      };

      typeAnswer();
    };

    typeQuestion();
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-white text-[#0c3650]">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#e8f4f8]">
        <nav className={`${sectionShell} flex items-center justify-between py-4`}>
          <div className="flex items-center gap-2">
            <div className="relative h-8 w-8">
              <Image src={miniLogo} alt="Escola Autocura" fill className="object-contain" />
            </div>
            <span className="text-lg font-semibold text-[#0c3650]">AUTOCURA</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#section-01" className="text-sm font-medium text-[#0c3650] hover:text-[#f57d3e] transition-colors">O que acontece</a>
            <a href="#section-02" className="text-sm font-medium text-[#0c3650] hover:text-[#f57d3e] transition-colors">Como participar</a>
            <a href="#section-03" className="text-sm font-medium text-[#0c3650] hover:text-[#f57d3e] transition-colors">Sessões</a>
            <button className="px-4 py-2 bg-[#f57d3e] text-white rounded-full text-sm font-medium hover:bg-[#ea8f3c] transition-colors">
              Reservar lugar
            </button>
          </div>

          <button className="md:hidden p-2">
            <div className="w-6 h-0.5 bg-[#0c3650] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[#0c3650] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[#0c3650]"></div>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="section-00" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f7fb] via-[#e8f4f8] to-white" />
        <div className="absolute inset-0 bg-[url('/images/mountains-bg.png')] bg-cover bg-center opacity-10" />
        
        <motion.div 
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h5 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ea8f3c] mb-4">
            Janeiro 2026 · Braga
          </h5>
          <h1 className="text-5xl md:text-7xl font-bold text-[#0c3650] leading-tight mb-8">
            <span className="text-[#f57d3e]">AUTOCURA</span> <br />
            <span>EM DIGRESSÃO</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#0c3650] mb-12 max-w-2xl mx-auto">
            Mude o padrão. Mude a vida. <br />
            Um mês inteiro do MÉTODO AUTOCURA em Braga.
          </p>
          
          <div className="space-y-4 mb-12">
            {heroBullets.map((bullet, index) => (
              <motion.p
                key={index}
                className="text-lg text-[#0c3650]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
              >
                {bullet}
              </motion.p>
            ))}
          </div>

          <motion.a
            href="#section-01"
            className="inline-flex items-center gap-2 text-[#f57d3e] font-semibold text-lg hover:gap-3 transition-all"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Descubra como
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 16L14.59 14.59L9 20.17V0H7V20.17L1.42 14.58L0 16L8 24L16 16Z" fill="currentColor" />
            </svg>
          </motion.a>
        </motion.div>
      </section>

      {/* Content Sections */}
      {contentSections.map((section, index) => (
        <section key={section.id} id={section.id} className="relative py-20 md:py-32">
          <div className={`${sectionShell}`}>
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-4">
                  <span className="text-4xl font-bold text-[#ea8f3c]">{section.number}</span>
                  <div>
                    <h5 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2ab0c7]">
                      {section.subtitle}
                    </h5>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0c3650]">
                      {section.title}
                    </h2>
                  </div>
                </div>
                
                <p className="text-lg text-[#0c3650] leading-relaxed">
                  {section.description}
                </p>
                
                <motion.a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#f57d3e] font-semibold hover:gap-3 transition-all"
                  whileHover={{ x: 5 }}
                >
                  Saiba mais
                  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 -6.99382e-07L14.59 1.41L20.17 7L-3.93402e-07 7L-3.0598e-07 9L20.17 9L14.58 14.58L16 16L24 8L16 -6.99382e-07Z" fill="#FBD784" />
                  </svg>
                </motion.a>
              </motion.div>
              
              <motion.div
                className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c3650]/20 to-transparent" />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Side Navigation */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["section-00", "section-01", "section-02", "section-03"].map((sectionId) => (
            <a
              key={sectionId}
              href={`#${sectionId}`}
              className={`w-3 h-3 rounded-full transition-all ${
                activeSection === sectionId 
                  ? 'bg-[#f57d3e] scale-125' 
                  : 'bg-[#cfe6ef] hover:bg-[#2ab0c7]'
              }`}
            />
          ))}
        </div>
      </nav>

      {/* FAQ Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-[#f0f7fb] to-white">
        <div className={`${sectionShell}`}>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h5 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ea8f3c] mb-4">
              Dúvidas Frequentes
            </h5>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c3650]">
              Tudo o que precisa de saber
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-4">
              {faqItems.map((faq, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleFaqClick(index)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all ${
                    activeFaq === index
                      ? 'bg-white border-[#f57d3e] shadow-lg'
                      : 'bg-white/50 border-[#e8f4f8] hover:bg-white hover:border-[#2ab0c7]'
                  }`}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="relative h-8 w-8">
                      <Image src={balaoDuvida} alt="Pergunta" fill className="object-contain" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0d4a66]">
                      Pergunta
                    </span>
                  </div>
                  <p className="text-lg font-semibold text-[#072239]">
                    {activeFaq === index ? typedText : faq.questionLines.join(" ")}
                    {activeFaq === index && !typingDone && <span className="animate-pulse">|</span>}
                  </p>
                </motion.button>
              ))}
            </div>

            <div className="relative min-h-[400px] rounded-3xl border-2 border-dashed border-[#e8f4f8] flex items-center justify-center">
              <AnimatePresence mode="wait">
                {activeFaq !== null && answerTypingDone ? (
                  <motion.div
                    key={activeFaq}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#f7fbff] via-[#e9f6ff] to-[#fff3e8] p-8"
                  >
                    <p className="text-center text-lg leading-relaxed text-[#032035]">
                      {answerText}
                      {!answerTypingDone && <span className="animate-pulse">|</span>}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center text-[#0c3f5a]"
                  >
                    <span className="text-2xl text-[#f57d3e]">⬤</span>
                    <p className="mt-4">Selecione uma pergunta para ver a resposta</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#0c2740] via-[#0b3a54] to-[#0c4d6b] text-white py-16">
        <div className={`${sectionShell}`}>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="relative h-10 w-10">
                  <Image src={miniLogo} alt="Escola Autocura" fill className="object-contain" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#f6b658]">
                    Escola Autocura
                  </p>
                  <p className="text-lg font-semibold">
                    Autocura em Digressão · Braga
                  </p>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed">
                Get out there & discover your next <br />
                slope, mountain & destination!
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-[#f6b658]">Mais na Blog</h4>
              <ul className="space-y-3 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Sobre AUTOCURA</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contribuidores</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Escreva para nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-[#f6b658]">Mais em AUTOCURA</h4>
              <ul className="space-y-3 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">A Equipa</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Emprego</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Imprensa</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
            <p>Copyright 2026 Escola Autocura. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// FAQ data
const faqItems = [
  {
    questionLines: ["O que é AUTOCURA EM DIGRESSÃO?"],
    answer: "É um mês inteiro do MÉTODO AUTOCURA instalado em Braga, com práticas presenciais, terapeutas disponíveis e um campo vibracional protegido para a sua transformação pessoal."
  },
  {
    questionLines: ["Preciso de experiência prévia?"],
    answer: "Não. O programa está desenhado para todos os níveis, desde quem começa agora a jornada de autocura até quem já conhece o trabalho da Alex."
  },
  {
    questionLines: ["Como funcionam as sessões presenciais?"],
    answer: "São encontros em grupo no espaço Caminhos Prá Saúde, com meditações guiadas, limpezas espirituais e espaço para partilha e orientação individual."
  },
  {
    questionLines: ["Posso participar em apenas algumas atividades?"],
    answer: "Sim. Oferecemos flexibilidade para participar nas atividades que melhor se adaptam ao seu calendário e necessidades pessoais."
  },
  {
    questionLines: ["O que inclui o acompanhamento?"],
    answer: "Acesso a terapeutas AUTOCURA, materiais de suporte, meditações gravadas e integração contínua com o campo da Escola AUTOCURA."
  }
];
