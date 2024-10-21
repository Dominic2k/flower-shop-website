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

var loginModal = document.getElementById("loginModal");
var registerModal = document.getElementById("registerModal");

var openLoginBtn = document.getElementById("openLoginBtn");
var openRegisterBtn = document.getElementById("openRegisterBtn");
var closeButtons = document.getElementsByClassName("close");
openLoginBtn.onclick = function() {
    loginModal.style.display = "block";
}
openRegisterBtn.onclick = function() {
    registerModal.style.display = "block";
}
for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function() {
        loginModal.style.display = "none";
        registerModal.style.display = "none";
    }
}
window.onclick = function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
}

document.getElementById('show-register-form').addEventListener('click', function(event) {
    event.preventDefault(); 
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

// Hiển thị thông báo form login
const showAlertLogin = (message, type = 'success') => {
    const alertBox = document.getElementById('login-alert-box');
    alertBox.className = `alert alert-${type}`;
    alertBox.textContent = message;
    alertBox.style.display = 'block';
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 2000); 
};
// Hiển thị thông báo form Register
const showAlertRegister = (message, type = 'success') => {
    const alertBox = document.getElementById('register-alert-box');
    alertBox.className = `alert alert-${type}`;
    alertBox.textContent = message;
    alertBox.style.display = 'block';
    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 2000); 
};

// Đăng ký người dùng mới
document.getElementById('register-btn').addEventListener('click', function() {
    const username = document.getElementById('register-username').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if (username && email && password) {
        const user = { username, email, password };
        let users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.some(u => u.username === username);

        if (userExists) {
            showAlertRegister('Username already exists, please choose another one.', 'danger');
        } else {
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            showAlertRegister('Account created successfully! You can now sign in.');
            setTimeout(() => {
                document.getElementById('registerModal').style.display = 'none';
                document.getElementById('loginModal').style.display = 'block';
            }, 2000);
        }
    } else {
        showAlertRegister('Please fill all fields', 'danger');
    }
});

// Đăng nhập người dùng
    let isLogin = false;
    document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        showAlertLogin('Login successful!');
        isLogin = true;
    } else {
        showAlertLogin('Invalid username or password', 'danger');
    }
});

// JS Show sản phẩm ở trang chủ


function createdProducts() {
    
const products = [
    {
        id: 1,
        name: "Rose Bouquet",
        code: "FL001",
        color: "Red",
        title: "Elegant Red Roses",
        describe: "A beautiful bouquet of 12 red roses, perfect for romantic occasions.",
        price: "259.000đ",
        img: "https://img4.thuthuatphanmem.vn/uploads/2020/08/18/anh-gio-hoa-sen-dep-y-nghia_091937096.jpg"
    },
    {
        id: 2,
        name: "Sunflower Bundle",
        code: "FL002",
        color: "Yellow",
        title: "Bright Sunflowers",
        describe: "A bundle of 5 sunflowers to brighten anyone's day.",
        price: "185.000đ",
        img: "https://kethoavanca.vn/wp-content/uploads/2017/03/sp-2.jpg"
    },
    {
        id: 3,
      name: "Tulip Collection",
      code: "FL003",
      color: "Purple",
      title: "Charming Purple Tulips",
      describe: "A collection of 10 purple tulips for a fresh and elegant look.",
      price: "220.000đ",
      img: "https://3.bp.blogspot.com/-wPOcH-AFROI/WPtUyqxqBHI/AAAAAAAAmjA/2uDK910tLgMvHiWTl5-gc_NIvbql6CPIgCLcB/s640/16788840_1737084339954027_8230377758388125696_n.jpg"
    },
    {
        id: 4,
        name: "Lily Assortment",
        code: "FL004",
        color: "White",
        title: "Graceful White Lilies",
        describe: "An assortment of white lilies, symbolizing purity and elegance.",
        price: "300.000đ",
        img: "https://shophoahong.com/wp-content/uploads/2022/04/211.jpg"
    },
    {
        id: 5,
        name: "Orchid Arrangement",
        code: "FL005",
        color: "Pink",
        title: "Delicate Pink Orchids",
        describe: "A delicate arrangement of pink orchids, perfect for a sophisticated touch.",
        price: "459.900đ",
        img: "https://lilydesign.vn/uploads/thumbnails/800/2021/11/gio-hoa-hong-do-dep-ldnk258-19-11-52-18.jpg"
    },
    {
        id: 6,
        name: "Daisy Bunch",
        code: "FL006",
        color: "White",
        title: "Cheerful White Daisies",
        describe: "A bunch of white daisies, symbolizing simplicity and joy.",
        price: "162.000đ",
        img: "https://cdn03.lolaflora.com/bonnygift/lfb047-1/XL/lfb047-1-8d9629f423926a9-c50d29fa.jpg"
    },
    {
        id: 7,
        name: "Carnation Bouquet",
        code: "FL007",
        color: "Red",
        title: "Passionate Red Carnations",
        describe: "A bouquet of 15 red carnations, representing love and admiration.",
        price: "199.900đ",
        img: "https://www.giftstoindia24x7.com/ASP_Img/IMG1000/GTI10750.jpg"
    },
    {
        id: 8,
        name: "Lavender Sprigs",
        code: "FL008",
        color: "Purple",
        title: "Fragrant Lavender Sprigs",
        describe: "A handful of fragrant lavender sprigs, perfect for relaxation and tranquility.",
        price: "127.00đ",
        img: "https://hoakhaitruong.vn/userfiles/image/hoa%20c%C3%BAc%20sn.jpg"
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
        content += `</a>`;
        content += `<div class="card-body">`;
        content += `<h3 class="card-title">` + storedProducts[i].name + `</h3>`;
        content += `<p class="card-text">` + storedProducts[i].price + `</p>`;
        content += `<a href="#" onclick='buyNow(${JSON.stringify(storedProducts[i])})' class="card-btn-left">Buy now</a>`;
        content += `</div>`;
        content += `</div>`;
    }
    document.getElementById('products').innerHTML = content;
}

function buyNow(product) {
    localStorage.setItem('selectedProduct', JSON.stringify(product));
    window.location.href = 'payment.html';
}

// JS Lưu Feedback vào local storage
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const occupation = document.getElementById('occupation').value;
    const description = document.getElementById('description').value;

    const newFeedback = {
        name: name,
        occupation: occupation,
        description: description
    };

    let feedbackList = JSON.parse(localStorage.getItem('feedbacks')) || [];

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

// JS Go to top
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};
scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


// Js check go to cart button
let cartBtn = document.getElementById('cartBtn');

cartBtn.addEventListener('click', function() {
    if (isLogin) {
        window.location.href = 'cart.html';
    } else {
        loginModal.style.display = 'block';
    }
});




