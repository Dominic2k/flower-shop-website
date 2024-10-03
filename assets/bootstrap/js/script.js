let countdownDate = new Date("Oct 20, 2024 23:59:59").getTime();

let countdownFunction = setInterval(function() {
    let now = new Date().getTime();
    let distance = countdownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(countdownFunction);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);
// Liên kết với form đăng nhập và đăng ký

// Lấy các modal
var loginModal = document.getElementById("loginModal");
var registerModal = document.getElementById("registerModal");

// Lấy các nút để mở modal
var openLoginBtn = document.getElementById("openLoginBtn");
var openRegisterBtn = document.getElementById("openRegisterBtn");

// Lấy các phần tử đóng modal (X)
var closeButtons = document.getElementsByClassName("close");

// Khi nhấn nút "Đăng nhập", mở modal đăng nhập
openLoginBtn.onclick = function() {
    loginModal.style.display = "block";
}

// Khi nhấn nút "Đăng ký", mở modal đăng ký
openRegisterBtn.onclick = function() {
    registerModal.style.display = "block";
}

// Khi nhấn vào nút close (X), đóng modal
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        loginModal.style.display = "none";
        registerModal.style.display = "none";
    }
}

// Khi người dùng nhấn ra ngoài modal, đóng modal
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
}

// // chuyển đổi giữ form đăng ký và đăng nhập
// document.getElementById('show-register-form').addEventListener('click', function() {
//     document.getElementById('loginModal').style.display = 'none';
//     document.getElementById('registerModal').style.display = 'block';
// });

// document.getElementById('show-login-form').addEventListener('click', function() {
//     document.getElementById('loginModal').style.display = 'block';
//     document.getElementById('registerModal').style.display = 'none';
// });

// // Ẩn và hiện mật khẩu
// const togglePasswordVisibility = (buttonId, inputSelector) => {
//     const button = document.getElementById(buttonId);
//     const input = document.querySelector(inputSelector);
//     button.addEventListener('click', function () {
//         const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
//         input.setAttribute('type', type);
//         this.textContent = this.textContent === 'Show' ? 'Hide' : 'Show';
//     });
// };

// // Chức năng chuyển đổi cho cả hai form
// togglePasswordVisibility('show-password', '#loginModal input[type="password"]');
// togglePasswordVisibility('show-password-register', '#registerModal input[type="password"]');

// // Hiển thị alert
// const showAlert = (message, type = 'success') => {
//     const alertBox = document.getElementById('alert-box');
//     alertBox.className = `alert alert-${type}`;
//     alertBox.textContent = message;
//     alertBox.style.display = 'block';
//     setTimeout(() => {
//         alertBox.style.display = 'none';
//     }, 3000); 
// };
// // Register new user
// document.getElementById('register').addEventListener('click', function() {
// const username = document.getElementById('register-username').value;
// const email = document.getElementById('register-email').value;
// const password = document.getElementById('register-password').value;

// if (username && email && password) {
//     const user = { username, email, password };

//     // Lấy danh sách người dùng từ localStorage hoặc tạo một mảng mới nếu chưa có
//     let users = JSON.parse(localStorage.getItem('users')) || [];

//     // Kiểm tra xem username đã tồn tại chưa
//     const userExists = users.some(u => u.username === username);

//     if (userExists) {
//         showAlert('Username already exists, please choose another one.', 'danger');
//     } else {
//         // Thêm người dùng mới vào mảng
//         users.push(user);

//         // Lưu lại danh sách người dùng vào localStorage
//         localStorage.setItem('users', JSON.stringify(users));
//         showAlert('Account created successfully! You can now sign in.');
//         document.getElementById('registerModal').style.display = 'none';
//         document.getElementById('loginModal').style.display = 'block';
//     }
// } else {
//     showAlert('Please fill all fields', 'danger');
// }
//  });

// // Login user
// document.getElementById('login-btn').addEventListener('click', function() {
// const username = document.getElementById('login-username').value;
// const password = document.getElementById('login-password').value;

// // Lấy danh sách người dùng từ localStorage
// const users = JSON.parse(localStorage.getItem('users')) || [];

// // Kiểm tra xem người dùng có tồn tại hay không
// const user = users.find(u => u.username === username && u.password === password);

// if (user) {
//     showAlert('Login successful!');
// } else {
//     showAlert('Invalid username or password', 'danger');
// }
// });
// Chuyển đổi giữa form đăng ký và đăng nhập
document.getElementById('show-register-form').addEventListener('click', function(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('registerModal').style.display = 'block';
});

document.getElementById('show-login-form').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('loginModal').style.display = 'block';
    document.getElementById('registerModal').style.display = 'none';
});

// Ẩn và hiện mật khẩu
const togglePasswordVisibility = (buttonId, inputSelector) => {
    const button = document.getElementById(buttonId);
    const input = document.querySelector(inputSelector);
    button.addEventListener('click', function () {
        const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
        input.setAttribute('type', type);
        this.textContent = this.textContent === 'Show' ? 'Hide' : 'Show';
    });
};

// Chức năng chuyển đổi hiển thị mật khẩu cho cả hai form
togglePasswordVisibility('show-password', '#loginModal input[type="password"]');
togglePasswordVisibility('show-password-register', '#registerModal input[type="password"]');

// Hiển thị alert
const showAlert = (message, type = 'success') => {
    const alertBox = document.getElementById('alert-box');
    alertBox.className = `alert alert-${type}`;
    alertBox.textContent = message;
    alertBox.style.display = 'block';
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 3000); 
};

// Đăng ký người dùng mới
document.getElementById('register-btn').addEventListener('click', function() {
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (username && email && password) {
        const user = { username, email, password };

        // Lấy danh sách người dùng từ localStorage hoặc tạo mảng mới nếu chưa có
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Kiểm tra xem username đã tồn tại chưa
        const userExists = users.some(u => u.username === username);

        if (userExists) {
            showAlert('Username already exists, please choose another one.', 'danger');
        } else {
            // Thêm người dùng mới vào mảng
            users.push(user);

            // Lưu lại danh sách người dùng vào localStorage
            localStorage.setItem('users', JSON.stringify(users));
            showAlert('Account created successfully! You can now sign in.');
            document.getElementById('registerModal').style.display = 'none';
            document.getElementById('loginModal').style.display = 'block';
        }
    } else {
        showAlert('Please fill all fields', 'danger');
    }
});

// Đăng nhập người dùng
document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Lấy danh sách người dùng từ localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Kiểm tra xem người dùng có tồn tại hay không
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        showAlert('Login successful!');
        // Có thể thêm logic để chuyển hướng người dùng sau khi đăng nhập thành công
    } else {
        showAlert('Invalid username or password', 'danger');
    }
});

    