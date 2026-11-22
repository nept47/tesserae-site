
  // Site language (nept47/Tesserae#448). A language picked in the switcher comes as ?lang=xx and is remembered
  // in this browser only. The English home page (/) sends a visitor to the remembered language, else to the
  // first browser language the site has. English-only pages show their note in that language.
  (function () {
    var L = ["en", "fr", "es", "de", "nl", "it", "el"], root = document.documentElement, saved = null;
    var q = new URLSearchParams(location.search).get("lang");
    try {
      if (L.indexOf(q) >= 0) localStorage.setItem("lang", q);
      saved = localStorage.getItem("lang");
    } catch (e) { if (L.indexOf(q) >= 0) saved = q; }
    if (q !== null) history.replaceState(null, "", location.pathname + location.hash);
    var want = L.indexOf(saved) >= 0 ? saved : null;
    if (!want) {
      var nav = navigator.languages || [navigator.language || ""];
      for (var i = 0; i < nav.length && !want; i++) {
        var c = String(nav[i]).slice(0, 2).toLowerCase();
        if (L.indexOf(c) >= 0) want = c;
      }
    }
    if (root.hasAttribute("data-autolang") && want && want !== "en") { location.replace("/" + want + "/" + location.hash); return; }
    if (want && want !== root.lang) document.addEventListener("DOMContentLoaded", function () {
      var note = document.querySelector("[data-note=\"" + want + "\"]");
      if (note) note.hidden = false;
    });
  })();
