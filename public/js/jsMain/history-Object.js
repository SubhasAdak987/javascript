// 7th
//***********************//
/*
    there is have one properties which name is -> length
    there have 3 mothods
    1. back() // for backward
    2. forward() // for forward
    3. go() // for backward & forward
*/
console.log("For History length = ");
console.log(history);
console.log("For History length = " + history.length);
// console.log("For History back = " + history.back());
// console.log("For History forword = " + history.forward());
// console.log("For History go = " + history.go());

let back    = document.getElementById("back").addEventListener('click',function(){
    history.back();
});

let forw    = document.getElementById("forward").addEventListener('click',function(){
    history.forward();
});

let go    = document.getElementById("go").addEventListener('click',function(){
    // so in this we can put two types on integer value negative or positive. like ( 1 or -1).
    // we also can define how many page we can go or back like(3 or -3).
    history.go(2);
    // history.go(-2);
});
//***********************//