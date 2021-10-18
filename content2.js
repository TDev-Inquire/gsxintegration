

var storedLegal = chrome.storage.local.get('cxInfo', function (items) {
  console.log(items); 

  document.querySelector("#rep_cust__fn").value = items.cxInfo.cx_number;
  document.querySelector("#rep_cust__fn").value = items.cxInfo.cx_fname;
  document.querySelector("#rep_cust__ln").value = items.cxInfo.cx_lname;
  document.querySelector("#rep_cust__em").value = items.cxInfo.cx_email;
  document.querySelector("#home-search__textbox").value = items.cxInfo.cx_address;
  document.querySelector("#rep_cust__notes").value = items.cxInfo.cx_note;
  document.querySelector("#rep_cust__po").value = items.cxInfo.cx_pchorder;
  document.querySelector("#rep_cust__ref").value = items.cxInfo.cx_reference;
  document.querySelector("#home-search__textbox").value = items.cxInfo.cx_serial;
  document.querySelector("#rep_cust__class").value = "SINGLE";
  document.querySelector("#rep_cust__st").value = "NC";



console.log("PCRT info pasted into GSX");

});