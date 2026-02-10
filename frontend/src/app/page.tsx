"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { FaFacebookF, FaInstagram, FaRegStar, FaWhatsapp, FaYoutube, FaEnvelope } from "react-icons/fa";
import autocuraLogo from "@/images/autocura.png";
import miniLogo from "@/images/logo-mini.png";

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

const cleansingSessions = {
  meditation: {
    title: "Meditação — Limpeza da Terra",
    facilitator: "Galyna Ilyuk",
    info: "22 de janeiro · 18h · 5€",
  },
  spiritual: {
    title: "Sessões de Limpeza Espiritual",
    details: [
      "13 de janeiro · 20h — Sofia Ralha",
      "15 de janeiro · 19h — Galyna Ilyuk",
      "23 de janeiro · 20h — Cristiana Cunha",
      "27 de janeiro · 20h — Maria Assunção",
      "30 de janeiro · 20h — Alcina Almeida",
    ],
    note: "Valor: 5€ por sessão (exceto dia 15 às 19h).",
  },
};

const januaryReasons = [
  "Sente que começa o ano cheio de intenções e volta rapidamente aos mesmos hábitos.",
  "Já fez terapias, cursos, retiros – mas padrões de culpa e auto-sabotagem insistem em voltar.",
  "Conhece o trabalho da Alex há anos e quer viver o MÉTODO AUTOCURA ao vivo.",
  "Anda a carregar tudo sozinho e deseja aprender a entregar o peso à Luz.",
  "Vive em Braga (ou perto) e não quer chegar ao fim do ano com a mesma sensação de cansaço.",
];

const faqs = [
  {
    question: "Nunca fiz nada com a Alex. Este evento é para mim?",
    answer:
      "Sim. O janeiro em Braga foi pensado tanto para quem já conhece Alexandra Solnado quanto para quem terá o primeiro contacto com o MÉTODO AUTOCURA, com encontros introdutórios e acolhimento.",
  },
  {
    question: "E se só puder ir a um ou dois encontros?",
    answer:
      "Pode adquirir bilhetes avulsos e escolher exactamente onde quer estar. Se sentir que quer o ciclo completo, fale com a equipa para atualizar para o PASSE (mediante vagas).",
  },
  {
    question: "O PASSE inclui todo o calendário?",
    answer:
      "O PASSE AUTOCURA – BRAGA cobre o ciclo principal de encontros do MÉTODO AUTOCURA. Iniciativas AUTOCURA PARA CRIANÇAS, o workshop Comer, Sentir e Curar e sessões de Limpeza têm inscrição própria.",
  },
  {
    question: "Não me considero muito espiritual. Posso ir?",
    answer:
      "Claro. O MÉTODO AUTOCURA trabalha desafios reais — emoções, padrões e decisões concretas. Não é preciso experiência prévia, apenas sentir o chamado para cuidar de si.",
  },
  {
    question: "E se surgir um imprevisto?",
    answer:
      "A política é definida pela Escola AUTOCURA e procura oferecer alternativas justas (reagendamento ou crédito noutra iniciativa). Em caso de dúvida, contacte +351 913 240 700.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f5f1eb] via-[#f1f7fb] to-[#e7f8ff] text-[#0f2a3a]">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col gap-20 px-6 pb-24 pt-16 sm:pt-20">
        <motion.header
          className="flex flex-col gap-4 border-b border-[#d4e6ee] pb-6 text-sm text-[#457897] md:flex-row md:items-center md:justify-between"
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
          <nav className="flex flex-wrap items-center justify-center gap-4 md:justify-end">
            {["Início", "Cursos", "Loja", "Quem Somos", "Contato"].map((item) => (
              <a key={item} href="#" className="transition hover:text-[#f57d3e]">
                {item}
              </a>
            ))}
          </nav>
        </motion.header>

        <div className="relative w-full -mt-6 sm:-mt-8">
          <div className="pointer-events-none absolute inset-y-0 left-1/2 z-0 w-[120vw] -translate-x-1/2 rounded-[48px] bg-[radial-gradient(circle,_rgba(232,251,255,1)_0%,_rgba(232,251,255,0.85)_45%,_rgba(232,251,255,0)_100%)]" />
          <motion.section
            className="relative z-10 grid gap-12 p-8 lg:grid-cols-2 lg:items-center"
            initial="hidden"
            animate="visible"
            variants={breezeIn}
          >
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-center text-4xl font-semibold leading-tight sm:text-5xl">
                  <span className="text-[#f57d3e]">AUTOCURA</span>{" "}
                  <span className="text-[#0c3650]">EM</span>
                  <br className="hidden sm:block" />
                  <span className="text-[#0c3650]">DIGRESSÃO ·</span>{" "}
                  <span className="text-[#2ab0c7]">BRAGA</span>
                </h1>
                <p>
                  Se vive em Braga e está cansad@ de começar o ano sempre da mesma forma, este janeiro é para limpar o que o trava e alinhar a sua vida com a sua alma — sem sair da cidade.
                </p>
                <p className="text-center lg:text-left">
                  <strong>De 12 de janeiro a 1 de fevereiro de 2026</strong>, a Escola AUTOCURA traz para o espaço Caminhos Prá Saúde um ciclo de encontros presenciais com o MÉTODO AUTOCURA.
                </p>
                <p>
                  <strong>Pode entrar por um encontro único ou viver o ciclo completo com o PASSE AUTOCURA – BRAGA.</strong>
                </p>
              </div>
              <ul className="space-y-2">
                {heroBullets.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#1a455e]">
                    <FaRegStar className="mt-1 text-[#f57d3e]" />
                    <span className="italic">{item.replace(/^•\s*/, "")}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm text-[#1a455e]">
                <strong>Clique abaixo, veja as opções de participação e reserve o lugar que a sua alma está a pedir.</strong>
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="#"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f36a19] via-[#f57d3e] to-[#f6b658] px-6 py-3 text-base font-semibold text-[#24150d] shadow-lg shadow-[#f57d3e]/40 transition hover:-translate-y-0.5"
                >
                  PROGRAMAÇÃO AUTOCURA EM DIGRESSÃO · BRAGA
                </a>
              </div>
            </div>

            <motion.div
              className="relative hidden h-full w-full items-center justify-center lg:flex lg:justify-end lg:pr-6"
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
              <div className="relative h-[605px] w-[511px]">
                <Image src={autocuraLogo} alt="Arte Escola Autocura" fill className="object-cover" priority />
              </div>
            </motion.div>
          </motion.section>
        </div>

        <section className="grid gap-8 rounded-[32px] bg-white/80 p-8 shadow-inner shadow-[#dcebf3] lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ea8f3c]">
              Presença viva da Escola
            </p>
            <h2 className="text-3xl font-semibold text-[#0c3650]">
              O que acontece quando a Escola AUTOCURA desce à cidade
            </h2>
            <p>
              AUTOCURA EM DIGRESSÃO é a presença viva da Escola AUTOCURA nas cidades. Durante janeiro, Braga recebe um ciclo completo de práticas e encontros do MÉTODO AUTOCURA, para quem deseja aprofundar a sua autocura pessoal com segurança e rigor.
            </p>
            <p>
              Na prática, significa ter um mês inteiro com terapeutas, práticas e encontros pensados para libertar peso emocional, quebrar padrões repetidos e alinhar a vida com a alma.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <motion.div
            className="space-y-2 text-center"
            initial={{ opacity: 0, x: -30, y: 25, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ea8f3c]">
              Programação · Jan 2026
            </p>
            <h2 className="text-3xl font-semibold text-[#0c3650]">Experiências e workshops especiais</h2>
          </motion.div>
          <div className="space-y-6">
            {programHighlights.map((item, idx) => (
              <motion.div
                key={item.title}
                className={`space-y-2 border-b border-white/40 pb-4 md:flex md:flex-col ${
                  idx % 2 === 0 ? "md:items-start md:text-left" : "md:items-end md:text-right"
                }`}
                initial={{
                  opacity: 0,
                  x: idx % 2 === 0 ? 60 : -60,
                  y: 20,
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <h3 className="text-2xl font-semibold text-[#0c3650]">{item.title}</h3>
                <p className="font-semibold text-[#1a455e]">{item.host}</p>
                <div className="space-y-1 text-sm text-[#1a455e]">
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
            ))}
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-6 rounded-[32px] border border-[#d4e6ee] bg-white/85 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ea8f3c]">
              Meditações & Limpezas
            </p>
            <div className="rounded-2xl border border-[#f6b658]/40 bg-[#fff8f1] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f57d3e]">
                {cleansingSessions.meditation.title}
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-[#0c3650]">Com {cleansingSessions.meditation.facilitator}</h3>
              <p className="mt-2 text-sm text-[#1a455e]">{cleansingSessions.meditation.info}</p>
            </div>
            <div className="rounded-2xl border border-[#5bc7d4]/40 bg-[#f1fbff] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#5bc7d4]">
                {cleansingSessions.spiritual.title}
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[#1a455e]">
                {cleansingSessions.spiritual.details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span className="text-[#f57d3e]">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs font-semibold text-[#0c3650]">{cleansingSessions.spiritual.note}</p>
            </div>
          </div>
          <div className="space-y-6 rounded-[32px] border border-[#d4e6ee] bg-white/85 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ea8f3c]">
              Experiências além do extraordinário
            </p>
            <div className="rounded-2xl border border-[#5bc7d4]/40 bg-[#f1fbff] p-5 text-sm text-[#1a455e]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#5bc7d4]">
                OPEN DAY AUTOCURA® — GRATUITO
              </p>
              <p className="mt-2">
                Viva o método ao vivo com sessões de Autocura / Autoterapia.
              </p>
              <p className="mt-2 font-semibold text-[#0c3650]">17 e 31 de janeiro · 14h a 21h</p>
            </div>
            <div className="rounded-2xl border border-[#f6b658]/40 bg-[#fff8f1] p-5 text-sm text-[#1a455e]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f57d3e]">
                Nota Importante
              </p>
              <p className="mt-2">
                A programação pode ajustar-se por motivos de força maior. Como todo processo vivo, há espaço para o inesperado — porque a verdadeira transformação também acontece fora do plano.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-8 rounded-[32px] bg-[#0c3650] px-8 py-10 text-white lg:grid-cols-[1.1fr,0.9fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#f6b658]">
              Este janeiro é para si se...
            </p>
            <h2 className="text-3xl font-semibold">Reconhece-se em pelo menos uma destas frases?</h2>
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
              className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-[#f36a19] via-[#f57d3e] to-[#f6b658] px-6 py-3 text-base font-semibold text-[#24150d] shadow-lg shadow-[#f57d3e]/40"
            >
              Quero reservar o meu lugar
            </a>
          </div>
        </section>

        <section className="space-y-6">
          <div className="space-y-2">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#ea8f3c]">Perguntas frequentes</p>
            <h2 className="text-3xl font-semibold text-[#0c3650]">
              Tudo o que precisa de saber antes de dizer “sim”
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[24px] border border-[#d4e6ee] bg-white/90 p-5 text-sm text-[#1a455e]"
              >
                <summary className="cursor-pointer list-none text-base font-semibold text-[#0c3650]">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm leading-relaxed">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </div>

      <footer className="mt-20 rounded-t-[48px] bg-gradient-to-br from-[#0c2740] via-[#0b3a54] to-[#0c4d6b] px-6 py-12 text-white">
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
