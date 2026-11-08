// 1st
//***********************//
// template-string
// [``] this spacial sine called "back tick" it's use in template string.{ this spacial sine found in key board down to 'esc' button.}
//***********************//

// old version
// let user    = "Ishan Adak";
// document.write("Hello " + user + " Welclome to my code world");

// new version
let user    = "Ishan Adak";
let marks   = 350;
// let hello   = `Hello  ${user} your marks is ${marks}`; // when i passing a velue in a string use this sing ${}.
let hello   = `Hello  "${user}" your marks is '${marks}'`; // when i passing a velue in a string use this sing ${}. in this we can also use bouth double inverted quotes and singel inverted quotes.
let hello1   = `Hello  "${user}" 
your marks 
is '${marks}'`; // using this in console how many enter or space you  give in this sentence all are showing but not in in font page.
document.write(hello);
console.log(hello1);

// it's also use functions in this

function name(name,mark){
    return `Hello  "${name}" your marks is '${mark}'`;
};
document.write(`<br> ${name(user,marks)}`);
//***********************//