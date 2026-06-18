// KonekSI Alumni — Interaksi Dasar, Fitur Tab, & Scroll Reveal Animation

document.addEventListener('DOMContentLoaded', function () {
  
  // =========================================================
  // 1. LOGIKA NAVBAR MOBILE (MENU BURGER)
  // =========================================================
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  var cta = document.querySelector('.nav-cta');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      links.classList.toggle('open');
      if (cta) cta.classList.toggle('open');
    });

    // Tutup menu mobile saat salah satu link diklik
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        links.classList.remove('open');
        if (cta) cta.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Klik di luar menu mobile untuk menutup otomatis navbar
  document.addEventListener('click', function (event) {
    if (links && toggle) {
      var isClickInsideNav = links.contains(event.target) || toggle.contains(event.target);
      if (!isClickInsideNav && links.classList.contains('open')) {
        links.classList.remove('open');
        if (cta) cta.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      }
    }
  });


  // =========================================================
  // 2. HIGHLIGHT NAV LINK SESUAI SECTION SAAT SCROLL
  // =========================================================
  var sections = document.querySelectorAll('main section[id]');
  var navAnchors = document.querySelectorAll('.nav-links a');

  function onScroll() {
    var current = '';
    sections.forEach(function (sec) {
      var rect = sec.getBoundingClientRect();
      if (rect.top <= 120 && rect.bottom >= 120) {
        current = sec.id;
      }
    });
    navAnchors.forEach(function (a) {
      a.classList.toggle('active', a.getAttribute('href') === '#' + current);
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();


  // =========================================================
  // 3. LOGIKA NAVIGASI TAB INTERAKTIF DESIGN PROCESS
  // =========================================================
  const tabButtons = document.querySelectorAll('.tab-navigation .tab-btn');
  const tabPanels = document.querySelectorAll('.tab-content-container .tab-panel');

  if (tabButtons.length > 0 && tabPanels.length > 0) {
    tabButtons.forEach(function (button) {
      button.addEventListener('click', function (e) {
        e.preventDefault(); 
        e.stopPropagation(); 

        const targetTabId = button.getAttribute('data-tab');
        const targetPanel = document.getElementById(targetTabId);

        if (targetPanel) {
          tabButtons.forEach(function (btn) {
            btn.classList.remove('active');
          });
          
          tabPanels.forEach(function (panel) {
            panel.classList.remove('active');
          });

          button.classList.add('active');
          targetPanel.classList.add('active');
        }
      });
    });
  }


  // =========================================================
  // 4. EFEK ANIMASI POP-UP REVEAL SAAT HALAMAN DI-SCROLL
  // =========================================================
  const sectionsToReveal = document.querySelectorAll('section, .feature-card, .process-card, .team-card, .demo-card');
  
  // Daftarkan class CSS reveal ke semua element target
  sectionsToReveal.forEach(el => {
    el.classList.add('reveal-element');
  });

  function checkReveal() {
    // Pemicu animasi muncul ketika element 85% terlihat di layar
    const triggerBottom = window.innerHeight * 0.85;
    
    sectionsToReveal.forEach(el => {
      const boxTop = el.getBoundingClientRect().top;
      
      if (boxTop < triggerBottom) {
        el.classList.add('active');
      }
    });
  }

  // Jalankan fungsi reveal saat halaman di-scroll dan saat pertama dimuat
  window.addEventListener('scroll', checkReveal, { passive: true });
  checkReveal();

});