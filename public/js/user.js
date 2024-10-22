
document.addEventListener('DOMContentLoaded', () => {
    const userTableBody = document.getElementById('userTableBody');

    function getUsersFromLocalStorage() {
        return JSON.parse(localStorage.getItem('users')) || [];
    }

    function deleteUser(email) {
        let users = getUsersFromLocalStorage();
        users = users.filter(user => user.email !== email); 
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
            <td>
                <i class="delete-btn btn fa fa-trash" style="font-size:20px" data-email="${user.email}"></i>
            </td>
            `;
            userTableBody.appendChild(row);
        });

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const userEmail = e.target.getAttribute('data-email');
                deleteUser(userEmail);
            });
        });
    }

    renderTable();

});

