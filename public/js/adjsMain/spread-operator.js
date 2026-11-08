//4th
//***********************//
// Spread Operator
/*
    [...args] // (...) is syntes and 'args' is varible name.
    It's separet arrays values



    1. Copy an object using spread
    javascript
    let c = {
        Name: "Subhas",
        Age: 30
    };

    let d = { ...c };

    console.log(d);
    Output:

    javascript
    { Name: "Subhas", Age: 30 }
    Here, { ...c } copies the properties of c into a new object d.

    2. Add new properties using spread
    javascript
    let c = {
        Name: "Subhas",
        Age: 30
    };

    let d = {
        ...c,
        City: "Kolkata",
        Salary: 25000
    };

    console.log(d);
    Output:

    javascript
    {
        Name: "Subhas",
        Age: 30,
        City: "Kolkata",
        Salary: 25000
    }
    3. Update existing properties using spread
    javascript
    let c = {
        Name: "Subhas",
        Age: 30
    };

    let d = {
        ...c,
        Age: 35
    };

    console.log(d);
    Output:

    javascript
    { Name: "Subhas", Age: 35 }
    Why? When properties have the same name, the property appearing last takes precedence.

    4. Merge two objects
    javascript
    let c = {
        Name: "Subhas",
        Age: 30
    };

    let e = {
        City: "Kolkata",
        Age: 40
    };

    let d = { ...c, ...e };

    console.log(d);
    Output:

    javascript
    {
        Name: "Subhas",
        Age: 40,
        City: "Kolkata"
    }
    Here, Age becomes 40 because e comes after c.

    Remember the difference
    Syntax

    Meaning

    [...a]

    Copy or spread an array

    {...c}

    Copy or spread an object's properties

    func(...a)

    Pass array elements as individual arguments

    func({...c})

    Pass a copied object as one argument

    Important: Object spread creates a shallow copy, so nested objects and arrays are still shared references.






    use the spread operator (...) with a 2D array like your d array.

    javascript
    let d = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    console.log(...d);
    Output:

    text
    [1, 2, 3] [4, 5, 6] [7, 8, 9]
    1. Copy the 2D array
    javascript
    let e = [...d];

    console.log(e);
    Output:

    javascript
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ]
    Important: This creates a shallow copy. The outer array is new, but the inner arrays are shared.

    javascript
    let e = [...d];

    e[0].push(10);

    console.log(d[0]); // [1, 2, 3, 10]
    2. Flatten the 2D array using spread
    If you want all elements in one array:

    javascript
    let e = [...d[0], ...d[1], ...d[2]];

    console.log(e);
    Output:

    javascript
    [1, 2, 3, 4, 5, 6, 7, 8, 9]
    A shorter way is:

    javascript
    let e = d.flat();
    3. Copy each inner array too
    If you want independent copies of the inner arrays, use:

    javascript
    let e = d.map(row => [...row]);

    e[0].push(10);

    console.log(d[0]); // [1, 2, 3]
    console.log(e[0]); // [1, 2, 3, 10]
    Remember
    [...d] → copies the outer array.

    [...d[0], ...d[1]] → combines inner arrays into one array.

    d.flat() → flattens one level.

    d.map(row => [...row]) → copies the outer array and each inner array.
*/
//***********************//

// let b = ["Salu",70,80,90,100,110,120,130,...a];
let a = ["Ishan Adak",10,20,30,40,50,60];
let b = [...a]; // it's only copy the a varible.
a.push(140,150,160);

let c = {
            "Name"  : "Subhas",
            "Age"   : 30
        };
let d =  [
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
        ];

console.log(...b);
console.log(...a);
//***********************//