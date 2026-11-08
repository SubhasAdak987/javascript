// Third

let a;
let b;
let c;
let glob;

//********************** //
//  ---------- DOM Create Method ----------
//["createElement","createTextNode","createComment"]
// When i want to add 'tag' in HTML using javascript there is a method it's call "createElement".
// When i want to add 'text' in HTML using javascript there is a method it's call "createTextNode".
// When i want to add 'comment'{Demo - <!-- Just comment --> } in HTML using javascript there is a method it's call "createComment".

// a = document.createElement("h1");
// a = document.createElement("h2");
// a = document.createElement("p");
// a = document.createElement("div");

// b = document.createTextNode("Hi My Name Is Subhas Adak.");

// c = document.createComment("Hi this is a costum comment line");




// console.log(a);
// console.log(b);
// console.log(c);
//********************** //

//********************** //
//  ---------- DOM Append Method ----------
// ["appendChild","insertBefore","insertAdjacentElement","insertAdjacentHTML","insertAdjacentText"]
// a = document.createElement("h2");
// b = document.createTextNode("Hi My Name Is Subhas Adak.");
// a.appendChild(b);

// document.getElementById("test").appendChild(a);

// console.log(a);
// console.log(b);

// c = document.createComment("Hi this is a costum comment line");
// document.getElementById("test").appendChild(c);

// glob = document.getElementById("test");
// glob.insertBefore(a,glob.childNodes[0]); // It's show or insert data befour or after what element you target.

// console.log(c);
// console.log(glob);
//********************** //

//********************** //
//  ---------- DOM Create & Append Methods ----------
// ["insertAdjacentElement","insertAdjacentHTML","insertAdjacentText"] // Those methods are create and append at the same time.
//  ---------- DOM insertAdjacent Positions ----------
// ["beforebegin","afterbegin","beforeend","afterend"]

// a = document.createElement("h2");
// b = document.createTextNode("Hi This is insertAdjacentElement Method.");
// a.appendChild(b);
// c = document.getElementById("test");
// c.insertAdjacentElement("beforebegin",a);

// c = document.getElementById("test");
// a = "<h2>This is insertAdjacentHTML Method.</h2>"
// c.insertAdjacentHTML("afterbegin",a);

// c = document.getElementById("test");
// a = "This is insertAdjacentText Method."
// c.insertAdjacentText("beforeend",a);

//********************** //

//********************** //
//  ---------- DOM Replace & Remove Methods ----------
//{ Link is http://127.0.0.1:8000/dc }
// ["replaceChild()","removeChild()"]

// a = document.createElement("li");
// b = document.createTextNode("Every thing is possible.");
// a.appendChild(b); // Now varible 'a' have store 'b' value in it.
// glob = document.getElementById("list");
// let oldElement = glob.children[0]; // it's get in array.
// // console.log(oldElement);
// glob.replaceChild(a,oldElement); // Now it's replace 'oldElement' target value with 'a'.


// a = document.getElementById("list");
// b = a.children[1];
// a.removeChild(b); // It's remove that's element from view page
// OR
// b = document.getElementById("list").children[1];
// document.getElementById("list").removeChild(b);

//********************** //

//********************** //
//  ---------- DOM CloneNode Methods ----------
// ["cloneNode"]

// a = document.getElementById("list").children[0];
// c = a.cloneNode(true); // if "false" or blank it's only copy the attributes and if it's "true" then it's copy all the attributes and the inner value.
// console.log(c);
// document.getElementById("list2").appendChild(c); // 1st
// document.getElementById("test").appendChild(c); // 2nd cloneNode only effect in last attribute

//********************** //

//********************** //
//  ---------- DOM contains() Methods ----------
// a = document.getElementById("test");
// b = document.getElementById("abc");
// c = a.contains(b); // It's only return true or false the element is have or not in the parent element
// console.log(c);
//********************** //

//********************** //
//  ---------- DOM hasAttribute() Methods ----------
//["hasAttribute()","hasChildNodes()"]

// a = document.getElementById("test");
// b = a.hasAttribute("class"); // It's check the attribute is exits or not and in return it's give me true or false

// b = a.hasChildNodes(); // In this element has child or not. if in this have only have space or enter it's also count as a child. and in return give us true or false.

// console.log(b);
//********************** //

//********************** //
// { URL or Link is http://127.0.0.1:8000/dc }
//  ---------- DOM isEqualNode() Methods ----------
//["isEqualNode()"]
// Criteria or Condition : 1. Have to same Node Type. e.g. list == list or p == p etc. (p = paragraph or p tag)
// 2. Have to same Node Name. e.g. li == li etc.
// 3. Have to same Node value. e.g. 5 == 5 or "One" == "One" etc.
// 4. Have to same childNodes. e.g. p == p etc.
// 5. Have to same attribute. e.g. class == class.
// 5. Have to same attribute values. e.g. class="abc" == class="abc" etc.

// a = document.getElementById("list").firstElementChild;
// // b = document.getElementById("list2").firstElementChild;

// b = document.getElementById("list2").children[1];

// c = a.isEqualNode(b); // It's return true or false
// console.log(c);
//********************** //