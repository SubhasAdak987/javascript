// 14th
//***********************//
// ["clientX","clientY"] these have also have sorthend ('x','y')
/*
    This is show the mouse courser location or position from viewport in web browser page.

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
//     document.addEventListener("mousemove",function(e){
//         // let a = e.clientX;
//         // let b = e.clientY;
//         let a = e.x;
//         let b = e.y;
//         console.clear();
//         console.log("ClientX : " + a);
//         console.log("ClientY : " + b);
//     });
// });

//you can do like this

document.addEventListener("DOMContentLoaded",function(){

    // let box = document.querySelector("#box");
    // box.addEventListener("mousemove",function(e){
    //     // let a = e.clientX;
    //     // let b = e.clientY;
    //     let a = e.x;
    //     let b = e.y;
    //     console.clear();
    //     console.log("ClientX : " + a);
    //     console.log("ClientY : " + b);
    // });


    document.querySelector("#box").addEventListener("mousemove",function(e){
        // let a = e.clientX;
        // let b = e.clientY;
        let a = e.x;
        let b = e.y;
        console.clear();
        console.log("ClientX : " + a);
        console.log("ClientY : " + b);
    });
});
//***********************//