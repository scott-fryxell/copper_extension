CustomButton = {
  1: function () {
    var s = window.content.document.createElement('script');
    s.src = 'https://www.copper.is/embed_iframe.js';
    window.content.document.body.appendChild(s);
  },
}

if (window.content.location.host == 'copper.is' || 'copper.dev' || 'copper-stage.herokuapp.com/'){
  var s = window.content.document.createElement('script');
  s.innerHTML = '$(document).trigger("copper_button_installed")';
  window.content.document.body.appendChild(s); 
}