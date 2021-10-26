var cx_fname = document.querySelector("#custh1 > span").textContent.split(" ")[0];
var cx_lname = document.querySelector("#custh1 > span").textContent.split(" ")[1];
var cx_number = document.querySelector("#contact-table > tbody > tr:nth-child(3) > td:nth-child(2) > span").textContent;
var cx_email = document.querySelector("#contact-table > tbody > tr:nth-child(5) > td:nth-child(2) > a > span").textContent;
var cx_pchorder = document.querySelector("#wo1content > div:nth-child(3) > table:nth-child(1) > tbody > tr:nth-child(1) > td:nth-child(2)").textContent+"GV";
var cx_reference = document.querySelector("#woh2 > span:nth-child(2)").textContent;
var cx_address = document.querySelector("#contact-table > tbody > tr:nth-child(6) > td:nth-child(2) > span").textContent;
var cx_note = document.querySelector("#wo1content > table > tbody > tr:nth-child(1) > td:nth-child(2) > span").innerText;

var cx_serial = document.querySelector("#vue-app > div:nth-child(5) > div:nth-child(2) > div:nth-child(2) > table > tbody > tr:nth-child(2) > td:nth-child(2) > span").textContent;

var cx_street = document.querySelector("#checkout-form > input[type=hidden]:nth-child(3)").value;
var cx_city = document.querySelector("#checkout-form > input[type=hidden]:nth-child(5)").value;
var cx_zip = document.querySelector("#checkout-form > input[type=hidden]:nth-child(7)").value;

var cx_note =
console.log("source page ran");

var cxInfo = {
    cx_fname: cx_fname,
    cx_lname: cx_lname,
    cx_number: cx_number,
    cx_email: cx_email,
    cx_address: cx_address,
    cx_note: cx_note,
    cx_street: cx_street,
    cx_city: cx_city,
    cx_zip: cx_zip,
    ///cx_date: cx_date,
    cx_pchorder: cx_pchorder,
    cx_reference: cx_reference,
    cx_serial: cx_serial

    };
chrome.storage.local.set({
        'cxStorage': cxInfo
        });

            window.open(
              "https://gsx2.apple.com/repairs/new?deviceId=" + cx_serial, "_blank");
    
              console.log("Opened New Tab");
    