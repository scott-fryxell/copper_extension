var CopperButton = {
  init: function() {
    var appcontent = document.getElementById("appcontent");   // browser
    if(appcontent){
      // appcontent.addEventListener("DOMContentLoaded", CopperButton.onPageLoad, true);
      appcontent.addEventListener("load", CopperButton.page_load, true);
    }
  },

  first_run: function() {
    if(Services.prefs.getBoolPref("extensions.us@copper.is.firstrun")){
      Services.prefs.setBoolPref("extensions.us@copper.is.firstrun", false);
      return true;
    }
    else{
      return false;
    }
  },

  page_load: function(aEvent) {
    if (aEvent.originalTarget.nodeName == "#document"){
      var doc = aEvent.originalTarget; // doc is document that triggered "onload" event
      var host = doc.location.host;
      if(host.search("copper.is") > -1 || host.search("copper.dev") > -1 || host.search("copper-stage.herokuapp.com") > -1 ){
        var s = doc.createElement('script');
        s.innerHTML = '$(document).trigger("copper_button_installed")';
        doc.body.appendChild(s); 
      }
    }
  },

  install_button: function(toolbarId, id, afterId) {
    /**
     * Installs the toolbar button with the given ID into the given
     * toolbar, if it is not already present in the document.
     *
     * @param {string} toolbarId The ID of the toolbar to install to.
     * @param {string} id The ID of the button to install.
     * @param {string} afterId The ID of the element to insert after. @optional
     */
    if (!document.getElementById(id)) {
      var toolbar = document.getElementById(toolbarId);

      // If no afterId is given, then append the item to the toolbar
      var before = null;
      if (afterId) {
        let elem = document.getElementById(afterId);
        if (elem && elem.parentNode == toolbar)
          before = elem.nextElementSibling;
      }

      toolbar.insertItem(id, before);
      toolbar.setAttribute("currentset", toolbar.currentSet);
      document.persist(toolbar.id, "currentset");

      if (toolbarId == "addon-bar")
        toolbar.collapsed = false;
    }
  },

  embed_iframe: function () {
    var s = window.content.document.createElement('script');
    s.src = 'https://www.copper.is/embed_iframe.js';
    window.content.document.body.appendChild(s);
  }
}

window.addEventListener("load", function load(event){
  window.removeEventListener("load", load, false); //remove listener, no longer needed
  CopperButton.init();  
},false);

Application.getExtensions(function (extensions) {
  var extension = extensions.get('us@copper.is');
  if (extension.firstRun) {
    CopperButton.install_button("nav-bar", "copper_button");
  }
})