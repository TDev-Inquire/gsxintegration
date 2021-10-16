var cx_name = document.getElementById("custh1").value;


console.log("source page ran");

var storArray = {
    cx_name: cx_name,
   
    ///cx_problem: cxprblm,
    ///integ_id: intid
    };


chrome.storage.local.set({
        'newStorage': storArray
        });