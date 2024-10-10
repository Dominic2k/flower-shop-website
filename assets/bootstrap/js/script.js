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

// JS Show sản phẩm ở trang chủ

let products = [
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
    }
];

function showListProducts() {
    let productJSON = JSON.stringify(products);
    localStorage.setItem('products', productJSON);

    let storedProducts = JSON.parse(localStorage.getItem('products'));
    let content = '';

    for (let i = 0; i <= storedProducts.length - 1; i++) {
        content += `<div class="product-item">`
        content += `<a href="detail.html?id=` + products[i].id + `">`;
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




