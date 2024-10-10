

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function displayProductDetail() {
    const id = Number(getQueryParam('id'));

    console.log(id);

    if (isNaN(id)) {
        console.error('ID sản phẩm không hợp lệ');
        return;
    }

    let storedProducts = JSON.parse(localStorage.getItem('products'));

    if (!storedProducts) {
        storedProducts = [];
    }

    const product = storedProducts.find(product => product.id === id);

    if (product) {
        let content = '';
        content += `<div class="col-md-6">`;
        content += `<img src="` + product.img + `" class="card-img" style="height: 300px;">`;  // Đảm bảo sử dụng đúng biến
        content += `</div>`;
        content += `<div class="col-md-6">`;
        content += `<h3 id="product-name">`+ product.name + `</h3>`;
        content += `<p id="product-price"><span>Price:</span>` + product.price + `</p>`;
        content += `<p id="product-color"><span>Color:</span>` + product.color + `</p>`;
        content += `<p id="product-title"><span>Title:</span>`+ product.title + `</p>`;
        content += `<div class="quantity d-flex align-items-center mb-3">`
        content += `<p class="me-2"> Quantity<p>`
        content += `<div class="input-group" >`
        content += `<button class="btn btn-outline-secondary" id="decrease">-</button>`
        content += `<input type="text" id="quantity-input" class="form-control text-center" value="1">`
        content += `<button class="btn btn-outline-secondary" id="increase">+</button>`
        content += `</div>`;
        content += `</div>`;
        content += `<div class="mb-3">`;
        content += `<button class="btn btn-danger" onclick="add()">Add to cart</button>`;
        content += `<a href="payment.html?id=` + product.id + `" class="btn btn-warning">Buy now</a>`;
        content += `</div>`;
        content += `<p id="product-describe">` + product.describe + `</p>`;
        content += `</div>`;
        document.getElementById('product-detail').innerHTML = content;  // Sửa lại thành innerHTML = thay vì +=

        const decreaseBtn = document.getElementById('decrease');
        const increaseBtn = document.getElementById('increase');
        const quantityInput = document.getElementById('quantity-input');
        
        decreaseBtn.addEventListener('click', function() {
            let currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
            });
        
        increaseBtn.addEventListener('click', function() {
            let currentValue = parseInt(quantityInput.value);
            quantityInput.value = currentValue + 1;
        });
        
        // const thumbnails = document.querySelectorAll('.thumb');
        // const mainImage = document.getElementById('main-image');
        
        // thumbnails.forEach(function(thumbnail) {
        //     thumbnail.addEventListener('click', function() {
        //         mainImage.src = thumbnail.src;
        //     });
        // });
    } else {
        console.error('Sản phẩm không tồn tại');
    }
}

// Các hàm xử lý sự kiện nút bấm
function add() {
    alert('Thêm vào giỏ hàng thành công!');
}

function order() {
    alert('Đặt hàng thành công!');
}

document.addEventListener('DOMContentLoaded', displayProductDetail);
