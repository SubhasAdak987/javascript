// 15th
//***********************//
// ["pageX","pageY"]
/*
    This is show the mouse courser location or position from viewport also outside in web browser page.

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
    document.addEventListener("mousemove",function(e){
        let b = e.pageX;
        let c = e.pageY;

        let bb = e.x;
        let cc = e.y;
        console.clear();
        console.log("pageY(Hight) : " + c);
        console.log("pageX(Width) : " + b);

        // Compare.

        console.log("clientY(Hight) : " + cc);
        console.log("clientX(Width) : " + bb);
    });
    // let a = document.querySelector("#box");
});

//***********************//