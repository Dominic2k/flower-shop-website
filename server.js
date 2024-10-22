import express from 'express';
import cors from 'cors';
import { createTransport } from 'nodemailer';
import { config } from 'dotenv';

const app = express();
const port = 3000;

config();

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
    const { order_id, user_email, user_name, user_phone, delivery_address, product_name, price, quantity, img } = req.body;

    if (!user_email || !order_id || !user_phone || !user_name || !delivery_address || !product_name || !price || !quantity || !img) {
        return res.status(400).send('Thiếu thông tin email hoặc mã đơn hàng');
    }

    try {
        const info = await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: user_email,
            subject: 'Xác nhận đơn hàng',
            text: `Cảm ơn bạn đã đặt hàng! Mã đơn hàng của bạn là: ${order_id}.
            Thông tin khách hàng: ${user_name}, sđt: ${user_phone}, địa chỉ giao hàng: ${delivery_address}.
            Thông tin sản phẩm:
            ${product_name}
            Giá: ${price}
            Số lượng: ${quantity}
            ${img}
            Cảm ơn quý khách đã ủng hộ, đơn hàng sẽ sớm được giao đến bạn!`
        });

        console.log('Email sent:', info);
        res.status(200).send('Email đã được gửi thành công!');
    } catch (error) {
        console.error('Lỗi khi gửi email:', error);
        res.status(500).send('Lỗi khi gửi email: ' + error.message);
    }
});

app.listen(port, () => {
    console.log(`Server chạy tại http://localhost:${port}`);
});
