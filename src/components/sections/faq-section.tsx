import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components";

const faqData = [
  {
    id: "aulas-iniciantes",
    question: "Vocês oferecem aulas de wakeboard para iniciantes?",
    answer:
      "Sim! Oferecemos aulas completas de wakeboard e wakeskate para iniciantes. Nossos instrutores qualificados acompanharão você durante todas as sessões, fornecendo orientações e suporte necessários para que você consiga ficar de pé na prancha com confiança. Não importa se você nunca praticou antes ou não sabe nadar bem, nossa equipe está preparada para atender pessoas de todos os níveis de habilidade. Nosso objetivo é garantir que você tenha uma experiência divertida, segura e memorável.",
  },
  {
    id: "horario-ideal",
    question: "Qual é o melhor horário para praticar wakeboard no Zuno Cable Park?",
    answer: "O melhor horário para praticar wakeboard no Zuno Cable Park é durante nosso horário de pico, das 10h às 16h. No entanto, estamos abertos de terça a domingo, oferecendo ótimas condições ao longo do dia."
  },
  {
    id: "idade-minima",
    question: "Qual é a idade mínima para a pratica do esporte?",
    answer:
      "Recomendamos que a atividade seja realizada por crianças a partir de 8 anos. No entanto, se a criança for mais nova e já tiver noções básicas de natação, ela também pode participar. Em caso de dúvidas, entre em contato conosco para obter mais informações sobre a segurança e a adequação para crianças menores.",
  },
  {
    id: "o-que-levar-e-vestir",
    question: "O que preciso levar e qual a melhor roupa para praticar?",
    answer:
      "Para uma sessão de wakeboard ou wakeskate, recomendamos trazer roupa de banho (como shorts de água, maiô ou biquíni), toalha, repelente de insetos e protetor solar. Se o tempo estiver frio, disponibilizamos roupas de borracha ou neoprene para aluguel, que proporcionam maior conforto e proteção contra a água fria. Caso prefira, você também pode trazer a sua própria. Não se esqueça de trazer também um espírito aventureiro e disposição para se divertir! Estamos ansiosos para recebê-lo e garantir que você tenha uma ótima experiência.",
  },
  {
    id: "diferenca-wakeboard-wakeskate",
    question: "Qual é a diferença entre wakeboard e wakeskate?",
    answer: "Wakeboard e wakeskate são esportes aquáticos similares, mas com algumas diferenças importantes. O wakeboard utiliza uma prancha com botas fixas, semelhante ao snowboard. Já o wakeskate é praticado em uma prancha sem fixação, parecido com um skate para água. No Zuno Cable Park, oferecemos a oportunidade de experimentar ambos os esportes."
  },
  {
    id: "reservar-para-eventos",
    question: "Posso reservar o espaço para eventos?",
    answer:
      "Sim, você pode reservar o Zuno Cable Park para eventos particulares. Entre em contato conosco para verificar a disponibilidade de datas e discutir os detalhes do seu evento. Nossa equipe está pronta para ajudá-lo a planejar um dia especial e inesquecível no nosso parque.",
  },
];

const FaqSection: React.FC = () => {
  return (
    <section className="g-section w-full z-0 py-8 flex flex-col items-center justify-start">
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
    </section>
  );
};

export default FaqSection;
