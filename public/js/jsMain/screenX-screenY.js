// 16th
//***********************//
// ["screenX","screenY"]
/*
    It's give us mouse position base on device sccreen leanth from left(x) and height from top(y).

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
// document.addEventListener("DOMContentLoaded",function(){
//     document.addEventListener('mousemove',function(e){
//         let a = e.screenX;
//         let b = e.screenY;

//         console.clear();
//         console.log("ScreenX : " + a);
//         console.log("ScreenX : " + b);
//     });
// });

// Terget div

document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("#box").addEventListener('mousemove',function(e){
        let a = e.screenX;
        let b = e.screenY;

        console.clear();
        console.log("ScreenX : " + a);
        console.log("ScreenX : " + b);
    });
});

//***********************//