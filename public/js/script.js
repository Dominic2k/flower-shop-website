// ------------------------------------------------------------------------------------------------------------------
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
// End countdown

// ------------------------------------------------------------------------------------------------------------------

// Start Modal Process
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
    let cart = [];

    if (username && email && password) {
        const user = { username, email, password, cart };

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
let isLogin = false;
document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    // Lấy danh sách người dùng từ localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Kiểm tra xem người dùng có tồn tại hay không
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        showAlert('Login successful!');
        isLogin = true;
        // Có thể thêm logic để chuyển hướng người dùng sau khi đăng nhập thành công
    } else {
        showAlert('Invalid username or password', 'danger');
    }
});

// END MODAL
// ------------------------------------------------------------------------------------------------------------------


// JS Show sản phẩm ở trang chủ
// Tạo sản phẩm mẫu ban đầu và lưu vào local
function createdProducts() {
const products = [{
    id: 1,
    title: "Morning Kiss",
    price: "1.000.000 ₫",
    imageUrl: "https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/bo-hoa-tuoi/14427_morning-kiss.jpg",
    occasion: "hoa-sinh-nhat",
    color: "mau-do",
    badgeText: "NEW",

}, {
    id: 2,
    title: "Ngày Có Nắng",
    price: "300.000 ₫",
    originalPrice: "930.000 ₫",
    imageUrl: "https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/bo-hoa-tuoi/14434_ngay-co-nang.jpg",
    occasion: "hoa-sinh-nhat",
    color: "mau-vang",
    badgeText: "NEW"
}, {
    id: 3,
    title: "Ánh Dương 2",
    price: "800.000 ₫",
    imageUrl: "https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/bo-hoa-tuoi/15005_anh-duong-2.jpg",
    occasion: "hoa-sinh-nhat",
    color: "mau-vang",
    badgeText: "NEW"
}, {
    id: 4,
    title: "Sunflower",
    price: "100.000 ₫",
    originalPrice: "930.000 ₫",
    imageUrl: "https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/hoa-tuoi-hop/8040_sun-flower.jpg",
    occasion: "hoa-sinh-nhat",
    color: "mau-vang",
    badgeText: "SALE"
}, {
    id: 5,
    title: "Purple Love",
    price: "600.000 ₫",
    imageUrl: "https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/bo-hoa-tuoi/5384_purple-love.jpg",
    occasion: "hoa-tinh-yeu",
    color: "mau-tim",
    badgeText: "NEW"
}, {
    id: 6,
    title: "Beauty Queen",
    price: "200.000 ₫",
    originalPrice: "600.000 ₫",
    imageUrl: "https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/bo-hoa-tuoi/8025_beauty-queen.jpg",
    occasion: "hoa-tinh-yeu",
    color: "mau-tim",
    badgeText: "SALE"
}, {
    id: 7,
    title: "Bùng Cháy 3",
    price: "400.000 ₫",
    originalPrice: "700.000 ₫",
    imageUrl: "https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/bo-hoa-tuoi/12609_bung-chay-3.jpg",
    occasion: "hoa-khai-truong",
    color: "mau-do",
    badgeText: "SALE"
}, {
    id: 8,
    title: "Rustic",
    price: "300.000 ₫",
    originalPrice: "800.000 ₫",
    imageUrl: "https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/hoa-tinh-yeu/8424_rustic.jpg",
    occasion: "hoa-tinh-yeu",
    color: "mau-vang",
    badgeText: "SALE"
}, {
    id: 9,
    title: "Vững Bền",
    price: "600.000 ₫",
    originalPrice: "700.000 ₫",
    imageUrl: "https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/bo-hoa-tuoi/5774_vung-ben.jpg",
    occasion: "hoa-khai-truong",
    color: "mau-do",
    badgeText: "SALE"
}, {
    id: 10,
    title: "Thành Đạt",
    price: "1.600.000 ₫",
    imageUrl: "https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/bo-hoa-tuoi/5263_thanh-dat.jpg",
    occasion: "hoa-khai-truong",
    color: "mau-vang",
    badgeText: "NEW"
}, {
    id: 11,
    title: "Only Rose",
    price: "190.000 ₫",
    imageUrl: "https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/hoa-tuoi-hop/12888_only-rose-1.jpg",
    occasion: "hoa-tinh-yeu",
    color: "mau-do",
    badgeText: "NEW"
}, {
    id: 12,
    title: "Lan Hồ Điệp Mẫu 4",
    price: "600.000 ₫",
    originalPrice: "700.000 ₫",
    imageUrl: "https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/bo-hoa-tuoi/12293_lan-ho-diep-mau-4.jpg",
    occasion: "hoa-khai-truong",
    color: "mau-tim",
    badgeText: "SALE"
}, {
    id: 13,
    title: "Thạch thảo",
    price: "1.400.000 ₫",
    imageUrl: "https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/hoa-tinh-yeu/3573_thach-thao.jpg",
    occasion: "hoa-sinh-nhat",
    color: "mau-tim",
    badgeText: "NEW"
}, {
    id: 14,
    title: "Only Rose",
    price: "120.000 ₫",
    imageUrl: "https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/hoa-tinh-yeu/13196_mercy-2.jpg",
    occasion: "hoa-khai-truong",
    color: "mau-do",
    badgeText: "NEW"
}, {
    id: 15,
    title: "Món quà tặng em",
    price: "800.000 ₫",
    imageUrl: "https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/hoa-tuoi-hop/13906_mon-qua-hanh-phuc.jpg",
    occasion: "hoa-tinh-yeu",
    color: "mau-tim",
    badgeText: "NEW"
}, {
    id: 16,
    title: "Tình cờ",
    price: "150.000 ₫",
    imageUrl: "https://hoayeuthuong.com/hinh-hoa-tuoi/thumb/hoa-tinh-yeu/13252_tinh-co.jpg",
    occasion: "hoa-sinh-nhat",
    color: "mau-tim",
    badgeText: "NEW"
}];
let productJSON = JSON.stringify(products);
localStorage.setItem('products', productJSON);
}
// ------------------------------------------------------------------------------------------------------------------


// Lấy sản phẩm từ local và show ra
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
        content += `<img src="` + storedProducts[i].imageUrl + `" class="card-img" style="height: 400px;">`;
        content += `</a>`;
        content += `<div class="card-body">`;
        content += `<h3 class="card-title">` + storedProducts[i].title + `</h3>`;
        content += `<p class="card-text">` + storedProducts[i].price + `</p>`;
        content += `<a href="payment.html?id=` + storedProducts[i].id + `" class="card-btn-left">Buy now</a>`;
        content += `</div>`;
        content += `</div>`;
    }

    document.getElementById('products').innerHTML = content;
}
// ------------------------------------------------------------------------------------------------------------------


// JS Lưu Feedback vào local storage khi submit form
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
// ------------------------------------------------------------------------------------------------------------------



// Tạo 1 feedback mẫu ban đầu và lưu vào local sau đó in ra
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

    
    let feedbackJSON = JSON.stringify(feedbacks);
    localStorage.setItem('feedbacks', feedbackJSON);

    let storedFeedbacks = JSON.parse(localStorage.getItem('feedbacks'));

    for (let i = 0; i < 4; i++) {
        let name = `<span>${storedFeedbacks[i].name}</span>`;  
        let occupation = `<span>${storedFeedbacks[i].occupation}</span>`;  
        let description = `<span>${storedFeedbacks[i].description}</span>`;
        
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
// ------------------------------------------------------------------------------------------------------------------


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
// ------------------------------------------------------------------------------------------------------------------


// Js check go to cart button
let cartBtn = document.getElementById('cartBtn');

cartBtn.addEventListener('click', function() {
    if (isLogin) {
        window.location.href = 'cart.html';
    } else {
        loginModal.style.display = 'block';
    }
});
// ------------------------------------------------------------------------------------------------------------------

// JS sử lý ô search ở homepage

// JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('search-form');
    const searchInput = document.getElementById('input-search');

    // Lắng nghe sự kiện submit của form và ngăn hành vi submit mặc định
    form.addEventListener('submit', (e) => {
        e.preventDefault();  // Ngăn chặn hành vi submit mặc định

        const inputInfo = searchInput.value.toLowerCase();  // Lấy giá trị input
        console.log("Input value: ", inputInfo);  // Kiểm tra giá trị nhập

        if (inputInfo) {
            window.location.assign(`products.html?search=${inputInfo}`);
        } else {
            console.log("No input provided");
        }
    });
});




