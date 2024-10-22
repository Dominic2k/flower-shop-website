import express from 'express';
import cors from 'cors';
import { createTransport } from 'nodemailer';
import { config } from 'dotenv';

const app = express();
const port = 3000;

config();

// Kiểm tra cấu hình email từ file .env
if (!process.env.SMTP_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.error('Thiếu cấu hình email. Vui lòng kiểm tra file .env.');
    process.exit(1);
}

// Middleware
app.use(express.json());
app.use(cors()); // Chấp nhận tất cả mọi nguồn
app.use(express.static('public'));

// Tạo transporter với dịch vụ SMTP
const transporter = createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true, // sử dụng SSL
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// API gửi email
app.post('/send-email', async (req, res) => {
    const { order_id, user_email, user_name, user_phone, delivery_address, products } = req.body;

    // Kiểm tra thông tin đơn hàng và khách hàng
    if (!user_email || !order_id || !user_phone || !user_name || !delivery_address || !products || products.length === 0) {
        return res.status(400).send('Thiếu thông tin email hoặc đơn hàng không hợp lệ');
    }

    // Format thông tin sản phẩm để gửi trong email
    const productListHtml = products.map((product, index) => {
        return `
            <p><strong>Sản phẩm ${index + 1}:</strong></p>
            <p>Tên sản phẩm: ${product.name}</p>
            <p>Giá: ${product.price.toLocaleString('vi-VN')} VND</p>
            <p>Số lượng: ${product.quantity}</p>
            <img src="${product.img}" alt="${product.name}" style="width: 100px; height: auto;">
            <br>
        `;
    }).join(''); // Tạo chuỗi HTML từ danh sách sản phẩm

    const productListText = products.map((product, index) => {
        return `
            Sản phẩm ${index + 1}:
            Tên sản phẩm: ${product.name}
            Giá: ${product.price.toLocaleString('vi-VN')} VND
            Số lượng: ${product.quantity}
        `;
    }).join('\n'); // Tạo chuỗi text từ danh sách sản phẩm

    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: user_email,
            subject: 'Xác nhận đơn hàng',
            html: `
                <h3>Cảm ơn bạn đã đặt hàng!</h3>
                <p>Mã đơn hàng của bạn là: <strong>${order_id}</strong></p>
                <p>Thông tin khách hàng:</p>
                <ul>
                    <li>Họ tên: ${user_name}</li>
                    <li>Số điện thoại: ${user_phone}</li>
                    <li>Địa chỉ giao hàng: ${delivery_address}</li>
                </ul>
                <h4>Thông tin sản phẩm:</h4>
                ${productListHtml}
                <p>Cảm ơn quý khách đã ủng hộ, đơn hàng sẽ sớm được giao đến bạn!</p>
            `,
            text: `
                Cảm ơn bạn đã đặt hàng!
                Mã đơn hàng của bạn là: ${order_id}
                Thông tin khách hàng:
                Họ tên: ${user_name}, Số điện thoại: ${user_phone}, Địa chỉ giao hàng: ${delivery_address}
                
                Thông tin sản phẩm:
                ${productListText}
                
                Cảm ơn quý khách đã ủng hộ, đơn hàng sẽ sớm được giao đến bạn!
            `
        });

        console.log('Email sent:', info);
        res.status(200).send('Email đã được gửi thành công!');
    } catch (error) {
        console.error('Lỗi khi gửi email:', error);
        res.status(500).send('Lỗi khi gửi email: ' + error.message);
    }
});

// Lắng nghe kết nối từ cổng
app.listen(port, () => {
    console.log(`Server chạy tại http://localhost:${port}`);
});
