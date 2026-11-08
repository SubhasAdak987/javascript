<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Form Events</title>
</head>
<body>
    <form action="#" method="post" id="myForm">
        <label for="">Name</label>
        <input type="text" value="Ishan Adak" name="fname" class="focus-blur input-field on-change on-select" id="fname"
                 {{-- oninvalid="alert ('please fill the first name.')"  --}}
                 required>
        <br>
        <br>
        <label for="">Class</label>
        <input type="text" value="Mouly" name="" class="focus-blur input-field on-change on-select" id="" required>
        <br>
        <br>
        <label for="">Country</label>
        <select name="" class="focus-blur on-change on-select" id="on-change" required>
            <option value="" disabled selected>Select</option>
            <option value="India">India</option>
            <option value="Japan">Japan</option>
            <option value="Nepal">Nepal</option>
            <option value="Bhutan">Bhutan</option>
            <option value="Sri lanka">Sri Lanka</option>
        </select>
        <input type="submit" value="Submit">
    </form>
    <br>
    <br>
    <div id="test" style="border:1px solid red"></div>
    <br>
    <br>
    <hr>
    <div id="test1"></div>
    <br>
    <br>
    <hr>
    <div id="test2"></div>
    <br>
    <br>
    <button id="stopAnimation">Stop Animation with clear Timeout</button>
    <hr>
    <script src="js/form-events.obf.js"></script>
</body>
</html>