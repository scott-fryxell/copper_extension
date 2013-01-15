
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript(null, {code:" var s=document.createElement('script'); s.src='https://www.copper.is/embed_iframe.js'; document.body.appendChild(s);"});
});

// // This is triggered when the extension is installed or updated.
chrome.runtime.onInstalled.addListener(function(){
  chrome.tabs.executeScript(null, {code:"$(document).trigger('copper_button_installed')"});  
});