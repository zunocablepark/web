import { PHONE_WPP } from "./constants";

const phone = PHONE_WPP;

export const scheduleSessionMessage =
  "Oi, pessoal do Zuno! Quero agendar uma sessão de wake com vocês!\n\n" +
  "*Data e Horário*: \n" +
  "*Duração*: [X sessões de 15min]\n" +
  "*Quantidade de Pessoas*: \n\n" +
  "Poderiam me confirmar se tem disponibilidade e qual será o valor?\n\n" +
  "Equipamentos:\n" +
  "[ ] Precisarei alugar de vocês\n" +
  "[ ] Levarei o próprio\n\n" +
  "Muito obrigado!";

export const generalInquiryMessage =
  "Olá, pessoal do Zuno!\n\n" +
  "Gostaria de obter mais informações sobre o espaço e os serviços oferecidos por vocês.\n" +
  "Poderiam me informar sobre as opções de horários, preços e disponibilidade?\n\n" +
  "Agradeço desde já pela atenção e aguardo retorno.";

const generateWhatsappLink = (message: string) => {
  const encodedMessage = encodeURIComponent(message).replace(/%20/g, '+').replace(/%0A/g, '%0A');
  return `https://wa.me/${phone}?text=${encodedMessage}`;
};

export const sessionLink = generateWhatsappLink(scheduleSessionMessage);

export const inquiryLink = generateWhatsappLink(generalInquiryMessage);
