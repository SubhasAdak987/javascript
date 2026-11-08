// 17th
//***********************//
// ["offsetX","offsetY"]
/*
    It's give us mouse position base on inner 'div' from left(x) and height from top(y).

    Here are all mouse events
    . onclick
    . ondblclick
    . oncontextmenu
    . onmousemove
    . onmouseleave
    . onmouseout
    . onmouseover
    . onmousedown
    . onmouseup
*/

document.addEventListener("DOMContentLoaded",function(){

    // document.addEventListener("mousemove",function(e){
    //     let a = e.offsetX;
    //     let b = e.offsetY;
    //     console.clear();
    //     console.log("offsetX : " + a);
    //     console.log("offsetY : " + b);
    // });

    // For DIV

    document.querySelector("#box").addEventListener("mousemove",function(e){
        let a = e.offsetX;
        let b = e.offsetY;

        console.clear();
        console.log("offsetX : " + a);
        console.log("offsetY : " + b);
    });
});

//***********************//