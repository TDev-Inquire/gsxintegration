

var storedLegal = chrome.storage.local.get('cxStorage', function (items) {
  console.log(items); 

  document.querySelector("#home-search__textbox").value = items.cxStorage.cx_number;
  ///document.getElementById("lastName").value = items.newStorage.src_lname; 

console.log("target 2nd piece ran");

});