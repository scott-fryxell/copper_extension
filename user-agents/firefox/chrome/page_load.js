
var myExtension = {
  init: function() {
    var appcontent = document.getElementById("appcontent");   // browser
    if(appcontent){
      appcontent.addEventListener("DOMContentLoaded", myExtension.onPageLoad, true);
    }
  },
 
  onPageLoad: function(aEvent) {
    if (aEvent.originalTarget.nodeName == "#document"){
      var doc = aEvent.originalTarget; // doc is document that triggered "onload" event
      if(doc.location.host.search("copper.is") > -1 || doc.location.host.search("copper.dev") > -1 || doc.location.host.search("copper-stage.herokuapp.com") > -1 ){
        var s = doc.createElement('script');
        s.innerHTML = '$(document).trigger("copper_button_installed")';
        doc.body.appendChild(s); 
      }
    }
  }
};

window.addEventListener("load", function load(event){
    window.removeEventListener("load", load, false); //remove listener, no longer needed
    myExtension.init();  
},false);
 
