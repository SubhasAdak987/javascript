<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>AdvanceJS Fetch API</title>

    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>

<body>

    <h2>Student Management</h2>

    <!-- INSERT FORM -->
    <h3>Add Student</h3>

    <form id="studentForm">

        <input type="text"
               id="name"
               placeholder="Enter Name"
               required>

        <input type="email"
               id="email"
               placeholder="Enter Email"
               required>

        <button type="submit">Save Student</button>

    </form>

    <p id="message"></p>

    <hr>

    <!-- STUDENT TABLE -->
    <h3>Student List</h3>

    <button onclick="loadStudents()">Load Students</button>

    <table border="1" cellpadding="10">

        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody id="studentData"></tbody>

    </table>


    <script src="js/adjs/fetch-api.obf.js"></script>

</body>
</html>
