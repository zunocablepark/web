"use client";
import { motion } from "framer-motion";

import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components";

const faqData = [
  {
    id: "ficar-de-pe",
    question: "Quem nunca praticou consegue ficar de pé na prancha?",
    answer:
      "Sim! Temos instrutores qualificados que irão acompanhá-lo durante todas as sessões. Eles fornecerão todas as orientações e suporte necessários para que você consiga ficar de pé na prancha com confiança. Não importa se você é iniciante, nossa equipe está aqui para garantir que você tenha uma experiência divertida e segura.",
  },
  {
    id: "roupa-para-praticar",
    question: "Qual a melhor roupa para utilizar?",
    answer:
      "Para praticar wakeboard, recomendamos o uso de roupa de banho, como shorts de água, maiô ou biquíni. Se o tempo estiver frio, uma roupa de borracha ou neoprene pode proporcionar maior conforto e proteção contra a água fria. Lembre-se de trazer também uma toalha para se secar após a sessão.",
  },
  {
    id: "idade-minima",
    question: "Qual é a idade mínima para a pratica do esporte?",
    answer:
      "Recomendamos que a atividade seja realizada por crianças a partir de 8 anos. No entanto, se a criança for mais nova e já tiver noções básicas de natação, ela também pode participar. Em caso de dúvidas, entre em contato conosco para obter mais informações sobre a segurança e a adequação para crianças menores.",
  },
  {
    id: "o-que-levar",
    question: "O que preciso levar?",
    answer:
      "Para uma sessão de wakeboard, sugerimos que você traga roupa de banho, toalha, repelente de insetos e protetor solar para se proteger do sol. Além disso, é importante trazer um espírito aventureiro e disposição para se divertir! Estamos ansiosos para recebê-lo e garantir que você tenha uma ótima experiência.",
  },
  {
    id: "ensinamento",
    question:
      "Eu nunca fiz e não sei nadar direito, vai ter alguém para me ensinar?",
    answer:
      "Sim, nossos instrutores são especializados em atender pessoas de todos os níveis de habilidade, inclusive aquelas que não sabem nadar bem. Eles irão fornecer todas as instruções necessárias e garantir que você se sinta seguro e confortável na água. Nosso objetivo é tornar sua experiência agradável e memorável.",
  },
  {
    id: "reservar-para-eventos",
    question: "Posso reservar o espaço para eventos?",
    answer:
      "Sim, você pode reservar o Zuno Cable Park para eventos particulares. Entre em contato conosco para verificar a disponibilidade de datas e discutir os detalhes do seu evento. Nossa equipe está pronta para ajudá-lo a planejar um dia especial e inesquecível no nosso parque.",
  },
];

const FaqSection = () => {
  return (
    <motion.section
      className="g-section w-full z-0 py-8 flex flex-col items-center justify-start"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.1 }}
    >
      <h2 className="mb-4 flex w-full text-start text-5xl md:text-7xl text-green-500 font-black">
        FAQ
      </h2>
      <Accordion type="multiple" className="w-full flex flex-col">
        {faqData.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="text-start text-lg sm:text-xl md:text-2xl font-extrabold">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-slate-100 text-lg leading-6 md:text-xl font-semibold">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.section>
  );
};

export default FaqSection;
