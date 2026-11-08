//5th
//***********************//
//AdvanceJS Destructuring Array

document.addEventListener("DOMContentLoaded",function(){
    document.querySelector("#demo1").innerHTML = ` Let <span style ="Color:blue">user</span> = ["Ishan Adak"<span style ="Color:blue">,</span>25];
    <br>
    let <span style ="Color:orange">name</span> = user[0];
    <br>
    let <span style ="Color:orange">age</span> = user[1];`;


    document.querySelector("#demo2").innerHTML = ` Let <span style ="Color:blue">user</span> = ["Ishan Adak"<span style ="Color:blue">,</span>25];
    <br>
    let [<span style ="Color:orange">name</span><span style ="Color:blue">,</span><span style ="Color:orange">age</span>] = <span style ="Color:blue">user;</span>`;

    let num = 20;
    let user = ["Subhas Adak",25,"Jhargram"];
    let [name,age = num,city] = user; 
    console.log(name);
    console.log(age);
    console.log(city);
    
    //in nested array
    let user1 = ["Subhas Adak",25,"Jhargram",["male",35000]];
    let [name1,age1 = num,city1,[gender,selary]] = user1;
    // console.log(name1);
    // console.log(age1);
    // console.log(city1);
    console.log(gender);
    console.log(selary);
    
    //using rest oparator
    let user2 = ["Subhas Adak",25,"Jhargram"];
    let [name2,...all] = user2;
    console.log(name2);
    console.log(all);

    // Use with function
    function user3([name1,age1 = num,city1]=[]){
        console.log(name1);
        console.log(age1);
        console.log(city1);
    };
    user3(["Subhas Adak",25,"Jhargram"]);
    
    //Call from funnction
    
    function user4(){
        return ["Ishan Adak",25,"Kolkata"];
    };
    let [name3,age3,city3] = user4();
    console.log(name3);
    console.log(age3);
    console.log(city3);
});