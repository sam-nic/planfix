/* Shared site footer — edit here once, updates every page.
   Each page just needs:  <div id="site-footer"></div>  and  <script src="footer.js"></script>
   The consultation button opens the form modal if it exists on the page (main page),
   otherwise it links to the main page and opens the form there (#consult). */
(function () {
  var mount = document.getElementById('site-footer');
  if (!mount) return;

  if (!document.getElementById('footer-css')) {
    var css =
      '.end{background:var(--ink);color:var(--paper-2);padding:52px 0 44px;margin-top:56px}' +
      '.end .wrap{max-width:var(--wrap,720px);margin:0 auto;padding:0 22px}' +
      '.end h2{color:var(--paper-2);font-weight:900;font-size:clamp(24px,6vw,32px);letter-spacing:-.02em;line-height:1.08}' +
      '.end__dur{display:block;margin-top:8px;font-weight:500;font-size:16px;letter-spacing:0;color:#3FA08E}' +
      '.end p{color:#9AA1A6;margin-top:12px;max-width:38ch}' +
      '.end .cta{display:inline-flex;align-items:center;gap:9px;margin-top:26px;background:var(--accent);color:#fff;text-decoration:none;font-weight:600;font-size:16px;padding:15px 24px;border-radius:4px;border:0;cursor:pointer}' +
      '.end__contacts{margin-top:26px;font-family:"IBM Plex Mono",monospace;font-size:16px;line-height:2.1;color:#9AA1A6}' +
      '.end__contacts a{color:var(--paper-2);text-decoration:none;border-bottom:1px solid #3A3F45}';
    var st = document.createElement('style');
    st.id = 'footer-css';
    st.textContent = css;
    document.head.appendChild(st);
  }

  mount.innerHTML =
    '<footer class="end"><div class="wrap">' +
      '<h2>Получить личную бесплатную консультацию <span class="end__dur">до 30 минут</span></h2>' +
      '<p>Подскажу варианты решения, оценю сроки, стоимость и возможные риски.</p>' +
      '<p>Если после разговора окажется, что ПланФикс — не лучшее решение для вашей задачи, я честно скажу об этом.</p>' +
      '<button class="cta" id="openForm" type="button">Оставить заявку</button>' +
      '<div class="end__contacts">' +
        'Алексей Сущиц<br>' +
        '<a href="https://t.me/misterFIX">t.me/misterFIX</a><br>' +
        '<a href="mailto:asuschits@gmail.com">asuschits@gmail.com</a><br>' +
        '<a href="https://planfix.ru/ourpartners/?partner=130">Профиль на planfix.ru</a>' +
      '</div>' +
    '</div></footer>';

  // No form on this page → make the button a link that opens the form on the main page
  if (!document.getElementById('formModal')) {
    var btn = mount.querySelector('#openForm');
    if (btn) {
      var a = document.createElement('a');
      a.className = 'cta';
      a.href = 'index.html#consult';
      a.textContent = 'Оставить заявку';
      btn.replaceWith(a);
    }
  }
})();
