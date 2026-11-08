// First

let element;

// element = document;
// element = document.all;
// element = document.all[8]; // not work form here but it's work in console (type in console).
// element = document.head; // not work form here but it's work in console (type in console).
// element = document.title;
// element = document.body; // not work form here but it's work in console (type in console).
// element = document.links;
// element = document.links[0]; // not work form here but it's work in console (type in console).
// element = document.images;
// element = document.images[0]; // not work form here but it's work in console (type in console).
// element = document.anchors;
// element = document.forms;
// element = document.doctype;
// element = document.URL;
// element = document.baseURI;
// element = document.domain;

// element = document.getElementById("header"); // not work form here but it's work in console (type in console).
// element = document.getElementById("footer"); // not work form here but it's work in console (type in console).
// element = document.getElementsByClassName("list");
// element = document.getElementsByClassName("list")[0]; // not work form here but it's work in console (type in console).
// element = document.getElementsByTagName("ul");
// element = document.getElementsByTagName("ul")[0]; // not work form here but it's work in console (type in console).
// console.log(element);

//DOM Get Methods:

// element = document.getElementById("header").innerText;
// element = document.getElementById("content").innerText;
// element = document.getElementById("header").getAttribute("class");
// element = document.getElementById("header").getAttribute("style");
// element = document.getElementById("header").getAttribute("onclick");
// element = document.getElementById("header").getAttributeNode("style");
// element = document.getElementById("header").getAttributeNode("style").value;
// element = document.getElementById("header").attributes;
// element = document.getElementById("header").attributes[2].value;
// element = document.getElementById("header").attributes[0].name;
// console.log(element);

//DOM Set Methods:

// element = document.getElementById("header").innerHTML;
// console.log(element);
// element = document.getElementById("header").innerHTML="<a class='navbar-brand' href='#'>Subhas Adak</a>"; // set innerHtml
// element = document.getElementById("header").innerHTML;
// console.log(element);

// element = document.getElementById("header").innerHTML="<a class='navbar-brand' href='#'>Subhas Adak</a>"; // set innerHtml
// element = document.getElementById("header").setAttribute("class","xyz"); // set attribute
// element = document.getElementById("header").getAttribute("class");
// element = document.getElementById("header").attributes[2].value="border: 1px solid yellow"; // set attribute

//Remove attribute
// element = document.getElementById("header").removeAttribute("style"); //it's remove attribute

// querySelector
// element = document.querySelector("#header").innerHTML="<a class='navbar-brand' href='#'>Subhas Adak</a>"; // set innerHtml ('#'for ID)
// element = document.querySelector(".list").innerHTML; //('.'for Class)
// element = document.querySelector(".list"); //it's terget only in fast class  ('.'for Class)
// element = document.querySelectorAll(".list"); //it's terget All class  ('.'for Class)
// element = document.querySelectorAll("ul"); //it's terget All class  (tag name)
// element = document.querySelectorAll("ul")[0].innerHTML; //(tag name)
// element = document.querySelectorAll("ul")[0].innerText; //(tag name)
// element = document.querySelectorAll("#header a");
// element = document.querySelectorAll("#header a")[0].innerText; // show
// element = document.querySelectorAll("#header a")[0].innerText="HI"; // Change
// console.log(element);

//********************** //
//DOM CSS Styling Methods
// 1. Style
// 2. className
// 3. classList


// Demo by style
// document.querySelector('#header').style.backgroundColor='tan';
// document.querySelector('#header').style.color='violet';
// // element = document.querySelector('#header').style.backgroundColor;
// element = document.querySelector('#header').style.color;
// console.log(element);

// Demo by className
// document.querySelector('#content').className='abc xyz';   // Add a class useing js and  which class is allready menction in HTML file that is hoing to remove or replace.
// document.querySelector('.abc').style.backgroundColor='violet'; // and adding this class a style
// element = document.querySelector('#content').className;
// console.log(element);

// Demo by classList
// document.querySelector('#content').classList.add('abc','xyz'); // add class how much you want
// document.querySelector('.abc').style.backgroundColor='violet'; // and adding this class a style
// document.querySelector('.xyz').style.color='green'; // and adding this class a style
// document.querySelector('#content').classList.remove('test') // remove class how much you want
// element = document.querySelector('#content').classList;
// console.log(element);
//********************** //


//********************** //
// DOM addEventListener

//* Basic
// document.getElementById('content').onclick= abc;
// document.getElementById('content').onmouseenter= abc;
// document.getElementById('content').onmouseout = function bc() { 
//     this.style.backgroundColor = 'red'; 
// };
// function abc(){
//     // document.getElementById('content').style.backgroundColor='green';
//     this.style.backgroundColor='green';
// }

//* addEventListener

/*
    Basic Events Name

    . onclick (Click)
    . ondblclick (Double Click)
    . oncontextmenu (Right Click)
    . onmouseenter (Mouse Hover)
    . onmouseout (Mouse Out)
    . onmousedown (Mouse Down)
    . onmouseup (Mouse Up)
    . onkeypress (Key Press)
    . onkeyup (Key Up)
    . onload (Load)
    . onunload (Unload)
    . onresize (Resize)
    . onscroll (Scroll)

*/

// document.getElementById('content').addEventListener('click',abc);
// function abc(){
//     this.style.backgroundColor='green';
// }

// // document.getElementById('content').addEventListener('mouseout', function bc(){
// //     this.style.backgroundColor = 'red'; 
// // });
// // OR
// document.getElementById('content').addEventListener('mouseout', function(){
//     this.style.backgroundColor = 'red'; 
// });


// console.log(element);
//********************** //


//********************** //
/*
    Class List Methods

    . add(class1,class2,...)
    . remove(class1,class2,...)
    . toggle(class)
    . contains(class)
    . item(index)
    . Length
*/

document.getElementById("header").classList.add('ishan','adak');
document.querySelector('.ishan').style.backgroundColor='violet'; // for test
let a = document.getElementById("header").classList;
console.log(a,'Hi1');
document.getElementById('header').addEventListener('click',xyz); // if you add addEventListener then in html page dont hsve to menction event like 'onclick' or others.
function xyz(){
    let d = document.getElementById("content").classList.toggle('subhas'); // one ckick class add and one click class remove it's working in a event.
    let e = document.getElementById("header").classList.item(0); // it's show class name using index id.
    console.log(e,'Hi5');
    let f = document.getElementById("header").classList.contains('ishan'); // it's show this class have or not in true or false.
    console.log(f,'Hi6');
    document.getElementById("header").classList.remove('adak');
    let b = document.getElementById("header").classList;
    console.log(b,'Hi2');
}
let c = document.getElementById("header").classList.length; // Show itoal class have
console.log(c,'Hi3');

//********************** //

