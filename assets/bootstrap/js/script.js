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


// Js responsive header


// JS hoa bay

function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('flower');
    flower.style.left = Math.random() * 100 + 'vw';
    flower.style.animationDuration = Math.random() * 5 + 5 + 's';
    document.getElementById('flower-container').appendChild(flower);
    setTimeout(() => {
        flower.remove();
    }, 10000);
}

setInterval(createFlower, 500);

// JS Show sản phẩm ở trang chủ

let products = [
    {
        id: 1,
        name: 'White Roses',
        code: 'TC102501',
        price: "$64.00",
        img: "https://flowersight.com/wp-content/uploads/2021/02/bo-hoa-hinh-trai-tim.jpg"
    },
    {
        id: 2,
        name: 'Canations',
        code: 'TC102501',
        price: "$64.00",
        img: "https://shophoahong.com/wp-content/uploads/2022/06/h19-e1654479676559.jpg"
    },
    {
        id: 3,
        name: "Baby's breath flower",
        code: 'TC102501',
        price: "$64.00",
        img: "https://bizweb.dktcdn.net/100/347/446/files/bo-hoa-hong-do-hinh-trai-tim-sieu-to-khong-lo.jpg?v=1673925509260"
    },
    {
        id: 4,
        name: 'Roses',
        code: 'TC102501',
        price: "$64.00",
        img: "https://tramhoa.com/wp-content/uploads/2019/09/Bo-Hoa-Tuoi-TH-B025-I-Love-You-3.jpg"
    },
    {
        id: 5,
        name: 'Synthetic flowers',
        code: 'TC102501',
        price: "$64.00",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGHXu2ehMTG_9I75FPVe9CHPHDqAuzZuVRiw&s"
    },
    {
        id: 6,
        name: 'Roses',
        code: 'TC102501',
        price: "$64.00",
        img: "https://hoatuoi9x.com/wp-content/uploads/2022/05/b3.jpg"
    },
    {
        id: 7,
        name: 'Sunflower',
        code: 'TC102501',
        price: "$64.00",
        img: "https://img.mayflower.vn/2018/09/bo-hoa-ve-dep-dac-biet-89.jpg"
    },
    {
        id: 8,
        name: 'Pale roses',
        code: 'TC102501',
        price: "$64.00",
        img: "https://img.tripi.vn/cdn-cgi/image/width=700,height=700/https://gcs.tripi.vn/public-tripi/tripi-feed/img/473985SXQ/hinh-anh-hoa-dep-20-10.jpg"
    }
];
function showListProducts() {
    let productJSON = JSON.stringify(products);
    localStorage.setItem('products', productJSON);

    let storedProducts = JSON.parse(localStorage.getItem('products'));
    let content = '';

    for (let i = 0; i <= storedProducts.length - 1; i++) {
        content += `<div class="product-item">`
        content += `<a href="productDetail.html?id=` + products[i].id + `">`;
        content += `<img src="` + products[i].img + `" class="card-img" style="height: 400px;">`;
        content += `</a>`
        content += `<div class="card-body">`;
        content += `<h3 class="card-title">`+ products[i].name + `</h3>`;
        content += `<p class="card-text">`+ products[i].price + `</p>`;
        content += `<button class="card-btn-left" onclick="order()">Buy now</button>`;
        content += `</div>`;
        content += `</div>`;
    }
    document.getElementById('products').innerHTML = content;
}




