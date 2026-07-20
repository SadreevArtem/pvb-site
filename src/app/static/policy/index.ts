export type PolicySection = {
  title: string;
  introduction?: string;
  items: string[];
};

type PolicyContent = {
  title: string;
  sections: PolicySection[];
};

export const POLICY_CONTENT: Record<"ru" | "en", PolicyContent> = {
  ru: {
    title: "Политика конфиденциальности",
    sections: [
      {
        title: "1. Общие положения",
        introduction:
          "Настоящая политика обработки персональных данных составлена в соответствии с требованиями Федерального закона от 27.07.2006 №152-ФЗ «О персональных данных» и определяет порядок обработки персональных данных и меры по обеспечению их безопасности ИП Бондаренко В. В. (далее — Оператор).",
        items: [
          "Оператор ставит своей важнейшей целью соблюдение прав и свобод человека и гражданина при обработке его персональных данных, включая защиту права на неприкосновенность частной жизни, личную и семейную тайну.",
          "Настоящая политика Оператора в отношении обработки персональных данных (далее — Политика) применяется ко всей информации, которую Оператор может получить о посетителях веб-сайта.",
        ],
      },
      {
        title: "2. Основные понятия, используемые в Политике",
        items: [
          "Автоматизированная обработка персональных данных — обработка персональных данных с помощью средств вычислительной техники.",
          "Блокирование персональных данных — временное прекращение обработки персональных данных, кроме случаев, когда обработка необходима для их уточнения.",
          "Веб-сайт — совокупность графических и информационных материалов, программ для ЭВМ и баз данных, доступных в сети Интернет.",
          "Информационная система персональных данных — совокупность содержащихся в базах данных персональных данных и обеспечивающих их обработку информационных технологий и технических средств.",
          "Обезличивание персональных данных — действия, после которых без дополнительной информации невозможно определить принадлежность персональных данных конкретному Пользователю.",
          "Обработка персональных данных — любое действие или совокупность действий с персональными данными, включая сбор, запись, систематизацию, накопление, хранение, уточнение, извлечение, использование, передачу, обезличивание, блокирование, удаление и уничтожение.",
          "Оператор — лицо, самостоятельно или совместно с другими лицами организующее и осуществляющее обработку персональных данных, а также определяющее цели и состав такой обработки.",
          "Персональные данные — любая информация, относящаяся прямо или косвенно к определённому или определяемому Пользователю веб-сайта.",
          "Пользователь — любой посетитель веб-сайта.",
          "Предоставление персональных данных — действия, направленные на раскрытие персональных данных определённому лицу или кругу лиц.",
          "Распространение персональных данных — действия, направленные на раскрытие персональных данных неопределённому кругу лиц.",
          "Трансграничная передача персональных данных — передача персональных данных на территорию иностранного государства.",
          "Уничтожение персональных данных — действия, в результате которых персональные данные уничтожаются безвозвратно.",
        ],
      },
      {
        title: "3. Персональные данные, которые может обрабатывать Оператор",
        items: [
          "Фамилия, имя и отчество.",
          "Адрес электронной почты.",
          "Номера телефонов.",
          "Год, месяц, дата и место рождения.",
          "Фотографии.",
          "Обезличенные данные о посетителях, включая файлы cookie, если это необходимо для работы сайта или подключённых сервисов интернет-статистики.",
          "Вышеперечисленные данные далее объединяются общим понятием «Персональные данные».",
        ],
      },
      {
        title: "4. Цели обработки персональных данных",
        items: [
          "Информирование Пользователя по электронной почте, заключение и исполнение договоров, а также предоставление доступа к сервисам, информации и материалам веб-сайта.",
          "Обезличенные данные могут использоваться для анализа действий Пользователей и улучшения качества сайта и его содержания.",
        ],
      },
      {
        title: "5. Правовые основания обработки персональных данных",
        items: [
          "Оператор обрабатывает персональные данные Пользователя после их самостоятельного заполнения и отправки через формы сайта. Отправляя данные, Пользователь выражает согласие с настоящей Политикой.",
          "Обезличенные данные обрабатываются, если это разрешено настройками браузера Пользователя, включая сохранение cookie и использование JavaScript.",
        ],
      },
      {
        title: "6. Порядок обработки и хранения персональных данных",
        introduction:
          "Безопасность обрабатываемых Оператором персональных данных обеспечивается правовыми, организационными и техническими мерами, необходимыми для соблюдения требований законодательства.",
        items: [
          "Оператор обеспечивает сохранность персональных данных и принимает меры, исключающие доступ к ним неуполномоченных лиц.",
          "Персональные данные Пользователя не передаются третьим лицам, кроме случаев, связанных с исполнением законодательства.",
          "Срок обработки персональных данных является неограниченным, если иное не предусмотрено законодательством или обращением субъекта персональных данных.",
        ],
      },
      {
        title: "7. Трансграничная передача персональных данных",
        items: [
          "До начала трансграничной передачи Оператор обязан убедиться, что государство, на территорию которого передаются данные, обеспечивает надёжную защиту прав субъектов персональных данных.",
          "Передача данных в государства, не отвечающие указанным требованиям, допускается при наличии письменного согласия субъекта персональных данных либо для исполнения договора с ним.",
        ],
      },
    ],
  },
  en: {
    title: "Privacy policy",
    sections: [
      {
        title: "1. General provisions",
        introduction:
          "This personal data processing policy has been prepared in accordance with Federal Law No. 152-FZ of 27 July 2006, On Personal Data. It defines the procedures for processing personal data and the measures used to protect it by Individual Entrepreneur V. V. Bondarenko (the Operator).",
        items: [
          "The Operator considers respect for human and civil rights and freedoms, including the right to privacy and the protection of personal and family secrets, a primary objective when processing personal data.",
          "This personal data processing policy (the Policy) applies to all information that the Operator may obtain about visitors to the website.",
        ],
      },
      {
        title: "2. Definitions used in this Policy",
        items: [
          "Automated personal data processing means processing personal data using computer technology.",
          "Blocking personal data means temporarily suspending its processing, except when processing is required to clarify the data.",
          "Website means a collection of graphic and informational materials, software, and databases available on the Internet.",
          "Personal data information system means a collection of personal data stored in databases together with the information technologies and technical means used to process it.",
          "Anonymization means actions after which additional information is required to identify the User to whom the personal data relates.",
          "Personal data processing means any action or set of actions involving personal data, including collection, recording, organization, accumulation, storage, correction, retrieval, use, transfer, anonymization, blocking, deletion, and destruction.",
          "Operator means a person that independently or jointly organizes and performs personal data processing and determines its purposes and scope.",
          "Personal data means any information relating directly or indirectly to an identified or identifiable website User.",
          "User means any visitor to the website.",
          "Providing personal data means disclosing personal data to a specific person or group of persons.",
          "Disseminating personal data means disclosing personal data to an indefinite group of persons.",
          "Cross-border transfer means transferring personal data to the territory of a foreign country.",
          "Destruction of personal data means actions that make personal data irretrievable.",
        ],
      },
      {
        title: "3. Personal data that may be processed by the Operator",
        items: [
          "Surname, first name, and patronymic.",
          "Email address.",
          "Telephone numbers.",
          "Year, month, date, and place of birth.",
          "Photographs.",
          "Anonymized visitor data, including cookies, when required for website operation or connected web analytics services.",
          "The information listed above is collectively referred to as Personal Data in this Policy.",
        ],
      },
      {
        title: "4. Purposes of personal data processing",
        items: [
          "Contacting the User by email, entering into and performing contracts, and providing access to website services, information, and materials.",
          "Anonymized data may be used to analyze User activity and improve the quality and content of the website.",
        ],
      },
      {
        title: "5. Legal grounds for personal data processing",
        items: [
          "The Operator processes personal data after the User independently completes and submits a website form. By submitting data, the User agrees to this Policy.",
          "Anonymized data is processed when allowed by the User's browser settings, including cookie storage and JavaScript use.",
        ],
      },
      {
        title: "6. Personal data processing and storage procedures",
        introduction:
          "The Operator protects personal data through legal, organizational, and technical measures required to comply with applicable data protection legislation.",
        items: [
          "The Operator safeguards personal data and takes measures to prevent unauthorized access.",
          "The User's personal data is not transferred to third parties except where required by applicable law.",
          "Personal data may be processed indefinitely unless a different period is required by law or requested by the data subject.",
        ],
      },
      {
        title: "7. Cross-border transfer of personal data",
        items: [
          "Before transferring personal data across borders, the Operator must ensure that the destination country provides reliable protection of personal data subjects' rights.",
          "Transfers to countries that do not meet these requirements are permitted with the data subject's written consent or when required to perform a contract with that person.",
        ],
      },
    ],
  },
};
