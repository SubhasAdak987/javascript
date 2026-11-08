// 20th
//***********************//
// JavaScript Clipboard Events oncut oncopy onpaste
/*
    There we are use three type of events
    . oncut
    . oncopy
    . onpaste

    where we are can check in a page:
    1. anything is cut from the page.
    2. anything is copy from the page.
    3. anything is paste in page.

    We can use this in div headding peragraph input field.
 */
document.addEventListener("DOMContentLoaded",function(){
    let text    = null;
    let target  = document.querySelector("#myinput");
    target.addEventListener('copy',function(e){
        console.clear();
        text    = window.getSelection().toString();
        target.style.backgroundColor = "lightgreen";
        console.log("you copy a test");
        console.log("you copy : " + text);
    });
    target.addEventListener('cut',function(e){
        text    = window.getSelection().toString();
        console.clear();
        target.style.backgroundColor = "lightpink";
        console.log("you cut a test");
        console.log("you cut : " + text);
    });
    target.addEventListener('paste',function(e){
        text    = e.clipboardData.getData("text");
        console.clear();
        target.style.backgroundColor = "lightblue";
        console.log("you paste a test");
        console.log("you paste : " + text);
    });
});