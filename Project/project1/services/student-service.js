let StudentService = {
    init: function () {
        $('#addStudentForm').validate({
            rules: {
                name: 'required',
                email: {
                    required: true,
                    email: true
                },
                password: {
                    required: true,
                    minlength: 8,
                    maxlength: 20
                }
            },
            messages: {
                name: 'Please enter your name',
                email: {
                    required: 'Please enter your email',
                    email: 'Please enter a valid email address'
                },
                password: {
                    required: 'Please enter a password',
                    minlength: 'Password must be at least 8 characters long',
                    maxlength: 'Password cannot be longer than 20 characters',
                }
            },
            submitHandler: function (form) {
                let student = Object.fromEntries(new FormData(form).entries());
                StudentService.addStudent(student);
                form.reset();
            },
        });

        StudentService.fetchStudentsFromFile();
    },

    addStudent: function (student) {
        try {
            $.blockUI({ message: '<h3>Processing...</h3>' });
            toastr.success("Student added successfully")
            $.unblockUI();
        } catch (error) {
            console.error('Error in submitHandler:', error);
            alert('An error occurred. Please try again later.');
            $.unblockUI();
        }
    },

    fetchStudentsFromFile : function(){
        RestClient.get('students.json', function(data){
            Utils.datatable('students', [
                { data: 'name', title: 'Name' },
                { data: 'email', title: 'Email' }, 
                { data: 'password', title: 'Password' },
                {
                title: 'Action',
                    render: function (data, type, row, meta) {
                        return '<div><button class="btn btn-primary" onclick="StudentService.openEditModal(\'' + row.id + '\')">Edit Student</button><br/>'+
                        '<button class="btn btn-primary" onclick="StudentService.openViewMore(\'' + row.id + '\')">View More</button></div>';
                    }
                }
            ], data, 10);
            console.log('Data from file:', data);
        }, function (xhr, status, error) {
            console.error('Error fetching data from file:', error);
        });
    },

    getStudentById : function(id) {
        RestClient.get('student_' + id + '.json', function (data) {
            console.log('Data for student ' + id)
            delete data.password
            console.log(data)
            localStorage.setItem('selected_student', JSON.stringify(data))
            $('input[name="name"]').val(data.name)
            $('input[name="email"]').val(data.email)
            $('input[name="password"]').val(data.password)
            
            $.unblockUI();
        }, function (xhr, status, error) {
            console.error('Error fetching data from file:', error);
            $.unblockUI();
        });
    }, 

    openEditModal : function(id) {
        console.log(id);
        toastr.success('You clicked Success toast');
        $.blockUI({ message: '<h3>Processing...</h3>' });
        $('#editModal').show();
        StudentService.getStudentById(id)  
    }, 

    openViewMore : function(id) {
        StudentService.getStudentById(id) 
        window.location.replace("#view_more");
    },

    populateViewMore : function(){
        let selected_student = JSON.parse(localStorage.getItem('selected_student'))
        $("#name").text(selected_student.name)
        $("#email").text(selected_student.email)
    },

    closeModal : function() {
        $('#editModal').hide();
    },

    editStudent : function(student){
        try {
            $.blockUI({ message: '<h3>Processing...</h3>' });
            toastr.success("Student edited successfully")
            $.unblockUI();
        } catch (error) {
            console.error('Error in submitHandler:', error);
            alert('An error occurred. Please try again later.');
            $.unblockUI();
        }
    }
}