/* The Learning Curve Approach: landningssidan. Statisk sida, all data stannar i webbläsaren. © Engströms Mickla AB 2026 */
(function () {
  'use strict';
  var C = window.CONTENT, app = document.getElementById('app');
  var ORDNING = ['sense', 'see', 'shift'];
  var opened = null;

  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function fill(t, map) { return t.replace(/\{(\w+)\}/g, function (m, k) { return map[k] != null ? map[k] : m; }); }
  function toast(msg) { var t = document.createElement('div'); t.className = 'toast'; t.textContent = msg; document.body.appendChild(t); setTimeout(function () { t.remove(); }, 3200); }
  function lista(a) { return a.length > 1 ? a.slice(0, -1).join(', ') + ' och ' + a[a.length - 1] : a[0]; }

  /* Påbörjad körning i den här webbläsaren, om någon. */
  function pagaende(id) {
    var s = LCA.stored(id); if (!s) return null;
    if (id === 'see') { if (!s.nivaer || !Object.keys(s.nivaer).length) return null; return (s.meta && s.meta.foretag) || 'namnlös organisation'; }
    return (s.organisation && s.organisation.namn) || (s.meta && s.meta.foretag) || 'namnlös organisation';
  }

  function phasesHTML() {
    return '<h2 class="section">' + esc(C.faserRubrik) + '</h2><ol class="phases">' + C.faser.map(function (f) {
      return '<li class="phase"><span class="phase-nr">' + esc(f.nr) + '</span><span class="phase-name">' + esc(f.namn) + '</span><span class="phase-q">' + esc(f.fraga) + '</span><span class="phase-meta">' + esc(f.niva) + '</span><span class="phase-move">' + esc(f.rorelse) + '</span></li>';
    }).join('') + '</ol>';
  }

  function moduleHTML(id, i) {
    var m = C.moduler[id], open = m.status === 'oppen', pg = open ? pagaende(id) : null;
    return '<article class="card modcard' + (open ? '' : ' soon') + '"><div class="modhead"><span class="modnr">' + (i + 1) + '</span><div><h3>' + esc(m.rubrik) + '</h3><p class="muted small">' + esc(m.underrubrik) + '</p></div></div>' +
      '<p>' + esc(m.text) + '</p><dl class="modfacts"><div><dt>Ni får</dt><dd>' + esc(m.far) + '</dd></div><div><dt>Tid</dt><dd>' + esc(m.tid) + '</dd></div></dl>' +
      (pg ? '<p class="small note" style="margin:0 0 14px">' + esc(C.pagaende) + ': <b>' + esc(pg) + '</b>.</p>' : '') +
      (open ? '<a class="btn" href="' + esc(m.lank) + '">' + esc(C.statusText.oppen) + ' ' + esc(id === 'see' ? 'See' : LCA.NAMN[id]) + ' →</a>' : '<span class="tag soon-tag">' + esc(C.statusText.kommer) + '</span>') +
      '</article>';
  }

  function openedHTML() {
    if (!opened) return '';
    var S = C.sparfil, env = opened, till = env.modul === 'tillampning', namn = LCA.NAMN[env.modul];
    var kedja = ORDNING.filter(function (k) { return k !== env.modul && env.kedja && env.kedja[k]; }).map(function (k) { return LCA.NAMN[k]; });
    if (env.kedja && env.kedja.tillampningar) Object.keys(env.kedja.tillampningar).forEach(function (k) { kedja.push(env.kedja.tillampningar[k].namn || LCA.NAMN.tillampning); });
    var nasta = till ? 'see' : ORDNING[ORDNING.indexOf(env.modul) + 1];
    var h = '<div class="card opened"><div class="eyebrow">' + esc(fill(S.fran, { modul: namn })) + '</div><h3 style="margin-top:0">' + esc(env.organisation.namn || 'Namnlös organisation') + '</h3>' +
      '<p class="small muted">Senast ändrad ' + esc((env.andrad || '').slice(0, 10) || 'okänt datum') + (env.version ? ' · ' + esc(env.version) : '') + '</p>';
    if (kedja.length) h += '<p class="small">' + esc(fill(S.innehaller, { lista: lista(kedja) })) + '</p>';
    if (env.aldreFormat) h += '<p class="small muted">' + esc(S.aldre) + '</p>';
    h += '<div class="actions" style="margin-top:12px">';
    if (till) h += '<button class="btn ghost" data-act="go" data-mod="tillampning">' + esc(fill(S.fortsatt, { modul: (env.lamnar && env.lamnar.namn) || namn })) + '</button>';
    else if (C.moduler[env.modul].status === 'oppen') h += '<button class="btn ghost" data-act="go" data-mod="' + env.modul + '">' + esc(fill(S.fortsatt, { modul: namn })) + '</button>';
    if (nasta) {
      if (C.moduler[nasta].status === 'oppen') h += '<button class="btn" data-act="go" data-mod="' + nasta + '">' + esc(fill(S.vidare, { modul: LCA.NAMN[nasta] })) + ' →</button>';
      else h += '<p class="small muted" style="margin:0">' + esc(fill(S.vantar, { modul: LCA.NAMN[nasta] })) + '</p>';
    } else if (env.kedja && env.kedja.sense && env.kedja.see) h += '<button class="btn" data-act="go" data-mod="slut">' + esc(C.ordning.slutKnapp) + ' →</button>';
    return h + '</div></div>';
  }

  function filmHTML() {
    var Fm = C.film; if (!Fm) return '';
    return '<div class="film"><video controls preload="metadata" playsinline poster="' + esc(Fm.affisch) + '" aria-label="' + esc(Fm.rubrik) + '"><source src="' + esc(Fm.fil) + '" type="video/mp4">' + (Fm.webm ? '<source src="' + esc(Fm.webm) + '" type="video/webm">' : '') + '</video><p class="small muted" style="margin:8px 0 0">' + esc(Fm.text) + ' <a href="' + esc(Fm.fil) + '" download="Learning-Curve-Approach-introduktion.mp4">' + esc(Fm.ladda) + '</a></p></div>';
  }

  function render() {
    var P = C.perspektiv, O = C.ordning, S = C.sparfil;
    var h = '<section class="hero"><div class="eyebrow">' + esc(C.eyebrow) + '</div><h1>' + esc(C.titel) + '</h1><p class="lead">' + esc(C.lead) + '</p>' + (C.fritt ? '<p class="fritt">' + [].concat(C.fritt).map(esc).join('<br>') + '</p>' : '') + C.intro.map(function (t, i) { return '<p>' + esc(t) + '</p>' + (i === 0 ? filmHTML() : ''); }).join('') + '</section>';
    h += phasesHTML();
    h += '<section><h2 class="section">' + esc(P.rubrik) + '</h2>' + P.text.map(function (t) { return '<p>' + esc(t) + '</p>'; }).join('') +
      '<blockquote class="quote"><p>' + esc(P.citat) + '</p><cite>' + esc(P.kalla) + '</cite></blockquote></section>';
    h += '<section><h2 class="section">' + esc(C.modulerRubrik) + '</h2><div class="modgrid">' + ORDNING.map(moduleHTML).join('') + '</div></section>';
    var T = C.tillampningar;
    if (T) h += '<section class="tillampningar"><h2 class="section">' + esc(T.rubrik) + '</h2><p>' + esc(T.text) + '</p><div class="modgrid tillgrid">' + T.lista.map(function (t) { return '<article class="card modcard"><h3 style="margin-top:0">' + esc(t.namn) + '</h3><p class="small">' + esc(t.text) + '</p><a class="btn ghost" href="' + esc(t.lank) + '">Öppna →</a></article>'; }).join('') + '</div><p style="margin-top:14px"><a href="tillampningar/">' + esc(T.knapp) + ' →</a></p></section>';
    h += '<section class="split"><div><h2 class="section">' + esc(O.rubrik) + '</h2><p>' + esc(O.text) + '</p><p>' + esc(O.slut) + '</p><p><a class="btn ghost" href="slut/">' + esc(O.slutKnapp) + ' →</a></p></div>' +
      '<div class="card"><h3 style="margin-top:0">' + esc(S.rubrik) + '</h3><p class="small muted">' + esc(S.text) + '</p><button class="btn ghost" data-act="open">' + esc(S.knapp) + '</button></div></section>';
    h += openedHTML();
    h += '<section><h2 class="section">' + esc(C.teoriRubrik) + '</h2><p>' + esc(C.teoriText) + '</p><a class="btn ghost" href="teori/">' + esc(C.teoriKnapp) + ' →</a></section>';
    h += '<p class="note small">' + esc(C.integritet) + '</p>';
    app.innerHTML = h;
  }

  app.addEventListener('click', function (e) {
    var t = e.target.closest('button'); if (!t) return;
    var act = t.getAttribute('data-act');
    if (act === 'open') { document.getElementById('file-load').click(); return; }
    if (act === 'go' && opened) { var mod = t.getAttribute('data-mod'); LCA.handOff(opened); window.location.href = mod === 'slut' ? 'slut/' : mod === 'tillampning' ? 'tillampningar/?fall=' + encodeURIComponent((opened.data && opened.data.fall) || '') : C.moduler[mod].lank; }
  });
  document.getElementById('file-load').addEventListener('change', function (e) {
    var f = e.target.files[0]; e.target.value = ''; if (!f) return;
    LCA.readFile(f, function (env, err) {
      if (err) { toast(err); return; }
      opened = env; render();
      var el = app.querySelector('.opened'); if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  });

  document.getElementById('footer').innerHTML = '<span class="maker"><img src="img/mickla.png" alt="Mickla" width="22" height="22">' + esc(C.upphov) + '</span><span>' + esc(C.titel) + ' · ' + esc(C.version) + '</span>';
  render();
})();
