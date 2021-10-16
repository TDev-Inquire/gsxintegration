var cx_name = document.getElementById("custh1").value;


console.log("source page ran");

var storArray = {
    cx_name: "cxname",
   
    ///cx_problem: cxprblm,
    ///integ_id: intid
    };


chrome.storage.local.set({
        'newStorage': storArray
        });