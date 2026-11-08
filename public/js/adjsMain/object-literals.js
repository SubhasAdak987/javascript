//5th
//***********************//
// Object Literals

document.addEventListener("DOMContentLoaded" , function(){
    document.querySelector("#text1").innerHTML = `let <span style="color: blue;">name</span> = "Ishan Adak";<br>let <span style="color: red;">obj</span> = {<br> &nbsp;&nbsp;name : <span style="color: blue;">name</span><br>};`;
    // document.querySelector("#text1").textContent = `let name = "Ishan Adak" let obj = { name : name };`;
    document.querySelector("#text2").innerHTML = `If variable name and proparty name are same then you only write like this.
    <br><br>
    let <span style="color: blue;">name</span> = "Ishan Adak";<br>let <span style="color: red;">obj</span> = {<br> &nbsp&nbsp;&nbsp;name<br>};`;

    let name    = "Ishan Adak";
    let course  = "Btech";

    //old method
    let obj     = {
        name    : name,
        course  : course
    };

    document.querySelector("#result1").textContent  = JSON.stringify(obj);
    console.log(obj);

    //new method
    let obj2     = {
        name,
        course
    };

    document.querySelector("#result2").textContent  = JSON.stringify(obj2);
    console.log(obj2);

    document.querySelector("#text3").innerHTML = `let <span style="color:blue;">n</span> = "name";
    <br>
    let <span style="color:blue;">f</span> = "number";
    <br>
    let <span style="color:red;">obj</span> = {
    <br>
    &nbsp&nbsp&nbsp[<span style="color:blue;">n</span>] : "Subhas Adak",
    <br>
    &nbsp&nbsp&nbsp[<span style="color:blue;">f</span>] : 8918249127
    <br>};
    <br>And call  like this
    <br>
    document.querySelector("#result3").textContent  = JSON.stringify(obj);
    <br>or<br>
    console.log(obj);
    <br>or<br>
    console.log(obj.name);`;

    let n   = "name";
    let f   = "number";

    let obj3={
        [n] : "Subhas Adak",
        [f] : 8918249127
    };
    document.querySelector("#result3").textContent  = JSON.stringify(obj3);
    console.log(obj3);
    console.log(obj3.name);

    document.querySelector("#text4").innerHTML = `let <span style="color:blue;">n</span> = "name";
    <br>
    let <span style="color:blue;">f</span> = "number";
    <br>
    let <span style="color:red;">obj</span> = {
    <br>
    &nbsp&nbsp&nbsp["person" + <span style="color:blue;">n</span>] : "Subhas Adak",
    <br>
    &nbsp&nbsp&nbsp[<span style="color:blue;">f</span>] : 8918249127
    <br>};
    <br>And call  like this
    <br>
    document.querySelector("#result4").textContent  = JSON.stringify(obj);
    <br>or<br>
    console.log(obj);
    <br>or<br>
    console.log(obj.personname);`;

    let obj4={
        ["person" + n] : "Subhas Adak",
        [f] : 8918249127
    };
    document.querySelector("#result4").textContent  = JSON.stringify(obj4);
    console.log(obj4);
    console.log(obj4.personname);

    document.querySelector("#text5").innerHTML = `let <span style="color:blue;">n</span> = "name";
    <br>
    let <span style="color:blue;">f</span> = "number";
    <br>
    let <span style="color:red;">obj</span> = {
    <br>
    &nbsp&nbsp&nbsp["person" + <span style="color:blue;">n</span>] : "Subhas Adak",
    <br>
    &nbsp&nbsp&nbsp[<span style="color:blue;">f</span>] : 9876543210,
    <br>
    &nbsp&nbsp&nbsp<span style="color:blue;">detail</span> : <span style="color:#f04a23;">function</span>(){
    <br>
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span style="color:#f04a23";>return</span> &nbsp&nbsp \`\${this.personname}'s Mobile Number is \${this.number}.\`
    <br>&nbsp&nbsp&nbsp}
    <br>};
    <br>And call  like this
    <br>
    document.querySelector("#result5").textContent  = JSON.stringify(obj.detail());
    <br>or<br>
    console.log(obj);
    <br>or<br>
    console.log(obj.detail());`;

    let obj5={
        ["person" + n] : "Subhas Adak",
        [f] : 8918249127,
        detail : function(){
            return `${this.personname}'s Mobile Number is ${this.number}.`
        }
    };
    // document.querySelector("#result5").textContent  = JSON.stringify(obj5.detail()); // wrong to call a function
    document.querySelector("#result6").textContent  = JSON.stringify(obj5);
    document.querySelector("#result5").textContent  = obj5.detail(); // right to call a function
    console.log(obj5);
    console.log(obj5.detail());


    document.querySelector("#text6").innerHTML = `let <span style="color:blue;">n</span> = "name";
    <br>
    let <span style="color:blue;">f</span> = "number";
    <br>
    let <span style="color:red;">obj</span> = {
    <br>
    &nbsp&nbsp&nbsp["person" + <span style="color:blue;">n</span>] : "Subhas Adak",
    <br>
    &nbsp&nbsp&nbsp[<span style="color:blue;">f</span>] : 9876543210,
    <br>
    &nbsp&nbsp&nbsp<span style="color:blue;">detail</span>(){
    <br>
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span style="color:#f04a23";>return</span> &nbsp&nbsp \`\${this.personname}'s Mobile Number is \${this.number}.\`
    <br>&nbsp&nbsp&nbsp},
    <br>
    &nbsp&nbsp&nbsp<span style="color:blue;">'my name'</span>(){  // we can put  pace in a function name with this method
    <br>
    &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp<span style="color:#f04a23";>return</span> &nbsp&nbsp My name is \`\${this.personname} .\`
    <br>&nbsp&nbsp&nbsp}
    <br>};
    <br>And call  like this
    <br>
    document.querySelector("#result8").textContent  = JSON.stringify(obj.detail());
    <br>or<br>
    document.querySelector("#result8").textContent  = JSON.stringify(obj['detail']());
    <br>or<br>
    document.querySelector("#result8").textContent  = JSON.stringify(obj['my name']()); // and call the function like this
    <br>or<br>
    console.log(obj);
    <br>or<br>
    console.log(obj.detail());
    <br>or<br>
    console.log(obj['detail']());`;

    let obj6={
        ["person" + n] : "Subhas Adak",
        [f] : 8918249127,
        detail(){
            return `${this.personname}'s Mobile Number is ${this.number}.`
        },
        'my name'(){
            return `My name is ${this.personname}.`
        }
    };
    // document.querySelector("#result5").textContent  = JSON.stringify(obj5.detail()); // wrong to call a function
    document.querySelector("#result8").textContent  = JSON.stringify(obj6);
    document.querySelector("#result7").textContent  = obj6.detail(); // right to call a function
    console.log(obj6);
    console.log(obj6.detail());
    console.log(obj6['detail']());
    console.log(obj6['my name']());

    let fname   = "Ishan";
    let lname   = "adak";
    let sel     = 35000;

    function data(fn,ln,selary){
        let fullname    = fn + " " + ln;
        return {fullname,selary};
    };
    let s = data(fname,lname,sel);
    console.log(s);
    console.log(s.fullname);
    console.log(s.selary);
});


//***********************//