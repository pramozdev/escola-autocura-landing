"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  FaQuoteLeft,
  FaQuoteRight,
  FaInstagram,
  FaFacebook,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import miniLogo from "@/images/logo-mini.png";
import balaoDuvida from "@/images/balao-duvida.png";
import fotoTres from "@/images/foto-tres.png";
import unnamedImg from "@/images/unnamed.png";
import mariaAssuncaoImg from "@/images/maria-assuncao.png";
import autocuraSectionBg from "@/images/autocura-section.png";
import katiaImg from "@/images/katia.png";
import helenaImg from "@/images/helena.png";
import galinaImg from "@/images/galina.png";
import sessaoAnaImg from "@/images/sessao-ana.png";
import autocuraLogo from "@/images/autocura.png";

const sectionShell = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

const heroBullets = [
  "• Para quem sente que repete os mesmos padrões, ano após ano.",
  "• Para quem conhece o trabalho da Alex e quer viver o MÉTODO AUTOCURA ao vivo.",
  "• Para quem quer começar 2026 com mais leveza, clareza e direção.",
];

const contentSections = [
  {
    id: "section-01",
    subtitle: "O que acontece quando a",
    title: "ESCOLA AUTOCURA desce à cidade",
    description: "Durante janeiro, Braga recebe um ciclo completo de práticas e encontros do MÉTODO AUTOCURA, para quem deseja aprofundar a sua AUTOCURA pessoal, receber acompanhamento de TERAPEUTAS AUTOCURA, experienciar o MÉTODO ao vivo com segurança e rigor e sentir o campo da Escola AUTOCURA na cidade. Na prática, isto significa que: em vez de ver a Alex só em vídeo ou ler os livros sozinho, vai ter um mês em que o MÉTODO AUTOCURA está instalado em Braga, com TERAPEUTAS, práticas e encontros pensados para o ajudar a libertar peso emocional, quebrar padrões repetidos e alinhar a sua vida com a sua alma.",
    image: autocuraSectionBg,
  },
  {
    id: "section-02",
    subtitle: "Escolha como quer viver",
    title: "AUTOCURA em Braga",
    description: "Em Janeiro de 2026, AUTOCURA EM DIGRESSÃO — BRAGA traz o MÉTODO AUTOCURA até à sua cidade, ao vivo, no Caminhos Prá Saúde. Durante várias semanas vai poder viver: meditações guiadas para limpar o peso do ano, limpezas espirituais presenciais, experiências temáticas sobre corpo, emoções, relações e propósito, terapeutas AUTOCURA ali, consigo, para orientar o seu caminho com método e segurança. Não é assistir. É viver AUTOCURA. Num campo presencial, protegido, acompanhado.",
    image: fotoTres,
  },
  {
    id: "section-03",
    subtitle: "Sessões Presenciais de",
    title: "Limpeza Espiritual",
    description: "Durante várias semanas, no espaço Caminhos Prá Saúde, vão acontecer encontros presenciais onde vai poder: Sentar-se numa sala em Braga, com outras pessoas na mesma intenção, e ser guiado em meditações para limpar o peso do ano e alinhar a vida com a alma. Participar em sessões presenciais de limpeza espiritual para soltar culpa, medo, exaustão e padrões que já não fazem sentido. Estar frente a frente com TERAPEUTAS AUTOCURA, levar questões e receber orientação dentro do método para relações, trabalho, família e decisões.",
  },
  {
    id: "section-04",
    subtitle: "Programação Especial",
    title: "Janeiro 2026",
    description: "Eventos especiais com terapeutas AUTOCURA e convidados para aprofundar diferentes temas do método.",
    image: fotoTres,
  },
  {
    id: "section-05",
    subtitle: "Este janeiro é para si se...",
    title: "Reconhece-se em alguma destas frases?",
    description: "Se se reconhece nestas linhas, este janeiro não foi marcado por acaso. Clique abaixo, escolha como quer participar e reserve o lugar que a sua alma está a pedir.",
    image: fotoTres,
  },
];

const programHighlights = [
  {
    title: "Abertura",
    host: "com Ana Campos e Gilberto Barbosa",
    details: [
      { text: "Data: 12 de janeiro", emphasis: true },
      { text: "Horário: 14h", emphasis: true },
    ],
    image: sessaoAnaImg,
  },
  {
    title: "A Intuição Que Cura",
    host: "com Ana Campos",
    details: [
      { text: "Data: 14 de janeiro", emphasis: true },
      { text: "Horário: 18h", emphasis: true },
    ],
    image: sessaoAnaImg,
  },
  {
    title: "Caminho Prá Luz",
    host: "com Gilberto Barbosa",
    details: [
      { text: "Data: 15 de janeiro", emphasis: true },
      { text: "Horário: 17h", emphasis: true },
    ],
    image: unnamedImg,
  },
  {
    title: "DIABETES",
    host: "com Katia Faria",
    details: [
      { text: "Data: 16 de janeiro", emphasis: true },
      { text: "Horário: 18h30–20h", emphasis: true },
    ],
    image: katiaImg,
  },
  {
    title: "AUTOCURA® CRIANÇAS",
    host: "com Maria Assunção e Sofia Ralha",
    details: [
      { text: "Datas:", emphasis: true },
      { text: "17 de janeiro" },
      { text: "24 de janeiro" },
      { text: "31 de janeiro" },
      { text: "Valor:", emphasis: true },
      { text: "• Sessão avulsa: 20€" },
      { text: "• Pack 3 sessões: 50€" },
      { text: "Horário:", emphasis: true },
      { text: "10:30 ao 12:00h" },
    ],
    image: mariaAssuncaoImg,
  },
  {
    title: "AUTOCURA® ANIMAIS",
    host: "com Helena Rebelo",
    details: [
      { text: "Data: 24 de janeiro", emphasis: true },
      { text: "Horário: 14h", emphasis: true },
    ],
    image: helenaImg,
  },
  {
    title: "Arte na Entrega",
    host: "com Galyna Ilyuk",
    details: [
      { text: "Data: 18 de janeiro", emphasis: true },
      { text: "Horário: 11h–13h", emphasis: true },
      { text: "Data: 22 de janeiro", emphasis: true },
      { text: "Horário: 11h–13h", emphasis: true },
    ],
    image: galinaImg,
  },
  {
    title: "Meditação — Limpeza da Terra",
    host: "com Galyna Ilyuk",
    category: "Meditações & Limpezas Energéticas",
    details: [
      { text: "Data: 22 de janeiro", emphasis: true },
      { text: "Horário: 18h", emphasis: true },
      { text: "Valor: 5€", emphasis: true },
    ],
    image: galinaImg,
  },
];

const cleansingSessions = [
  {
    date: "13 de Janeiro - 20h",
    title: "Sessão de Limpeza Espiritual",
    therapist: "Sofia Ralha",
  },
  {
    date: "15 de Janeiro - 19h",
    title: "Sessão de Limpeza Espiritual",
    therapist: "Galyna Ilyuk",
  },
  {
    date: "23 de Janeiro - 20h",
    title: "Sessão de Limpeza Espiritual",
    therapist: "Cristiana Cunha",
  },
  {
    date: "27 de Janeiro - 20h",
    title: "Sessão de Limpeza Espiritual",
    therapist: "Maria Assunção",
  },
  {
    date: "30 de Janeiro - 20h",
    title: "Sessão de Limpeza Espiritual",
    therapist: "Alcina Almeida",
  },
];

const januaryReasons = [
  "Sente que começa o ano cheio de boas intenções… e em poucas semanas volta aos mesmos hábitos.",
  "Já fez terapias, cursos e retiros mas alguns padrões de culpa, exaustão ou auto-sabotagem continuam a voltar.",
  "Conhece o trabalho da Alex há anos e sente que já está na hora de viver isto ao vivo.",
  "Anda a carregar tudo sozinho e quer aprender a entregar o peso à Luz, em vez de o acumular no corpo e na mente.",
  "Vive em Braga (ou perto) e sabe que, se não cuidar de si agora, vai chegar ao fim de mais um ano com a mesma sensação de cansaço.",
];

const eatingWorkshops = [
  {
    id: "parte1",
    title: "WORKSHOP: COMER•SENTIR •CURAR Parte 1",
    host: "com Katia Faria",
    date: "31 de janeiro",
    time: "16h–19h",
    ticket: "Valor — Bilhete avulso: 40 € (inclui lanche)",
    pack: "Pack Parte 1 + Parte 2 = 80 € (inclui lanche e almoço)",
  },
  {
    id: "parte2",
    title: "WORKSHOP: COMER•SENTIR •CURAR Parte 2",
    host: "com Katia Faria",
    date: "1 de fevereiro",
    time: "10h–14h",
    ticket: "Valor — Bilhete avulso: 60 € (inclui almoço)",
    pack: "Pack Parte 1 + Parte 2 = 80 € (inclui lanche e almoço)",
  },
];

const ticketOptions = [
  {
    id: "passe",
    title: "Passe AUTOCURA · Braga",
    badge: "Compra presencial",
    price: "35 €",
    description:
      "Bilhetes disponíveis para compra presencial no espaço Caminhos Prá Saúde. Garanta o seu lugar para viver este encontro transformador.",
    location: "Espaço Caminhos Prá Saúde",
    address: "Rua Abade Loureira, 37 — Braga",
    phone: "+351 913 240 700",
    note: "Adquira o seu bilhete no local e reserve o seu lugar neste encontro transformador.",
    accent: "from-[#ffe8d0] via-[#fff5ea] to-white",
  },
  {
    id: "avulsos",
    title: "Bilhetes Avulsos",
    badge: "Compra presencial",
    price: "5 €",
    description:
      "Disponíveis para quem quer viver uma experiência específica dentro da programação. Ideal para sentir o campo AUTOCURA em dias pontuais.",
    location: "Espaço Caminhos Prá Saúde",
    address: "Rua Abade Loureira, 37 — Braga",
    phone: "+351 913 240 700",
    note: "Garanta o seu lugar e viva esta experiência única. Compra diretamente no local.",
    accent: "from-[#e8f9ff] via-[#f3fbff] to-white",
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
      const sections = [
        "section-00",
        "section-01",
        "section-02",
        "section-03",
        "section-04",
        "section-05",
        "section-bilhetes",
      ];
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
            <a href="#section-bilhetes" className="px-4 py-2 bg-[#f57d3e] text-white rounded-full text-sm font-medium hover:bg-[#ea8f3c] transition-colors">
              Reservar lugar
            </a>
          </div>

          <button className="md:hidden p-2">
            <div className="w-6 h-0.5 bg-[#0c3650] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[#0c3650] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[#0c3650]"></div>
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section
        id="section-00"
        className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-32 pt-32 md:pt-40"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#f0f7fb] via-[#e8f4f8] to-white" />
        <div className="absolute inset-0 bg-[url('/images/mountains-bg.png')] bg-cover bg-center opacity-10" />
        
        <motion.div 
          className="relative z-10 max-w-4xl mx-auto px-6 space-y-8 text-left md:text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="space-y-6 text-[#0c3650]">
            <div>
              <h5 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ea8f3c]">Janeiro 2026 · Braga</h5>
              <h1 className="text-4xl md:text-6xl font-bold text-[#0c3650] leading-tight mt-3">
                <span className="text-[#f57d3e]">AUTOCURA</span> EM DIGRESSÃO · BRAGA
              </h1>
            </div>
            <p className="text-xl md:text-2xl font-semibold leading-relaxed">
              Se vive em Braga e está cansad@ de começar o ano sempre da mesma forma, este janeiro é para limpar o que o trava e alinhar a sua vida com a sua alma — sem sair da cidade.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              De 12 de janeiro a 1 de fevereiro de 2026, a Escola AUTOCURA traz para o espaço Caminhos Prá Saúde um ciclo de encontros presenciais com o MÉTODO AUTOCURA.
            </p>
            <p className="text-lg md:text-xl leading-relaxed">
              Pode entrar por um encontro único ou viver o ciclo completo com o PASSE AUTOCURA – BRAGA.
            </p>
          </div>

          <ul className="space-y-3 text-left md:text-center text-lg text-[#0c3650]">
            {heroBullets.map((item, index) => (
              <motion.li
                key={item}
                className="flex items-start gap-3 justify-center md:justify-center"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.15, duration: 0.6 }}
              >
                <span className="text-[#f57d3e] text-2xl leading-none">•</span>
                <span>{item.replace(/^•\s*/, "")}</span>
              </motion.li>
            ))}
          </ul>

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
        <section key={section.id} id={section.id} className="relative py-20 md:py-32 scroll-mt-32">
          <div className={`${sectionShell}`}>
            {section.id === "section-04" && (
              <div className="space-y-12">
                <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h5 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ea8f3c] mb-4">
                    Programação Especial
                  </h5>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0c3650]">
                    Janeiro 2026
                  </h2>
                </motion.div>
                
                <div className="space-y-14">
                  {(() => {
                    const groupedPairs: Record<number, number> = { 0: 1, 6: 7 };
                    const skipIndices = new Set(Object.values(groupedPairs));

                    return programHighlights.map((item, idx) => {
                      if (skipIndices.has(idx)) return null;

                      const pairedIndex = groupedPairs[idx];
                      if (pairedIndex !== undefined) {
                        const pairIndices = [idx, pairedIndex];
                        const baseImage = item.image ?? programHighlights[pairedIndex]?.image;

                        return (
                          <motion.div
                            key={`${item.title}-grouped`}
                            className={`flex flex-col gap-8 md:gap-12 ${idx === 6 ? "md:flex-row-reverse" : "md:flex-row"} items-center`}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.8 }}
                          >
                            <div className="flex-1 space-y-8">
                              {pairIndices.map((entryIdx) => {
                                const entry = programHighlights[entryIdx];
                                const labelText = entry.category ?? `Especial ${entryIdx + 1}`;
                                return (
                                  <div key={entry.title} className="space-y-3">
                                    <p className="text-xs uppercase tracking-[0.4em] text-[#2ab0c7]">{labelText}</p>
                                    <h3 className="text-2xl font-bold text-[#0c3650]">{entry.title}</h3>
                                    <p className="text-[#f57d3e] font-semibold">{entry.host}</p>
                                    <div className="space-y-2 text-[#1a455e]">
                                      {entry.details.map((detail, detailIdx) => (
                                        <p key={`${entry.title}-${detailIdx}`} className={detail.emphasis ? "font-semibold" : ""}>
                                          {detail.text}
                                        </p>
                                      ))}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>

                            {baseImage && (
                              <div className="flex-1 w-full">
                                <Image
                                  src={baseImage}
                                  alt={item.title}
                                  width={1400}
                                  height={900}
                                  className="w-full h-auto rounded-3xl"
                                  priority={idx === 0}
                                />
                              </div>
                            )}
                          </motion.div>
                        );
                      }

                      const forceReverse = idx === 2;
                      const label = item.category ?? `Especial ${idx + 1}`;

                      return (
                        <motion.div
                          key={item.title}
                          className={`flex flex-col gap-8 md:gap-12 ${idx % 2 === 1 || forceReverse ? "md:flex-row-reverse" : "md:flex-row"} items-center`}
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ delay: idx * 0.1, duration: 0.8 }}
                        >
                          <div className="flex-1 space-y-3">
                            <p className="text-xs uppercase tracking-[0.4em] text-[#2ab0c7]">{label}</p>
                            <h3 className="text-2xl font-bold text-[#0c3650]">{item.title}</h3>
                            <p className="text-[#f57d3e] font-semibold">{item.host}</p>
                            <div className="space-y-2 text-[#1a455e]">
                              {item.details.map((detail, detailIdx) => (
                                <p key={`${item.title}-${detailIdx}`} className={detail.emphasis ? "font-semibold" : ""}>
                                  {detail.text}
                                </p>
                              ))}
                            </div>
                          </div>

                          {item.image && (
                            <div className="flex-1 w-full">
                              <Image
                                src={item.image}
                                alt={item.title}
                                width={1400}
                                height={900}
                                className="w-full h-auto rounded-3xl"
                              />
                            </div>
                          )}
                        </motion.div>
                      );
                    });
                  })()}
                </div>

                <div className="mt-16 space-y-12">
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <h5 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ea8f3c] text-center">
                      Experiências além do extraordinário
                    </h5>
                    <h3 className="text-3xl font-bold text-[#0c3650] text-center">WORKSHOP COMER • SENTIR • CURAR</h3>
                    <p className="text-[#1a455e] max-w-3xl mx-auto text-center">
                      Duas experiências conduzidas por Katia Faria para preparar corpo e emoções para o novo ano. Escolha a parte que faz sentido
                      ou viva o percurso completo com alimentação consciente, autocuidado e integração com o MÉTODO AUTOCURA.
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex flex-col gap-8 md:gap-14 md:flex-row items-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="flex-1 space-y-4 text-[#0c3650]">
                      <h4 className="text-xl font-bold text-[#f57d3e]">OPEN DAY AUTOCURA — GRATUITO</h4>
                      <p>Viva o método ao vivo. Sessões de AUTOCURA / AUTOTERAPIA.</p>
                      <div>
                        <p className="font-semibold">Datas:</p>
                        <ul className="list-disc ml-5 text-[#1a455e]">
                          <li>17 de janeiro</li>
                          <li>31 de janeiro</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold">Horário:</p>
                        <p className="text-[#1a455e]">14h – 21h</p>
                      </div>
                      <p className="text-sm text-[#1a455e]">
                        <span className="font-semibold">Nota:</span> Esta programação poderá ser alterada por motivos de força maior. Como em todo processo vivo,
                        há sempre espaço para o inesperado. Momentos especiais e surpresas poderão surgir ao longo do caminho — porque a verdadeira
                        transformação também acontece fora do plano.
                      </p>
                    </div>

                    <div className="flex-1 w-full">
                      <div className="relative h-64 md:h-72">
                        <Image src={autocuraLogo} alt="Open Day Autocura" fill className="object-contain" />
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex flex-col gap-8 md:gap-12 md:flex-row items-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="flex-1 space-y-8">
                      {eatingWorkshops.map((workshop) => (
                        <div key={workshop.id} className="space-y-3">
                          <h4 className="text-2xl font-bold text-[#0c3650]">{workshop.title}</h4>
                          <p className="text-[#f57d3e] font-semibold">{workshop.host}</p>
                          <div className="space-y-2 text-[#1a455e]">
                            <p>
                              <span className="font-semibold text-[#0c3650]">Data:</span> {workshop.date}
                            </p>
                            <p>
                              <span className="font-semibold text-[#0c3650]">Horário:</span> {workshop.time}
                            </p>
                            <p>{workshop.ticket}</p>
                            <p>{workshop.pack}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex-1 w-full">
                      <Image
                        src={katiaImg}
                        alt="Workshops Comer, Sentir e Curar"
                        width={900}
                        height={700}
                        className="w-full h-auto rounded-3xl"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            )}
            
            {section.id === "section-05" && (
              <div className="space-y-12">
                <motion.div
                  className="text-center mb-16"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <h5 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ea8f3c] mb-4">
                    Este janeiro é para si se...
                  </h5>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#0c3650]">
                    Reconhece-se em alguma destas frases?
                  </h2>
                </motion.div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {januaryReasons.map((reason, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-start gap-3 p-4 bg-white/50 rounded-xl border border-[#e8f4f8]"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className="text-[#f57d3e] text-xl">•</span>
                      <p className="text-[#0c3650]">{reason}</p>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  className="text-center mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <p className="text-lg text-[#0c3650] mb-6">
                    Se se reconhece nestas linhas, este janeiro não foi marcado por acaso.
                  </p>
                  <motion.a
                    href="#section-bilhetes"
                    className="inline-flex items-center justify-center px-8 py-3 bg-[#f57d3e] text-white rounded-full font-semibold hover:bg-[#ea8f3c] transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Reserve o seu lugar
                  </motion.a>
                </motion.div>
              </div>
            )}
            
            {section.id !== "section-04" && section.id !== "section-05" && (
              <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-start gap-4">
                    <span className="w-1 h-12 rounded-full bg-gradient-to-b from-[#f57d3e] to-[#ea8f3c] mt-1" />
                    <div className="space-y-2">
                      <h5 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#2ab0c7]">
                        {section.subtitle}
                      </h5>
                      <h2 className="text-3xl md:text-4xl font-bold text-[#0c3650]">
                        {section.title}
                      </h2>
                    </div>
                  </div>
                  
                  {section.id !== "section-03" ? (
                    <p className="text-lg text-[#0c3650] leading-relaxed">{section.description}</p>
                  ) : (
                    <div className="space-y-4 mt-8">
                      {cleansingSessions.map((session, idx) => (
                        <motion.div
                          key={`${session.date}-${session.therapist}`}
                          className="border border-[#e5ecf0] px-5 py-4 rounded-2xl"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <p className="text-base font-semibold text-[#f57d3e]">{session.date}</p>
                          <p className="text-lg font-semibold text-[#0c3650]">{session.title}</p>
                          <p className="text-sm text-[#1a455e]">Terapeuta: {session.therapist}</p>
                        </motion.div>
                      ))}

                      <p className="text-sm font-semibold text-[#0c3650] text-center">
                        Horário: 20h (exceto dia 15 de janeiro, às 19h) · Valor: 5€ por sessão
                      </p>
                    </div>
                  )}
                  
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
                
                {section.image && (
                  <motion.div
                    className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Image src={section.image} alt={section.title} fill className="object-cover" />
                    {section.id !== "section-02" && section.id !== "section-03" && (
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c3650]/20 to-transparent" />
                    )}
                  </motion.div>
                )}
              </div>
            )}
          </div>
        </section>
      ))}

      {/* Tickets Section */}
      <section id="section-bilhetes" className="relative py-20 md:py-28 bg-gradient-to-b from-[#f7fbff] to-white scroll-mt-32">
        <div className={`${sectionShell} space-y-12`}>
          <motion.div
            className="text-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h5 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ea8f3c]">Bilhetes & Passe</h5>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0c3650]">
              Reserve o seu lugar presencial em Braga
            </h2>
            <p className="text-base md:text-lg text-[#1a455e] max-w-3xl mx-auto">
              Toda a compra é realizada presencialmente no Espaço Caminhos Prá Saúde. Escolha o formato que faz sentido para si e
              garanta presença neste campo AUTOCURA.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {ticketOptions.map((ticket, idx) => (
              <motion.div
                key={ticket.id}
                className={`relative overflow-hidden rounded-3xl border border-[#e5ecf0] bg-gradient-to-br ${ticket.accent} p-8 shadow-[0_20px_40px_rgba(12,54,80,0.08)]`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-[#ea8f3c]">{ticket.badge}</p>
                    <h3 className="text-2xl font-bold text-[#0c3650] mt-2">{ticket.title}</h3>
                  </div>
                  <span className="text-3xl font-semibold text-[#f57d3e] whitespace-nowrap">{ticket.price}</span>
                </div>

                <p className="mt-4 text-[#1a455e] leading-relaxed">{ticket.description}</p>

                <div className="mt-6 space-y-3">
                  <div className="flex items-start gap-3 text-[#0c3650]">
                    <FaMapMarkerAlt className="mt-1 text-[#ea8f3c]" />
                    <div>
                      <p className="font-semibold">{ticket.location}</p>
                      <p className="text-sm text-[#1a455e]">{ticket.address}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-[#0c3650]">
                    <FaPhone className="text-[#2ab0c7]" />
                    <p className="font-semibold">{ticket.phone}</p>
                  </div>
                </div>

                <p className="mt-6 text-sm font-semibold text-[#0c3650]">{ticket.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Side Navigation */}
      <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col gap-4">
          {["section-00", "section-01", "section-02", "section-03", "section-04", "section-05", "section-bilhetes"].map((sectionId) => (
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

            <div className="relative min-h-[400px] rounded-3xl border-2 border-dashed border-[#e8f4f8] flex items-center justify-center bg-gradient-to-br from-[#f7fbff] via-[#e9f6ff] to-[#fff3e8]">
              <AnimatePresence mode="wait">
                {activeFaq !== null && answerTypingDone ? (
                  <motion.div
                    key={activeFaq}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="relative w-full h-full flex items-center justify-center p-8"
                  >
                    <div className="relative max-w-md mx-auto text-center">
                      <FaQuoteLeft className="absolute -top-4 -left-4 text-[#f57d3e]/30 text-2xl" />
                      <FaQuoteRight className="absolute -bottom-4 -right-4 text-[#f57d3e]/30 text-2xl" />
                      <p className="text-xl leading-relaxed text-[#032035] font-medium italic px-8">
                        {answerText}
                        {!answerTypingDone && <span className="animate-pulse">|</span>}
                      </p>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center text-[#0c3f5a]"
                  >
                    <div className="relative">
                      <FaQuoteLeft className="text-[#f57d3e]/20 text-3xl mx-auto mb-4" />
                      <p className="text-lg font-medium">Selecione uma pergunta para ver a resposta</p>
                      <FaQuoteRight className="text-[#f57d3e]/20 text-3xl mx-auto mt-4" />
                    </div>
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
                Saia por aí & descubra o seu próximo <br />
                caminho, montanha & destino!
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-[#f6b658]">Sobre</h4>
              <ul className="space-y-3 text-white/80">
                <li><a href="#" className="hover:text-white transition-colors">Sobre AUTOCURA</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contribuidores</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Escreva para nós</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacidade</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6 text-[#f6b658]">Contato</h4>
              <div className="space-y-4">
                <a href="#" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <FaInstagram className="text-xl" />
                  <span>Instagram</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <FaFacebook className="text-xl" />
                  <span>Facebook</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <FaEnvelope className="text-xl" />
                  <span>Email</span>
                </a>
                <a href="#" className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center text-xs">👥</span>
                  <span>A Equipa</span>
                </a>
              </div>
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
    questionLines: ["Nunca fiz nada com a Alex. Este evento é para mim?"],
    answer:
      "Sim. O janeiro em Braga foi pensado tanto para quem já conhece Alexandra Solnado como para quem vai ter agora o primeiro contacto com o MÉTODO AUTOCURA. Haverá encontros introdutórios e momentos de acolhimento para quem está a começar.",
  },
  {
    questionLines: ["E se só puder ir a um ou dois encontros?"],
    answer:
      "Pode comprar bilhetes por encontro e escolher exactamente onde quer estar. Se, no caminho, sentir que quer o ciclo inteiro, fale com a equipa no local: se ainda houver vagas, será feito o possível para o ajudar a atualizar para o PASSE.",
  },
  {
    questionLines: ["O PASSE inclui tudo do calendário?"],
    answer:
      "O PASSE AUTOCURA – BRAGA inclui o ciclo principal de encontros do MÉTODO AUTOCURA ao longo de janeiro. As iniciativas AUTOCURA PARA CRIANÇAS e o workshop de alimentação “COMER, SENTIR E CURAR” têm inscrição à parte e não estão incluídos no PASSE. Sessões de limpeza não estão inclusas.",
  },
  {
    questionLines: ["Não me considero 'muito espiritual'. Posso ir na mesma?"],
    answer:
      "Sim. O MÉTODO AUTOCURA trabalha com a sua vida real: emoções, desafios, dores, padrões. Não precisa de saber meditar nem ter experiência prévia. Precisa apenas de sentir que chegou o momento de cuidar de si.",
  },
  {
    questionLines: ["E se surgir um imprevisto?"],
    answer:
      "A política concreta é definida pela Escola AUTOCURA – mas, sempre que possível, são oferecidas alternativas justas (como reagendamento ou utilização do valor noutra iniciativa). Em caso de dúvida, basta contactar a equipa pelo telefone +351 913 240 700.",
  },
];
