// 8th
//***********************//
// [Windows "pageXOffset()" & "pageYOffset()"]
/*
It's get how much move a scroll bar vertical and horizontal.
*/
document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        console.clear();
        console.log("pageYOffset:", window.pageYOffset);
        console.log("pageXOffset:", window.pageXOffset);
    });
});
//***********************//