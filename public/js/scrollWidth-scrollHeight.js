// 11th
//***********************//
// ["scrollWidth","scrollHeight"]
/*
  In this we can see how much hight and width inside have in a div scroll data.
*/
document.addEventListener("DOMContentLoaded",function(){
    let a = document.querySelector("#box");
        console.log("scroll Width : "+ a.scrollWidth);
        console.log("scroll Height : "+ a.scrollHeight);

    // document.querySelector("#box").addEventListener("scroll",function(){
    //     console.clear();
    //     console.log("scroll Width : "+ this.scrollWidth);
    //     console.log("scroll Height : "+ this.scrollHeight);
    // });
});
//***********************//