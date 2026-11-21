//9th
//***********************//
//AdvanceJS Async & Await

document.addEventListener("DOMContentLoaded",function(){
    // 1st type of async written
    async function test1(){
        return "This is a async function written style type 1<br>";
    }
    
    // 2nd type of async written
    let test2 = async function(){return "This is a async function written style type 2<br>";}

    // 3nd type of async written
    let test3 = async () => {return "This is a async function written style type 3<br>";}

    // 4nd type of async written
    let test4 = async () => "This is a async function written style type 4<br>";
    

    test1().then((data) => {
        // console.log(data);
        document.querySelector("#text1").innerHTML= data ;
    });
    test2().then((data) => {
        // console.log(data);
        document.querySelector("#text2").innerHTML= data ;
    });
    test3().then((data) => {
        // console.log(data);
        document.querySelector("#text3").innerHTML= data ;
    });
    test4().then((data) => {
        // console.log(data);
        document.querySelector("#text4").innerHTML= data ;
    });

    // 1st type of await function written
    let test = async () =>{
        console.log("2 : Message");
        await console.log("3 : Message");
        console.log("4 : Message");
    };
    console.log("1 : Message");
    test();
    console.log("5 : Message");

    // 2nd type of await function rest
    let test5 = async () =>{
        console.log("20 : Message");
        const response = await fetch('/students/data');
        console.log("30 : Message");
        const student = await response.json();

        return student;
    };
    console.log("10 : Message");
    test5().then((data) => {
        console.log("Student data : ", data);
    });
    console.log("40 : Message");

    document.querySelector("#reload").addEventListener("click",()=>{
        return test5().then((data) => {
            console.log("Student data : ", data);
        });
    })
});