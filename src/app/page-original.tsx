"use client";

import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { FaFacebookF, FaInstagram, FaRegStar, FaWhatsapp, FaYoutube, FaEnvelope, FaTicketAlt } from "react-icons/fa";
import autocuraLogo from "@/images/autocura.png";
import miniLogo from "@/images/logo-mini.png";
import balaoAzul from "@/images/balao-azul.svg";
import balaoLaranja from "@/images/balao-laranja.svg";
import balaoPreto from "@/images/balao-preto.svg";
import balaoVerde from "@/images/balao-verde.svg";
import balaoBase from "@/images/balao.png";
import balaoDuvida from "@/images/balao-duvida.png";
import fotoTres from "@/images/foto-tres.png";
import mariaAssuncao from "@/images/maria-assuncao.png";
import helena from "@/images/helena.png";
import galina from "@/images/galina.png";
import katia from "@/images/katia.png";
import autocuraSectionBg from "@/images/autocura-section.png";

const breezeIn: Variants = {
  hidden: { opacity: 0, y: 25, filter: "blur(12px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay, duration: 1.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const heroBullets = [
  "• Para quem sente que repete os mesmos padrões, ano após ano.",
  "• Para quem conhece o trabalho da Alex e quer viver o MÉTODO AUTOCURA ao vivo.",
  "• Para quem quer começar 2026 com mais leveza, clareza e direção.",
];

const programHighlights = [
  {
    title: "Abertura",
    host: "com Ana Campos e Gilberto Barbosa",
    details: [
      { text: "Data: 12 de janeiro", emphasis: true },
      { text: "Horário: 14h", emphasis: true },
    ],
  },
  {
    title: "A Intuição Que Cura",
    host: "com Ana Campos",
    details: [
      { text: "Data: 14 de janeiro", emphasis: true },
      { text: "Horário: 18h", emphasis: true },
    ],
  },
  {
    title: "Caminho Prá Luz",
    host: "com Gilberto Barbosa",
    details: [
      { text: "Data: 15 de janeiro", emphasis: true },
      { text: "Horário: 17h", emphasis: true },
    ],
  },
  {
    title: "DIABETES",
    host: "com Katia Faria",
    details: [
      { text: "Data: 16 de janeiro", emphasis: true },
      { text: "Horário: 18h30–20h", emphasis: true },
    ],
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
  },
  {
    title: "AUTOCURA® ANIMAIS",
    host: "com Helena Rebelo",
    details: [
      { text: "Data: 24 de janeiro", emphasis: true },
      { text: "Horário: 14h", emphasis: true },
    ],
  },
  {
    title: "Arte na Entrega",
    host: "com Galyna Ilyuk",
    details: [
      { text: "Data: 18 de janeiro", emphasis: true },
      { text: "Horário: 11h–13h", emphasis: true },
      { text: "Data: 22 de janeiro", emphasis: true },
      { text: "Horário: 18h", emphasis: true },
      { text: "Valor: 5€", emphasis: true },
    ],
  },
  {
    title: "Mantras de Jesus",
    host: "com Sofia Ralha",
    details: [
      { text: "Data: 28 de janeiro", emphasis: true },
      { text: "Horário: 18h", emphasis: true },
    ],
  },
  {
    title: "AUTOCURA para Casais",
    host: "Um encontro para harmonizar as relações e elevar a vibração do Amor.",
    details: [
      { text: "Meditação Guiada: Maria Assunção" },
      { text: "Naves de Cristal de Quartzo: António Maria" },
      { text: "Data: 24 de janeiro", emphasis: true },
      { text: "Horário: 17h", emphasis: true },
    ],
  },
  {
    title: "WORKSHOP: COMER • SENTIR • CURAR Parte 1",
    host: "com Katia Faria",
    details: [
      { text: "Data: 31 de janeiro", emphasis: true },
      { text: "Horário: 16h–19h", emphasis: true },
      { text: "Valor – Bilhete Avulso 40 euros (inclui lanche)" },
      { text: "Pack: Parte 1 + Parte 2 = 80 euros (inclui lanche e almoço)" },
    ],
  },
  {
    title: "WORKSHOP: COMER • SENTIR • CURAR Parte 2",
    host: "com Katia Faria",
    details: [
      { text: "Data: 1 de fevereiro", emphasis: true },
      { text: "Horário: 10h–14h", emphasis: true },
      { text: "Valor – Bilhete Avulso 60 euros (inclui almoço)" },
      { text: "Pack: Parte 1 + Parte 2 = 80 euros (inclui lanche e almoço)" },
    ],
  },
];

const januaryReasons = [
  "Sente que começa o ano cheio de intenções e volta rapidamente aos mesmos hábitos.",
  "Já fez terapias, cursos, retiros – mas padrões de culpa e auto-sabotagem insistem em voltar.",
  "Conhece o trabalho da Alex há anos e quer viver o MÉTODO AUTOCURA ao vivo.",
  "Anda a carregar tudo sozinho e deseja aprender a entregar o peso à Luz.",
  "Vive em Braga (ou perto) e não quer chegar ao fim do ano com a mesma sensação de cansaço.",
];

const highlightSideImages: Record<string, { src: StaticImageData; alt: string }> = {
  "AUTOCURA® CRIANÇAS": { src: mariaAssuncao, alt: "Maria Assunção — AUTOCURA Crianças" },
  "AUTOCURA® ANIMAIS": { src: helena, alt: "Helena — AUTOCURA Animais" },
  "Arte na Entrega": { src: galina, alt: "Galina — Arte na Entrega" },
};

const sectionShell = "mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8";

const faqItems = [
  {
    questionLines: ["Nunca fiz nada com a Alex.", "Este evento é para mim?"],
    answer:
      "Sim. O janeiro em Braga foi pensado tanto para quem já conhece Alexandra Solnado como para quem vai ter agora o primeiro contacto com o MÉTODO AUTOCURA. Haverá encontros introdutórios e momentos de acolhimento para quem está a começar.",
    questionBubble: balaoLaranja,
    answerBubble: balaoAzul,
  },
  {
    questionLines: ["E se só puder ir a um ou dois encontros?"],
    answer:
      "Pode comprar bilhetes por encontro e escolher exactamente onde quer estar. Se, no caminho, sentir que quer o ciclo inteiro, fale com a equipa no local: se ainda houver vagas, será feito o possível para o ajudar a atualizar para o PASSE.",
    questionBubble: balaoVerde,
    answerBubble: balaoBase,
  },
  {
    questionLines: ["O PASSE inclui tudo do calendário?"],
    answer:
      "O PASSE AUTOCURA – BRAGA inclui o ciclo principal de encontros do MÉTODO AUTOCURA ao longo de janeiro. As iniciativas AUTOCURA PARA CRIANÇAS e o workshop de alimentação “COMER, SENTIR E CURAR” têm inscrição à parte e não estão incluídos no PASSE. Sessões de Limpeza não estão inclusas.",
    questionBubble: balaoAzul,
    answerBubble: balaoVerde,
  },
  {
    questionLines: ["Não me considero “muito espiritual”.", "Posso ir na mesma?"],
    answer:
      "Sim. O MÉTODO AUTOCURA trabalha com a sua vida real: emoções, desafios, dores, padrões. Não precisa de saber meditar nem ter experiência prévia. Precisa apenas de sentir que chegou o momento de cuidar de si.",
    questionBubble: balaoPreto,
    answerBubble: balaoLaranja,
  },
  {
    questionLines: ["E se surgir um imprevisto?"],
    answer:
      "A política concreta é definida pela Escola AUTOCURA – mas, sempre que possível, são oferecidas alternativas justas (como reagendamento ou utilização do valor noutra iniciativa). Em caso de dúvida, basta contactar a equipa pelo telefone +351 913 240 700.",
    questionBubble: balaoBase,
    answerBubble: balaoAzul,
  },
];

export default function Home() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [typedText, setTypedText] = useState("");
  const [typingDone, setTypingDone] = useState(false);
  const [answerText, setAnswerText] = useState("");
  const [answerTypingDone, setAnswerTypingDone] = useState(false);
  const firstTwoHighlights = programHighlights.slice(0, 2);
  const workshopTitles = [
    "DIABETES",
    "WORKSHOP: COMER • SENTIR • CURAR Parte 1",
    "WORKSHOP: COMER • SENTIR • CURAR Parte 2",
  ];
  const workshopHighlights = workshopTitles
    .map((title) => programHighlights.find((item) => item.title === title))
    .filter((item): item is (typeof programHighlights)[number] => Boolean(item));
  const firstWorkshopIndex = programHighlights.findIndex((item) => workshopTitles.includes(item.title));
  const typingTimeouts = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTyping = () => {
    typingTimeouts.current.forEach((timer) => clearTimeout(timer));
    typingTimeouts.current = [];
  };

  useEffect(() => {
    return () => {
      clearTyping();
    };
  }, []);

  useEffect(() => {
    clearTyping();

    if (activeFaq === null) {
      return;
    }

    const fullQuestion = faqItems[activeFaq].questionLines.join(" ");

    const startDelay = setTimeout(() => {
      let charIndex = 0;

      const typeNext = () => {
        setTypedText(fullQuestion.slice(0, charIndex + 1));
        charIndex += 1;

        if (charIndex < fullQuestion.length) {
          const timerId = setTimeout(typeNext, 28);
          typingTimeouts.current.push(timerId);
        } else {
          setTypingDone(true);
        }
      };

      typeNext();
    }, 220);

    typingTimeouts.current.push(startDelay);

    return () => {
      clearTyping();
    };
  }, [activeFaq]);

  useEffect(() => {
    if (!typingDone || activeFaq === null) {
      return;
    }

    const answer = faqItems[activeFaq].answer;

    const startDelay = setTimeout(() => {
      let charIndex = 0;

      const typeNext = () => {
        setAnswerText(answer.slice(0, charIndex + 1));
        charIndex += 1;

        if (charIndex < answer.length) {
          const timerId = setTimeout(typeNext, 24);
          typingTimeouts.current.push(timerId);
        } else {
          setAnswerTypingDone(true);
        }
      };

      typeNext();
    }, 200);

    typingTimeouts.current.push(startDelay);

    return () => undefined;
  }, [typingDone, activeFaq]);

  const handleFaqClick = (idx: number) => {
    clearTyping();
    if (activeFaq === idx) {
      setActiveFaq(null);
      setTypedText("");
      setTypingDone(false);
      setAnswerText("");
      setAnswerTypingDone(false);
      return;
    }

    setActiveFaq(idx);
    setTypedText("");
    setTypingDone(false);
    setAnswerText("");
    setAnswerTypingDone(false);
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-to-b from-[#f5f1eb] via-[#f1f7fb] to-[#e7f8ff] text-[#0f2a3a]">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-4 pb-24 pt-14 sm:gap-20 sm:px-6 sm:pt-20">
        <motion.header
          className="flex flex-col gap-4 border-b border-[#d4e6ee] pb-6 text-sm text-[#457897] md:flex-row md:items-center md:gap-10"
          initial="hidden"
          animate="visible"
          variants={breezeIn}
        >
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 overflow-hidden rounded-3xl border border-[#f6b658]/60 shadow-lg shadow-[#f57d3e]/30">
              <Image src={autocuraLogo} alt="Escola Autocura" fill className="object-cover" priority />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#ea8f3c]">Escola AUTOCURA</p>
              <p className="text-lg font-semibold text-[#0c3650]">BRAGA</p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-4 text-base md:flex-1 md:flex-nowrap md:justify-center md:gap-8">
            {["Início", "Cursos", "Loja", "Quem Somos", "Contato"].map((item) => (
              <a key={item} href="#" className="transition hover:text-[#f57d3e]">
                {item}
              </a>
            ))}
          </nav>
        </motion.header>

        <div className="relative w-full -mt-4 sm:-mt-8">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-[120vw] -translate-x-1/2 rounded-[48px] bg-[radial-gradient(circle,_rgba(232,251,255,1)_0%,_rgba(232,251,255,0.85)_45%,_rgba(232,251,255,0)_100%)]" />
          <motion.section
            className="relative z-10 flex flex-col items-center gap-10 rounded-[32px] px-4 py-10 text-center sm:px-8 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:text-left"
            initial="hidden"
            animate="visible"
            variants={breezeIn}
          >
            <div className="space-y-6 lg:flex-1">
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-left">
                  <span className="text-[#f57d3e]">AUTOCURA</span>{" "}
                  <span className="text-[#0c3650]">EM</span>
                  <br className="hidden sm:block" />
                  <span className="text-[#0c3650]">DIGRESSÃO ·</span>{" "}
                  <span className="text-[#2ab0c7]">BRAGA</span>
                </h1>
                <p className="text-base text-[#1a455e] lg:text-left">
                  Um janeiro inteiro para viver o MÉTODO AUTOCURA em encontros presenciais, sentir o que a alma precisa resolver e começar o ano em outra vibração.
                </p>
              </div>
              <ul className="space-y-3 text-left text-sm text-[#1a455e] sm:text-base">
                {heroBullets.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <FaRegStar className="mt-1 text-[#f57d3e]" />
                    <span className="italic">{item.replace(/^•\s*/, "")}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[#1a455e] lg:text-left">
                <strong>Clique abaixo, veja as opções de participação e reserve o lugar que a sua alma está a pedir.</strong>
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-2 lg:justify-start">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f36a19] via-[#f57d3e] to-[#f6b658] px-6 py-3 text-base font-semibold text-[#24150d] shadow-lg shadow-[#f57d3e]/40 transition hover:-translate-y-0.5"
                >
                  PROGRAMAÇÃO AUTOCURA EM DIGRESSÃO · BRAGA
                </a>
              </div>
            </div>

            <motion.div
              className="relative flex w-full items-center justify-center lg:flex-1"
              initial={{ opacity: 0, x: 60, y: 30, scale: 0.95, filter: "blur(12px)" }}
              animate={{
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                filter: "blur(0px)",
                transition: { delay: 0.2, duration: 1.1, ease: [0.16, 1, 0.3, 1] },
              }}
            >
              <div className="pointer-events-none absolute inset-y-0 left-1/2 h-[140%] w-[120%] -translate-x-1/2 -translate-y-[10%] rounded-[999px] bg-[radial-gradient(circle,_rgba(241,247,251,0.65)_0%,_rgba(241,247,251,0.3)_45%,_rgba(241,247,251,0)_80%)]" />
              <div className="relative h-[320px] w-[260px] sm:h-[420px] sm:w-[320px] lg:h-[605px] lg:w-[511px]">
                <Image src={autocuraLogo} alt="Arte Escola Autocura" fill className="object-cover" priority />
              </div>
            </motion.div>
          </motion.section>
        </div>

        <section
          className="relative left-1/2 w-screen -translate-x-1/2 bg-[rgb(255,245,212)] py-10 sm:py-12"
          aria-label="Introdução AUTOCURA em Braga"
        >
          <div
            className="pointer-events-none absolute -left-28 top-8 h-64 w-64 rounded-full opacity-50 blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(245,125,62,0.35) 0%, rgba(255,245,212,0) 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 rounded-full opacity-40 blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(42,176,199,0.3) 0%, rgba(255,245,212,0) 70%)",
            }}
          />
          <div className={`${sectionShell} max-w-5xl flex flex-col gap-8 text-sm leading-relaxed text-[rgb(32,89,120)] sm:text-base`}>
            <div className="space-y-3">
              <p className="text-[rgb(71,167,186)] text-xs font-semibold uppercase tracking-[0.4em]">
                AUTOCURA em Digressão · Braga
              </p>
              <p>
                Em Janeiro de 2026, AUTOCURA EM DIGRESSÃO — BRAGA traz o MÉTODO AUTOCURA até à sua cidade, ao vivo, no Caminhos
                Prá Saúde. Durante várias semanas vai poder viver:
              </p>
              <ul className="space-y-1 pl-4">
                {[
                  "meditações guiadas para limpar o peso do ano",
                  "limpezas espirituais presenciais",
                  "experiências temáticas sobre corpo, emoções, relações e propósito",
                  "terapeutas AUTOCURA ali, consigo, para orientar o seu caminho com método e segurança",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[rgb(245,125,62)]">✨</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="font-semibold text-[rgb(245,125,62)]">
                Não é assistir. É viver AUTOCURA. Num campo presencial, protegido, acompanhado.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-[rgb(71,167,186)] text-xs font-semibold uppercase tracking-[0.4em]">
                O que vai viver neste janeiro em AUTOCURA?
              </p>
              <p>
                Durante várias semanas, no espaço Caminhos Prá Saúde, vão acontecer encontros presenciais onde vai poder:
              </p>
              <ul className="space-y-1 pl-4">
                {[
                  "Sentar-se numa sala em Braga, com outras pessoas na mesma intenção, e ser guiado em meditações para limpar o peso do ano e alinhar a vida com a alma.",
                  "Participar em sessões presenciais de limpeza espiritual para soltar culpa, medo, exaustão e padrões que já não fazem sentido.",
                  "Estar frente a frente com TERAPEUTAS AUTOCURA, levar questões e receber orientação dentro do método para relações, trabalho, família e decisões.",
                  "Entrar em Open Days e workshops temáticos, com práticas guiadas passo a passo para entregar o peso à Luz e integrar AUTOCURA no dia-a-dia.",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-[rgb(245,125,62)]">✨</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                Não é só ouvir falar de espiritualidade. É trabalhar a sua vida num campo presencial, com acompanhamento, energia partilhada e um espaço seguro para o que precisa de ser visto. Se o trabalho da Alex já o tocou à distância, o que vai viver presencialmente é tremendo. Os lugares são limitados à lotação do espaço Caminhos Prá Saúde.
              </p>
            </div>
          </div>
        </section>

        <div className="mx-auto h-px w-2/3 bg-gradient-to-r from-transparent via-[#cfe6ef] to-transparent" />

        <section
          className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16"
          aria-label="Escolha como quer viver AUTOCURA em Braga"
        >
          <div
            className="pointer-events-none absolute -left-20 top-6 h-64 w-64 rounded-full opacity-60 blur-3xl sm:-left-28 sm:h-80 sm:w-80"
            style={{
              background:
                "radial-gradient(circle, rgba(207,141,48,0.85) 0%, rgba(207,141,48,0.4) 40%, rgba(207,141,48,0.08) 80%, rgba(207,141,48,0) 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-24 right-0 h-72 w-72 translate-x-1/3 rounded-full opacity-60 blur-3xl sm:h-96 sm:w-96"
            style={{
              background:
                "radial-gradient(circle, rgba(213,152,63,0.75) 0%, rgba(213,152,63,0.35) 45%, rgba(213,152,63,0.05) 80%, rgba(213,152,63,0) 100%)",
            }}
          />
          <div className={`${sectionShell} space-y-8 text-center text-[#0c3650] sm:space-y-10`}>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ea8f3c]">Programação Especial</p>
            <h2 className="text-2xl font-semibold sm:text-3xl">Escolha como quer viver AUTOCURA em Braga</h2>
            <div className="mx-auto flex max-w-4xl justify-center">
              <div className="relative h-[18rem] w-full max-w-[660px] py-2 sm:h-[24rem] lg:h-[28rem]">
                <Image src={autocuraSectionBg} alt="Arte AUTOCURA" fill className="object-contain" priority />
              </div>
            </div>
            <div className="grid gap-12 text-left text-sm text-[#1a455e] lg:grid-cols-2">
              <motion.article
                className="space-y-6"
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <header className="space-y-3 text-center lg:text-left">
                  <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#2ab0c7] lg:justify-start">
                    <FaTicketAlt className="text-base text-[#2ab0c7]" aria-hidden="true" />
                    Passe completo
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0c3650]">PASSE AUTOCURA – BRAGA · Ciclo Completo</h3>
                </header>
                <p>
                  Com o <span className="font-semibold text-[#f57d3e]">PASSE</span>, reserva o seu lugar em praticamente todo o ciclo de encontros do
                  <span className="font-semibold text-[#f57d3e]"> MÉTODO AUTOCURA</span> em Braga e atravessa o mês dentro do campo, do início ao fim. É um mês inteiro a viver sob a vibração da Escola, com orientação próxima das equipas.
                </p>
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#2ab0c7]">Inclui</p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <FaRegStar className="mt-1 text-[#2ab0c7]" aria-hidden="true" />
                      <span>
                        Acesso ao ciclo principal de encontros do
                        <span className="font-semibold text-[#2ab0c7]"> MÉTODO AUTOCURA</span> durante janeiro
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <FaRegStar className="mt-1 text-[#2ab0c7]" aria-hidden="true" />
                      <span>
                        Meditações guiadas, Open Days com
                        <span className="font-semibold text-[#2ab0c7]"> TERAPEUTAS AUTOCURA</span> e encontros no Caminhos Prá Saúde
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <FaRegStar className="mt-1 text-[#2ab0c7]" aria-hidden="true" />
                      <span>Participação contínua no campo energético criado na cidade</span>
                    </li>
                    <li className="flex gap-3">
                      <FaRegStar className="mt-1 text-[#2ab0c7]" aria-hidden="true" />
                      <span>
                        Condições especiais em projetos de continuidade da
                        <span className="font-semibold text-[#2ab0c7]"> ESCOLA AUTOCURA</span>
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <FaRegStar className="mt-1 text-[#2ab0c7]" aria-hidden="true" />
                      <span>
                        Prioridade em futuras ativações presenciais da Escola em
                        <span className="font-semibold text-[#2ab0c7]"> BRAGA</span>
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3 border-y border-dashed border-[#dcebf3] py-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f57d3e]">Importante</p>
                  <p>O <span className="font-semibold text-[#f57d3e]">PASSE AUTOCURA – BRAGA</span> não inclui:</p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <FaRegStar className="mt-1 text-[#f57d3e]" aria-hidden="true" />
                      <span>
                        As iniciativas <span className="font-semibold text-[#f57d3e]">AUTOCURA PARA CRIANÇAS</span>
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <FaRegStar className="mt-1 text-[#f57d3e]" aria-hidden="true" />
                      <span>
                        O workshop “<span className="font-semibold text-[#f57d3e]">COMER, SENTIR, CURAR</span>”
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <FaRegStar className="mt-1 text-[#f57d3e]" aria-hidden="true" />
                      <span>Sessões presenciais de Limpeza Espiritual</span>
                    </li>
                  </ul>
                  <p className="text-xs text-[#1a455e]">Estes projetos têm inscrição e valores próprios.</p>
                </div>
                <div className="space-y-2 text-base text-[#0c3650]">
                  <p>
                    Investimento único: <span className="font-semibold">[35 €]</span> para atravessar todo o ciclo presencial de janeiro.
                  </p>
                  <p className="text-sm text-[#1a455e]">
                    Viver o mês completo reduz o valor por encontro e aprofunda o impacto do MÉTODO dentro do campo.
                  </p>
                </div>
              </motion.article>

              <motion.article
                className="space-y-6"
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              >
                <header className="space-y-3 text-center lg:text-left">
                  <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.3em] text-[#f57d3e] lg:justify-start">
                    <FaTicketAlt className="text-base text-[#f57d3e]" aria-hidden="true" />
                    Comece com um encontro
                  </div>
                  <h3 className="text-2xl font-semibold text-[#0c3650]">Bilhete Avulso · Comece com um passo</h3>
                </header>
                <p>
                  Se ainda não sente o chamado de viver o ciclo completo, pode escolher apenas um momento específico — meditação, limpeza espiritual ou workshop. É a porta de entrada para não deixar este janeiro passar em branco.
                </p>
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f57d3e]">Inclui</p>
                  <ul className="space-y-3">
                    <li className="flex gap-3">
                      <FaRegStar className="mt-1 text-[#f57d3e]" aria-hidden="true" />
                      <span>Acesso a 1 encontro presencial do calendário de janeiro</span>
                    </li>
                    <li className="flex gap-3">
                      <FaRegStar className="mt-1 text-[#f57d3e]" aria-hidden="true" />
                      <span>Participação no campo energético criado nesse dia</span>
                    </li>
                    <li className="flex gap-3">
                      <FaRegStar className="mt-1 text-[#f57d3e]" aria-hidden="true" />
                      <span>
                        Possibilidade de falar com a equipa e atualizar para o PASSE, se sentir e ainda houver vagas
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-3 border-t border-dashed border-[#fde5cb] pt-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0c3650]">Investimento</p>
                  <p>
                    A partir de <span className="font-semibold">[5 €]</span> por encontro (valor exato definido pela Escola AUTOCURA).
                  </p>
                  <p className="text-sm text-[#1a455e]">
                    Ideal para experimentar uma prática específica e sentir o campo antes de se comprometer com o ciclo completo.
                  </p>
                </div>
                <p className="text-base font-semibold text-[#0c3650]">
                  Se estiver em dúvida, escolha pelo menos um encontro. A sua vida merece este movimento e cada passo conta.
                </p>
              </motion.article>
            </div>
          </div>
        </section>

        <section className="relative left-1/2 w-screen -translate-x-1/2 bg-white/90 py-12 sm:py-16">
          <div
            className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full opacity-40 blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(63,189,214,0.25) 0%, rgba(255,255,255,0) 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full opacity-40 blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(245,125,62,0.25) 0%, rgba(255,255,255,0) 70%)",
            }}
          />
          <div className={`${sectionShell} space-y-10 sm:space-y-12`}>
            <motion.div
              className="space-y-3 text-center"
              initial={{ opacity: 0, x: -30, y: 25, filter: "blur(8px)" }}
              whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ea8f3c]">
                Programação · Jan 2026
              </p>
              <h2 className="text-2xl font-semibold text-[#0c3650] sm:text-3xl">Experiências e workshops especiais</h2>
            </motion.div>
            <div className="space-y-10">
              {programHighlights.map((item, idx) => {
                const sideImage = highlightSideImages[item.title];
                if (idx === 0) {
                  return (
                    <div key="abertura-intuicao" className="space-y-4">
                      <div className="flex flex-col gap-6 md:flex-row md:items-center">
                        <div className="flex-1 space-y-8 md:flex md:flex-col md:justify-center">
                          {firstTwoHighlights.map((highlight, innerIdx) => (
                            <div key={highlight.title} className="space-y-4">
                              <motion.div
                                className="space-y-2 text-center md:self-auto md:text-left"
                                initial={{ opacity: 0, x: innerIdx % 2 === 0 ? 60 : -60, y: 20 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true, amount: 0.4 }}
                                transition={{ duration: 0.9, delay: innerIdx * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                              >
                                <h3 className="text-2xl font-semibold text-[#f57d3e]">{highlight.title}</h3>
                                <p className="font-semibold text-[#1a455e]">{highlight.host}</p>
                                <div className="mx-auto space-y-1 text-sm text-[#1a455e] md:mx-0">
                                  {highlight.details.map((detail, detailIdx) => (
                                    <p
                                      key={`${highlight.title}-${detailIdx}`}
                                      className={detail.emphasis ? "font-semibold text-[#0c3650]" : undefined}
                                    >
                                      {detail.text}
                                    </p>
                                  ))}
                                </div>
                              </motion.div>
                              {innerIdx < firstTwoHighlights.length - 1 && (
                                <motion.div
                                  className="h-[2px] w-1/2 bg-gradient-to-r from-transparent via-[#3fbdd6] to-transparent"
                                  initial={{ scaleX: 0, opacity: 0 }}
                                  whileInView={{ scaleX: 1, opacity: 1 }}
                                  viewport={{ once: true, amount: 0.2 }}
                                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                  style={{ originX: 0 }}
                                />
                              )}
                            </div>
                          ))}
                        </div>
                        {firstTwoHighlights.length > 0 && (
                          <div className="flex-1 md:sticky md:top-24">
                            <motion.div
                              className="w-full"
                              initial={{ opacity: 0, scale: 0.95, y: 40, filter: "blur(14px)" }}
                              whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                              viewport={{ once: true, amount: 0.4 }}
                              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                            >
                              <motion.div
                                className="relative aspect-[511/605] w-full"
                                whileHover={{ y: -12, scale: 1.01 }}
                                transition={{ duration: 0.6, ease: [0.37, 0, 0.63, 1] }}
                              >
                                <Image
                                  src={fotoTres}
                                  alt="Experiências AUTOCURA"
                                  fill
                                  className="object-contain"
                                  sizes="(max-width: 768px) 100vw, 540px"
                                />
                              </motion.div>
                            </motion.div>
                          </div>
                        )}
                      </div>
                      {programHighlights.length > firstTwoHighlights.length && (
                        <motion.div
                          className="mx-auto h-[3px] w-2/3 bg-gradient-to-r from-transparent via-[#3fbdd6] to-transparent"
                          initial={{ scaleX: 0, opacity: 0 }}
                          whileInView={{ scaleX: 1, opacity: 1 }}
                          viewport={{ once: true, amount: 0.2 }}
                          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                          style={{ originX: 0.5 }}
                        />
                      )}
                    </div>
                  );
                }

                if (idx === 1) {
                  return null;
                }

                if (firstWorkshopIndex !== -1 && idx === firstWorkshopIndex && workshopHighlights.length > 0) {
                  return (
                    <div key="workshop-comer-sentir" className="space-y-4">
                      <div className="flex flex-col gap-6 md:flex-row md:items-center">
                        <div className="flex-1 space-y-8">
                          {workshopHighlights.map((workshop, index) => (
                            <motion.div
                              key={workshop.title}
                              className="space-y-2 self-center text-center md:self-auto md:text-left"
                              initial={{ opacity: 0, x: 60, y: 20 }}
                              whileInView={{ opacity: 1, x: 0, y: 0 }}
                              viewport={{ once: true, amount: 0.4 }}
                              transition={{ duration: 0.9, delay: index * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                            >
                              <h3 className="text-2xl font-semibold text-[#f57d3e]">{workshop.title}</h3>
                              <p className="font-semibold text-[#1a455e]">{workshop.host}</p>
                              <div className="mx-auto space-y-1 text-sm text-[#1a455e] md:mx-0">
                                {workshop.details.map((detail, detailIdx) => (
                                  <p
                                    key={`${workshop.title}-${detailIdx}`}
                                    className={detail.emphasis ? "font-semibold text-[#0c3650]" : undefined}
                                  >
                                    {detail.text}
                                  </p>
                                ))}
                              </div>
                            </motion.div>
                          ))}
                        </div>
                        <motion.div
                          className="flex-1"
                          initial={{ opacity: 0, scale: 0.95, y: 30, filter: "blur(12px)" }}
                          whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden">
                            <Image
                              src={katia}
                              alt="Katia Faria — Workshop Comer Sentir Curar"
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 90vw, 400px"
                            />
                          </div>
                        </motion.div>
                      </div>
                      <motion.div
                        className="mx-auto h-[3px] w-2/3 bg-gradient-to-r from-transparent via-[#3fbdd6] to-transparent"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        style={{ originX: 0.5 }}
                      />
                    </div>
                  );
                }

                if (workshopTitles.includes(item.title)) {
                  return null;
                }

                return (
                  <div key={item.title} className="space-y-4">
                    <div
                      className={`flex flex-col gap-6 ${
                        sideImage
                          ? "md:flex-row md:items-center"
                          : ""
                      }`}
                    >
                      <motion.div
                        className={`space-y-2 self-center text-center md:self-auto ${
                          item.title === "Caminho Prá Luz"
                            ? "md:text-right"
                            : idx % 2 === 0
                              ? "md:text-left"
                              : "md:text-right"
                        }`}
                        initial={{ opacity: 0, x: idx % 2 === 0 ? 60 : -60, y: 20 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
                      >
                        <h3 className="text-2xl font-semibold text-[#f57d3e]">{item.title}</h3>
                        <p className="font-semibold text-[#1a455e]">{item.host}</p>
                        <div
                          className={`mx-auto space-y-1 text-sm text-[#1a455e] md:mx-0 ${
                            item.title === "Caminho Prá Luz"
                              ? "md:text-right"
                              : idx % 2 === 0
                                ? "md:text-left"
                                : "md:text-right"
                          }`}
                        >
                          {item.details.map((detail, detailIdx) => (
                            <p
                              key={`${item.title}-${detailIdx}`}
                              className={detail.emphasis ? "font-semibold text-[#0c3650]" : undefined}
                            >
                              {detail.text}
                            </p>
                          ))}
                        </div>
                      </motion.div>
                      {sideImage && (
                        <motion.div
                          className="flex-1"
                          initial={{ opacity: 0, scale: 0.9, y: 20, filter: "blur(10px)" }}
                          whileInView={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
                          viewport={{ once: true, amount: 0.4 }}
                          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden">
                            <Image
                              src={sideImage.src}
                              alt={sideImage.alt}
                              fill
                              className="object-cover"
                              sizes="(max-width: 768px) 90vw, 400px"
                            />
                          </div>
                        </motion.div>
                      )}
                    </div>
                    {idx < programHighlights.length - 1 && (
                      <motion.div
                        className="mx-auto h-[3px] w-2/3 bg-gradient-to-r from-transparent via-[#3fbdd6] to-transparent"
                        initial={{ scaleX: 0, opacity: 0 }}
                        whileInView={{ scaleX: 1, opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        style={{ originX: 0.5 }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section
          className="relative left-1/2 w-screen -translate-x-1/2 bg-white py-12"
          aria-label="Introdução sessões presenciais"
        >
          <div className={sectionShell}>
            <div className="mx-auto max-w-4xl space-y-4 text-center text-[#0c3650]">
              <h2 className="text-3xl font-semibold leading-tight sm:text-4xl">
                O que acontece quando a <span className="text-[#f57d3e]">ESCOLA AUTOCURA</span> desce à cidade
              </h2>
              <p className="text-base text-[#1a455e] sm:text-lg">
                <span className="text-[#f57d3e]">AUTOCURA EM DIGRESSÃO</span> é a presença viva da Escola AUTOCURA nas cidades.
              </p>
              <p className="text-base text-[#1a455e] sm:text-lg whitespace-pre-line">
                Durante janeiro, Braga recebe um ciclo completo de práticas e encontros do
                <span className="font-semibold" style={{ color: "rgb(42,176,199)" }}> MÉTODO AUTOCURA</span>,
                para quem deseja aprofundar a sua
                <span className="font-semibold" style={{ color: "rgb(42,176,199)" }}> AUTOCURA</span> pessoal, receber acompanhamento de
                <span className="font-semibold" style={{ color: "rgb(42,176,199)" }}> TERAPEUTAS AUTOCURA</span>,
                experienciar o
                <span className="font-semibold" style={{ color: "rgb(42,176,199)" }}> MÉTODO</span> ao vivo com segurança e rigor e sentir o campo da Escola
                <span className="font-semibold" style={{ color: "rgb(42,176,199)" }}> AUTOCURA</span> na cidade.
              </p>
              <p className="text-base text-[#1a455e] sm:text-lg whitespace-pre-line">
                Na prática, isto significa que: em vez de ver a Alex só em vídeo ou ler os livros sozinho, vai ter um mês
                em que o
                <span className="font-semibold" style={{ color: "rgb(42,176,199)" }}> MÉTODO AUTOCURA</span>
                está instalado em Braga, com
                <span className="font-semibold" style={{ color: "rgb(42,176,199)" }}> TERAPEUTAS</span>, práticas e encontros pensados para o ajudar
                a libertar peso emocional, quebrar padrões repetidos e alinhar a sua vida com a sua alma.
              </p>
            </div>
          </div>
        </section>

        <section
          className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-white py-10 sm:py-12"
          aria-label="Sessões presenciais de limpeza espiritual"
        >
          <div
            className="pointer-events-none absolute -left-24 top-6 h-72 w-72 rounded-full opacity-70 blur-3xl sm:-left-32 sm:h-96 sm:w-96"
            style={{
              background: "radial-gradient(circle, rgba(255,138,92,0.55) 0%, rgba(255,214,180,0.35) 55%, rgba(255,245,212,0) 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-24 right-0 h-80 w-80 translate-x-1/4 rounded-full opacity-70 blur-3xl sm:h-[26rem] sm:w-[26rem]"
            style={{
              background: "radial-gradient(circle, rgba(255,108,165,0.45) 0%, rgba(255,168,112,0.25) 45%, rgba(255,245,212,0) 100%)",
            }}
          />
          <div className={`${sectionShell} flex max-w-4xl flex-col gap-6 text-[#0c3650]`}>
            <div className="space-y-2 text-center sm:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#ea8f3c]">
                Sessões Presenciais de Limpeza Espiritual
              </p>
            </div>
            <div className="flex flex-col gap-6 text-sm sm:text-base">
              {[
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
              ].map(({ date, title, therapist }, idx) => (
                <div
                  key={`${date}-${therapist}`}
                  className={`border border-[#e5ecf0] px-5 py-4 lg:max-w-xl ${
                    idx % 2 === 0 ? "md:self-start md:text-left text-left" : "md:self-end md:text-right text-left"
                  }`}
                >
                  <p className="text-base font-semibold text-[#f57d3e]">{date}</p>
                  <p className="text-lg font-semibold text-[#0c3650]">{title}</p>
                  <p className="text-sm text-[#1a455e]">Terapeuta: {therapist}</p>
                </div>
              ))}
            </div>
            <p className="text-sm font-semibold text-[#0c3650]">
              Horário: 20h (exceto dia 15 de janeiro, às 19h) · Valor: 5€ por sessão
            </p>
          </div>
        </section>

        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[#0c3650] py-12 sm:py-14">
          <div
            className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full opacity-50 blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(107,227,198,0.35) 0%, rgba(12,54,80,0) 70%)",
            }}
          />
          <div
            className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full opacity-40 blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(245,125,62,0.4) 0%, rgba(12,54,80,0) 70%)",
            }}
          />
          <div className={`${sectionShell} grid gap-8 rounded-[32px] py-8 text-white sm:py-10 lg:grid-cols-[1.1fr,0.9fr]`}>
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f6b658]">
                Este janeiro é para si se...
              </p>
              <h2 className="text-2xl font-semibold sm:text-3xl">Reconhece-se em pelo menos uma destas frases?</h2>
              <ul className="space-y-3 text-sm text-white/90">
                {januaryReasons.map((reason) => (
                  <li key={reason} className="flex gap-3">
                    <span className="text-[#6be3c6]">✔</span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[28px] border border-white/20 bg-white/10 p-6 text-sm text-white/90">
              <p>
                Se se reconhece nestas linhas, este janeiro não foi marcado por acaso. Clique abaixo, escolha como quer participar e reserve o lugar que a sua alma está a pedir.
              </p>
              <a
                href="#"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#f36a19] via-[#f57d3e] to-[#f6b658] px-5 py-3 text-sm font-semibold text-[#24150d] shadow-lg shadow-[#f57d3e]/40 sm:text-base"
              >
                Quero reservar o meu lugar
              </a>
            </div>
          </div>
        </section>

        <section className="relative left-1/2 w-screen -translate-x-1/2 bg-gradient-to-b from-[#f0f7fb] via-[#f7fbfe] to-white py-12 sm:py-16">
          <div
            className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full opacity-40 blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(42,176,199,0.25) 0%, rgba(255,255,255,0) 70%)",
            }}
          />
          <div className={`${sectionShell} space-y-8`}>
            <div className="space-y-2 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ea8f3c]">Perguntas Frequentes</p>
              <h2 className="text-3xl font-semibold text-[#0c3650]">
                Tudo o que precisa de saber antes de dizer “sim”
              </h2>
            </div>
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]">
              <div className="space-y-4">
                {faqItems.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  const displayText = isOpen ? typedText : faq.questionLines.join(" \n");
                  const hasActiveFaq = activeFaq !== null;
                  return (
                    <motion.button
                      key={faq.questionLines.join(" ")}
                      type="button"
                      onClick={() => handleFaqClick(idx)}
                      className={`relative block w-full focus:outline-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        hasActiveFaq && !isOpen
                          ? "max-h-0 overflow-hidden opacity-0 pointer-events-none lg:max-h-full lg:opacity-100 lg:pointer-events-auto"
                          : "max-h-[420px] lg:max-h-full"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <motion.div
                        className="flex h-full min-h-[140px] flex-col justify-center gap-3 rounded-[36px] border border-white/40 bg-gradient-to-r from-white/85 via-[#f0fbff]/90 to-white/85 px-8 py-6 text-left shadow-lg shadow-[#0f2a3a]/10"
                        initial={false}
                        animate={{
                          opacity: isOpen ? 1 : 0.8,
                          scale: isOpen ? 1 : 0.99,
                          boxShadow: isOpen ? "0 18px 45px rgba(12,64,92,0.18)" : "0 10px 25px rgba(12,64,92,0.08)",
                        }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="flex items-center gap-3 text-[#0c3650]">
                          <div className="relative h-10 w-10">
                            <Image src={balaoDuvida} alt="Ícone pergunta" fill sizes="40px" className="object-contain" />
                          </div>
                          <p className="text-xs uppercase tracking-[0.45em]">Pergunta</p>
                        </div>
                        <p className="whitespace-pre-line text-lg font-semibold leading-snug text-[#072239]">
                          {displayText}
                          {isOpen && !typingDone ? <span className="ml-1 animate-pulse">|</span> : null}
                        </p>
                      </motion.div>
                    </motion.button>
                  );
                })}
              </div>
              <div className="relative min-h-[260px]">
                <div className="absolute inset-0 rounded-[48px] border-2 border-dashed border-white/30" />
                <AnimatePresence initial={false} mode="wait">
                  {activeFaq !== null && typingDone ? (
                    <motion.div
                      key={activeFaq}
                      initial={{ opacity: 0, y: 30, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 30, scale: 0.95 }}
                      transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                      className="relative h-full overflow-hidden rounded-[52px] shadow-2xl shadow-[#0f2a3a]/15"
                    >
                      <div className="absolute inset-0 rounded-[52px] bg-gradient-to-br from-[#f7fbff] via-[#e9f6ff] to-[#fff3e8] sm:hidden" />
                      <Image
                        src={faqItems[activeFaq!].answerBubble}
                        alt="Balão de resposta"
                        fill
                        className="hidden object-contain sm:block"
                        sizes="(max-width: 768px) 100vw, 640px"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-white/35 sm:bg-white/25" />
                      <div className="relative z-10 flex h-full flex-col items-center gap-4 px-6 py-6 text-[#032035]">
                        <div className="relative h-full w-full">
                          <div className="absolute left-[12%] right-[12%] top-[5%] bottom-[22%] flex items-center justify-center">
                            <p className="text-center text-base leading-relaxed sm:text-lg">
                              {answerTypingDone ? faqItems[activeFaq!].answer : answerText}
                              {typingDone && !answerTypingDone ? <span className="ml-1 animate-pulse">|</span> : null}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="placeholder"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex h-full flex-col items-center justify-center gap-3 rounded-[48px] border border-white/30 bg-white/40 text-center text-sm text-[#0c3f5a]"
                    >
                      <span className="text-lg tracking-[0.4em] text-[#f57d3e]">⬤</span>
                      <p>Selecione uma pergunta para revelar o balão de resposta.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer className="mt-20 rounded-t-[48px] bg-gradient-to-br from-[#0c2740] via-[#0b3a54] to-[#0c4d6b] px-4 py-12 text-white sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-8 text-sm md:grid-cols-3">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-2xl border border-white/20 bg-white/10">
                <Image src={miniLogo} alt="Logo Escola Autocura" fill className="object-contain" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-[#f6b658]">Escola Autocura</p>
                <p className="text-lg font-semibold">Autocura em Digressão · Braga</p>
              </div>
            </div>
            <p className="text-white/70">
              Caminhos Prá Saúde · 12 de janeiro a 1 de fevereiro de 2026
            </p>
          </div>
          <div className="space-y-3 text-white/80">
            <p className="font-semibold text-white">Contato</p>
            <p className="flex items-center gap-2">
              <FaInstagram className="text-[#f6b658]" /> @escolaautocura
            </p>
            <p className="flex items-center gap-2">
              <FaFacebookF className="text-[#f6b658]" /> facebook.com/escolaautocura
            </p>
            <p className="flex items-center gap-2">
              <FaYoutube className="text-[#f6b658]" /> youtube.com/escolaautocura
            </p>
            <p className="flex items-center gap-2 text-white/70">
              <FaWhatsapp className="text-[#25D366]" /> WhatsApp/Telefone: +351 913 240 700
            </p>
            <p className="flex items-center gap-2 text-white/70">
              <FaEnvelope className="text-[#f6b658]" /> Email: contato@escolaautocura.com
            </p>
          </div>
          <div className="space-y-3 text-white/80">
            <p className="font-semibold text-white">Redes e recursos</p>
            <div className="flex flex-col gap-2">
              {[
                { icon: <FaInstagram />, label: "Instagram", href: "#", color: "#E1306C" },
                { icon: <FaYoutube />, label: "YouTube", href: "#", color: "#FF0000" },
                { icon: <FaFacebookF />, label: "Facebook", href: "#", color: "#1877F2" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] uppercase tracking-wide transition hover:bg-white/20"
                >
                  <span className="text-sm" style={{ color: social.color }}>
                    {social.icon}
                  </span>
                  {social.label}
                </a>
              ))}
            </div>
            <p className="text-white/60 text-xs">
              Conteúdo criado com inspiração no MÉTODO AUTOCURA. Compartilhe com quem precisa.
            </p>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-white/50">© {new Date().getFullYear()} Escola Autocura. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
