const translations = {
  fr: {
    siteTitle: 'Thomas — Portfolio',
    welcome: 'Bienvenue sur mon site personnel',
    heroRole: 'Développeur',
    heroLocation: 'Liège · Belgique',
    heroAge: '25 ans',
    aboutKicker: 'Profil',
    aboutTitle: 'À propos',
    aboutText: 'Thomas DJEKIC | Développeur | 25 ans | Liège | Belgique',
    skill1: 'JavaScript',
    skill2: 'HTML & CSS',
    skill3: 'XML / XSLT',
    skill4: 'JAVA',
    skill5: 'C/C++/C#',
    skill6: 'Python',
    skill7: 'React',
    skill8: 'PHP',
    skill9: 'PL/SQL',
    skill10: 'AS400',
    skill11: 'SQL Server',
    skill12: 'Flutter',
    projectsKicker: 'Réalisations',
    projectsTitle: 'Projets',

    // Projet 1 (Stage en entreprise)
    project1Title: 'Projet 1 — Espace Client Multi-Bases (Stage)',
    project1Text: "Application web d'entreprise conçue pour centraliser et sécuriser l'accès aux services clients. Mise en œuvre d'une architecture backend robuste sous Spring Boot & JPA / Hibernate, avec gestion avancée de multi-datasources (bases de données multiples, isolation stricte des transactions et routage des requêtes).",

    // Projet 2 (Jeu de fruits)
    project2Title: 'Projet 2 — Jeu de fruits',
    project2Text: "Un jeu d'arcade dynamique développé en JavaScript, pensé pour offrir une expérience rapide et ludique.",

    // Projet 3 (XML & Data Engineering)
    project3Title: 'Projet 3 — XML & data engineering',
    project3Text: 'Structuration d’un dataset médical, conversion CSV vers XML, création de schémas et développement de parsers comparatifs.',

    // Projet 4 (CRUD Hôpital Java)
    project4Title: 'Projet 4 — CRUD Hôpital en Java',
    project4Text: 'Application Java de gestion d’un hôpital avec opérations CRUD, logique métier et interface simple.',

    // Projet 5 (Stockify / Course en Flutter)
    project5Title: 'Projet 5 — Gestionnaire de course en Flutter',
    project5Text: 'Projet de cours Flutter avec CRUD, gestion de plusieurs stocks, scan de codes-barres, vision long terme et étude de marché.',
    project5Code: 'Voir le code source + Read.Me (screens de l\'application)',

    // Projet 6 (Carnet de voyage)
    project6Title: 'Projet 6 — Carnet de voyage interactif',
    project6Text: 'Application web personnelle développée en HTML5, CSS et JavaScript, intégrant l’API Leaflet. Elle permet de documenter ses vacances jour par jour et de marquer ses étapes sur une carte. (Note : l’authentification n’étant pas encore finalisée, vous pouvez vous connecter avec n’importe quels identifiants).',

    projectLink: 'Voir le projet',
    projectSeeMore: 'Voir plus',
    projectBack: 'Retour',
    projectCode: 'Voir le code source',
    projectNoVideo: 'Pas de vidéo disponible pour ce projet.',
    projectVideoComingSoon: 'Vidéo à venir pour ce projet.',
    contactKicker: 'Contact',
    contactTitle: 'Travaillons ensemble',
    contactText: 'Vous pouvez me contacter par email pour discuter de projets ou d’opportunités.',
    footerText: '© Thomas'
  },
  en: {
    siteTitle: 'Thomas — Portfolio',
    welcome: 'Welcome to my personal website',
    heroRole: 'Developer',
    heroLocation: 'Liège · Belgium',
    heroAge: '25 years old',
    aboutKicker: 'Profile',
    aboutTitle: 'About',
    aboutText: 'Thomas DJEKIC | Developer | 25 years old | Liège | Belgium',
    skill1: 'JavaScript',
    skill2: 'HTML & CSS',
    skill3: 'XML / XSLT',
    skill4: 'JAVA',
    skill5: 'C/C++/C#',
    skill6: 'Python',
    skill7: 'React',
    skill8: 'PHP',
    skill9: 'PL/SQL',
    skill10: 'AS400',
    skill11: 'SQL Server',
    skill12: 'Flutter',
    projectsKicker: 'Work',
    projectsTitle: 'Projects',

    // Project 1 (Internship Customer Portal)
    project1Title: 'Project 1 — Multi-Database Customer Portal (Internship)',
    project1Text: 'Enterprise web application designed to centralize and secure client services access. Built with a robust backend architecture using Spring Boot & JPA / Hibernate, featuring advanced multi-datasource management (multiple databases, strict transaction isolation, and routing).',

    // Project 2 (Fruit Game)
    project2Title: 'Project 2 — Fruit game',
    project2Text: 'A dynamic arcade game built in JavaScript, designed to deliver a fast and playful experience.',

    // Project 3 (XML & Data Engineering)
    project3Title: 'Project 3 — XML & data engineering',
    project3Text: 'Structuring a medical dataset, converting CSV to XML, creating schemas and developing comparative parsers.',

    // Project 4 (Hospital CRUD Java)
    project4Title: 'Project 4 — Hospital CRUD in Java',
    project4Text: 'A Java application for managing a hospital with CRUD operations, business logic, and a simple interface.',

    // Project 5 (Shopping manager in Flutter)
    project5Title: 'Project 5 — Shopping manager in Flutter',
    project5Text: 'Course project in Flutter with CRUD, multiple inventory management, barcode scanning, long-term vision and market research.',
    project5Code: 'View source code + Read.Me (app screens)',

    // Project 6 (Interactive Travel Journal)
    project6Title: 'Project 6 — Interactive Travel Journal',
    project6Text: 'A personal web application built with HTML5, CSS, and JavaScript, leveraging the Leaflet API. It allows users to document vacations day-by-day and map out their journey. (Note: authentication is simulated; you can log in using any credentials).',

    projectLink: 'View project',
    projectSeeMore: 'See more',
    projectBack: 'Back',
    projectCode: 'View source code',
    projectNoVideo: 'No video available for this project.',
    projectVideoComingSoon: 'Video coming soon for this project.',
    contactKicker: 'Contact',
    contactTitle: 'Let’s work together',
    contactText: 'You can contact me by email to discuss projects or opportunities.',
    footerText: '© Thomas'
  }
};

let currentLanguage = 'fr';
const buttons = document.querySelectorAll('.lang-btn');

function t(key, lang = currentLanguage) {
  return translations[lang]?.[key] || translations.fr[key] || key;
}

function applyLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n-key]').forEach((element) => {
    const key = element.getAttribute('data-i18n-key');
    element.textContent = t(key, lang);
  });

  buttons.forEach((button) => {
    button.classList.toggle('active', button.getAttribute('data-lang') === lang);
  });
}

buttons.forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.getAttribute('data-lang')));
});

applyLanguage(currentLanguage);