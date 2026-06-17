// KonekSI Alumni — interaksi dasar (mobile menu, active link)

document.addEventListener('DOMContentLoaded', function () {
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

  // Highlight nav link sesuai section yang sedang aktif saat scroll
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
});
