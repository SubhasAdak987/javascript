//7th
//***********************//
//AdvanceJS OOP Introduction

document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("#h1").innerHTML = `<span style ="background:#FF1493; color:white;">Object Oriented Programming</span> <span style ="background:#FFA500">ES6 Version</span>`;
    document.querySelector("#h2").innerHTML = `<span style ="background:#191970 ; color:white;">Coding methodology / style / pattern</span>`;
    document.querySelector("#ul").innerHTML = `<ul>
    <li>Code more Modular and Reusable</li>
        <li>Well Organized Code</li>
        <li>Easier to debug</li>
        <li>Best for medium to large website project</li>
    </ul>`;
    document.querySelector("#ul1").innerHTML = `There is main 2 things:`;
    document.querySelector("#h3").innerHTML = `<span style ="background:#264dbf ; color:white;">Class</span> & <span style ="background:#336600 ; color:white;">Object</span>`;
    document.querySelector("#ul2").innerHTML = `If you Understand 2 things you got 50% of "OOP" Consept.`;
    document.querySelector("#ul3").innerHTML = `Class Have 2 things Properties & Methods.`;

    document.querySelector("#h4").innerHTML = `<span style="background : #336600; color:white">Proparty Example</span>:`;
    document.querySelector("#ul4").innerHTML = `let a;<br>let b;<br>let c;`;
    
    document.querySelector("#h5").innerHTML = `<span style="background : #cc0000; color:white">Methods Example</span>:`;
    document.querySelector("#ul5").innerHTML = `<span style="color:blue;">sum</span>()<span style="color:red">{</span>
    <br>
    &nbsp;&nbsp;
    c = a + b;
    <br>
    &nbsp;&nbsp;
    return c;
    <br>
    <span style="color:red">}</span>
    <br>
    <br>
    <span style="color:blue;">sub</span>()<span style="color:red">{</span>
    <br>
    &nbsp;&nbsp;
    c = a - b;
    <br>
    &nbsp;&nbsp;
    return c;
    <br>
    <span style="color:red">}</span>`;
    document.querySelector("#ul6").innerHTML = `In method we can only use thats propertirs which is declear in that class. And you can use those properties in multiple methods.`;

    class cal1{
        // let a = NULL;
        // let b = NULL;
        // let c = NULL;
        message(){ //this is a method. It's a function in this we don't write 'function' words.
            console.log("Hello Everyone");
        }
        sum(){
            c = a + b;
            return c;
        }

        sub(){
            c = a - b;
            return c;
        }
    }
    let a = new cal1(); // This is call method create a object.
    a.message();

    document.querySelector("#h6").innerHTML = `There are 3 type of Methods`;
    document.querySelector("#ul7").innerHTML = `
        <span style=" background : blue; color : white;">Constructor</span>
        <br>
        <span style=" color:blue;">constructor</span>()<span style=" color:red;">{</span>
        <br>
        &nbsp;&nbsp;&nbsp; console.log("Hello");
        <br>
        <span style=" color:red;">}</span>
        <ul>
            <li>This method create name is fixd.</li>
            <li>When we call a 'class' using 'object' it's call autometic.</li>
            <li>we use this method or function when in a 'class' we want to define a proparty or asing a value.</li>
        </ul>
        <br>
        <br>
        <span style=" background : green; color : white;">Prototype</span>
        <br>
        <span style=" color:blue;">message</span>()<span style=" color:red;">{</span>
        <br>
        &nbsp;&nbsp;&nbsp; console.log("Hello");
        <br>
        <span style=" color:red;">}</span>
        <ul>
        <li>In this method we declare a name and if we call this method then it's run. untill it's not run outometic.</li>
        <li>if in a constructor function have assing any value in a varible. then we use this function to call or calclulate them.</li>
        </ul>
        <br>
        <br>
        <span style=" background : red; color : white;">Static</span>
        <br>
        <span style=" color:red;">static</span> <span style=" color:blue;">name</span>()<span style=" color:red;">{</span>
        <br>
        &nbsp;&nbsp;&nbsp; console.log("Ishan Adak");
        <br>
        <span style=" color:red;">}</span>
        <ul>
            <li>This is call without create a class object.</li>
        </ul>
    `;


    class student{
        // this is type 1 to declear a proparty.
        // constructor(){
        //     let name;
        //     console.log("constructor Function.")
        // }
        // this is type 2 to declear a proparty.

        // Demo constructor method
        constructor(nameone,age){
            this.name = nameone; // there is not write 'let', there have 'this.verible name'.
            this.sage = age; // there is not write 'let', there have 'this.verible name'.
            console.log("constructor Function.")
        }
        
        // Demo Prototype method
        hello(){
            console.log(`Hello ${this.name}. Your age is ${this.sage}.`);
        }
        // Demo Static method
        static staticfunction(){
            console.log("This is a Static Function.")
        }
    }

    let b = new student("Ishan Adak",25); // When we create this the constructor function call automatic. // this is type 2 to assing a proparty value.
    // b.name = "Ishan Adak"; // assece the proparty and assing a value. this is type 1.
    b.hello();

    // Call a Static method
    student.staticfunction();
});