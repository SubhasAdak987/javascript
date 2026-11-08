// 10th
//***********************//
// ["scrollTop","scrollLeft"]
// It's can only use in div tag or there which tag can be add scroll.
    document.addEventListener("DOMContentLoaded",function(){
        // let a = document.querySelector("#box");
        document.querySelector("#box").addEventListener("scroll",function(){
            console.clear();
            console.log("scrollTop : " + this.scrollTop);
            console.log("scrollLeft : " + this.scrollLeft);
        });
    });

//***********************//