document.addEventListener("DOMContentLoaded", () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const isLoggedIn = JSON.parse(localStorage.getItem('isLogin'));
    const usernameInput = document.getElementById("username");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const updateBtn = document.getElementById("update-btn");

    function loadUserData() {
        if (currentUser) {
            const loggedInUser = users.find(user => user.username === currentUser.username && user.password === currentUser.password);
            if (loggedInUser && isLoggedIn) {
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
                showAlert('Success!', 'Successful update', 'success');
            }
        }
    }

    loadUserData();
    updateBtn.addEventListener("click", updateUserData);
    

    let dropDownIn = document.querySelector("#openLoginBtn");
    let dropDownUp = document.querySelector("#openRegisterBtn");
    let dropDownOut = document.querySelector("#LogOutBtn");

    if (isLoggedIn) {
        dropDownIn.style.display = 'none';
        dropDownUp.style.display = 'none';
        dropDownOut.style.display = 'block';
    } else {
        dropDownIn.style.display = 'block';
        dropDownUp.style.display = 'block';
        dropDownOut.style.display = 'none';
    }

    function showAlert(title, message, iconType, redirectUrl = null) {
        Swal.fire({
            title: title,
            text: message,
            icon: iconType,
            confirmButtonText: 'OK'
        }).then((result) => {
            if (result.isConfirmed && redirectUrl) {
                window.location.href = redirectUrl;
            }
        });
    }


    const form = document.getElementById('search-form');
    const searchInput = document.getElementById('input-search');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const inputInfo = searchInput.value.toLowerCase();
        console.log("Input value: ", inputInfo);

        if (inputInfo) {
            window.location.assign(`products.html?search=${inputInfo}`);
        } else {
            console.log("No input provided");
        }
    });

    dropDownOut.addEventListener('click',function(e) {
        localStorage.setItem('isLogin', false);
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
        localStorage.removeItem('currentUser');
        showAlert('Success!', "You're signed out", 'success','index.html');
    });

    let cartBtn = document.getElementById('cartBtn');

    cartBtn.addEventListener('click', function() {

    const isLoggedIn = localStorage.getItem('isLogin') === 'true';

    if (isLoggedIn) {
        window.location.href = 'cart.html';
    } else {
        showAlert('Fail!', 'Please log in to enter the shopping cart', 'error');
    }
});
});


