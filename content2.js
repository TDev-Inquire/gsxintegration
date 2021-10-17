

var storedLegal = chrome.storage.local.get('cxInfo', function (items) {
  console.log(items); 

  document.querySelector("#home-search__textbox").value = items.cxInfo.cx_number;

console.log("target 2nd piece ran");

});