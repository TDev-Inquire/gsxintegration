var storedLegal = chrome.storage.local.get('cxInfo', function (items) {
    console.log(items); 

    function NewTab() {
        window.open(
          "https://gsx2.apple.com/product-details/" + items.cxInfo.cx_serial, "_blank");

          console.log("target 2nd piece ran");
        }});