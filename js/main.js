/* Atlantic Way Executive Travel — reveal-on-scroll + mobile nav */
(function () {
  try {
    if ('IntersectionObserver' in window) {
      document.documentElement.classList.add('js');
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
        });
      }, { threshold: 0.15 });
      document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });
      // safety net: if anything is still hidden after 2.5s, show it
      setTimeout(function () {
        document.querySelectorAll('.rv:not(.in)').forEach(function (el) { el.classList.add('in'); });
      }, 2500);
    }
  } catch (e) { document.documentElement.classList.remove('js'); }

  var btn = document.querySelector('.menu-btn');
  var nav = document.querySelector('.nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();
