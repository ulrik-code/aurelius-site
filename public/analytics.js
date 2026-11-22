// Counts App Store button clicks and Field Notes signups as GoatCounter events.
// Page views are counted by GoatCounter's own count.js, loaded next to this file.
// Events show in the GoatCounter dashboard as app-store/<page> and newsletter/<page>.
(function () {
  function count(name) {
    var gc = window.goatcounter;
    if (!gc || typeof gc.count !== 'function') return;
    gc.count({ path: name + location.pathname, title: name, event: true });
  }

  document.addEventListener('click', function (e) {
    var link = e.target && e.target.closest && e.target.closest('a[href*="apps.apple.com"]');
    if (link) count('app-store');
  });

  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (form && form.matches && form.matches('form[data-newsletter]')) count('newsletter');
  });
})();
