// 21th
//***********************//
// JavaScript Events "ononline","onoffline"
// "navigator" this is the other away to see user is online or offline.

//***********************//
document.addEventListener("DOMContentLoaded",function(){
    // this is event
    let ter = document.querySelector("#box");
    window.addEventListener('offline',function(){
        ter.innerHTML = "Yoy are offline";
        document.body.style.backgroundColor = 'pink';
    })

    window.addEventListener('online',function(){
        ter.innerHTML = "Yoy are online";
        document.body.style.backgroundColor = 'lightgreen';
    })

    // one moer away

    // console.log(navigator.onLine) // it's only return true or false and it's work in refresh the page
    // if(navigator.onLine == true){
    //     ter.innerHTML = "Yoy are online";
    //     document.body.style.backgroundColor = 'pink';
    // }
    // else{
    //     ter.innerHTML = "Yoy are offline";
    //     document.body.style.backgroundColor = 'pink';
    // }
});
