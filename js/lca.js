/* The Learning Curve Approach: gemensamt sparformat för alla moduler.
   All data stannar i webbläsaren. © Engströms Mickla AB 2026 */
(function () {
  'use strict';
  var FORMAT = 1;
  var MODULER = ['sense', 'see', 'shift'];
  var NYCKLAR = { sense: 'lca.sense.v1', see: 'dialogverktyget.v1', shift: 'lca.shift.v1' };
  var OVERLAMNING = 'lca.overlamning';
  var NAMN = { sense: 'Sense', see: 'See', shift: 'Shift' };

  function clone(x) { return x == null ? x : JSON.parse(JSON.stringify(x)); }

  /* Packar en körning i det gemensamma kuvertet. */
  function wrap(o) {
    return {
      lca: FORMAT,
      modul: o.modul,
      version: o.version || '',
      skapad: o.skapad || new Date().toISOString(),
      andrad: new Date().toISOString(),
      organisation: o.organisation || { namn: '', typ: '', deltagare: '' },
      data: clone(o.data) || {},
      lamnar: clone(o.lamnar) || {},
      kedja: clone(o.kedja) || {}
    };
  }

  /* Läser ett objekt ur en sparfil. Returnerar ett kuvert eller null.
     Gamla sparfiler från Dialogverktyget (utan kuvert) räknas som See. */
  function unwrap(d) {
    if (!d || typeof d !== 'object') return null;
    if (d.lca && MODULER.indexOf(d.modul) >= 0) {
      d.kedja = d.kedja || {}; d.lamnar = d.lamnar || {}; d.data = d.data || {}; d.organisation = d.organisation || {};
      return d;
    }
    if (d.app === 'dialogverktyget' && d.nivaer) {
      var m = d.meta || {};
      return { lca: FORMAT, modul: 'see', version: d.version || '', skapad: d.skapad, andrad: d.andrad, aldreFormat: true,
        organisation: { namn: m.foretag || '', typ: m.typ || '', deltagare: m.namn || '' },
        data: d, lamnar: {}, kedja: d.kedja || {} };
    }
    return null;
  }

  /* Kedjan som nästa modul ska bära med sig: tidigare kedja plus denna moduls lamnar. */
  function chainFrom(env) {
    var k = clone(env.kedja) || {};
    if (env.lamnar && Object.keys(env.lamnar).length) k[env.modul] = clone(env.lamnar);
    return k;
  }

  function readFile(file, cb) {
    var r = new FileReader();
    r.onload = function () {
      var env = null;
      try { env = unwrap(JSON.parse(r.result)); } catch (e) { cb(null, 'Filen ' + file.name + ' kunde inte läsas.'); return; }
      if (!env) { cb(null, file.name + ' är inte en sparfil från The Learning Curve Approach.'); return; }
      cb(env);
    };
    r.readAsText(file);
  }

  function slug(s) { return (s || 'organisation').toLowerCase().replace(/[åä]/g, 'a').replace(/ö/g, 'o').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'organisation'; }
  function download(obj, name) {
    var a = document.createElement('a');
    a.href = URL.createObjectURL(new Blob([JSON.stringify(obj, null, 1)], { type: 'application/json' }));
    a.download = name; document.body.appendChild(a); a.click();
    setTimeout(function () { URL.revokeObjectURL(a.href); a.remove(); }, 500);
  }
  function fileName(env) {
    var d = (env.andrad || new Date().toISOString()).slice(0, 10);
    return 'lca-' + env.modul + '-' + slug(env.organisation && env.organisation.namn) + '-' + d + '.json';
  }

  function get(key) { try { var s = localStorage.getItem(key); return s ? JSON.parse(s) : null; } catch (e) { return null; } }
  function set(key, v) { try { if (v == null) localStorage.removeItem(key); else localStorage.setItem(key, JSON.stringify(v)); } catch (e) {} }

  /* Överlämning mellan sidor på samma domän: landningssidan eller en modul lägger ett kuvert här,
     nästa modul erbjuder att använda det. */
  function handOff(env) { set(OVERLAMNING, env); }
  function takeHandOff() { var e = get(OVERLAMNING); return e ? unwrap(e) : null; }
  function clearHandOff() { set(OVERLAMNING, null); }

  /* Status för en modul i den här webbläsaren (för landningssidan). */
  function stored(modul) { return get(NYCKLAR[modul]); }

  window.LCA = { FORMAT: FORMAT, MODULER: MODULER, NYCKLAR: NYCKLAR, NAMN: NAMN, wrap: wrap, unwrap: unwrap, chainFrom: chainFrom,
    readFile: readFile, download: download, fileName: fileName, slug: slug, handOff: handOff, takeHandOff: takeHandOff, clearHandOff: clearHandOff, stored: stored };
})();
