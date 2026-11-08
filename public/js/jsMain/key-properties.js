// 18th
//***********************//
// JavaScript Key Properties
// ["ctrlKey","ShiftKey","altKey","metaKey"]
/*
    "ctrlKey"   = Control Key.
    "ShiftKey"  = Shift Key.
    "altKey"    = Alt Key.
    "metaKey"   = Meta Key( Windows Key).

    Those all are can do with mouse events and keyboard events.

    Here are all mouse events
    . onclick
    . ondblclick
    . oncontextmenu
    . onmousemove
    . onmouseenter
    . onmouseleave
    . onmouseout
    . onmouseover
    . onmousedown
    . onmouseup

    Here are all keyboard events
    . onkeydown
    . onkeypress
    . onkeyup

    We can't Use Those key proparty in div we can use in -
    1. Input Text
    2. Select Box
    3. Text Area
*/

document.addEventListener("DOMContentLoaded",function(){
    let ctrl    = null;
    let shift   = null;
    let alt     = null;
    let meta    = null;
    let massege = null;
    let left    = 0;
    let up      = 0;
    let letter1 = "";
    let letter  = "";
    document.querySelector("#box").addEventListener("click",function(e){
        console.clear();
        ctrl    = e.ctrlKey;
        shift   = e.shiftKey;
        alt     = e.altKey;
        meta    = e.metaKey;
        massege = null;

        // if(ctrl){
        //     console.log("You pressed control key.");
        // }
        // else{
        //     console.log("You not pressed control key.");
        // }

        // if(shift){
        //     console.log("You pressed shift key.");
        // }
        // else{
        //     console.log("You not pressed shift key.");
        // }

        // if(alt){
        //     console.log("You pressed alt key.");
        // }
        // else{
        //     console.log("You not pressed alt key.");
        // }

        // if(meta){
        //     console.log("You pressed meta key.");
        // }
        // else{
        //     console.log("You not pressed meta key.");
        // }


        // if(ctrl){
        //     console.log("You pressed control key.");
        // }
        // else if(shift){
        //     console.log("You pressed shift key.");
        // }
        // else if(alt){
        //     console.log("You pressed alt key.");
        // }
        // else if(meta){
        //     console.log("You pressed meta key.");
        // }
        // else{
        //     console.log("You'r not pressed any selected key.");
        // }

        switch (true) {
            case ctrl:
                massege = "You pressed control key.";
                break;
            case alt:
                massege = "You not pressed control key.";
                break;
            case shift:
                massege = "You pressed alt key.";
                break;
            case meta:
                massege = "You pressed meta key.";
                break;
        
            default:
                massege = "You'r not pressed any selected key.";
                break;
        }
        console.log(massege);
    });

    document.querySelector("#name").addEventListener("keydown",function(e){
        console.clear();
        ctrl    = e.ctrlKey;
        shift   = e.shiftKey;
        alt     = e.altKey;
        meta    = e.metaKey;
        massege = null;

        switch (true) {
            case ctrl:
                massege = "You pressed control key.";
                break;
            case alt:
                massege = "You not pressed control key.";
                break;
            case shift:
                massege = "You pressed alt key.";
                break;
            case meta:
                massege = "You pressed meta key.";
                break;
        
            default:
                massege = "You'r not pressed any selected key.";
                break;
        }
        console.log(massege);
    });
    
    //***********************//
        
    //***********************//
    // after that we can only valide to use
    // . onkeydown

    let lone    = document.querySelector("#lname");

    lone.addEventListener("keydown",function(e){
        // console.clear();
        // console.log("You press button. : " + e.key);

        if (/^[a-zA-Z]$/.test(e.key)  || e.key === "Backspace") {
            if (e.key == 'Backspace'){
                letter1 = letter1.slice(0, -1);
            }
            else{
                letter1 += e.key;
            }
            console.clear();
            console.log("You pressed: " + letter1);
        }

        // if (/^[a-zA-Z0-9]$/.test(e.key)) {
        //     letter += e.key;
        //     console.clear();
        //     console.log("You pressed: " + letter);
        // }

    });

    document.addEventListener("keydown",function(e){
        if (/^[a-zA-Z0-9]$/.test(e.key) || e.key === "Backspace") {
            if (e.key == 'Backspace'){
                letter = letter.slice(0, -1);
            }
            else{
                letter += e.key;
            }
            if(letter == 'Shalini'){
                alert("You press the right name :" + letter);
            }
            else{
                console.clear();
                console.log("You pressed: " + letter);
            }
        }
    });
    //***********************//

    //***********************//
    let move    = document.querySelector("#move");

    move.addEventListener("click",function(e){
        if(e.button == 0){

            document.addEventListener("keydown",function(e){
                // console.clear();
                switch (e.key) {
                    case "ArrowRight":
                        left += 5;
                        break;
                    case "ArrowLeft":
                        left -= 5;
                        break;
                    case "ArrowDown":
                        up += 5;
                        break;
                    case "ArrowUp":
                        up -= 5;
                        break;
                    default:
                        console.log("Other key Pressed");
                        // console.error("❌ Unsupported key:", e.key);
                        break;
                    }
                        move.style.marginLeft   = left + "px";
                        move.style.marginTop    = up + "px";
            });
        }
    });

    //***********************//
});