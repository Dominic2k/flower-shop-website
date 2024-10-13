// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
require('dotenv').config();  // Sử dụng dotenv để nạp các biến môi trường từ file .env

const app = express();
const port = 3000;

// Middleware để parse dữ liệu JSON
app.use(bodyParser.json());

// Tạo transporter để kết nối với dịch vụ email (ở đây dùng Gmail)
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER, // Sử dụng biến môi trường cho email
        pass: process.env.EMAIL_PASS  // Sử dụng biến môi trường cho mật khẩu
    }
});

// API để gửi email
app.post('/send-email', (req, res) => {
    const { user_email, order_id } = req.body; // Lấy thông tin từ request

    const mailOptions = {
        from: process.env.EMAIL_USER, // Sử dụng email từ biến môi trường
        to: user_email,               // Email của người nhận (người dùng)
        subject: 'Xác nhận đơn hàng',
        text: `Cảm ơn bạn đã đặt hàng! Mã đơn hàng của bạn là: ${order_id}.`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Lỗi khi gửi email');
        } else {
            console.log('Email gửi thành công: ' + info.response);
            res.status(200).send('Email đã được gửi');
        }
    });
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server chạy tại http://localhost:${port}`);
});
