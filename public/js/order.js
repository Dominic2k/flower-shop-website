
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

        // orders.forEach((order, index) => {
        //     const row = document.createElement('tr');
        //     row.innerHTML = `
        //         <td>${index + 1}</td>
        //         <td>${order.product_name}</td>
        //         <td>${order.quantity}</td> 
        //         <td>${order.price}</td>
        //         <td>${order.payment_method || "Not specified"}</td> 
        //         <td>${order.user_name}</td>
        //         <td>${order.user_phone}</td>
        //         <td class="threedots">${order.delivery_address}, ${order.city}</td>
        //         <td>
        //             <i class="delete-btn btn fa fa-trash" style="font-size:20px" data-id="${order.order_id}"></i>
        //         </td>
        //     `;
        //     orderTableBody.appendChild(row);
        // });


                orders.forEach((order, index) => {
                    order.products.forEach((product, index) => {
                        const row = document.createElement('tr');
                        const formattedDate = order.date.split('T')[0];
                        const totalPrice = parseFloat(product.price) * parseInt(product.quantity);
                        row.innerHTML = `
                            <td>${index + 1}</td>
                            <td>${product.title}</td>  
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
                });

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                const orderId = Number(e.target.getAttribute('data-id'));
                deleteOrder(orderId);
            });
        });
    }

    renderTable();

});

