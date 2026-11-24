import { SITE_CONFIG } from "./config";
import { Locale } from "./i18n";

export interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
  isDemo?: boolean;
}

export function getDemoChatbotReply(userMessage: string, locale: Locale = "en"): string {
  const q = userMessage.toLowerCase().trim();

  if (locale === "ru") {
    if (q.includes("курс") || q.includes("программ") || q.includes("есть")) {
      return "В LINGORA есть 4 основных курса:\n• General English (A1–C1 для общения)\n• IELTS Preparation (подготовка к экзамену)\n• Speaking Club (разговорная практика)\n• English for Kids (для детей 6–12 лет)\n\nХотите записаться?";
    }
    if (q.includes("ielts")) {
      return "Чтобы записаться на IELTS:\n1. Пройдите короткое определение уровня.\n2. Выберите утреннее, вечернее или выходное расписание.\n3. Заполните форму ниже или напишите нам в WhatsApp.";
    }
    if (q.includes("дет") || q.includes("ребен")) {
      return "Да! Курс English for Kids предназначен для детей 6–12 лет: игры, чтение и первые диалоги в дружелюбной атмосфере.";
    }
    if (q.includes("регистр") || q.includes("запис")) {
      return "Регистрация занимает меньше минуты: заполните форму внизу страницы (Имя, Телефон, Курс, Время) или нажмите кнопку WhatsApp.";
    }
    if (q.includes("связ") || q.includes("контакт") || q.includes("whatsapp")) {
      return `Вы можете написать нам прямо в WhatsApp (+992 88 554 1616), на почту ${SITE_CONFIG.displayEmail} или оставить заявку на сайте.`;
    }
    return "Спасибо за вопрос! (Демо-режим) Я могу рассказать о курсах General English, IELTS, Speaking Club, English for Kids и о том, как записаться.";
  }

  if (locale === "tj") {
    if (q.includes("курс") || q.includes("барном") || q.includes("доред")) {
      return "Дар LINGORA 4 курси асосӣ мавҷуд аст:\n• General English (A1–C1 барои муошират)\n• IELTS Preparation (омодагӣ ба имтиҳон)\n• Speaking Club (машқи гуфтугӯ)\n• English for Kids (барои кӯдакони 6–12 сола)\n\nМехоҳед номнавис шавед?";
    }
    if (q.includes("ielts")) {
      return "Барои ҳамроҳ шудан ба IELTS:\n1. Сатҳи забони худро санҷед.\n2. Вақти субҳ, шом ё рӯзҳои истироҳатро интихоб кунед.\n3. Формаи поёнро пур кунед ё ба WhatsApp нависед.";
    }
    if (q.includes("кӯдак")) {
      return "Бале! Курси English for Kids барои кӯдакони 6–12 сола бо бозиҳо, хониш ва суханронӣ дар муҳити дӯстона гузаронида мешавад.";
    }
    if (q.includes("номнавис") || q.includes("сабт")) {
      return "Номнавис шудан хеле осон аст: дар поёни саҳифа ном, рақами телефон, курс ва вақтро интихоб кунед ё тугмаи WhatsApp-ро пахш намоед.";
    }
    if (q.includes("тамос") || q.includes("рақам") || q.includes("whatsapp")) {
      return `Шумо метавонед тавассути WhatsApp (+992 88 554 1616), почтаи ${SITE_CONFIG.displayEmail} ё формаи сомона бо мо тамос гиред.`;
    }
    return "Ташаккур барои савол! (Реҷаи демо) Ман метавонам дар бораи курсҳои General English, IELTS, Speaking Club, English for Kids ва номнавис шудан маълумот диҳам.";
  }

  if (q.includes("course") || q.includes("offer") || q.includes("program")) {
    return (
      "We offer four core programs at LINGORA:\n" +
      "• General English (A1–C1 everyday communication)\n" +
      "• IELTS Preparation (exam strategies & mock tests)\n" +
      "• Speaking Club (fluency & real-world conversation)\n" +
      "• English for Kids (fun, interactive classes for ages 6–12)\n\n" +
      "Would you like to enroll in one of these courses?"
    );
  }
  if (q.includes("ielts")) {
    return "To join our IELTS Preparation track:\n1. Complete a quick level check.\n2. Choose Morning, Evening, or Weekend.\n3. Fill out the enrollment form or message us on WhatsApp.";
  }
  if (q.includes("kid") || q.includes("child")) {
    return "Yes! English for Kids is designed for ages 6–12 with games, storytelling, and phonics.";
  }
  if (q.includes("register") || q.includes("enroll") || q.includes("apply")) {
    return "Fill out the enrollment form at the bottom of the page or tap the green WhatsApp button to chat with admissions.";
  }
  if (q.includes("contact") || q.includes("phone") || q.includes("whatsapp")) {
    return `You can reach LINGORA (${SITE_CONFIG.location}) on WhatsApp (+992 88 554 1616) or via ${SITE_CONFIG.displayEmail}.`;
  }
  return "Thanks for your question! (Demo assistant mode) Ask me about General English, IELTS Preparation, Speaking Club, English for Kids, or how to register.";
}
