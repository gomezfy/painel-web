import './style.css';
import { locales, type Locale, defaultLocale, supportedLocales } from './locales';

let currentLocale: Locale = defaultLocale;

document.addEventListener('DOMContentLoaded', () => {
  initLocalization();
  initSmoothScroll();
  animateOnScroll();
  initScrollToTop();
  initBadgeDropAnimation();
  initSheriffQuotes();
});

function initLocalization() {
  currentLocale = detectLocale();
  applyTranslations(currentLocale);
  initLanguageSelector();
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
  
  const glotfyTitle = document.querySelector('.glotfy-title');
  if (glotfyTitle) glotfyTitle.textContent = t.glotfy.title;
  
  const glotfyStatus = document.querySelector('.glotfy-status');
  if (glotfyStatus) glotfyStatus.textContent = t.glotfy.status;
  
  const skillsTitle = document.querySelector('#skills .section-title');
  if (skillsTitle) skillsTitle.textContent = t.skills.title;
  
  const contactTitle = document.querySelector('#contato .section-title');
  if (contactTitle) contactTitle.textContent = t.contact.title;
  
  const contactText = document.querySelector('.contact-text');
  if (contactText) contactText.textContent = t.contact.text;
  
  const contactBtns = document.querySelectorAll('.contact-btn');
  if (contactBtns[0]) contactBtns[0].textContent = t.contact.discord;
  if (contactBtns[1]) contactBtns[1].textContent = t.contact.email;
  
  const footer = document.querySelector('.footer-text');
  if (footer) footer.textContent = t.footer.copyright;
  
  const scrollBtn = document.getElementById('scrollToTop');
  if (scrollBtn) scrollBtn.setAttribute('aria-label', t.scroll.toTop);
  
  const techInfoTitle = document.querySelector('.tech-info-title');
  if (techInfoTitle) techInfoTitle.textContent = t.techInfo.title;
  
  const techInfoDesc1 = document.querySelector('.tech-info-desc1');
  if (techInfoDesc1) techInfoDesc1.innerHTML = t.techInfo.description1;
  
  const techInfoDesc2 = document.querySelector('.tech-info-desc2');
  if (techInfoDesc2) techInfoDesc2.innerHTML = t.techInfo.description2;
  
  const techInfoUiTitle = document.querySelector('.tech-info-ui-title');
  if (techInfoUiTitle) techInfoUiTitle.textContent = t.techInfo.uiTitle;
  
  const techInfoUiItem1 = document.querySelector('.tech-info-ui-item1');
  if (techInfoUiItem1) techInfoUiItem1.innerHTML = t.techInfo.uiItem1;
  
  const techInfoUiItem2 = document.querySelector('.tech-info-ui-item2');
  if (techInfoUiItem2) techInfoUiItem2.innerHTML = t.techInfo.uiItem2;
  
  const techInfoUiItem3 = document.querySelector('.tech-info-ui-item3');
  if (techInfoUiItem3) techInfoUiItem3.innerHTML = t.techInfo.uiItem3;
  
  currentLocale = locale;
  localStorage.setItem('locale', locale);
}

function initLanguageSelector() {
  const headerTab = document.getElementById('headerLanguageTab');
  if (!headerTab) return;
  
  const flagMap: Record<Locale, string> = {
    'en-US': '🇺🇸',
    'es-ES': '🇪🇸',
    'pt-BR': '🇧🇷'
  };
  
  headerTab.innerHTML = `
    <div class="language-selector-wrapper" id="languageWrapper">
      <button id="languageToggle" class="language-toggle" aria-label="${locales[currentLocale].language.label}" aria-expanded="false" aria-controls="languageOrbit">
        <img src="/assets/globe-icon.png" alt="Language" class="language-icon-img">
      </button>
      <div class="language-orbit" id="languageOrbit" role="menu">
        ${supportedLocales.map((loc, index) => `
          <button 
            class="language-flag ${loc === currentLocale ? 'active' : ''}" 
            data-locale="${loc}"
            data-index="${index}"
            role="menuitem"
            aria-label="${locales[loc].language[loc]}"
            title="${locales[loc].language[loc]}"
          >
            <span class="flag-emoji">${flagMap[loc]}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;
  
  const toggleBtn = document.getElementById('languageToggle');
  const wrapper = document.getElementById('languageWrapper');
  
  toggleBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = wrapper?.classList.toggle('is-open');
    toggleBtn?.setAttribute('aria-expanded', String(isOpen));
  });
  
  document.addEventListener('click', (e) => {
    if (wrapper && !wrapper.contains(e.target as Node)) {
      wrapper.classList.remove('is-open');
      toggleBtn?.setAttribute('aria-expanded', 'false');
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && wrapper?.classList.contains('is-open')) {
      wrapper.classList.remove('is-open');
      toggleBtn?.setAttribute('aria-expanded', 'false');
      toggleBtn?.focus();
    }
  });
  
  const flags = document.querySelectorAll('.language-flag');
  flags.forEach(flag => {
    flag.addEventListener('click', (e) => {
      e.stopPropagation();
      const locale = flag.getAttribute('data-locale') as Locale;
      if (locale && locale !== currentLocale) {
        applyTranslations(locale);
        wrapper?.classList.remove('is-open');
        toggleBtn?.setAttribute('aria-expanded', 'false');
        initLanguageSelector();
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

function initBadgeDropAnimation() {
  const avatar = document.querySelector('.bot-avatar');
  const badges = document.querySelectorAll('.tech-badge');
  
  if (!avatar || !badges.length) return;
  
  avatar.addEventListener('click', () => {
    badges.forEach((badge, index) => {
      badge.classList.remove('animate-drop');
      
      setTimeout(() => {
        badge.classList.add('animate-drop');
      }, index * 100);
      
      setTimeout(() => {
        badge.classList.remove('animate-drop');
      }, 1600 + (index * 100));
    });
  });
}

function initSheriffQuotes() {
  const sheriffImg = document.getElementById('sheriffImg');
  const speechBubble = document.getElementById('sheriffSpeech');
  
  if (!sheriffImg || !speechBubble) return;
  
  let isShowing = false;
  
  sheriffImg.addEventListener('click', () => {
    if (isShowing) return;
    
    const t = locales[currentLocale];
    const quotes = t.sheriffQuotes || [];
    
    if (quotes.length === 0) return;
    
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    
    speechBubble.textContent = randomQuote;
    speechBubble.classList.add('show');
    isShowing = true;
    
    setTimeout(() => {
      speechBubble.classList.remove('show');
      setTimeout(() => {
        isShowing = false;
      }, 300);
    }, 3500);
  });
}

