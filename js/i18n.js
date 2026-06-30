const translations = {
  fr: {
    siteTitle: 'Thomas — Portfolio',
    welcome: 'Bienvenue sur mon site',
    aboutTitle: 'À propos',
    aboutText: 'Thomas Djekic | Développeur | 25 ans | Liège | Belgique',
    projectsTitle: 'Projets',
    project1: 'Projet 1 — description',
    project2: 'Projet 2 — description',
    contactTitle: 'Contact',
    contactText: 'Email :',
    footerText: '© Thomas'
  },
  en: {
    siteTitle: 'Thomas — Portfolio',
    welcome: 'Welcome to my website',
    aboutTitle: 'About',
    aboutText: 'Thomas Djekic | Developer | 25 years | Liège | Belgium',
    projectsTitle: 'Projects',
    project1: 'Project 1 — description',
    project2: 'Project 2 — description',
    contactTitle: 'Contact',
    contactText: 'Email:',
    footerText: '© Thomas'
  }
};

let currentLanguage = 'en';
const buttons = document.querySelectorAll('.lang-btn');

function t(key, lang = currentLanguage) {
  return translations[lang]?.[key] || translations.fr[key] || key;
}

function applyLanguage(lang) {
  currentLanguage = lang;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n-key]').forEach((element) => {
    const key = element.getAttribute('data-i18n-key');
    element.innerHTML = t(key, lang);
  });

  buttons.forEach((button) => {
    button.classList.toggle('active', button.getAttribute('data-lang') === lang);
  });
}

buttons.forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.getAttribute('data-lang')));
});

applyLanguage(currentLanguage);
