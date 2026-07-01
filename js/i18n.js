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
    project1Title: 'Projet 1 — Jeu de fruits',
    project1Text: "Un jeu d'arcade dynamique développé en JavaScript, pensé pour offrir une expérience rapide et ludique.",
    projectLink: 'Voir le projet',
    projectCode: 'Voir le code source',
    project2Title: 'Projet 2 — XML & data engineering',
    project2Text: 'Structuration d’un dataset médical, conversion CSV vers XML, création de schémas et développement de parsers comparatifs.',
    project3Title: 'Projet 3 — CRUD Hôpital en Java',
    project3Text: 'Application Java de gestion d’un hôpital avec opérations CRUD, logique métier et interface simple.',
    project4Title: 'Projet 4 — Gestionnaire de course en Flutter',
    project4Text: 'Application Flutter pour gérer plusieurs stocks avec scan de codes-barres et inventaire intelligent.',
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
    project1Title: 'Project 1 — Fruit game',
    project1Text: 'A dynamic arcade game built in JavaScript, designed to deliver a fast and playful experience.',
    projectLink: 'Launch the game',
    projectCode: 'View source code',
    project2Title: 'Project 2 — XML & data engineering',
    project2Text: 'Structuring a medical dataset, converting CSV to XML, creating schemas and developing comparative parsers.',
    project3Title: 'Project 3 — Hospital CRUD in Java',
    project3Text: 'A Java application for managing a hospital with CRUD operations, business logic, and a simple interface.',
    project4Title: 'Project 4 — Shopping manager in Flutter',
    project4Text: 'A Flutter app for managing multiple inventories, scanning barcodes and storing items in stock.',
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
