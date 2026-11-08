// 2nd
//***********************//
// Arrow Functions
/*
    in previous we are write a function like this -
    function hello(){
        console.log("Hello");
    }
    hello(); // Call the function.

    or 

    let hello = function(){
        console.log("Hello");
    }
    hello();

    // But in arrow functions we can write like this -

    let hello = () => console.log("Hello"); // see in this for a single line code we don't have to write that 'function' word. and then where the code start befour that we just add this '=>' sine.
    hello(); // Call the function.

    // if a function have multiple line code then we have to add only this '{}' breacked after this '=>' sine. and in this '{}' we are write multiple line codes.
    let hello = () => {
        let a = 5;
        let b = 9;
        return a+b;
    };
    hello();
*/

// let name = (name , age) =>{
//     return `Hello & Welcome ${name} and your age is ${age}`;
// }
// console.log(name("Ishan Adak",30));


// One line code
// let name = (name , age) => `Hello & Welcome ${name} and your age is ${age}`;
// console.log(name("Ishan Adak",30));

// One line code more sort if you have only one paramiter in a function.
let name = name => `Hello & Welcome ${name}.`;
console.log(name("Ishan Adak"));
//***********************//

