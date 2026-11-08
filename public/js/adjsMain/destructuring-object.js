//6th
//***********************//
//AdvanceJS Destructuring Oblect

document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("#demo1").innerHTML = `let <span style ="Color:blue">user</span> = {
    <br>
    &nbsp;&nbsp;&nbsp; name : "Ishan Adak",
    <br>
    &nbsp;&nbsp;&nbsp; age  : 25,
    <br>
    }
    <br>
    let <span style ="Color:blue">name</span> = user.name;
    <br>
    let <span style ="Color:blue">age</span> = user.age;`;

    document.querySelector("#demo2").innerHTML = `let <span style ="Color:blue">user</span> = {
    <br>
    &nbsp;&nbsp;&nbsp; name : "Ishan Adak",
    <br>
    &nbsp;&nbsp;&nbsp; age  : 25,
    <br>
    }
    <br>
    let {<span style ="Color:green">name</span> <span style ="Color:blue">,</span> <span style ="Color:green">age</span>} = <span style ="Color:blue">user</span>;`;

    let user = {
        name : "Ishan Adak",
        age  : 25,
        city : "Kolkata"
    };
    // proparty name and varible name must be same.
    let {name,age,city} = user;
    console.log(name);
    console.log(age);
    console.log(city);

    //we can add varible only what i need.
    let user1 = {
        name1 : "Ishan Adak",
        age1  : 25,
        city1 : "Kolkata"
    };

    // let {name1,,city1} = user1; we don't do like this.
    // let {name1,city1} = user1; we do like this.
    let {name1,age1,city1} = user1;
    console.log(name1);
    console.log(city1);

    document.querySelector("#demo3").innerHTML = `let <span style ="Color:blue">user</span> = {
    <br>
    &nbsp;&nbsp;&nbsp; name : "Ishan Adak",
    <br>
    &nbsp;&nbsp;&nbsp; age  : 25,
    <br>
    }
    <br>
    let {<span style ="Color:green">name</span> : n <span style ="Color:blue">,</span> <span style ="Color:green">age</span> : a} = <span style ="Color:blue">user</span>;
    <br>
    <br>
    console.log(n);
    <br>
    console.log(a)`;

    let user2 = {
        name2 : "Subhas Adak",
        age2  : 25,
        city2 : "Jhargram"
    };

    let {name2 : n,age2 : a,city2 : c} = user2;
    console.log(n);
    console.log(a);
    console.log(c);
});