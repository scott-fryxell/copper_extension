safari.self.addEventListener("message", function (msgEvent){
  if (msgEvent.name === "tip_this_page"){   
    if (window.top === window) {
      var s = document.createElement('script');
      s.src = 'https://www.copper.is/embed_iframe.js';
      document.body.appendChild(s);
    }
  }
}, false);

var host = window.location.host
if (host == 'copper.is' || host ==  'copper.dev' || host ==  'copper-stage.herokuapp.com'){
  var s = window.document.createElement('script');
  s.innerHTML = '$(document).trigger("copper_button_installed")';
  window.document.body.appendChild(s); 
}