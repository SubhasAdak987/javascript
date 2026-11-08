// 6th

console.log("Location.hash = " + location.hash);
console.log("Location.host = " + location.host);
console.log("Location.hostname = " + location.hostname);
console.log("Location.href = " + location.href);
console.log("Location.origin = " + location.origin);
console.log("Location.pathname = " + location.pathname);
console.log("Location.port = " + location.port);
console.log("Location.protocol = " + location.protocol);
console.log("Location.search = " + location.search);

//Set HREF

document.getElementById("redirect").addEventListener('click',function(){
    location.href = "https://google.com"
});


// Location object methods there are total 3 Methods
/*
1. assign().
2. Reload().
3. Replace().
*/

document.getElementById("redirectA").addEventListener('click',function(){
    location.assign("https://codewithishan.in");
});
document.getElementById("redirectR").addEventListener('click',function(){
    location.reload();
});
document.getElementById("redirectRp").addEventListener('click',function(){
    location.replace("https://codewithishan.in");
});