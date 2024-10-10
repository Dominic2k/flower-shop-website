// JS Countdown timer

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

// JS Show sản phẩm ở trang chủ


function createdProducts() {
    
const products = [
    {
        id: 1,
        name: 'White Roses',
        code: 'TC102501',
        color: 'red',
        title: 'Love',
        describe: 'Bó hoa "Ngày êm đềm" với những đóa hồng đỏ thắm và cát tường trắng tinh khiết, là biểu tượng của tình yêu cháy bỏng và lòng thủy chung sâu sắc mà anh dành cho em. Mỗi bông hoa đại diện cho một ký ức đẹp, một lời hứa, và một ước nguyện cho tương lai chung của chúng ta. Anh tặng em bó hoa này không chỉ để nói "Anh yêu Em" mà còn để nói rằng mỗi ngày bên em là một ngày tuyệt vời đối với anh, êm đềm và trọn vẹn.',
        price: "$64.00",
        img: "https://flowersight.com/wp-content/uploads/2021/02/bo-hoa-hinh-trai-tim.jpg"
    },
    {
        id: 2,
        name: 'White Roses',
        code: 'TC102501',
        color: 'red',
        title: 'Love',
        describe: 'Helo',
        price: "$64.00",
        img: "https://flowersight.com/wp-content/uploads/2021/02/bo-hoa-hinh-trai-tim.jpg"
    },
    {
        id: 3,
        name: 'White Roses',
        code: 'TC102501',
        color: 'red',
        title: 'Love',
        describe: 'Helo',
        price: "$64.00",
        img: "https://flowersight.com/wp-content/uploads/2021/02/bo-hoa-hinh-trai-tim.jpg"
    },
    {
        id: 4,
        name: 'White Roses',
        code: 'TC102501',
        color: 'red',
        title: 'Love',
        describe: 'Helo',
        price: "$64.00",
        img: "https://flowersight.com/wp-content/uploads/2021/02/bo-hoa-hinh-trai-tim.jpg"
    },
    {
        id: 5,
        name: 'White Roses',
        code: 'TC102501',
        color: 'red',
        title: 'Love',
        describe: 'Helo',
        price: "$64.00",
        img: "https://flowersight.com/wp-content/uploads/2021/02/bo-hoa-hinh-trai-tim.jpg"
    },
    {
        id: 6,
        name: 'White Roses',
        code: 'TC102501',
        color: 'red',
        title: 'Love',
        describe: 'Helo',
        price: "$64.00",
        img: "https://flowersight.com/wp-content/uploads/2021/02/bo-hoa-hinh-trai-tim.jpg"
    },
    {
        id: 7,
        name: 'White Roses',
        code: 'TC102501',
        color: 'red',
        title: 'Love',
        describe: 'Helo',
        price: "$64.00",
        img: "https://flowersight.com/wp-content/uploads/2021/02/bo-hoa-hinh-trai-tim.jpg"
    },
    {
        id: 8,
        name: 'White Roses',
        code: 'TC102501',
        color: 'red',
        title: 'Love',
        describe: 'Helo',
        price: "$64.00",
        img: "https://flowersight.com/wp-content/uploads/2021/02/bo-hoa-hinh-trai-tim.jpg"
    }
];
let productJSON = JSON.stringify(products);
localStorage.setItem('products', productJSON);
}


function showListProducts() {
    let storedProducts = JSON.parse(localStorage.getItem('products'));
    
    if (!storedProducts || storedProducts.length === 0) {
        document.getElementById('products').innerHTML = '<p>No products available.</p>';
        return;
    }

    let content = '';

    for (let i = 0; i < storedProducts.length; i++) {
        content += `<div class="product-item">`
        content += `<a href="detail.html?id=` + storedProducts[i].id + `">`;
        content += `<img src="` + storedProducts[i].img + `" class="card-img" style="height: 400px;">`;
        content += `</a>`
        content += `<div class="card-body">`;
        content += `<h3 class="card-title">` + storedProducts[i].name + `</h3>`;
        content += `<p class="card-text">` + storedProducts[i].price + `</p>`;
        content += `<a href="payment.html?id=` + storedProducts[i].id + `" class="card-btn-left">Buy now</a>`;
        content += `</div>`;
        content += `</div>`;
    }
    console.log(content);
    document.getElementById('products').innerHTML = content;
}


// JS Lưu Feedback vào local storage
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn reload trang khi submit form
    
    const name = document.getElementById('name').value;
    const occupation = document.getElementById('occupation').value;
    const description = document.getElementById('description').value;

    const newFeedback = {
        name: name,
        occupation: occupation,
        description: description
    };

    let feedbackList = JSON.parse(localStorage.getItem('feedbacks')) || [];

    // Thêm feedback mới vào đầu mảng
    feedbackList.unshift(newFeedback);

    // Lưu mảng feedback lại vào localStorage
    localStorage.setItem('feedbacks', JSON.stringify(feedbackList));

    // Thông báo khi đã lưu thành công, này để sửa lại cho đẹp hơn
    alert('Your feedback has been saved successfully!');

    // Reset form after sending feedback
    document.getElementById('feedbackForm').reset();
});



function showListFeedback() {
    const feedbacks  = [
        {
            name: 'Alice Johnson',
            occupation: 'Marketing Manager',
            description: 'The flowers I ordered were absolutely stunning! They\
                        arrived on time and were fresh. Will definitely be\
                        ordering again.'
        },
        {
            name: 'John Smith',
            occupation: 'Teacher',
            description: 'I was impressed by the variety of flowers available on\
                            the website. The bouquet I ordered exceeded my\
                            expectations.'
        },
        {
            name: 'Emily Brown',
            occupation: 'Interior Designer',
            description: 'The customer service was exceptional. They helped me\
                            choose the perfect arrangement for my friend\'s\
                            birthday.'
        },
        {
            name: 'Michael Lee',
            occupation: 'Software Engineer',
            description: 'I have never been disappointed with the quality of\
                            flowers from this shop. Highly recommend!'
        }
    ];
    
    // Store feedbacks in local storage
    let feedbackJSON = JSON.stringify(feedbacks);
    localStorage.setItem('feedbacks', feedbackJSON);

    // Retrieve feedbacks from local storage
    let storedFeedbacks = JSON.parse(localStorage.getItem('feedbacks'));

    // Loop through feedbacks and display each in the correct element with <span> tag
    for (let i = 0; i < 4; i++) {
        let name = `<span>${storedFeedbacks[i].name}</span>`;  
        let occupation = `<span>${storedFeedbacks[i].occupation}</span>`;  
        let description = `<span>${storedFeedbacks[i].description}</span>`;  // Fixed the typo
        
        if (i === 0) {
            document.getElementById('first-feedback-name').innerHTML = name;
            document.getElementById('first-feedback-occupation').innerHTML = occupation;
            document.getElementById('first-feedback-description').innerHTML = description;
        }
        if (i === 1) {
            document.getElementById('second-feedback-name').innerHTML = name;
            document.getElementById('second-feedback-occupation').innerHTML = occupation;
            document.getElementById('second-feedback-description').innerHTML = description;
        }
        if (i === 2) {
            document.getElementById('third-feedback-name').innerHTML = name;
            document.getElementById('third-feedback-occupation').innerHTML = occupation;
            document.getElementById('third-feedback-description').innerHTML = description;
        }
        if (i === 3) {
            document.getElementById('fourth-feedback-name').innerHTML = name;
            document.getElementById('fourth-feedback-occupation').innerHTML = occupation;
            document.getElementById('fourth-feedback-description').innerHTML = description;
        }
    }
}



