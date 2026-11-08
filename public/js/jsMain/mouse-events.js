// 19th
//***********************//
// Mouse Events Property
/*
    There we are use two evenrs
    . onmousedown
    . onmouseup

    When we click on mouse in return you are get three type of value.
    1. on left button click we get value 0.
    2. on middle button click we get value 1.
    3. on right button click we get value 2.
 */

document.addEventListener("DOMContentLoaded",function(){
    let box     = document.querySelector("#box");

    // box.addEventListener("mousedown",function(e){
    //     switch (e.button) {
    //         case 0:
    //             box.innerText="You press on left button in mouse. Value is 0";
    //             box.style.background='lightgreen';
    //             break;
    //             case 1:
    //             box.innerText="You press on middle button in mouse. Value is 1";
    //             box.style.background='lightcyan';
    //             break;
    //             case 2:
    //             box.innerText="You press on right button in mouse. Value is 2";
    //             box.style.background='violet';
    //             break;
                
    //         default:
    //             box.style.background='lightpink';
    //             break;
    //     }
    // });

    let color   = null;
    let text    = null;
    box.addEventListener("mousedown",function(e){
        switch (e.button) {
            case 0:
                // box.innerText="You press on left button in mouse. Value is 0";
                // box.style.background='lightgreen';
                text    = "You press on left button in mouse. Value is 0";
                color   = 'lightgreen';
                break;
                case 1:
                text    = "You press on middle button in mouse. Value is 1";
                color   = 'lightcyan';
                break;
                case 2:
                text    = "You press on right button in mouse. Value is 2";
                color   = 'violet';
                break;
                
            default:
                text    = "Press a mouse key";
                color   = 'lightpink';
                break;
        }
        box.innerText          = text;
        box.style.background    = color;
    });
});

//***********************//