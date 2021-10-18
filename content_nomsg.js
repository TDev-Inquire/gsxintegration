var cx_name = document.querySelector("#custh1 > span").textContent;
var cx_number = document.querySelector("#contact-table > tbody > tr:nth-child(3) > td:nth-child(2) > span").textContent;
var cx_email = document.querySelector("#contact-table > tbody > tr:nth-child(5) > td:nth-child(2) > a > span").textContent;
var cx_pchorder = document.querySelector("#wo1content > div:nth-child(3) > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(2)").textContent+"GV";
var cx_reference = document.querySelector("#woh2 > span:nth-child(2)").textContent;
var cx_address = document.querySelector("#contact-table > tbody > tr:nth-child(6) > td:nth-child(2) > span").textContent;
var cx_note = document.querySelector("#wo1content > table > tbody > tr:nth-child(3) > td:nth-child(2) > span").textContent;

var cx_serial = document.querySelector("#vue-app > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2) > span").textContent;


var cx_note =
console.log("source page ran");

var cxInfo = {
    cx_name: cx_name,
    cx_number: cx_number,
    cx_email: cx_email,
    cx_address: cx_address,
    cx_note: cx_note,
    ///cx_addln: cx_addln,
    ///cx_city: cx_city,
    ///cx_zip: cx_zip,
    cx_pchorder: cx_pchorder,
    cx_reference: cx_reference,
    cx_serial: cx_serial

    };
chrome.storage.local.set({
        'cxStorage': cxInfo
        });

var message = "You are being redirected to the work order in GSX, if it does not open make sure you are logged in first."

        window.confirm(message);

            window.open(
              "https://gsx2.apple.com/product-details/" + cx_serial, "_blank");
    
              console.log("Opened New Tab");
    