// JS Countdown timer

const countdownDate = new Date("Nov 22, 2024 23:59:59").getTime();

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
    let cart = [];

    if (username && email && password) {

        const user = { username, email, password, cart };

        // Lấy danh sách người dùng từ localStorage hoặc tạo mảng mới nếu chưa có
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
document.getElementById('login-btn').addEventListener('click', function() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        showAlertLogin('Login successful!');
        // Lưu thông tin người dùng hiện tại vào localStorage
        const currentUser = {
            username: user.username,
            password: user.password,
        };
        setTimeout(() => {
            document.getElementById('loginModal').style.display = 'none';
        }, 1500);
        if (username === 'admin' && password === 'admin') {
            window.location.replace('admin.html');
        }
        localStorage.setItem('isLogin', true);
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } else {
        showAlertLogin('Invalid username or password', 'danger');
    }

    let dropDownIn = document.querySelector("#openLoginBtn");
    let dropDownUp = document.querySelector("#openRegisterBtn");
    let dropDownOut = document.querySelector("#LogOutBtn");

    // Kiểm tra giá trị isLogin trong localStorage
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
    showAlert('Success!', "You're signed out", 'success');

});


// END MODAL
// ------------------------------------------------------------------------------------------------------------------
// JS Show sản phẩm ở trang chủ
function createdProducts() {
    
    const products = [
        {
          id: 1,
          title: "Birthday Blossoms",
          price: "1.000.000₫",
          code: "EW2005",
          originalPrice: "1.500.000đ",
          imageUrl: "https://www.littlereddotflorist.sg/wp-content/uploads/2021/06/Byeol-1.png",
          occasion: "Lovely",
          color: "Red",
          badgeText: "Best Seller",
          describe: "This elegant silver watch combines style with functionality, making it perfect for everyday casual wear. The sleek design and minimalist face add a touch of sophistication to any outfit. Water-resistant and durable, it's designed for those who value both aesthetics and practicality. A must-have accessory for your wardrobe."
        },
        {
          id: 2,
          title: "Eternal Embrace",
          price: "300.000₫",
          code:"SQ2005",
          originalPrice: "930.000₫",
          imageUrl: "https://happyflower.vn/tin-tuc/app/uploads/hoa-hong-mau-vang-1-1.jpg",
          occasion: "Birthday",
          color: "Yellow",
          badgeText: "New Arrival",
          describe: "This black leather jacket is a timeless classic, offering both warmth and style during the colder months. Crafted from high-quality leather, it provides excellent insulation while maintaining a sleek, modern look. The jacket features multiple pockets and a comfortable inner lining, making it as practical as it is stylish. Perfect for winter or cool evening outings."
        },
        {
          id: 3,
          title: "Grand Opening Glory",
          price: "800.000₫",
          code:"SQ2005",
          originalPrice: "900.000đ",
          imageUrl: "https://dienhoatuoi24h.net/wp-content/uploads/2024/01/bo-hoa-baby.jpg",
          occasion: "Birthday",
          color: "Purple",
          badgeText: "Top Pick",
          describe: "These blue running shoes are designed for athletes seeking comfort and durability. The lightweight construction and breathable fabric keep your feet cool during long runs, while the cushioned sole provides excellent support. Whether you're training for a marathon or enjoying a casual jog, these shoes will help enhance your performance. A great choice for any fitness enthusiast."
        },
        {
          id: 4,
          title: "Joyful Blooms",
          price: "100.000₫",
          code:"SQ2005",
          originalPrice: "200.000đ",
          imageUrl: "https://birthdaylovecake.com/wp-content/uploads/2022/05/Bo-hoa-dep-tang-nguoi-yeu.jpg",
          occasion: "Opened",
          color: "Red",
          badgeText: "Limited Edition",
          describe: "These stylish black sunglasses are the perfect accessory for bright summer days. With UV protection, they not only enhance your look but also shield your eyes from harmful sun rays. The lightweight frame ensures all-day comfort, making them ideal for outdoor activities. Elevate your summer style with this limited edition design."
        },
        {
          id: 5,
          title: "Passionate Petals",
          price: "600.000₫",
          code:"SQ2005",
          originalPrice: "700.000đ",
          imageUrl: "https://th.bing.com/th/id/OIP.O93c0kOSjXCSAdwaEy-ClAHaIO?w=600&h=667&rs=1&pid=ImgDetMain",
          occasion: "Opened",
          color: "Yellow",
          badgeText: "Exclusive",
          describe: "This stunning red evening dress is designed to make a statement at any formal event. With its elegant silhouette and rich fabric, it accentuates your curves while maintaining a sophisticated look. The dress is perfect for galas, weddings, or any special occasion where you want to stand out. It’s a timeless piece that will never go out of style."
        },
        {
          id: 6,
          title: "Prosperity Petals",
          price: "200.000₫",
          code:"SQ2005",
          originalPrice: "600.000₫",
          imageUrl: "https://hoatuoihoamy.com/wp-content/uploads/2020/08/hoa_baby_mau_tim-1.jpg",
          occasion: "Lovely",
          color: "Purple",
          badgeText: "Durable",
          describe: "This gray backpack is perfect for travelers and adventurers alike. With its spacious compartments, it can hold everything from laptops to travel essentials, making it ideal for both work and play. The water-resistant material ensures your belongings stay dry, while the padded straps provide all-day comfort. A versatile and durable bag for any journey."
        },
        {
          id: 7,
          title: "Celestial Birthday Bouquet",
          price: "400.000₫",
          code:"SQ2005",
          originalPrice: "700.000₫",
          imageUrl: "https://nhahoa.vn/wp-content/uploads/2023/02/31.jpg",
          occasion: "Lovely",
          color: "Red",
          badgeText: "Hot",
          describe: "This latest smartphone is packed with cutting-edge features, including a high-resolution camera, long battery life, and a powerful processor. Its sleek black design is both modern and elegant, making it suitable for both professional and personal use. With ample storage and fast charging capabilities, this phone is perfect for anyone on the go. Stay connected and productive with this must-have gadget."
        },
        {
          id: 8,
          title: "Endless Affection Bouquet",
          price: "300.000₫",
          code:"SQ2005",
          originalPrice: "700.000₫",
          imageUrl: "https://th.bing.com/th/id/OIP.BlLksVurXrAOmkt9R_lAwgHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain",
          occasion: "Birthday",
          color: "Yellow",
          badgeText: "Trending",
          describe: "These wireless Bluetooth headphones provide superior sound quality and noise cancellation, making them ideal for music lovers. The comfortable over-ear design allows for extended listening without discomfort, while the long battery life ensures they’re always ready when you are. Perfect for both commuting and relaxing at home. Enjoy your favorite tunes with exceptional clarity and depth."
        },
        {
          id: 9,
          title: "Success in Bloom",
          price: "600.000₫",
          code:"SQ2005",
          originalPrice: "700.000₫",
          imageUrl: "https://th.bing.com/th/id/OIP.as8ViH_fICgY3q9NTu_y6QHaJQ?rs=1&pid=ImgDetMain",
          occasion: "Birthday",
          color: "Purple",
          badgeText: "Best Seller",
          describe: "This automatic coffee maker is a must-have for coffee enthusiasts. It brews fresh, hot coffee in minutes, ensuring you start your day with the perfect cup. With programmable settings and a sleek black design, it fits seamlessly into any kitchen. Whether you prefer a strong espresso or a light brew, this machine delivers consistently great results."
        },
        {
          id: 10,
          title: "Radiant Wishes",
          price: "1.600.000₫",
          code:"SQ2005",
          originalPrice: "1.800.000đ",
          imageUrl: "https://i.pinimg.com/originals/60/a3/d0/60a3d03742a6554deef615737185cbd7.jpg",
          occasion: "Opened",
          color: "Red",
          badgeText: "High Performance",
          describe: "This high-performance gaming laptop is built for serious gamers. Equipped with a powerful graphics card and fast processor, it handles the most demanding games with ease. The large display offers crisp, vibrant visuals, while the advanced cooling system ensures smooth performance during long sessions. It’s a top choice for those who want to take their gaming experience to the next level."
        },
        {
          id: 11,
          title: "Whispers of the Heart",
          price: "190.000₫",
          code:"SQ2005",
          originalPrice: "250.000đ",
          imageUrl: "https://i.pinimg.com/736x/12/02/ff/1202ff28392861b199c278cfd614e751.jpg",
          occasion: "Opened",
          color: "Yellow",
          badgeText: "Professional",
          describe: "This lightweight yet durable tennis racket is designed for both professional players and enthusiasts. With a sturdy frame and comfortable grip, it offers excellent control and power. Whether you're competing in tournaments or practicing your backhand, this racket will help you play your best game. A top-quality choice for any tennis player."
        },
        {
          id: 12,
          title: "Fortune's Flourish",
          price: "600.000₫",
          code:"SQ2005",
          originalPrice: "700.000₫",
          imageUrl: "https://th.bing.com/th/id/OIP.Y0TXXV9MCkZVS1HlJp93GgHaHa?w=800&h=800&rs=1&pid=ImgDetMain",
          occasion: "Lovely",
          color: "Purple",
          badgeText: "Exclusive",
          describe: "This premium designer handbag is the epitome of luxury. Crafted from the finest materials, it features a chic pink design that adds a pop of color to any outfit. Spacious yet stylish, it’s perfect for carrying all your essentials while maintaining an elegant look. A must-have for fashion-forward individuals who appreciate quality and exclusivity."
        },
        {
          id: 13,
          title: "Blissful Blooms",
          price: "1.400.000₫",
          code:"SQ2005",
          originalPrice: "1.500.000đ",
          imageUrl: "https://hoahanoi.com.vn/wp-content/uploads/2020/08/b%C3%B3-hoa-h%E1%BB%93ng-%C4%91%E1%BB%8F-baby-e1598241329965.jpg",
          occasion: "Lovely",
          color: "Red",
          badgeText: "Comfort",
          describe: "This ergonomic office chair is designed to provide maximum comfort during long hours of work. The adjustable height and lumbar support ensure a perfect fit, reducing strain on your back and neck. Its sleek brown design blends seamlessly with any office decor, making it both functional and stylish. Improve your productivity and posture with this essential office chair."
        },
        {
          id: 14,
          title: "Lover's Symphony",
          price: "120.000₫",
          code:"SQ2005",
          originalPrice: "250.000đ",
          imageUrl: "https://royflower.com/files/sanpham/658/1/jpg/bo-hoa-sang-trong-hbr511-nang-vang.jpg",
          occasion: "Birthday",
          color: "Yellow",
          badgeText: "Eco-Friendly",
          describe: "This high-quality bicycle is perfect for outdoor enthusiasts looking for an eco-friendly mode of transportation. The lightweight frame and durable tires make it ideal for both city commuting and off-road adventures. With its vibrant yellow design, you’ll stand out while enjoying a smooth, comfortable ride. Get ready to explore the great outdoors with this reliable bike."
        },
        {
          id: 15,
          title: "Path to Prosperity Bouquet",
          price: "800.000₫",
          code:"SQ2005",
          originalPrice: "920.000đ",
          imageUrl: "https://femflower.vn/wp-content/uploads/2022/10/Fem-F329.png",
          occasion: "Birthday",
          color: "Purple",
          badgeText: "Top Scent",
          describe: "This luxurious perfume features a romantic blend of floral and woody notes, perfect for special occasions. The lightweight frame and durable tires make it ideal for both city commuting and off-road adventures. With its vibrant yellow design, you’ll stand out while enjoying a smooth, comfortable ride. Get ready to explore the great outdoors with this reliable bike."
        },
        {
          id: 16,
          title: "Eternal Sunshine Bouquet",
          price: "150.000₫",
          code:"SQ2005",
          originalPrice: "170.000đ",
          imageUrl: "https://www.kalidades.com/wp-content/uploads/2021/01/viber_image_2021-01-21_09-54-50-480x480.jpg",
          occasion: "Opened",
          color: "Red",
          badgeText: "Top Scent",
          describe: "This luxurious perfume features a romantic blend of floral and woody notes, perfect for special occasions. The lightweight frame and durable tires make it ideal for both city commuting and off-road adventures. With its vibrant yellow design, you’ll stand out while enjoying a smooth, comfortable ride. Get ready to explore the great outdoors with this reliable bike."
        }
    ];
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

    let content = ``;

    for (let i = 0; i < 12; i++) {
        content += `<div class="product-item">`;
        content += `<a href="detail.html?id=` + storedProducts[i].id + `">`;
        content += `<img src="` + storedProducts[i].imageUrl + `" class="card-img" style="height: 400px;">`;
        content += `</a>`;
        content += `<div class="card-body">`;
        content += `<h3 class="card-title">` + storedProducts[i].title + `</h3>`;
        content += `<p class="card-text">` + storedProducts[i].price + `</p>`;
        content += `<a href="payment.html?ids=` + storedProducts[i].id + `" class="card-btn-left">Buy now</a>`;
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

    localStorage.setItem('feedbacks', JSON.stringify(feedbackList));

    alert('Your feedback has been saved successfully!');

    document.getElementById('feedbackForm').reset();
});
// ------------------------------------------------------------------------------------------------------------------



// Tạo 1 feedback mẫu ban đầu và lưu vào local sau đó in ra
function createdFeedbacks() {

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
};


function showListFeedback() {

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

    const isLoggedIn = localStorage.getItem('isLogin') === 'true';

    if (isLoggedIn) {
        window.location.href = 'cart.html';
        dropDownIn.style.display = 'none';
        dropDownUp.style.display = 'none';
        dropDownOut.style.display = 'block';
    } else {
        dropDownIn.style.display = 'block';
        dropDownUp.style.display = 'block';
        dropDownOut.style.display = 'none';
        loginModal.style.display = 'block';
    }
});



// Js check login or not logged in
//----------------------------------------------------------------------------------------------------------------

// JS sử lý ô search ở homepage
document.addEventListener('DOMContentLoaded', () => {
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
});


const items = document.querySelectorAll('.carousel-item');
const quotes = document.querySelectorAll('.quote');

// Khởi động hiệu ứng zoom và hiện quote cho slide đầu tiên
window.addEventListener('load', () => {
    const activeItem = document.querySelector('.carousel-item.active');
    activeItem.querySelector('img').style.transform = 'scale(1.1)';
    activeItem.querySelector('.quote').style.opacity = 1;
});

document.getElementById('flowerCarousel').addEventListener('slide.bs.carousel', function (event) {
    const currentIndex = event.from;
    const nextIndex = event.to;

    items[currentIndex].querySelector('img').style.transform = 'scale(1)';
    quotes[currentIndex].style.opacity = 0;

    setTimeout(() => {
    items[nextIndex].querySelector('img').style.transform = 'scale(1.1)';
    quotes[nextIndex].style.opacity = 1;
    }, 200);
});


// Js zalo chat

const zaloIcon = document.getElementById('zaloIcon');
const zaloChatBox = document.getElementById('zaloChatBox');
const sendZaloMessageButton = document.getElementById('sendZaloMessage');
const zaloMessageInput = document.getElementById('zaloMessage');

zaloIcon.addEventListener('click', function() {
    if (zaloChatBox.style.display === 'none' || zaloChatBox.style.display === '') {
        zaloChatBox.style.display = 'flex';
    } else {
        zaloChatBox.style.display = 'none';
    }
});

// Khi nhấn nút gửi tin nhắn
sendZaloMessageButton.addEventListener('click', function() {
    const message = zaloMessageInput.value;
    if (message.trim()) {

        const zaloUrl = `https://zalo.me/0333934916`;

        window.open(zaloUrl, '_blank');

        zaloMessageInput.value = '';
    } else {
        alert("Please enter your message.");
    }
});


// Nhấn vào user
const userIconLink = document.querySelector('.user-icon > a');

userIconLink.addEventListener('click', function(event) {
    const isLoggedUser = localStorage.getItem('isLogin') === 'true';
    if (isLoggedUser) {
        window.location.href = 'user_info.html';
    }else {
        loginModal.style.display = 'block';
    }
});


// Js xử lí các alert()

function showAlert(title, message, iconType) {
    Swal.fire({
        title: title,
        text: message,
        icon: iconType, // Các giá trị có thể là: 'success', 'error', 'warning', 'info', 'question'
        confirmButtonText: 'OK'
    });
}

