console.log("target content2 ran");

var storedLegal = chrome.storage.local.get('newStorage', function (items) {
    console.log(items); 

    document.querySelector("#home-search__textbox").value = items.newStorage.cxname;
    ///document.getElementById("lastName").value = items.newStorage.src_lname; 
  });