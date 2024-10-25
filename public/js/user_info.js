document.addEventListener("DOMContentLoaded", () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const updateBtn = document.getElementById("update-btn");

    function loadUserData() {
        if (currentUser) {
            const loggedInUser = users.find(user => user.username === currentUser.username && user.password === currentUser.password);

            if (loggedInUser) {
                usernameInput.value = loggedInUser.username;
                emailInput.value = loggedInUser.email;
                passwordInput.value = loggedInUser.password;
            }
        }
    }

    function updateUserData() {
        if (currentUser) {
            const userIndex = users.findIndex(user => user.username === currentUser.username && user.password === currentUser.password);

            if (userIndex !== -1) {
                users[userIndex].email = emailInput.value;
                users[userIndex].password = passwordInput.value;
                localStorage.setItem("users", JSON.stringify(users));
                alert("Cập nhật thành công!");
            }
        }
    }

    // Load user data on page load
    loadUserData();
    updateBtn.addEventListener("click", updateUserData);
    

    let dropDownIn = document.querySelector("#openLoginBtn");
    let dropDownUp = document.querySelector("#openRegisterBtn");
    let dropDownOut = document.querySelector("#LogOutBtn");

    const isLoggedIn = localStorage.getItem('isLogin') === 'true';

    if (isLoggedIn) {
        dropDownIn.style.display = 'none';
        dropDownUp.style.display = 'none';
        dropDownOut.style.display = 'block';
    } else {
        dropDownIn.style.display = 'block';
        dropDownUp.style.display = 'block';
        dropDownOut.style.display = 'none';
}
});
