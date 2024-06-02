$(document).ready(function () {
    $.ajax({
        url: 'data/users.json',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            const userTable = $('#userTable').DataTable({
                data: data,
                columns: [
                    { data: 'id' },
                    { data: 'name' },
                    { data: 'email' },
                    { data: 'password' },
                    { data: 'admin', render: function (data) { return data ? 'Yes' : 'No'; }},
                    { data: null, render: function (data, type, row) {
                        return '<button class="editBtn">Edit</button><button class="deleteBtn">Delete</button>';
                    }}
                ]
            });

            $('#userTable tbody').on('click', '.editBtn', function () {
                const rowData = userTable.row($(this).parents('tr')).data();
                openEditModal(rowData);
            });

            $('#userTable tbody').on('click', '.deleteBtn', function () {
                const rowData = userTable.row($(this).parents('tr')).data();
                if (confirm(`Are you sure you want to delete user with ID ${rowData.id}?`)) {
                    userTable.row($(this).parents('tr')).remove().draw();
                    toastr.warning("User deleted successfully.")
                }
            });
        },
        error: function (error) {
            console.error('Error loading users:', error);
        }
    });

    const editModal = $('#editModal');
    const editForm = $('#editForm');
    const editClose = $('#editClose');

    function openEditModal(user) {
        $('#editId').val(user.id);
        $('#editName').val(user.name);
        $('#editEmail').val(user.email);
        $('#editPassword').val(user.password);
        $('#editAdmin').prop('checked', user.admin);
        editModal.show();
    }

    editForm.on('submit', function (e) {
        e.preventDefault();
        const id = $('#editId').val();
        const name = $('#editName').val();
        const email = $('#editEmail').val();
        const password = $('#editPassword').val();
        const admin = $('#editAdmin').is(':checked');
        $('#userTable').DataTable().rows().every(function () {
            if (this.data().id == id) {
                this.data({ id, name, email, password, admin });
                this.invalidate().draw();
                return false;
            }
        });
        editModal.hide();
        toastr.success("User updated successfully.")
    });

    editClose.on('click', function () {
        editModal.hide();
    });

    const successModal = $('#successModal');
    const successClose = $('#successClose');
    const successMessage = $('#successMessage');

    function showSuccessMessage(message) {
        successMessage.text(message);
        successModal.show();
    }

    successClose.on('click', function () {
        successModal.hide();
    });

    $(window).on('click', function (event) {
        if (event.target === editModal[0]) {
            editModal.hide();
        }
        if (event.target === successModal[0]) {
            successModal.hide();
        }
    });
});
