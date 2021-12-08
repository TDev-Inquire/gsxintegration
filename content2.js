

var storedLegal = chrome.storage.local.get('cxStorage', function (items) {
  console.log(items); 

var input = document.querySelector("#rep_cust__fn");
input.select(); // you can also use input.focus()
input.value="";
var text = items.cxStorage.cx_fname;
var l=text.length;
var current = 0;
var time = 100;
var write_text = function() {
  input.value+=text[current];
  if(current < l-1) {
    current++;
    setTimeout(function(){write_text()},time);
  } else {
    input.setAttribute('value',input.value);
  }
}
setTimeout(function(){write_text()},time);

range = document.querySelector("#rep_cust__fn").select

///document.querySelector("#rep_cust__ph").value = items.cxStorage.cx_number;
///document.querySelector("#rep_cust__fn").value = items.cxStorage.cx_fname;
///document.querySelector("#rep_cust__ln").value = items.cxStorage.cx_lname;
///document.querySelector("#rep_cust__em").value = items.cxStorage.cx_email;
///document.querySelector("#rep_cust__notes").value = items.cxStorage.cx_note;
///document.querySelector("#rep_cust__po").value = items.cxStorage.cx_pchorder;
///document.querySelector("#rep_cust__ref").value = items.cxStorage.cx_reference;
///document.querySelector("#rep_cust__class").value = "SINGLE";
///document.querySelector("#rep_cust__st").value = "NC";
///document.querySelector("#rep_cust__addr1").value = items.cxStorage.cx_street;
///document.querySelector("#rep_cust__ci").value = items.cxStorage.cx_city;
///document.querySelector("#rep_cust__z").value = items.cxStorage.cx_zip;




console.log("PCRT info pasted into GSX");

});