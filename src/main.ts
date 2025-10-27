import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  initLoadingScreen();
  initSmoothScroll();
  animateOnScroll();
  initNavbarScroll();
  initScrollToTop();
  initFloatingContact();
});

function initLoadingScreen() {
  const codeText = document.getElementById('code-text');
  const loadingScreen = document.querySelector('.loading-screen');
  
  const code = `const developer = {
  name: "Farley",
  role: "Discord Developer",
  passion: "coding and vibing",
  skills: ["TypeScript", "Node.js", "Discord.js"],
  
  initialize() {
    console.log("Loading portfolio...");
    this.startCoding();
  },
  
  startCoding() {
    return "✨ Ready to build amazing things!";
  }
};

developer.initialize();`;

  let index = 0;
  
  function typeCode() {
    if (index < code.length && codeText) {
      codeText.textContent += code.charAt(index);
      index++;
      setTimeout(typeCode, 30);
    } else {
      setTimeout(() => {
        loadingScreen?.classList.add('hidden');
        setTimeout(() => {
          loadingScreen?.remove();
        }, 500);
      }, 800);
    }
  }
  
  typeCode();
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

function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
      const sectionTop = (section as HTMLElement).offsetTop;
      
      if (window.scrollY >= sectionTop - 100) {
        current = section.getAttribute('id') || '';
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
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

function initFloatingContact() {
  const floatingBtn = document.getElementById('floatingContactBtn');
  const floatingPanel = document.getElementById('floatingContactPanel');
  const closeBtn = document.getElementById('closePanel');
  
  if (!floatingBtn || !floatingPanel || !closeBtn) return;
  
  floatingBtn.addEventListener('click', () => {
    floatingPanel.classList.toggle('active');
  });
  
  closeBtn.addEventListener('click', () => {
    floatingPanel.classList.remove('active');
  });
  
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    if (!floatingPanel.contains(target) && !floatingBtn.contains(target)) {
      floatingPanel.classList.remove('active');
    }
  });
}
