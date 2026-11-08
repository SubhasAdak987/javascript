//3rd
//***********************//
// Rest Operator
/*
    [...args] // (...) is syntes and 'args' is varible name.
    It's came in JS version ES6.
    It's only use in function.


    Demo 1
    function sun(num1 , num2){
        console.log(num1+num2);
    }
    // call the function.
    sum(20,30) // It's Works
    sum(20,30,40) // It's not works
    sum(20,30,40,50) // It's not works

    // Befour Rest Operator there was a solution. which is a function name 'arguments'. that is called in 'for in loop'.

    Demo 2

    function sum(){
        let sum = 0;
        for(let i in arguments){
            sum += arguments[i];
        }
        console.log(sum);
    }
    // call the function.
    sum(20,30) // It's Works
    sum(20,30,40) // It's works
    sum(20,30,40,50) // It's works
    sum("Ishan Adak",20,30,40,50) // It's not works
*/

// 1st

let a   = ["Ishan Adak",10,20,30,40];
let b   = ["Subhas Adak",10,20,30,40,50];
let c   = ["Shalini Mukharjee",10,20,30,40,50,60];
let d   = ["Mouly Das Roy",10,20,30,40,50,60,70];

// function sum(name, ...arg){
//     let sum = 0;
//     for(let i in arg){
//         sum += arg[i];
//     }
//     document.querySelector("#ans").innerHTML = sum;
// };
// sum(...a);

let sum = (name,...arg) => {
    let sum = 0;
    let num = "";
    for(let i in arg){
        // num += arg[i] + "+";
        num += arg[i] + (i < arg.length - 1 ? "+" : "");
        sum += arg[i];
    }
    // document.querySelector("#ans").innerHTML = sum; // for singel
    // document.querySelector("#ans").innerHTML += `Name : ${name}. <br>Numbers : ${num} <br>Sum : ${sum}.<br>`;
    document.querySelector("#ans").innerHTML += `Name : ${name}. <br>Numbers : ${num} = ${sum}.<br>`;
    // document.querySelector("#ans").textContent  += `Name : ${name}. <br> Sum : ${sum}.<br>`; // fot proparlly work
    // document.write(`Name : ${name}. <br> Sum : ${sum}.<br>`);
};
sum(...a); // it's called spread operator.
sum(...b);
sum(...c);
sum(...d);
sum("Salu",50,40,70,90,64,100,258);

//***********************//