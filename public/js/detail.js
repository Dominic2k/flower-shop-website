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
        let content1 = `
            <div class="col-md-5">
                <img src="${product.imageUrl}" class="card-img" style="height: 300px;">
            </div>
            <div class="col-md-7">
                <h3 id="product-name">${product.title}</h3>
                <hr>
                <p id="product-price" style="font-size:30px; color:orange;">${product.price}</p>
                <br>
                <p id="product-code"><span>Code</span>${product.code}</p><br>
                <p id="product-gift">
                    <span id="text-product-gift">Return policy</span> 
                    <i class="gift-icon fa fa-gift"></i>
                    <span id="text-gift">15 days return</span> 
                    <span id="text-question">Free to change your mind</span>
                    <i class="question-icon fa fa-question-circle"></i>
                </p> <br>
                <p id="product-title"><span>Title</span>${product.occasion}</p>
                <div class="quantity d-flex align-items-center mb-3">
                    <p class="me-2">Quantity</p>
                    <div class="input-group">
                        <button class="btn btn-outline-secondary" id="decrease">-</button>
                        <input type="text" id="quantity-input" class="form-control text-center" value="1">
                        <button class="btn btn-outline-secondary" id="increase">+</button>
                    </div>
                </div>
                <hr>
                <div class="mb-3">
                    <button class="add-btn btn btn-danger" onclick="add()">Add to cart</button>
                    <a href="payment.html?ids=${product.id}&quantity=" class="buy-btn btn btn-warning" id="buy-now-link">Buy now</a>
                </div>
            </div>`;
        
        document.getElementById('product-detail-1').innerHTML = content1;

       // Cập nhật link 'Mua ngay' kèm theo số lượng khi click vào
        const buyNowLink = document.getElementById('buy-now-link');
        const quantityInput = document.getElementById('quantity-input');

        buyNowLink.addEventListener('click', function() {
            const quantity = quantityInput.value;
            // Cập nhật thuộc tính href để bao gồm số lượng
            buyNowLink.href = `payment.html?ids=${product.id}&quantity=${quantity}`;
        });

        // Nội dung mô tả sản phẩm
        let content2 = `
            <div class="col-md-12">
                <h3 id="product-describe">Describe</h3>
                <hr>
                <p>${product.describe}</p>
            </div>`;
        document.getElementById('product-detail-2').innerHTML = content2;

        const decreaseBtn = document.getElementById('decrease');
        const increaseBtn = document.getElementById('increase');
        
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
        
    } else {
        console.error('Sản phẩm không tồn tại');
    }
}

function add() {
    const id = Number(getQueryParam('id')); 
    const quantity = parseInt(document.getElementById('quantity-input').value); 

    let storedProducts = JSON.parse(localStorage.getItem('products')) || [];
    let currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
    let users = JSON.parse(localStorage.getItem('users')) || [];


    const product = storedProducts.find(p => p.id === id);
    
    if (!product) {
        console.error('Sản phẩm không tồn tại');
        return;
    }

    const thisUser = users.find(user => user.username === currentUser.username);

    if (thisUser) {
        if (!thisUser.cart) {
            thisUser.cart = [];
        }
        thisUser.cart.push({ ...product, quantity: quantity });

        localStorage.setItem('users', JSON.stringify(users));
        alert('Add to cart successfully!');
    } else {
        alert('Please log in before adding to cart');
        window.location.href = 'index.html';
    }
}

document.addEventListener('DOMContentLoaded', displayProductDetail);
