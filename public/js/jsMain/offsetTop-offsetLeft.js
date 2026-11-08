// 9th
//***********************//
// [Windows "offsetTop()" & "offsetLeft()"] 

/*
    It's help to know that a div or other how much distence from top and left.
*/
document.addEventListener("DOMContentLoaded",function(){
    // document.getElementById("box").addEventListener("",function(){});
    let box = document.querySelector("#box");
    console.log("Box offsetTop : "+ box.offsetTop);
    console.log("Box offsetLeft : "+ box.offsetLeft);
});
//***********************//