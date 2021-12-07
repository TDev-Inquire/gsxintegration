

var storedLegal = chrome.storage.local.get('cxStorage', function (items) {
  console.log(items); 

  function copyToClipboard(text) {
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
}
copyToClipboard(document.querySelector("#rep_cust__fn").value)
    

  document.querySelector("#rep_cust__ph").value = items.cxStorage.cx_number;
  document.querySelector("#rep_cust__fn").value = items.cxStorage.cx_fname;
  document.querySelector("#rep_cust__ln").value = items.cxStorage.cx_lname;
  document.querySelector("#rep_cust__em").value = items.cxStorage.cx_email;
  document.querySelector("#rep_cust__notes").value = items.cxStorage.cx_note;
  document.querySelector("#rep_cust__po").value = items.cxStorage.cx_pchorder;
  document.querySelector("#rep_cust__ref").value = items.cxStorage.cx_reference;
  document.querySelector("#rep_cust__class").value = "SINGLE";
  document.querySelector("#rep_cust__st").value = "NC";
  ///document.querySelector("#rep_cust__addr1").value = items.cxStorage.cx_street;
  ///document.querySelector("#rep_cust__ci").value = items.cxStorage.cx_city;
  ///document.querySelector("#rep_cust__z").value = items.cxStorage.cx_zip;




console.log("PCRT info pasted into GSX");

});