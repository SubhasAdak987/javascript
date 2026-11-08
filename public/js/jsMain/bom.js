// 5Th

//***********************//
// ["onresize or resize","outerHeight","innerHeight","outerWidth","innerWidth" ]
function resizeFunction(){
    console.clear();

    let iHight = window.innerHeight;
    let oHight = window.outerHeight;
    let iwidth = window.innerWidth;
    let owidth = window.outerWidth;

    console.log('This is Inner height '+iHight);
    console.log('This is outter height '+oHight);
    console.log('This is Inner Width '+iwidth);
    console.log('This is outter Width '+owidth);
};
resizeFunction();

window.addEventListener('resize', resizeFunction);

//***********************//

//***********************//
// ["open()","close()"]
/*
    syntex for open window.open(URL,name,specs)
    * URL   = Which site or page want to open demo-> https://codewithishan.in/
    * name  = this is optional. there have other parameter like (
                _blank  = It's open in new window.
                _parent = It's open in same window.
                _self   = It's open and use in ifream.
                _top    = It's open in freamset.
            )
    * specs = It's mens 'specification' the is have some pre define value. here is some demo which suppot in all populer browsers demo ->(
                1. width
                2. height
                3. left
                4. top
            )
*/
let Owin    = null;
let count   = 0;
document.getElementById("bot").addEventListener('click',function(){
    Owin    = window.open(
                // "https://codewithishan.in/",
                "",
                "",
                // "width=500px,height=200px,left=500px,top=200px"
                "width=200px,height=200px,left=30px,top=30px"
            );
    Owin.document.write("<p>This is my Window</p>")
    count++;
    if(count == 1){
        document.getElementById("bot").disabled = true;
    }
    if(!Owin){
        document.getElementById("bot").disabled = false;
    }
});

document.getElementById("botC").addEventListener('click',function(){
    if(Owin){
        Owin.close(); // It's close only last open window.
        count--;
        document.getElementById("bot").disabled = false;
    }
});

//***********************//

//***********************//
// ["moveBy()","moveTo()"]
document.getElementById("botT").addEventListener('click',function(){
    Owin.moveTo(200,200)
    Owin.focus();
});
document.getElementById("botB").addEventListener('click',function(){
    Owin.moveBy(200,200)
    Owin.focus();
});
//***********************//

//***********************//
// ["resizeBy()","resizeTo()"]
document.getElementById("botRT").addEventListener('click',function(){
    Owin.resizeTo(400,400)
    Owin.focus();
});
document.getElementById("botRB").addEventListener('click',function(){
    Owin.resizeBy(400,400)
    Owin.focus();
});
//***********************//

//***********************//
// ["scrollTo()","scrollBy()"]
/*
    Type of scroll bar
    1. Vertical Scroll.(want value Y-Axis "this value use in 'scrollTo()' &'scrollBy()'")
    2. Horizontal Scroll.(want value X-Axis "this value use in 'scrollTo()' &'scrollBy()'")

    If you want to scroll up then the value gose with '-' value.
    If you want to scroll down then the value gose with '+' value this '+' value is default.

    same

    If you want to scroll left then the value gose with '-' value.
    If you want to scroll right then the value gose with '+' value this '+' value is default.
*/

let scr = document.getElementById("scr").style;
// scr.height  = "100px";
scr.width   = "1000px";
scr.border  = "5px solid red";
document.getElementById("botScrB").style.position = "fixed"; // It's fixed the botton position.
document.getElementById("botScrT").style.position = "fixed"; // It's fixed the botton position.

document.getElementById("botScrB").addEventListener('click',function(){
    // window.scrollBy(0,20); // Gose Down
    // window.scrollBy(0,-20); // Gose Up
    // window.scrollBy(100,0); // Gose right
    window.scrollBy(-100,0); // Gose left
});
document.getElementById("botScrT").addEventListener('click',function(){
    // window.scrollTo(0,250); // means wheb you click the button then in page scroll Vertical stop at 250px.
    window.scrollTo(50,0); // Lowest value is 0,0. it's don't go in munis
});
//***********************//