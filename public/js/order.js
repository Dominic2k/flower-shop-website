
document.addEventListener('DOMContentLoaded', () => {
    const orderTableBody = document.getElementById('orderTableBody');

    function getOrdersFromLocalStorage() {
        return JSON.parse(localStorage.getItem('orders')) || [];
    }

    function deleteOrder(id) {
        let orders = getOrdersFromLocalStorage();
        orders = orders.filter(order => order.order_id !== id);
        localStorage.setItem('orders', JSON.stringify(orders));
        renderTable();
    }

    function renderTable() {
        const orders = getOrdersFromLocalStorage();
        orderTableBody.innerHTML = '';
                orders.forEach((order, orderIndex) => {
                    if (Array.isArray(order.products)) {
                        order.products.forEach((product, productIndex) => {
                            const row = document.createElement('tr');
                            const formattedDate = order.date.split('T')[0];
                            console.log(product.price);                            
                            const totalPrice = parseInt(product.price.replace(/\D/g, '')) * parseInt(product.quantity);
                            row.innerHTML = `
                                <td>${orderIndex + 1}</td>
                                <td class="threedots">${product.title}</td>  
                                <td>${product.quantity}</td>  
                                <td>${totalPrice}</td> 
                                <td>${formattedDate}</td> 
                                <td>${order.user_name}</td>  
                                <td>${order.user_phone}</td> 
                                <td class="threedots">${order.delivery_address}, ${order.city}</td> 
                                <td>
                                    <i class="delete-btn btn fa fa-trash" style="font-size:20px" data-id="${order.order_id}"></i> 
                                </td>
                            `;
                            orderTableBody.appendChild(row);
                        });
                    } else {
                        console.warn(`Đơn hàng không có sản phẩm:`, order);
                    }
                });

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const orderId = e.target.getAttribute('data-id');
                deleteOrder(orderId);
            });
        });
    }

    renderTable();

});

