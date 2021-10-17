var cx_name = document.querySelector("#custh1 > span").textContent;
var cx_number = document.querySelector("#contact-table > tbody > tr:nth-child(3) > td:nth-child(2) > span").textContent;
var cx_email = document.querySelector("#contact-table > tbody > tr:nth-child(5) > td:nth-child(2) > a > span").textContent;
var cx_reference = 
 =
var cx_note =
console.log("source page ran");

var cxInfo = {
    cx_name: cx_name,
    cx_number: cx_number,
    cx_email: cx_email,
    cx_address: cx_address,
    cx_note: cx_note,
    cx_addln: cx_addln,
    cx_city: cx_city,
    cx_zip: cx_zip,
    cx_pchorder: cx_pchorder,
    cx_reference: cx_reference,
    };
chrome.storage.local.set({
        'cxStorage': cxInfo
        });