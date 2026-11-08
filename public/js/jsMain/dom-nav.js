// Secound
let a;
//********************** //
//["parentElement","parentNode"]
//You can get parent element using children element and you can do what you want like style edit and hide element etc...
// a = document.getElementById("inner").parentElement;

// a = document.getElementById("outer").parentElement;

// a = document.body.parentElement;

// document.getElementById("inner").parentElement.style.background="red";
// a = document.getElementById("inner").parentElement;

// document.getElementById("child-C").parentElement.style.background="red";
// a = document.getElementById("child-C").parentElement;

// document.getElementById("child-C").parentNode.style.background="red";

// a = document.getElementById("main").parentNode; // if 'parentNode' have no perent then it's return some value.

// a = document.getElementById("main").parentElement; // if 'parentElement' have no perent then it's return NULL.

// console.log(a);
//********************** //

//********************** //
//["Children","ChildNode"]
//You can get children element using parent element and you can do what you want like style edit and hide element etc...

// a = document.getElementById("outer").children; // Terget all children

// a = document.getElementById("inner").children; // Terget all children

// a = document.getElementById("inner").children[1]; // Terget particuller one children

// document.getElementById("inner").children[1].style.background="red";
// a = document.getElementById("inner").children[1]; // Terget particuller one children

// document.getElementById("inner").children[0].style.background="red";
// a = document.getElementById("inner").children[0].innerHTML; // you  can ger inner HTML

// a = document.getElementById("inner").children; // It's return only HTML tags.
// a = document.getElementById("inner").childNodes; // It's return  HTML tags and texts etc...

// document.getElementById("inner").childNodes[1].style.background="red";
// a = document.getElementById("inner").childNodes[1].innerHTML;

// a = document.getElementById("inner").childNodes[3];

// console.log(a);
//********************** //

//********************** //
//["firstChild","lastChild","firstElementChild","lastElementChild"]
//

// a = document.getElementById("inner").firstElementChild; //it's get first child element and do what tou can.

// a = document.getElementById("inner").firstElementChild.innerHTML; //get inner text

// document.getElementById("inner").firstElementChild.style.background="red";// you can style on that
// a = document.getElementById("inner").firstElementChild;

// document.getElementById("outer").firstElementChild.style.background="red";// you can style on that
// a = document.getElementById("outer").firstElementChild;

// document.getElementById("outer").lastElementChild.style.background="red";//it's get last child element and do what tou can.
// a = document.getElementById("outer").lastElementChild;

// document.getElementById("inner").lastElementChild.style.background="red";//it's get last child element and do what tou can.
// a = document.getElementById("inner").lastElementChild;


// a = document.getElementById("inner").firstChild; // It's return first  HTML tags and texts etc...

// a = document.getElementById("inner").lastChild; // It's return last  HTML tags and texts etc...

// console.log(a);
//********************** //

//********************** //
//["nextElementSibling","nextSibling","previousElementSibling","previousSibling"]

// a = document.getElementById("child-C").nextElementSibling; // it's give me terget element's next element sibling.

// a = document.getElementById("child-C").previousElementSibling; // it's give me terget element's previous element sibling.

// document.getElementById("child-C").nextElementSibling.style.background = "red"; // you can style or do what you want.
// a = document.getElementById("child-C").nextElementSibling;

// document.getElementById("child-C").previousElementSibling.style.background = "green"; // you can style or do what you want.
// a = document.getElementById("child-C").previousElementSibling;

// a = document.getElementById("child-C").nextSibling; // It's return next HTML tags or texts etc... what is have.

// a = document.getElementById("child-C").previousSibling; // It's return previous HTML tags or texts etc... what is have.

// console.log(a);
//********************** //