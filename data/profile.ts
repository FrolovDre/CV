export interface Project {
  slug: string;
  title: string;
  problem: string;
  action: string;
  result: string;
  tools: string[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  achievements?: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  location: string;
  github?: string;
  linkedin?: string;
  telegram?: string;
}

export interface Profile {
  name: string;
  role: string;
  photo: string;
  about: string;
  whatILookFor: string;
  contact: ContactInfo;
  projects: Project[];
  experience: Experience[];
  courses: string[];
  skills: SkillGroup[];
  education: Education[];
  certificates: string[];
  languages: { name: string; level: string }[];
}

export const profile: Profile = {
  name: 'Андрей Фролов',
  role: 'Product Manager / Project Manager',
  photo: '/images/profile.jpg',
  about:
    'Выпускник МГУ и магистрант НИУ ВШЭ (бизнес‑информатика, цифровые инновации). Увлекаюсь цифровыми продуктами, которые решают реальные задачи пользователей и приносят бизнес‑ценность.',
  whatILookFor:
    'Product Manager, Москва. Хочу применять знания по продуктовой аналитике, управлению проектами и AI для развития цифровых продуктов.',
  contact: {
    phone: '+7 (916) 923‑82‑13',
    email: '5rolov.a9dr8y@gmail.com',
    location: 'Москва',
    github: 'https://github.com/FrolovDre',
    telegram: 'https://t.me/frolov_dre'
  },
  projects: [
    {
      slug: 'ai-assistant',
      title: 'AI assistant for product research',
      problem:
        'Долго собирать и синтезировать качественные данные для продуктовых исследований (конкуренты, рынок, тренды).',
      action:
        'Определил ключевые KPI (Time‑to‑Report, Evidence Coverage, Adoption, LLM‑cost/report), составил Lean Canvas, исследовал инструменты (Wokelo AI), на основе открытых источников и внутренней базы построил 12‑месячный roadmap MVP→scale, спроектировал векторную БД и multi‑LLM стек.',
      result:
        'Определён MVP, собрана система метрик и намечен путь проверки гипотезы. Подготовлен план валидации с минимальными затратами.',
      tools: ['Product Research', 'AI', 'LLM']
    },
    {
      slug: 'ivi-mini-dramas',
      title: 'IVI mini‑dramas for Gen Z',
      problem: 'Сервису IVI нужен рост в формате Gen Z: как привлечь и удержать молодую аудиторию?',
      action:
        'Провёл анализ рынка и аудитории (portrait/insights), сформулировал стратегию продвижения mini‑dramas, прогнозировал метрики и затраты, разработал программу запуска.',
      result:
        'Подготовлена комплексная GTM‑гипотеза для нового формата; сформированы точки роста контента и маркетинга.',
      tools: ['Go‑to‑Market', 'Analytics', 'Strategy']
    },
    {
      slug: 'aviasales-loyalty',
      title: 'Aviasales loyalty mechanics',
      problem: 'Нужно увеличить retention клиентов через программу лояльности.',
      action:
        'Провёл benchmark 25+ программ, сегментировал аудиторию, разработал денежные и неденежные механики, оценил влияние на LTV и retention.',
      result:
        'Приоритезированы механики, сформирован план запуска программы лояльности и прогнозируемый эффект.',
      tools: ['Retention', 'Benchmarking', 'Metrics']
    },
    {
      slug: 'movie-mvp',
      title: 'MVP movie recommendation service',
      problem: 'Необходимо создать сервис персональных рекомендаций фильмов/сериалов, чтобы улучшить пользовательский опыт.',
      action:
        'Построил Jobs‑to‑Be‑Done, определил North‑Star Metric и дерево метрик, спроектировал и прототипировал мобильное приложение в Figma, составил план MVP.',
      result:
        'Создан интерактивный прототип и метрики для MVP; подготовлен бизнес‑план запуска.',
      tools: ['Product Design', 'Metrics', 'Figma']
    },
    {
      slug: 'ostrovok-cjm',
      title: 'CJM & monetization for Ostrovok',
      problem: 'Поиск путей роста и монетизации для туристического сервиса.',
      action:
        'Построил карту пути клиента (CJM) в Miro, выявил барьеры и потребности, сформировал 3 новые механики монетизации, построил дерево метрик и маркетинговый план.',
      result:
        'Предложены механики монетизации и маркетинговая стратегия для повышения LTV и конверсии.',
      tools: ['CJM', 'Monetization', 'Marketing']
    }
  ],
  experience: [
    {
      id: 'ibs',
      company: 'IBS',
      role: 'Руководитель проектов',
      period: '09.2024 – н.в.',
      description: [
        'Календарно‑ресурсное планирование и контроль исполнения задач (таймшиты, риски, поручения)',
        'Администрирование и развитие Jira/Confluence/MS Project/SharePoint: настройка шаблонов, отчётности, интеграции',
        'Функции PMO: коммуникации, сопровождение договоров, ведение протоколов, управление рисками и изменениями'
      ],
      achievements: [
        'Создал корпоративного AI‑ассистента (RAG) для проекта',
        'Автоматизировал создание страниц и выгрузок в Confluence',
        'Интегрировал Confluence и Jira + Scroll; разработал единую структуру документов',
        'Сократил количество синхронных встреч, переведя апдейты в асинхронный формат',
        'Ускорил онбординг через библиотеку артефактов и шаблонов',
        'Снизил долю просроченных поручений, внедрив реестры и мониторинг'
      ]
    },
    {
      id: 'tourist',
      company: 'Туристский комплекс «Клязьминское водохранилище»',
      role: 'Руководитель проектов / Event‑менеджер',
      period: '05.2023 – 08.2024',
      description: [
        'Подготовка и сопровождение договоров с партнёрами',
        'Координация подразделений для организации мероприятий',
        'Контроль бюджета и закупок, рекрутинг 20+ сотрудников',
        'Успешное проведение двух крупных мероприятий'
      ]
    },
    {
      id: 'get-experts',
      company: 'Get Experts',
      role: 'Ассистент рекрутера',
      period: '07.2023 – 08.2023',
      description: [
        'Скрининг и анализ резюме',
        'Телефонные интервью и приглашение кандидатов на собеседования'
      ]
    },
    {
      id: 'nornickel',
      company: 'Норильский никель',
      role: 'Стажёр в отделе HR',
      period: '06.2022',
      description: [
        'Разработал тест по корпоративной культуре для новых сотрудников',
        'Подготовил образовательную программу и создал задания на Padlet',
        'Собрал базу данных колледжей/вузов для взаимодействия с потенциальными кандидатами'
      ]
    }
  ],
  courses: [
    '2025 Сертификация Process Communication Model',
    '2025 Бизнес-кейс "Управление кризисами в проектах: риски, проблемы, изменения"',
    '2025 Основы промптинга',
    '2025 Бизнес-кейс "Управление ИТ проектами - методология и практика"',
    '2025 Бизнес-кейс "Управление коммуникациями в проектах"',
    '2025 Работа с иррациональными решениями в Управлении проектами',
    '2025 Работа с требованиями: способы выявления и описания',
    '2025 Бизнес-кейс Управление отношениями с заинтересованными сторонами Заказчика',
    '2024 Управление конфликтами (для сотрудников и для руководителей)',
    '2024 Управление качеством в проекте',
    '2024 Техники управления временем',
    '2024 Навыки работы с бизнес-требованиями',
    '2024 Использование Jira и Confluence в управлении проектами'
  ],
  skills: [
    {
      category: 'Product',
      items: [
        'Product discovery',
        'Lean Canvas',
        'Benchmarking',
        'Jobs‑to‑Be‑Done',
        'Unit economics',
        'Metrics tree & North‑Star metrics',
        'Roadmapping',
        'Go‑to‑Market'
      ]
    },
    {
      category: 'Analytics',
      items: [
        'Market research & customer insights',
        'CJM & user research',
        'A/B‑testing',
        'PESTEL / Porter / VRIO / SWOT',
        'Financial analysis (WACC, DuPont)',
        'KPI modelling & unit economics',
        'Basic SQL'
      ]
    },
    {
      category: 'Project & PM',
      items: [
        'Agile / Scrum / Kanban',
        'Backlog management & prioritisation',
        'Risk management',
        'Stakeholder communications',
        'Requirements elicitation & documentation',
        'PMO practices',
        'Time & resource planning'
      ]
    },
    {
      category: 'Tools',
      items: [
        'Jira & Confluence',
        'MS Project',
        'SharePoint',
        'Figma & Miro',
        'Visiology (BI)',
        'GitHub',
        'SQL'
      ]
    }
  ],
  education: [
    {
      degree: 'Магистратура, бизнес‑информатика',
      institution: 'Национальный исследовательский университет «Высшая школа экономики» (НИУ ВШЭ)',
      period: '2024 – 2026',
      details: 'Магистратура по направлению «Бизнес‑информатика и цифровые инновации»'
    },
    {
      degree: 'Бакалавриат, управление персоналом',
      institution: 'Московский государственный университет имени М. В. Ломоносова (МГУ)',
      period: '2020 – 2024',
      details: 'Факультет государственного управления'
    }
  ],
  certificates: [],
  languages: [
    { name: 'Русский', level: 'родной' },
    { name: 'Английский', level: 'C1' }
  ]
};
