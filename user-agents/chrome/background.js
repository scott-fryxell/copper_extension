
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {code:" var s=document.createElement('script'); s.src='https://www.copper.is/embed_iframe.js'; document.body.appendChild(s);"});
});

// // This is triggered when the extension is installed or updated.
chrome.runtime.onInstalled.addListener(function(){
  chrome.tabs.executeScript(null, {code:"$(document).trigger('copper_button_installed')"});  
});

chrome.webRequest.onHeadersReceived.addListener(
  function(details) {
    chrome.extension.getBackgroundPage().console.log(details);
    for (var i = 0; i < details.responseHeaders.length; ++i) {
      chrome.extension.getBackgroundPage().console.log("responseHeaders", details.responseHeaders[i].name);
      
      if (details.responseHeaders[i].name === 'X-WebKit-CSP') {
        details.responseHeaders.splice(i, 1);
        break;
      }
    }
    return {responseHeaders: details.responseHeaders};
  },
   {
     urls: ["*://*.facebook.com/*"],
     types: ["main_frame"]
   },
  ["blocking", "responseHeaders"]
);