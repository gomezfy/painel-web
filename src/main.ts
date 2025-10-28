import './style.css';
import { locales, type Locale, defaultLocale, supportedLocales } from './locales';

let currentLocale: Locale = defaultLocale;

document.addEventListener('DOMContentLoaded', () => {
  initLocalization();
  initSmoothScroll();
  animateOnScroll();
  initScrollToTop();
  initThemeToggle();
  initLanguageSelector();
});

function initLocalization() {
  currentLocale = detectLocale();
  applyTranslations(currentLocale);
}

function detectLocale(): Locale {
  const saved = localStorage.getItem('locale') as Locale;
  if (saved && supportedLocales.includes(saved)) {
    return saved;
  }

  const browserLangs = navigator.languages || [navigator.language];
  
  for (const lang of browserLangs) {
    const normalizedLang = lang.replace('_', '-');
    
    if (supportedLocales.includes(normalizedLang as Locale)) {
      return normalizedLang as Locale;
    }
    
    const langCode = normalizedLang.split('-')[0];
    const match = supportedLocales.find(locale => 
      locale.startsWith(langCode)
    );
    if (match) return match;
  }
  
  return defaultLocale;
}

function applyTranslations(locale: Locale) {
  const t = locales[locale];
  
  document.documentElement.lang = locale.toLowerCase();
  document.title = t.meta.title;
  
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', t.meta.description);
  
  const metaKeywords = document.querySelector('meta[name="keywords"]');
  if (metaKeywords) metaKeywords.setAttribute('content', t.meta.keywords);
  
  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', t.meta.title);
  
  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', t.meta.description);
  
  const twitterTitle = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitle) twitterTitle.setAttribute('content', t.meta.title);
  
  const twitterDesc = document.querySelector('meta[name="twitter:description"]');
  if (twitterDesc) twitterDesc.setAttribute('content', t.meta.description);
  
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) skipLink.textContent = t.hero.skipLink;
  
  const heroBio = document.querySelector('.hero-bio');
  if (heroBio) heroBio.textContent = t.hero.bio;
  
  const projectTitle = document.querySelector('.project-title');
  if (projectTitle) projectTitle.textContent = t.project.title;
  
  const projectDesc = document.querySelector('.project-description');
  if (projectDesc) projectDesc.innerHTML = t.project.description;
  
  const projectBtn = document.querySelector('.project-link');
  if (projectBtn) projectBtn.textContent = t.project.addButton;
  
  const skillsTitle = document.querySelector('#skills .section-title');
  if (skillsTitle) skillsTitle.textContent = t.skills.title;
  
  const contactTitle = document.querySelector('#contato .section-title');
  if (contactTitle) contactTitle.textContent = t.contact.title;
  
  const contactText = document.querySelector('.contact-text');
  if (contactText) contactText.textContent = t.contact.text;
  
  const contactBtns = document.querySelectorAll('.contact-btn');
  if (contactBtns[0]) contactBtns[0].textContent = t.contact.discord;
  if (contactBtns[1]) contactBtns[1].textContent = t.contact.email;
  
  const footer = document.querySelector('.footer p');
  if (footer) footer.textContent = t.footer.copyright;
  
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.setAttribute('aria-label', t.theme.toggle);
    updateThemeLabel(locale);
  }
  
  const scrollBtn = document.getElementById('scrollToTop');
  if (scrollBtn) scrollBtn.setAttribute('aria-label', t.scroll.toTop);
  
  currentLocale = locale;
  localStorage.setItem('locale', locale);
}

function updateThemeLabel(locale: Locale) {
  const t = locales[locale];
  const themeLabel = document.querySelector('.theme-toggle-label');
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  
  if (themeLabel) {
    themeLabel.textContent = currentTheme === 'light' ? t.theme.light : t.theme.dark;
  }
}

function initLanguageSelector() {
  const languageSelector = document.createElement('div');
  languageSelector.className = 'language-selector';
  languageSelector.innerHTML = `
    <button id="languageToggle" class="language-toggle" aria-label="${locales[currentLocale].language.label}">
      <span class="language-icon">🌐</span>
      <span class="language-label">${currentLocale.split('-')[0].toUpperCase()}</span>
    </button>
    <div class="language-dropdown" id="languageDropdown">
      ${supportedLocales.map(locale => `
        <button class="language-option ${locale === currentLocale ? 'active' : ''}" data-locale="${locale}">
          ${locales[locale].language[locale]}
        </button>
      `).join('')}
    </div>
  `;
  
  document.body.appendChild(languageSelector);
  
  const toggleBtn = document.getElementById('languageToggle');
  const dropdown = document.getElementById('languageDropdown');
  
  toggleBtn?.addEventListener('click', () => {
    dropdown?.classList.toggle('show');
  });
  
  document.addEventListener('click', (e) => {
    if (!languageSelector.contains(e.target as Node)) {
      dropdown?.classList.remove('show');
    }
  });
  
  const options = document.querySelectorAll('.language-option');
  options.forEach(option => {
    option.addEventListener('click', () => {
      const locale = option.getAttribute('data-locale') as Locale;
      if (locale && locale !== currentLocale) {
        applyTranslations(locale);
        
        options.forEach(opt => opt.classList.remove('active'));
        option.classList.add('active');
        
        const label = document.querySelector('.language-label');
        if (label) label.textContent = locale.split('-')[0].toUpperCase();
        
        dropdown?.classList.remove('show');
        
        window.location.reload();
      }
    });
  });
}

function initSmoothScroll() {
  const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      if (targetId && targetId !== '#') {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

function animateOnScroll() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => observer.observe(card));

  const skillBars = document.querySelectorAll('.skill-level');
  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target as HTMLElement;
        const width = bar.style.width;
        bar.style.width = '0';
        setTimeout(() => {
          bar.style.width = width;
        }, 100);
      }
    });
  }, {
    threshold: 0.5
  });

  skillBars.forEach(bar => skillObserver.observe(bar));
}

function initScrollToTop() {
  const scrollBtn = document.getElementById('scrollToTop');
  
  if (!scrollBtn) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add('visible');
    } else {
      scrollBtn.classList.remove('visible');
    }
  });
  
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

function initThemeToggle() {
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = themeToggle?.querySelector('.theme-toggle-icon');
  const themeLabel = themeToggle?.querySelector('.theme-toggle-label');
  
  if (!themeToggle || !themeIcon || !themeLabel) return;
  
  const savedTheme = localStorage.getItem('theme') || 'dark';
  setTheme(savedTheme);
  
  themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
  
  function setTheme(theme: string) {
    const t = locales[currentLocale];
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
      themeIcon!.textContent = '☀️';
      themeLabel!.textContent = t.theme.light;
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      themeIcon!.textContent = '🌙';
      themeLabel!.textContent = t.theme.dark;
    }
  }
}
