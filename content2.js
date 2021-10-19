

var storedLegal = chrome.storage.local.get('cxStorage', function (items) {
  console.log(items); 

  document.querySelector("#rep_cust__fn").value = items.cxStorage.cx_number;
  document.querySelector("#rep_cust__fn").value = items.cxStorage.cx_fname;
  document.querySelector("#rep_cust__ln").value = items.cxStorage.cx_lname;
  document.querySelector("#rep_cust__em").value = items.cxStorage.cx_email;
  document.querySelector("#home-search__textbox").value = items.cxStorage.cx_address;
  document.querySelector("#rep_cust__notes").value = items.cxStorage.cx_note;
  document.querySelector("#rep_cust__po").value = items.cxStorage.cx_pchorder;
  document.querySelector("#rep_cust__ref").value = items.cxStorage.cx_reference;
  document.querySelector("#home-search__textbox").value = items.cxStorage.cx_serial;
  document.querySelector("#rep_cust__class").value = "SINGLE";
  document.querySelector("#rep_cust__st").value = "NC";



console.log("PCRT info pasted into GSX");

});
