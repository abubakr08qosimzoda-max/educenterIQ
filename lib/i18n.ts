export type Locale = "en" | "ru" | "tj";

export const LOCALES: { code: Locale; label: string; native: string }[] = [
  { code: "en", label: "EN", native: "English" },
  { code: "ru", label: "RU", native: "Русский" },
  { code: "tj", label: "TJ", native: "Тоҷикӣ" },
];

export interface TranslationContent {
  nav: {
    home: string;
    about: string;
    courses: string;
    teachers: string;
    contact: string;
    applyNow: string;
  };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    titleAccent: string;
    subtitle: string;
    exploreCourses: string;
    watchVideo: string;
    speechBubble: string;
    notebookTop: string;
    notebookBottom: string;
    scrollDown: string;
    videoModalTag: string;
    videoModalTitle: string;
    videoModalDesc: string;
    videoModalNote: string;
    videoModalCta: string;
  };
  about: {
    titlePrefix: string;
    titleAccent: string;
    body: string;
    cta: string;
    card1: string;
    card2: string;
    card3: string;
  };
  courses: {
    badge: string;
    titleLine1: string;
    titleLine2Prefix: string;
    titleAccent: string;
    subtitle: string;
    viewAll: string;
    learnMore: string;
    scheduleLabel: string;
    enrollIn: string;
    items: {
      id: string;
      title: string;
      description: string;
      level: string;
      schedule: string;
      highlights: string[];
    }[];
  };
  journey: {
    badge: string;
    titlePrefix: string;
    titleAccent: string;
    steps: { number: string; title: string; description: string }[];
  };
  teachers: {
    badge: string;
    titlePrefix: string;
    titleAccent: string;
    demoNote: string;
    expertLabel: string;
    items: { id: string; name: string; role: string }[];
  };
  stats: {
    badge: string;
    sampleNote: string;
    items: { label: string }[];
  };
  testimonials: {
    badge: string;
    titlePrefix: string;
    titleAccent: string;
    sampleNote: string;
    items: { quote: string; author: string; course: string }[];
  };
  cta: {
    titleLine1: string;
    titleLine2Prefix: string;
    titleAccent: string;
    subtitle: string;
    button: string;
  };
  form: {
    heading: string;
    fullNameLabel: string;
    fullNamePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    courseLabel: string;
    coursePlaceholder: string;
    timeLabel: string;
    timePlaceholder: string;
    submit: string;
    submitting: string;
    successTitle: string;
    successBody: string;
    submitAnother: string;
    errors: {
      fullName: string;
      phone: string;
      course: string;
      preferredTime: string;
    };
    times: string[];
  };
  footer: {
    tagline: string;
    quickLinks: string;
    coursesTitle: string;
    contactUs: string;
    followUs: string;
    rights: string;
    privacy: string;
    terms: string;
  };
  floating: {
    whatsappTooltip: string;
    chatbotTooltip: string;
    assistantTitle: string;
    assistantSubtitle: string;
    welcome: string;
    suggestedLabel: string;
    suggestedQuestions: string[];
    inputPlaceholder: string;
  };
}

export const TRANSLATIONS: Record<Locale, TranslationContent> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      courses: "Courses",
      teachers: "Teachers",
      contact: "Contact",
      applyNow: "Apply Now",
    },
    hero: {
      badge: "English Language Academy",
      titleLine1: "ENGLISH IS",
      titleLine2: "YOUR NEXT",
      titleAccent: "SUPERPOWER.",
      subtitle:
        "Discover a better way to learn English. Build confidence, open new opportunities.",
      exploreCourses: "Explore Courses",
      watchVideo: "Watch Video",
      speechBubble: "Your Future Starts Here!",
      notebookTop: "Learn English",
      notebookBottom: "Open Your World",
      scrollDown: "Scroll Down",
      videoModalTag: "Academy Overview",
      videoModalTitle: "Welcome to LINGORA",
      videoModalDesc:
        "Experience interactive small-group English lessons, certified mentors, and speaking-first practice designed to help you speak confidently.",
      videoModalNote:
        "Demo video preview placeholder — ready for your academy intro video embed.",
      videoModalCta: "Book a Free Trial Lesson",
    },
    about: {
      titlePrefix: "MORE THAN LEARNING.",
      titleAccent: "IT'S A NEW WAY OF THINKING.",
      body: "At Lingora, we believe learning English should be exciting, practical, and full of possibilities. Every lesson blends real conversation, structured milestones, and supportive coaching.",
      cta: "About Our Academy",
      card1: "Learn",
      card2: "Grow",
      card3: "Achieve",
    },
    courses: {
      badge: "Our Courses",
      titleLine1: "FIND YOUR PATH.",
      titleLine2Prefix: "FIND YOUR",
      titleAccent: "VOICE.",
      subtitle: "Choose the perfect course and start your journey today.",
      viewAll: "View All Courses",
      learnMore: "Learn More",
      scheduleLabel: "Schedule",
      enrollIn: "Enroll Now",
      items: [
        {
          id: "general-english",
          title: "General English",
          description: "Build strong English skills for everyday communication.",
          level: "Beginner to Advanced (A1–C1)",
          schedule: "3x per week • Morning & Evening",
          highlights: [
            "Structured grammar, vocabulary, and listening",
            "Interactive real-life conversation practice",
            "Small groups with regular progress check-ins",
          ],
        },
        {
          id: "ielts-preparation",
          title: "IELTS Preparation",
          description: "Prepare confidently for your IELTS exam.",
          level: "Target Band 6.5–8.5",
          schedule: "3x per week • Intensive & Weekend",
          highlights: [
            "Full mock tests under real exam timing",
            "Writing Task 1 & 2 feedback from specialists",
            "Speaking interviews with score-boosting strategies",
          ],
        },
        {
          id: "speaking-club",
          title: "Speaking Club",
          description: "Practice speaking and be confident.",
          level: "Pre-Intermediate+ (A2–C1)",
          schedule: "2x per week • Evening & Saturday",
          highlights: [
            "Debates, role-plays, and real-world topics",
            "Pronunciation and natural fluency coaching",
            "Supportive, zero-fear speaking environment",
          ],
        },
        {
          id: "english-for-kids",
          title: "English for Kids",
          description: "Make learning fun and enjoyable.",
          level: "Ages 6–12",
          schedule: "2–3x per week • After-School",
          highlights: [
            "Games, storytelling, and visual activities",
            "Phonics, reading confidence, and early speaking",
            "Friendly instructors trained for young learners",
          ],
        },
      ],
    },
    journey: {
      badge: "Your Journey",
      titlePrefix: "SMALL STEPS.",
      titleAccent: "BIG RESULTS.",
      steps: [
        { number: "01", title: "Discover", description: "Find your level" },
        { number: "02", title: "Learn", description: "Build skills" },
        { number: "03", title: "Practice", description: "Speak confidently" },
        { number: "04", title: "Achieve", description: "Reach your goals" },
      ],
    },
    teachers: {
      badge: "Our Teachers",
      titlePrefix: "LEARN WITH PEOPLE WHO",
      titleAccent: "INSPIRE.",
      demoNote:
        "* Fictional demo profiles shown for preview until replaced with verified instructor bios.",
      expertLabel: "Expert Teachers",
      items: [
        { id: "sarah-mitchell", name: "Sarah Mitchell", role: "General English" },
        { id: "david-wilson", name: "David Wilson", role: "IELTS Expert" },
        { id: "emily-carter", name: "Emily Carter", role: "Speaking Coach" },
      ],
    },
    stats: {
      badge: "Our Impact",
      sampleNote: "* Sample academy metrics shown for preview.",
      items: [
        { label: "Students" },
        { label: "Teachers" },
        { label: "Programs" },
        { label: "Satisfaction" },
      ],
    },
    testimonials: {
      badge: "Testimonials",
      titlePrefix: "REAL STORIES.",
      titleAccent: "REAL PROGRESS.",
      sampleNote: "* Sample student reviews for layout preview.",
      items: [
        {
          quote:
            "Lingora changed my life. Now I speak English confidently and work internationally!",
          author: "Maria S.",
          course: "IELTS & Speaking Club",
        },
        {
          quote:
            "The small-group speaking sessions helped me overcome hesitation and reach my target IELTS band.",
          author: "Amir K.",
          course: "IELTS Preparation",
        },
        {
          quote:
            "Every lesson feels practical and engaging. My daughter looks forward to her English class every week.",
          author: "Elena R.",
          course: "English for Kids",
        },
      ],
    },
    cta: {
      titleLine1: "YOUR ENGLISH",
      titleLine2Prefix: "JOURNEY STARTS",
      titleAccent: "HERE.",
      subtitle: "Take the first step toward a more confident future.",
      button: "Get Started Today",
    },
    form: {
      heading: "LET'S START SOMETHING GREAT.",
      fullNameLabel: "Full Name",
      fullNamePlaceholder: "Full Name",
      phoneLabel: "Phone Number",
      phonePlaceholder: "Phone Number",
      courseLabel: "Select Course",
      coursePlaceholder: "Select Course",
      timeLabel: "Preferred Time",
      timePlaceholder: "Preferred Time",
      submit: "Apply Now",
      submitting: "Submitting...",
      successTitle: "Application Preview Received",
      successBody:
        "Thank you! Your inquiry is validated. Connect a backend endpoint or tap WhatsApp to finalize your enrollment.",
      submitAnother: "Submit Another Inquiry",
      errors: {
        fullName: "Please enter your full name.",
        phone: "Enter a valid phone number (7–15 digits).",
        course: "Please select a course.",
        preferredTime: "Please choose a preferred learning time.",
      },
      times: [
        "Morning (09:00 – 12:00)",
        "Afternoon (14:00 – 17:00)",
        "Evening (18:00 – 20:30)",
        "Weekend Intensive",
      ],
    },
    footer: {
      tagline: "Learn English. Open Your World.",
      quickLinks: "Quick Links",
      coursesTitle: "Courses",
      contactUs: "Contact Us",
      followUs: "Follow Us",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    floating: {
      whatsappTooltip: "Chat on WhatsApp",
      chatbotTooltip: "Ask AI Assistant",
      assistantTitle: "LINGORA Assistant",
      assistantSubtitle: "Demo Mode • Course & Enrollment Help",
      welcome:
        "Hello! Welcome to LINGORA. I'm your AI assistant. How can I help you today?",
      suggestedLabel: "Suggested questions",
      suggestedQuestions: [
        "What English courses do you offer?",
        "How can I join IELTS classes?",
        "Do you offer English for kids?",
        "How can I register?",
        "How can I contact the academy?",
      ],
      inputPlaceholder: "Ask about courses, IELTS, or registration...",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "О нас",
      courses: "Курсы",
      teachers: "Преподаватели",
      contact: "Контакты",
      applyNow: "Записаться",
    },
    hero: {
      badge: "Академия английского языка",
      titleLine1: "АНГЛИЙСКИЙ —",
      titleLine2: "ВАША НОВАЯ",
      titleAccent: "СУПЕРСИЛА.",
      subtitle:
        "Откройте лучший способ изучения английского. Развивайте уверенность и открывайте новые возможности.",
      exploreCourses: "Смотреть курсы",
      watchVideo: "Смотреть видео",
      speechBubble: "Ваше будущее начинается здесь!",
      notebookTop: "Учи английский",
      notebookBottom: "Открой свой мир",
      scrollDown: "Листайте вниз",
      videoModalTag: "Обзор академии",
      videoModalTitle: "Добро пожаловать в LINGORA",
      videoModalDesc:
        "Интерактивные занятия в мини-группах, сертифицированные преподаватели и практика разговорной речи с первого дня.",
      videoModalNote:
        "Демо-окно видеопревью — готово для встраивания видео вашей академии.",
      videoModalCta: "Записаться на пробный урок",
    },
    about: {
      titlePrefix: "БОЛЬШЕ ЧЕМ ОБУЧЕНИЕ.",
      titleAccent: "ЭТО НОВЫЙ СПОСОБ МЫШЛЕНИЯ.",
      body: "В Lingora мы верим, что изучение английского должно быть увлекательным, практичным и полным возможностей. Каждый урок сочетает живое общение, чёткую программу и поддержку наставника.",
      cta: "О нашей академии",
      card1: "Учись",
      card2: "Расти",
      card3: "Достигай",
    },
    courses: {
      badge: "Наши курсы",
      titleLine1: "НАЙДИ СВОЙ ПУТЬ.",
      titleLine2Prefix: "ОБРЕТИ СВОЙ",
      titleAccent: "ГОЛОС.",
      subtitle: "Выберите подходящий курс и начните обучение уже сегодня.",
      viewAll: "Все курсы",
      learnMore: "Подробнее",
      scheduleLabel: "Расписание",
      enrollIn: "Записаться на курс",
      items: [
        {
          id: "general-english",
          title: "General English",
          description: "Крепкие навыки английского для повседневного общения.",
          level: "От начального до продвинутого (A1–C1)",
          schedule: "3 раза в неделю • Утро и вечер",
          highlights: [
            "Системная грамматика, лексика и аудирование",
            "Живая практика разговорных ситуаций",
            "Малые группы и регулярный контроль прогресса",
          ],
        },
        {
          id: "ielts-preparation",
          title: "IELTS Preparation",
          description: "Уверенная подготовка к сдаче экзамена IELTS.",
          level: "Целевой балл 6.5–8.5",
          schedule: "3 раза в неделю • Интенсив и выходные",
          highlights: [
            "Полные пробные тесты в формате реального экзамена",
            "Разбор Writing Task 1 и 2 с экспертом",
            "Тренировка Speaking и стратегии повышения балла",
          ],
        },
        {
          id: "speaking-club",
          title: "Speaking Club",
          description: "Практикуйте речь и говорите уверенно.",
          level: "От Pre-Intermediate и выше (A2–C1)",
          schedule: "2 раза в неделю • Вечер и суббота",
          highlights: [
            "Дебаты, ролевые игры и актуальные темы",
            "Постановка произношения и беглости речи",
            "Дружелюбная атмосфера без языкового барьера",
          ],
        },
        {
          id: "english-for-kids",
          title: "English for Kids",
          description: "Сделаем обучение весёлым и интересным.",
          level: "Возраст 6–12 лет",
          schedule: "2–3 раза в неделю • После школы",
          highlights: [
            "Игры, истории и наглядные задания",
            "Фонетика, уверенное чтение и первые диалоги",
            "Заботливые преподаватели с опытом работы с детьми",
          ],
        },
      ],
    },
    journey: {
      badge: "Ваш путь",
      titlePrefix: "МАЛЕНЬКИЕ ШАГИ.",
      titleAccent: "БОЛЬШИЕ РЕЗУЛЬТАТЫ.",
      steps: [
        { number: "01", title: "Оценка", description: "Узнайте свой уровень" },
        { number: "02", title: "Обучение", description: "Развивайте навыки" },
        { number: "03", title: "Практика", description: "Говорите уверенно" },
        { number: "04", title: "Результат", description: "Достигайте целей" },
      ],
    },
    teachers: {
      badge: "Преподаватели",
      titlePrefix: "УЧИТЕСЬ У ТЕХ, КТО",
      titleAccent: "ВДОХНОВЛЯЕТ.",
      demoNote:
        "* Показаны демонстрационные профили преподавателей для предпросмотра.",
      expertLabel: "Опытные наставники",
      items: [
        { id: "sarah-mitchell", name: "Sarah Mitchell", role: "Общий английский" },
        { id: "david-wilson", name: "David Wilson", role: "Эксперт IELTS" },
        { id: "emily-carter", name: "Emily Carter", role: "Тренер разговорной речи" },
      ],
    },
    stats: {
      badge: "Наши результаты",
      sampleNote: "* Демонстрационные показатели академии.",
      items: [
        { label: "Студентов" },
        { label: "Преподавателей" },
        { label: "Программ" },
        { label: "Довольных учеников" },
      ],
    },
    testimonials: {
      badge: "Отзывы",
      titlePrefix: "РЕАЛЬНЫЕ ИСТОРИИ.",
      titleAccent: "РЕАЛЬНЫЙ ПРОГРЕСС.",
      sampleNote: "* Примеры отзывов для демонстрации макета.",
      items: [
        {
          quote:
            "Lingora изменила мою жизнь. Теперь я свободно говорю по-английски и работаю в международной компании!",
          author: "Мария С.",
          course: "IELTS и Speaking Club",
        },
        {
          quote:
            "Занятия в разговорном клубе помогли мне преодолеть стеснение и получить нужный балл IELTS.",
          author: "Амир К.",
          course: "IELTS Preparation",
        },
        {
          quote:
            "Каждый урок проходит живо и полезно. Моя дочь с радостью ждёт каждое занятие.",
          author: "Елена Р.",
          course: "English for Kids",
        },
      ],
    },
    cta: {
      titleLine1: "ВАШ ПУТЬ В АНГЛИЙСКОМ",
      titleLine2Prefix: "НАЧИНАЕТСЯ",
      titleAccent: "ЗДЕСЬ.",
      subtitle: "Сделайте первый шаг к уверенному будущему.",
      button: "Начать сегодня",
    },
    form: {
      heading: "ДАВАЙТЕ НАЧНЁМ ВМЕСТЕ.",
      fullNameLabel: "Имя и фамилия",
      fullNamePlaceholder: "Имя и фамилия",
      phoneLabel: "Номер телефона",
      phonePlaceholder: "+992 ...",
      courseLabel: "Выберите курс",
      coursePlaceholder: "Выберите курс",
      timeLabel: "Удобное время",
      timePlaceholder: "Удобное время",
      submit: "Оставить заявку",
      submitting: "Отправка...",
      successTitle: "Заявка проверена",
      successBody:
        "Спасибо! Ваши данные проверены. Для быстрой связи также нажмите кнопку WhatsApp.",
      submitAnother: "Отправить ещё заявку",
      errors: {
        fullName: "Введите ваше имя и фамилию.",
        phone: "Введите корректный номер телефона (7–15 цифр).",
        course: "Пожалуйста, выберите курс.",
        preferredTime: "Выберите удобное время занятий.",
      },
      times: [
        "Утро (09:00 – 12:00)",
        "День (14:00 – 17:00)",
        "Вечер (18:00 – 20:30)",
        "Интенсив выходного дня",
      ],
    },
    footer: {
      tagline: "Учи английский. Открой свой мир.",
      quickLinks: "Навигация",
      coursesTitle: "Курсы",
      contactUs: "Контакты",
      followUs: "Мы в соцсетях",
      rights: "Все права защищены.",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
    },
    floating: {
      whatsappTooltip: "Написать в WhatsApp",
      chatbotTooltip: "Спросить AI-помощника",
      assistantTitle: "Помощник LINGORA",
      assistantSubtitle: "Демо-режим • Вопросы о курсах",
      welcome:
        "Здравствуйте! Добро пожаловать в LINGORA. Я ваш AI-помощник. Чем могу помочь?",
      suggestedLabel: "Популярные вопросы",
      suggestedQuestions: [
        "Какие курсы английского у вас есть?",
        "Как записаться на IELTS?",
        "Есть ли английский для детей?",
        "Как пройти регистрацию?",
        "Как связаться с академией?",
      ],
      inputPlaceholder: "Спросите о курсах, IELTS или записи...",
    },
  },
  tj: {
    nav: {
      home: "Асосӣ",
      about: "Дар бораи мо",
      courses: "Курсҳо",
      teachers: "Омӯзгорон",
      contact: "Тамос",
      applyNow: "Номнавис шудан",
    },
    hero: {
      badge: "Академияи забони англисӣ",
      titleLine1: "АНГЛИСӢ —",
      titleLine2: "ҚУВВАИ НАВИ",
      titleAccent: "ШУМОСТ.",
      subtitle:
        "Роҳи беҳтари омӯзиши забони англисиро кашф кунед. Эътимод ба худ созед ва имкониятҳои навро кушоед.",
      exploreCourses: "Дидани курсҳо",
      watchVideo: "Тамошои видео",
      speechBubble: "Ояндаи шумо аз ин ҷо оғоз мешавад!",
      notebookTop: "Англисиро омӯзед",
      notebookBottom: "Ҷаҳонро кушоед",
      scrollDown: "Ба поён фароед",
      videoModalTag: "Шиносоӣ бо академия",
      videoModalTitle: "Хуш омадед ба LINGORA",
      videoModalDesc:
        "Дарсҳои интерактивӣ дар гурӯҳҳои хурд, омӯзгорони ботаҷриба ва машқҳои гуфтугӯӣ аз рӯзи аввал.",
      videoModalNote:
        "Пешнамоиши видеои демо — барои гузоштани видеои академия омода аст.",
      videoModalCta: "Сабти ном ба дарси озмоишӣ",
    },
    about: {
      titlePrefix: "БЕШТАР АЗ ОМӮЗИШ.",
      titleAccent: "ИН ТАРЗИ НАВИ ТАФАККУР АСТ.",
      body: "Дар Lingora мо бовар дорем, ки омӯзиши забони англисӣ бояд ҷолиб, амалӣ ва пур аз имконият бошад. Ҳар як дарс гуфтугӯи зинда, барномаи дақиқ ва дастгирии устодонро дар бар мегирад.",
      cta: "Дар бораи академия",
      card1: "Омӯз",
      card2: "Рушд кун",
      card3: "Муваффақ шав",
    },
    courses: {
      badge: "Курсҳои мо",
      titleLine1: "РОҲИ ХУДРО ЁБЕД.",
      titleLine2Prefix: "ОВОЗИ ХУДРО",
      titleAccent: "ПАЙДО КУНЕД.",
      subtitle: "Курси мувофиқро интихоб кунед ва имрӯз оғоз намоед.",
      viewAll: "Ҳамаи курсҳо",
      learnMore: "Маълумоти бештар",
      scheduleLabel: "Ҷадвали дарсҳо",
      enrollIn: "Номнавис шудан",
      items: [
        {
          id: "general-english",
          title: "General English",
          description: "Дониши устувори англисӣ барои муоширати ҳаррӯза.",
          level: "Аз ибтидоӣ то пешрафта (A1–C1)",
          schedule: "3 бор дар ҳафта • Субҳ ва шом",
          highlights: [
            "Грамматикаи мураттаб, луғат ва шунидан",
            "Машқҳои зиндаи муоширати ҳаррӯза",
            "Гурӯҳҳои хурд ва санҷиши доимии пешрафт",
          ],
        },
        {
          id: "ielts-preparation",
          title: "IELTS Preparation",
          description: "Бо эътимоди комил ба имтиҳони IELTS омода шавед.",
          level: "Ҳадаф: Band 6.5–8.5",
          schedule: "3 бор дар ҳафта • Интенсив ва рӯзҳои истироҳат",
          highlights: [
            "Имтиҳонҳои озмоишӣ дар шароити воқеӣ",
            "Санҷиши Writing Task 1 ва 2 бо мутахассис",
            "Машқи Speaking бо усулҳои баландбардории балл",
          ],
        },
        {
          id: "speaking-club",
          title: "Speaking Club",
          description: "Бештар сухан гӯед ва озодона муошират кунед.",
          level: "Pre-Intermediate ва боло (A2–C1)",
          schedule: "2 бор дар ҳафта • Шом ва шанбе",
          highlights: [
            "Баҳсҳо, бозиҳои нақшӣ ва мавзӯъҳои воқеӣ",
            "Ислоҳи талаффуз ва равонии сухан",
            "Муҳити дӯстона ва бе тарсу ҳарос",
          ],
        },
        {
          id: "english-for-kids",
          title: "English for Kids",
          description: "Омӯзишро барои кӯдакон шавқовар мегардонем.",
          level: "Синну сол: 6–12 сола",
          schedule: "2–3 бор дар ҳафта • Баъд аз мактаб",
          highlights: [
            "Бозиҳо, нақлҳо ва машғулиятҳои тасвирӣ",
            "Фонетика, хониши дуруст ва суханронии аввалин",
            "Омӯзгорони меҳрубон барои кӯдакон",
          ],
        },
      ],
    },
    journey: {
      badge: "Роҳи шумо",
      titlePrefix: "ҚАДАМҲОИ ХУРД.",
      titleAccent: "НАТИҶАҲОИ КАЛОН.",
      steps: [
        { number: "01", title: "Муайянкунӣ", description: "Сатҳи худро донед" },
        { number: "02", title: "Омӯзиш", description: "Малака созед" },
        { number: "03", title: "Таҷриба", description: "Бо эътимод гап занед" },
        { number: "04", title: "Муваффақият", description: "Ба ҳадаф бирасед" },
      ],
    },
    teachers: {
      badge: "Омӯзгорони мо",
      titlePrefix: "АЗ КАСОНЕ ОМӮЗЕД, КИ",
      titleAccent: "ИЛҲОМ МЕБАХШАНД.",
      demoNote:
        "* Профилҳои намунавӣ барои пешнамоиш нишон дода шудаанд.",
      expertLabel: "Устодони ботаҷриба",
      items: [
        { id: "sarah-mitchell", name: "Sarah Mitchell", role: "Англисии умумӣ" },
        { id: "david-wilson", name: "David Wilson", role: "Мутахассиси IELTS" },
        { id: "emily-carter", name: "Emily Carter", role: "Мураббии гуфтугӯ" },
      ],
    },
    stats: {
      badge: "Натиҷаҳои мо",
      sampleNote: "* Нишондиҳандаҳои намунавӣ барои пешнамоиш.",
      items: [
        { label: "Донишҷӯён" },
        { label: "Омӯзгорон" },
        { label: "Барномаҳо" },
        { label: "Қаноатмандӣ" },
      ],
    },
    testimonials: {
      badge: "Фикрҳои донишҷӯён",
      titlePrefix: "ҲИКОЯҲОИ ВОҚЕӢ.",
      titleAccent: "ПЕШРАФТИ ВОҚЕӢ.",
      sampleNote: "* Намунаи фикру мулоҳизаҳо барои тарҳ.",
      items: [
        {
          quote:
            "Lingora ҳаёти маро тағйир дод. Ҳоло ман озодона англисӣ гап мезанам ва дар ширкати байналмилалӣ кор мекунам!",
          author: "Мария С.",
          course: "IELTS ва Speaking Club",
        },
        {
          quote:
            "Машғулиятҳои клуби гуфтугӯ ба ман кӯмак карданд, ки шармро паси сар кунам ва балли дилхоҳи IELTS-ро гирам.",
          author: "Амир К.",
          course: "IELTS Preparation",
        },
        {
          quote:
            "Ҳар дарс зинда ва шавқовар мегузарад. Духтарам ҳар ҳафта бо шавқ ба дарси англисӣ меравад.",
          author: "Елена Р.",
          course: "English for Kids",
        },
      ],
    },
    cta: {
      titleLine1: "РОҲИ ШУМО ДАР АНГЛИСӢ",
      titleLine2Prefix: "АЗ ИН ҶО",
      titleAccent: "ОҒОЗ МЕШАВАД.",
      subtitle: "Қадами аввалро ба сӯи ояндаи боэътимод гузоред.",
      button: "Имрӯз оғоз кунед",
    },
    form: {
      heading: "БИЁЕД КОРИ БУЗУРГЕРО ОҒОЗ КУНЕМ.",
      fullNameLabel: "Ному насаб",
      fullNamePlaceholder: "Ному насаб",
      phoneLabel: "Рақами телефон",
      phonePlaceholder: "+992 ...",
      courseLabel: "Курсро интихоб кунед",
      coursePlaceholder: "Курсро интихоб кунед",
      timeLabel: "Вақти мувофиқ",
      timePlaceholder: "Вақти мувофиқ",
      submit: "Номнавис шудан",
      submitting: "Ирсол...",
      successTitle: "Дархост санҷида шуд",
      successBody:
        "Ташаккур! Маълумоти шумо санҷида шуд. Барои тамоси фаврӣ метавонед тугмаи WhatsApp-ро пахш кунед.",
      submitAnother: "Ирсоли дархости нав",
      errors: {
        fullName: "Лутфан ному насаби худро ворид кунед.",
        phone: "Рақами телефони дурустро ворид кунед (7–15 рақам).",
        course: "Лутфан курсро интихоб кунед.",
        preferredTime: "Вақти мувофиқро интихоб кунед.",
      },
      times: [
        "Субҳ (09:00 – 12:00)",
        "Нимарӯзӣ (14:00 – 17:00)",
        "Шом (18:00 – 20:30)",
        "Гурӯҳи рӯзҳои истироҳат",
      ],
    },
    footer: {
      tagline: "Забони англисиро омӯзед. Ҷаҳони худро боз кунед.",
      quickLinks: "Пайвандҳо",
      coursesTitle: "Курсҳо",
      contactUs: "Тамос бо мо",
      followUs: "Моро пайгирӣ кунед",
      rights: "Ҳамаи ҳуқуқҳо маҳфузанд.",
      privacy: "Сиёсати махфият",
      terms: "Шартҳои истифода",
    },
    floating: {
      whatsappTooltip: "Чат дар WhatsApp",
      chatbotTooltip: "Аз ёрдамчии AI пурсед",
      assistantTitle: "Ёрдамчии LINGORA",
      assistantSubtitle: "Реҷаи демо • Маълумот оид ба курсҳо",
      welcome:
        "Салом! Хуш омадед ба LINGORA. Ман ёрдамчии AI-и шумо ҳастам. Чӣ гуна кӯмак расонам?",
      suggestedLabel: "Саволҳои маъмул",
      suggestedQuestions: [
        "Шумо кадом курсҳои англисиро доред?",
        "Чӣ тавр ба дарсҳои IELTS ҳамроҳ шавам?",
        "Оё курсҳои англисӣ барои кӯдакон ҳаст?",
        "Чӣ тавр номнавис шавам?",
        "Чӣ тавр бо академия тамос гирам?",
      ],
      inputPlaceholder: "Дар бораи курсҳо, IELTS ё сабти ном пурсед...",
    },
  },
};
