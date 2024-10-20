



document.addEventListener('DOMContentLoaded', () => {
    const userTableBody = document.getElementById('userTableBody');

    // function setUsersFromLocalStorage() {
    //     const users = [
    //         {
    //             id: 1,
    //             username: 'Phạm Đức Đạt',
    //             email: 'datpham@gmail.com',
    //             password: '1234',
    //             phonenumber: '0838577780',
    //         },
    //         {
    //             id: 2,
    //             username:  'Huỳnh Hữu Hậu',
    //             email: 'huuhau@gmail.com',
    //             password: '1234',
    //             phonenumber: '0838577780',
    //         },
    //         {
    //             id: 3,
    //             username:  'Trần Văn Vinh',
    //             email: 'huuhau@gmail.com',
    //             password: '1234',
    //             phonenumber: '0838577780',
    //         },
    //         {
    //             id: 4,
    //             username:  'Amie',
    //             email: 'huuhau@gmail.com',
    //             password: '1234',
    //             phonenumber: '0838577780',
    //         }
    //     ];
    //     let userJSON = JSON.stringify(users);
    //     localStorage.setItem('users', userJSON);
    // }

    function getUsersFromLocalStorage() {
        return JSON.parse(localStorage.getItem('users')) || [];
    }

    function deleteUser(id) {
        let users = getUsersFromLocalStorage();
        users = users.filter(user => user.id !== id);
        localStorage.setItem('users', JSON.stringify(users));
        renderTable();
    }

    function renderTable() {
        const users = getUsersFromLocalStorage();
        userTableBody.innerHTML = '';

        users.forEach((user, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${index + 1}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>${user.phonenumber}</td>
            <td>
                <i class="delete-BTN btn fa fa-trash" data-id="${user.id}"></i>
            </td>
            `;
            userTableBody.appendChild(row);
        });

        document.querySelectorAll('delete-BTN').forEach(button => {
            button.addEventListener('click', (e) => {
                const userId = Number(e.target.getAttribute('data-id'));
                deleteUser(userId);
            });
        });
    }

    // function clearForm() {
    //     userNameInput.value = '';
    //     userEmailInput.value = '';
    //     userPassWordInput.value = '';
    //     userPhoneNumberInput.value = '';
    // }

    renderTable();

});

