//8th
//***********************//
//Aetch API
    if(window.fetch){
        const csrfToken = document.querySelector(
            'meta[name="csrf-token"]'
        ).content;

        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-CSRF-TOKEN': csrfToken
        };

        let studentList = [];


        // READ - GET ALL STUDENTS

        function loadStudents() {

            fetch('/students/data')

                .then(response => response.json())

                .then(data => {

                    studentList = data;

                    let rows = '';

                    data.forEach(student => {

                        rows += `
                            <tr>
                                <td>${student.id}</td>
                                <td>${escapeHTML(student.name)}</td>
                                <td>${escapeHTML(student.email)}</td>

                                <td>
                                    <button onclick="editStudent(${student.id})">
                                        Edit
                                    </button>

                                    <button onclick="deleteStudent(${student.id})">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        `;

                    });

                    document.getElementById('studentData')
                        .innerHTML = rows;

                })

                .catch(error => console.log(error));

        }


        // INSERT - CREATE STUDENT

        document.getElementById('studentForm')
            .addEventListener('submit', function(e) {

                e.preventDefault();

                let name = document.getElementById('name').value;
                let email = document.getElementById('email').value;

                fetch('/students', {

                    method: 'POST',

                    headers: headers,

                    body: JSON.stringify({
                        name: name,
                        email: email
                    })

                })

                .then(async response => {

                    const data = await response.json();

                    if (!response.ok) {
                        throw data;
                    }

                    return data;

                })

                .then(data => {

                    document.getElementById('message').innerText =
                        data.message;

                    document.getElementById('studentForm').reset();

                    loadStudents();

                })

                .catch(error => {

                    console.log(error.errors || error);

                    document.getElementById('message').innerText =
                        error.message || 'Something went wrong';

                });

            });


        // UPDATE - EDIT STUDENT

        function editStudent(id) {

            let student = studentList.find(s => s.id === id);

            let newName = prompt('Enter New Name', student.name);

            if (newName === null) return;

            let newEmail = prompt('Enter New Email', student.email);

            if (newEmail === null) return;

            fetch(`/students/${id}`, {

                method: 'PUT',

                headers: headers,

                body: JSON.stringify({
                    name: newName,
                    email: newEmail
                })

            })

            .then(async response => {

                const data = await response.json();

                if (!response.ok) throw data;

                return data;

            })

            .then(data => {

                alert(data.message);

                loadStudents();

            })

            .catch(error => {

                console.log(error.errors || error);

                alert(error.message || 'Update failed');

            });

        }


        // DELETE - REMOVE STUDENT

        function deleteStudent(id) {

            if (!confirm('Are you sure you want to delete?')) {
                return;
            }

            fetch(`/students/${id}`, {

                method: 'DELETE',

                headers: headers

            })

            .then(response => response.json())

            .then(data => {

                alert(data.message);

                loadStudents();

            })

            .catch(error => console.log(error));

        }


        // BASIC HTML ESCAPING

        function escapeHTML(value) {

            return String(value).replace(/[&<>"']/g, char => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#039;'
            })[char]);

        }


        // LOAD DATA WHEN PAGE OPENS

        loadStudents();
    }
    else{
        document.getElementById('message').innerText = error.message || 'This browser version not support the fron submit method.';
    }