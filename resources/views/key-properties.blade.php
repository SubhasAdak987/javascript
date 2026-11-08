<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>JavaScript Key Properties</title>
    <style>
        #box{
            width: 400px;
            height: 300px;
            border: 1px solid black;
            background: lightpink;
            margin: 20px;
        }
        #move{
            width: 100px;
            height: 100px;
            border: 1px solid black;
            background: lightgreen;
        }
    </style>
</head>
<body>
    <h2>JavaScript Key Properties</h2>
    <div id="box">
        press click mouse this -> "ctrlKey","ShiftKey","altKey","metaKey" in div.
        <br>
        press in text feild this -> "ctrlKey","ShiftKey","altKey","metaKey"
        <br>
        All data show In console
    </div>
    <label for="name">Enter Name</label>
    <input type="text" name="user_name" id="name">
    &nbsp;
    &nbsp;
    <label for="lname">Enter Love one name</label>
    <input type="text" name="user_love_name" id="lname">
    <br>
    <br>
    <div id="move"></div>
    <script src="js/key-properties.obf.js"></script>
    {{-- <script src="js/jsMain/key-properties.js"></script> --}}
</body>
</html>