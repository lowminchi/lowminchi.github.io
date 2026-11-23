// Refuses to render inside another site's frame, so nobody can wrap this CV in their own page.
// (GitHub Pages cannot send the frame-ancestors header, so this script does the same job.)
(function () {
  "use strict";
  if (window.top === window.self) return;
  document.documentElement.hidden = true;
  try { window.top.location = window.self.location.href; } catch (e) { /* stay hidden */ }
})();
