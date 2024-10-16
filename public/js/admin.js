document.addEventListener('DOMContentLoaded', () => {
    const productTableBody = document.getElementById('productTableBody');
    const createProductBtn = document.getElementById('createProductBtn');
    const modalElement = document.getElementById('modalProduct');
    const modalTitle = document.getElementById('modalTitleProduct');
    const saveProductBtn = document.getElementById('saveProductBtn');
    const productNameInput = document.getElementById('productName');
    const productImageInput = document.getElementById('productImage');
    const productColorInput = document.getElementById('productColor');
    const productTitleInput = document.getElementById('productTitle');
    const productPriceInput = document.getElementById('productPrice');
    const productDescribeInput = document.getElementById('productDescribe');

    let editingProductId = null;

    // Khởi tạo modal Bootstrap
    const modalInstance = new bootstrap.Modal(modalElement);

    createProductBtn.addEventListener('click', () => {
        editingProductId = null;
        modalTitle.textContent = 'Create Product';
        saveProductBtn.textContent = 'Create';
        clearForm();
        modalInstance.show();  // Hiển thị modal bằng Bootstrap API
    });

    saveProductBtn.addEventListener('click', () => {
        const name = productNameInput.value;
        const img = productImageInput.value;
        const color = productColorInput.value;
        const title = productTitleInput.value;
        const price = productPriceInput.value;
        const describe = productDescribeInput.value;

        if (!name || !img || !color || !title || !price || !describe) {
            alert('Please enter complete information!');
            return;
        }

        const product = { id: Date.now(), name, img, color, title, price, describe };
        if (editingProductId) {
            updateProduct(editingProductId, product);
        } else {
            addProduct(product);
        }
        modalInstance.hide();  // Đóng modal sau khi lưu
        renderTable();
    });

    function addProduct(product) {
        const products = getProductsFromLocalStorage();
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
    }

    function getProductsFromLocalStorage() {
        return JSON.parse(localStorage.getItem('products')) || [];
    }

    function updateProduct(id, updatedProduct) {
        let products = getProductsFromLocalStorage();
        products = products.map(product => (product.id === id ? { ...product, ...updatedProduct } : product));
        localStorage.setItem('products', JSON.stringify(products));
    }

    function deleteProduct(id) {
        let products = getProductsFromLocalStorage();
        products = products.filter(product => product.id !== id);
        localStorage.setItem('products', JSON.stringify(products));
        renderTable();
    }

    function renderTable() {
        const products = getProductsFromLocalStorage();
        productTableBody.innerHTML = '';

        products.forEach((product, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td><img src="${product.img}" style="max-width: 100px; height: auto;"></td>
            <td>${product.color}</td>
            <td>${product.title}</td>
            <td>${product.price}</td>
            <td>${product.describe}</td>
            <td>
                <i class="edit-btn fa fa-edit" style="font-size:20px" data-id="${product.id}"></i>
                <i class="delete-btn fa fa-trash" style="font-size:20px" data-id="${product.id}"></i>
            </td>
            `;
            productTableBody.appendChild(row);
        });

        document.querySelectorAll('.edit-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = e.target.getAttribute('data-id');
                const product = getProductsFromLocalStorage().find(p => p.id == productId);
                editingProductId = product.id;
                productNameInput.value = product.name;
                productImageInput.value = product.img;
                productColorInput.value = product.color;
                productTitleInput.value = product.title;
                productPriceInput.value = product.price;
                productDescribeInput.value = product.describe;
                modalTitle.textContent = 'Edit Product';
                saveProductBtn.textContent = 'Update';
                modalInstance.show(); // Hiển thị modal khi chỉnh sửa
            });
        });

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const productId = Number(e.target.getAttribute('data-id'));
                deleteProduct(productId);
            });
        });
    }

    function clearForm() {
        productNameInput.value = '';
        productImageInput.value = '';
        productColorInput.value = '';
        productTitleInput.value = '';
        productPriceInput.value = '';
        productDescribeInput.value = '';
    }




    renderTable();

});

