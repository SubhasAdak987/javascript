// 4Th

let a;
let b;
let c;

//********************** //
//["focus()","blur()","input","change()","select","submit","invalid"]

// type One;

// document.getElementById("fname").addEventListener('focus',onfocus);
// function onfocus(){
//     this.style.borderColor = 'lime';
//     this.style.background = 'lime';
// }
// document.getElementById("fname").addEventListener('blur',function(){
//     this.style.borderColor = '';
//     this.style.background = '';
// });

// type Two;

a = document.getElementsByClassName("focus-blur");
for(const aa of a){
    aa.addEventListener('focus',onfocus);
    aa.addEventListener('blur',onblur);
    // aa.addEventListener('blur',function(){
    //     this.style.borderColor = '';
    //     this.style.background = '';
    // });
}
function onfocus(){
    this.style.borderColor = 'lime';
    this.style.background = 'lime';
}
function onblur(){
    // this.style.borderColor = '';
    this.style.background = '';
}

// Input
// Type One

// document.getElementById("fname").addEventListener('input',oninput);
// function oninput(){
//     c = this.value;
//     document.getElementById("test").innerHTML = c;
// }

// type two

// c = document.getElementsByClassName("input-field");
// for(const cc of c){
//     cc.addEventListener('input',function(){
//         const f = this.value;
//         document.getElementById("test").innerHTML = f;
//     })
// }

//change()

// Type One

// document.getElementById("on-change").addEventListener('change',function(){
//     let d = this.value;
//     document.getElementById("test").innerHTML = d;
    
// });

// Type two

// const ca = document.getElementsByClassName("on-change");
// for(const cb of ca){
//     cb.addEventListener('change',function(){
//         const fa = this.value;
//         document.getElementById("test").innerHTML = fa;
//     })
// };

//select

// Type One

// const ab = document.getElementsByClassName("on-select");
// for(const ac of ab){
//     ac.addEventListener('select',function(){
//         const ad = this.type;
//         document.getElementById("test").innerHTML = 'You have selected '+ad+' type';
//         console.log("You have selected "+ad+" type");
//     });
// }

// c = document.getElementById("fname").addEventListener('select',function(){
//     console.log("You select some text");
// });

// Submit

function submitFunction() {
    // event.preventDefault(); // uncomment to stop the page from submitting/reloading
    a = document.getElementById("fname").value;
    alert("You Submit A form " + a);
}
document.getElementById("myForm").addEventListener("submit", submitFunction);

// Invalid
// if HTML element is 'required' then it's works.
// first
// document.getElementsByClassName("input-field").addEventListener('invalid',function(){
//     alert("please fill the field."); // it's use for one field.
// });

// secound
// const fields = document.getElementsByClassName("input-field");

// for (const field of fields) {
//     field.addEventListener("invalid", function () {
//         alert("Please fill the field.");
//     });
// }
//********************** //

//***********************//
// ["setInterval()","clearInterval()"]
// Those are use for animation
// allow pasting (In crome write this code and it is allow to past data in console).
/*
    // for execute
    "setInterval()" syntex  -> setInterval(FunctionName,Millisecound) // what millisecound you mensoned the function execute every that time after and after.
    // for stop
    "clearInterval()" syntex -> clearInterval("setInterval() variable name")
*/
let style1          = document.getElementById("test1");
style1.style.height       = "150px";
style1.style.width        = "150px";
style1.style.background   = "red";
style1.style.border       = "2px solid black";
style1.style.display      = "block";

let acount = 0;
// let sid = setInterval(anim, 500);
// function anim(){
//     // console.log("Hello")
//     if(acount==200){
//         clearInterval(sid);
//     }
//     else{
//         acount = acount+10;
//         style1.style.marginLeft = acount+'px';
//         // style1.style.width = acount+'px';
//         // console.clear()
//         // console.log(acount)
//     }
// }
// or
let sid = setInterval(function(){
    // console.log("Hello")
    if(acount==200){
        clearInterval(sid);
    }
    else{
        acount = acount+10;
        style1.style.marginLeft = acount+'px';
        // style1.style.width = acount+'px';
        // console.clear()
        // console.log(acount)
    }
}, 500);

//***********************//

//***********************//
// ["setTimeout()","clearTimeout()"]
/*
    // execute one time and execute in a particuller time.
    "setTimeout()" syntex  -> setTimeout(FunctionName,Millisecound) // what millisecound you mensoned the function execute after that time for onetime.
    // for stop
    "clearTimeout()" syntex -> clearInterval("setTimeout() variable name")
*/
let style2          = document.getElementById("test2");
style2.style.height       = "150px";
style2.style.width        = "150px";
style2.style.background   = "red";
style2.style.border       = "2px solid black";
style2.style.display      = "block";

// let sto = setTimeout(anim2,3000);
// function anim2(){
//     style2.style.width  = "500px";
// }

// or
let sto = setTimeout(function(){
    style2.style.width  = "500px";
},3000);

document.getElementById("stopAnimation").addEventListener("click",function(){
    clearTimeout(sto);
});
//***********************//