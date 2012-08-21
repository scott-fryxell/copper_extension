safari.self.addEventListener("message", function (msgEvent){
  if (msgEvent.name === "tip_this_page"){    
    if (window.top === window) {
      var s = document.createElement('script');
      s.src = 'https://www.copper.is/embed_iframe.js';
      document.body.appendChild(s);
    }
  }
}, false);
