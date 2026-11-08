<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Standard HTML5 Structure</title>
</head>
<body>
    <script>
        let a = [1,2,3,4,5];
        // console.log(a.slice(1,4));
        
        let b = [1,2,3,4,5];
        // let bb= b.splice(1,2);
        console.log("Remove 2",b.splice(1,2));
        // console.log("Result after remove 2",bb);
        console.log("Result after remove 2.2",b);

        let c = [1,2,3,4,5];
        // let cc = c.splice(1,0,100);
        console.log("Insert Index 1",c.splice(1,0,100));
        // console.log("Replace after Index 1",cc);
        console.log("Insert after Index 1.1",c);

        let d = [1,2,3,4,5];
        // let dd = d.splice(1,1,100);
        console.log("Replace Index 1",d.splice(1,1,100));
        // console.log("Insert after Index 1",dd);
        console.log("Replace after Index 1.1",d);

        // Object in Array
        let student = [
            {name: 'Ishan Adak', age: 30},
            {name: 'Shalini Mukherjee', age: 26},
            {name: 'Sumona Samaddar', age: 33}
        ];
        // document.write('<br>'+student+'<br>');   
        document.write("<pre>" + JSON.stringify(student, null, 2) + "</pre>");   
        console.log(student);
        for(let a = 0; a<student.length; a++){
            document.write(student[a].name+' '+student[a].age+'</br>');
        }
        document.write(student[1].name.length+ '</br>');
        
        let date = new Date();
        document.write(date + '</br>');
        document.write(date.toDateString() + '  toDateString</br>');
        document.write(date.getDate() + '  getDate</br>');
        document.write(date.getFullYear() + '  getFullYear</br>');
        document.write(date.getMonth() + '  getMonth</br>');
        document.write(date.getDay() + '  getDay</br>');
        document.write(date.getHours() + '  getHours</br>');
        document.write(date.getMinutes() + '  getMinutes</br>');
        document.write(date.getSeconds() + '  getSeconds</br>');
        document.write(date.getMilliseconds() + '  getMilliseconds</br>');
        document.write(date.setDate(27) + '  setDate</br>');
        document.write(date.setFullYear(2027) + '  setFullYear</br>');
        document.write(date.setMonth(7) + '  setMonth</br>');
        document.write(date.setHours(14) + '  setHours</br>');
        document.write(date.setMinutes(30) + '  setMinutes</br>');
        document.write(date.setSeconds(59) + '  setSeconds</br>');
        document.write(date.setMilliseconds(99) + '  setMilliseconds</br>');
        // document.write(date + '</br>');
    </script>
</body>
</html>
