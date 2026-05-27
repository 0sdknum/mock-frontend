export type CaseStatus =
  | "active"
  | "waiting_docs"
  | "in_court"
  | "completed"
  | "paused";

export type CaseDocument = {
  id: string;
  name: string;
  type: "pdf" | "docx" | "jpg" | "xlsx";
  size: string;
  uploadedAt: string;
  status: "approved" | "pending" | "required";
};

export type CaseMessage = {
  id: string;
  from: "user" | "lawyer";
  text: string;
  time: string;
  date: string;
};

export type CaseStep = {
  id: string;
  label: string;
  date?: string;
  status: "done" | "current" | "upcoming";
};

export type Case = {
  id: string;
  title: string;
  type: "bankruptcy" | "divorce" | "alimony" | "paternity" | "property";
  status: CaseStatus;
  statusLabel: string;
  createdAt: string;
  updatedAt: string;
  lawyer: { name: string; title: string; initials: string };
  caseNumber: string;
  nextAction: string;
  steps: CaseStep[];
  documents: CaseDocument[];
  messages: CaseMessage[];
};

export const MOCK_CASES: Case[] = [
  {
    id: "c1",
    title: "Банкротство физического лица",
    type: "bankruptcy",
    status: "active",
    statusLabel: "В процессе",
    createdAt: "12 апр 2026",
    updatedAt: "25 мая 2026",
    caseNumber: "А40-112345/2026",
    lawyer: {
      name: "Алексей Петров",
      title: "Старший юрист по банкротству",
      initials: "АП",
    },
    nextAction: "Загрузить выписку из ЕГРП за последние 3 года",
    steps: [
      {
        id: "s1",
        label: "Анализ ситуации",
        date: "12 апр 2026",
        status: "done",
      },
      {
        id: "s2",
        label: "Сбор документов",
        date: "20 апр 2026",
        status: "done",
      },
      {
        id: "s3",
        label: "Подача заявления в суд",
        date: "5 мая 2026",
        status: "done",
      },
      {
        id: "s4",
        label: "Первое судебное заседание",
        date: "Назначено: 10 июн 2026",
        status: "current",
      },
      {
        id: "s5",
        label: "Реализация имущества / реструктуризация",
        status: "upcoming",
      },
      { id: "s6", label: "Списание долгов", status: "upcoming" },
    ],
    documents: [
      {
        id: "d1",
        name: "Заявление о банкротстве.docx",
        type: "docx",
        size: "48 КБ",
        uploadedAt: "5 мая 2026",
        status: "approved",
      },
      {
        id: "d2",
        name: "Справка о доходах 2-НДФЛ.pdf",
        type: "pdf",
        size: "124 КБ",
        uploadedAt: "20 апр 2026",
        status: "approved",
      },
      {
        id: "d3",
        name: "Список кредиторов.xlsx",
        type: "xlsx",
        size: "32 КБ",
        uploadedAt: "22 апр 2026",
        status: "approved",
      },
      {
        id: "d4",
        name: "Паспорт (разворот).jpg",
        type: "jpg",
        size: "2.1 МБ",
        uploadedAt: "15 апр 2026",
        status: "approved",
      },
      {
        id: "d5",
        name: "Выписка из ЕГРП.pdf",
        type: "pdf",
        size: "",
        uploadedAt: "",
        status: "required",
      },
      {
        id: "d6",
        name: "Выписка по счётам за 3 года.pdf",
        type: "pdf",
        size: "88 КБ",
        uploadedAt: "23 апр 2026",
        status: "pending",
      },
    ],
    messages: [
      {
        id: "m1",
        from: "lawyer",
        text: "Добрый день! Я получил ваши документы. Заявление подано в Арбитражный суд, номер дела А40-112345/2026. Первое заседание назначено на 10 июня.",
        time: "10:32",
        date: "5 мая 2026",
      },
      {
        id: "m2",
        from: "user",
        text: "Спасибо! Нужно ли мне присутствовать на первом заседании?",
        time: "11:05",
        date: "5 мая 2026",
      },
      {
        id: "m3",
        from: "lawyer",
        text: "Да, ваше присутствие обязательно. Нужно будет подтвердить личность и ответить на вопросы судьи. Я буду рядом — беспокоиться не о чём.",
        time: "11:18",
        date: "5 мая 2026",
      },
      {
        id: "m4",
        from: "lawyer",
        text: "Также просьба загрузить выписку из ЕГРП — она нужна для следующего этапа. Можно заказать онлайн через Госуслуги.",
        time: "14:02",
        date: "20 мая 2026",
      },
      {
        id: "m5",
        from: "user",
        text: "Хорошо, сделаю сегодня. А какой срок?",
        time: "16:44",
        date: "20 мая 2026",
      },
      {
        id: "m6",
        from: "lawyer",
        text: "Желательно до 1 июня — за 10 дней до заседания. Если возникнут трудности — напишите.",
        time: "17:01",
        date: "20 мая 2026",
      },
    ],
  },
  {
    id: "c2",
    title: "Расторжение брака с разделом имущества",
    type: "divorce",
    status: "waiting_docs",
    statusLabel: "Ожидание документов",
    createdAt: "3 мая 2026",
    updatedAt: "18 мая 2026",
    caseNumber: "2-3421/2026",
    lawyer: {
      name: "Екатерина Волкова",
      title: "Юрист по семейным делам",
      initials: "ЕВ",
    },
    nextAction: "Предоставить документы на совместно нажитое имущество",
    steps: [
      {
        id: "s1",
        label: "Первичная консультация",
        date: "3 мая 2026",
        status: "done",
      },
      {
        id: "s2",
        label: "Сбор документов",
        date: "В процессе",
        status: "current",
      },
      { id: "s3", label: "Составление искового заявления", status: "upcoming" },
      { id: "s4", label: "Подача в суд", status: "upcoming" },
      { id: "s5", label: "Судебные заседания", status: "upcoming" },
      { id: "s6", label: "Решение суда", status: "upcoming" },
    ],
    documents: [
      {
        id: "d1",
        name: "Свидетельство о браке.pdf",
        type: "pdf",
        size: "1.2 МБ",
        uploadedAt: "5 мая 2026",
        status: "approved",
      },
      {
        id: "d2",
        name: "Паспорта обоих супругов.pdf",
        type: "pdf",
        size: "4.5 МБ",
        uploadedAt: "5 мая 2026",
        status: "approved",
      },
      {
        id: "d3",
        name: "Документы на квартиру (ДДУ).pdf",
        type: "pdf",
        size: "",
        uploadedAt: "",
        status: "required",
      },
      {
        id: "d4",
        name: "Выписка из банка (совместный счёт).pdf",
        type: "pdf",
        size: "",
        uploadedAt: "",
        status: "required",
      },
      {
        id: "d5",
        name: "Свидетельство о рождении детей.jpg",
        type: "jpg",
        size: "800 КБ",
        uploadedAt: "7 мая 2026",
        status: "pending",
      },
    ],
    messages: [
      {
        id: "m1",
        from: "lawyer",
        text: "Добрый день! Документы по браку получила. Для раздела квартиры нужны документы о праве собственности — ДДУ или выписка из ЕГРН.",
        time: "09:15",
        date: "10 мая 2026",
      },
      {
        id: "m2",
        from: "user",
        text: "Квартира оформлена только на меня, но покупалась в браке. Это влияет на раздел?",
        time: "10:30",
        date: "10 мая 2026",
      },
      {
        id: "m3",
        from: "lawyer",
        text: "Да, это совместно нажитое имущество независимо от того, на кого оформлено. У вас есть хорошие шансы на равный раздел.",
        time: "11:02",
        date: "10 мая 2026",
      },
    ],
  },
  {
    id: "c3",
    title: "Взыскание алиментов на ребёнка",
    type: "alimony",
    status: "completed",
    statusLabel: "Завершено",
    createdAt: "15 янв 2026",
    updatedAt: "2 апр 2026",
    caseNumber: "2-891/2026",
    lawyer: {
      name: "Дмитрий Ларин",
      title: "Юрист по семейным делам",
      initials: "ДЛ",
    },
    nextAction: "Дело завершено. Исполнительный лист передан в ФССП.",
    steps: [
      {
        id: "s1",
        label: "Первичная консультация",
        date: "15 янв 2026",
        status: "done",
      },
      {
        id: "s2",
        label: "Сбор документов",
        date: "22 янв 2026",
        status: "done",
      },
      {
        id: "s3",
        label: "Подача заявления",
        date: "1 фев 2026",
        status: "done",
      },
      {
        id: "s4",
        label: "Судебное заседание",
        date: "15 мар 2026",
        status: "done",
      },
      {
        id: "s5",
        label: "Получение исполнительного листа",
        date: "2 апр 2026",
        status: "done",
      },
    ],
    documents: [
      {
        id: "d1",
        name: "Исковое заявление об алиментах.docx",
        type: "docx",
        size: "36 КБ",
        uploadedAt: "1 фев 2026",
        status: "approved",
      },
      {
        id: "d2",
        name: "Свидетельство о рождении.pdf",
        type: "pdf",
        size: "1.1 МБ",
        uploadedAt: "22 янв 2026",
        status: "approved",
      },
      {
        id: "d3",
        name: "Исполнительный лист.pdf",
        type: "pdf",
        size: "245 КБ",
        uploadedAt: "2 апр 2026",
        status: "approved",
      },
      {
        id: "d4",
        name: "Решение суда.pdf",
        type: "pdf",
        size: "512 КБ",
        uploadedAt: "20 мар 2026",
        status: "approved",
      },
    ],
    messages: [
      {
        id: "m1",
        from: "lawyer",
        text: "Суд вынес решение в вашу пользу — алименты назначены в размере 25% от дохода. Готовлю исполнительный лист.",
        time: "16:30",
        date: "15 мар 2026",
      },
      {
        id: "m2",
        from: "user",
        text: "Отлично! Что дальше?",
        time: "17:00",
        date: "15 мар 2026",
      },
      {
        id: "m3",
        from: "lawyer",
        text: "Исполнительный лист мы направим в ФССП — они начнут взыскание напрямую с работодателя. Дело закрыто, поздравляю!",
        time: "12:20",
        date: "2 апр 2026",
      },
    ],
  },
];

export function getCase(id: string): Case | undefined {
  return MOCK_CASES.find((c) => c.id === id);
}
