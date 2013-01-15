// var pageMod = require("page-mod");
// pageMod.PageMod({
//   include: ['*.copper.is','*.copper.dev','*.copper-stage.herokuapp.com'],
//   contentScript: '$(document).trigger("copper_button_installed")'
// });

// window.addEventListener('load', function () {
//   console.debug("is this working");
//   gBrowser.addEventListener('DOMContentLoaded', function () {
//     console.debug("is this working");
//     alert("dammit");
//   }, true),
// false);

CustomButton = {
  1: function () {
    var s = window.content.document.createElement('script');
    s.src = 'https://www.copper.is/embed_iframe.js';
    window.content.document.body.appendChild(s);
  },
}

