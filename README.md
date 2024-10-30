# Flower Shop Website

## Giới thiệu

Flower Shop Website là một ứng dụng web được phát triển bằng HTML, CSS và JavaScript. Dự án này cung cấp một nền tảng trực tuyến cho người dùng để tìm hiểu và mua hoa một cách dễ dàng. Người dùng có thể tìm kiếm hoa theo sở thích của mình và có thể lọc theo màu sắc, giá cả và chủ đề mong muốn. Người dùng cũng có thể xem chi tiết sản phẩm, thêm sản phẩm vào giỏ hàng và thực hiện quá trình đăng nhập và đăng ký.

## Tính năng chung

- **Trang chủ**: Hiển thị danh sách các loại hoa, sản phẩm nổi bật, feedback người dùng.
- **Trang xem chi tiết**: Cung cấp thông tin chi tiết về từng loại hoa, bao gồm hình ảnh, mô tả và giá cả.
- **Trang giỏ hàng**: Người dùng có thể xem các sản phẩm đã chọn và tổng chi phí.
- **Trang thanh toán**: Giúp người dùng tính toán số tiền và lựa chọn phương thức thanh toán sau khi đã chọn được sản phẩm mong muốn.
- **Trang Admin**: Có giao diện admin để quản lí dữ liệu nhập, xuất.
- **Đăng nhập/Đăng ký**: Hỗ trợ người dùng tạo tài khoản và đăng nhập để quản lý giỏ hàng.
- **Lưu trữ dữ liệu**: Sử dụng Local Storage để lưu trữ thông tin người dùng và sản phẩm trong giỏ hàng.

## Tính năng mở rộng

- **Gởi email**: Hệ thống sẽ gửi email xác nhận đơn hàng và tình trạng đơn hàng sau khi đặt.

## Công nghệ sử dụng

- **HTML**: Để xây dựng cấu trúc của trang web.
- **CSS**: Để thiết kế và tạo giao diện người dùng thân thiện.
- **JavaScript**: Để xử lý logic của ứng dụng, bao gồm tương tác với người dùng và quản lý Local Storage.

## Hướng dẫn cài đặt

- Clone repo này về máy của bạn:
   ```bash
   git clone https://github.com/Dominic2k/flower-shop-website.git
   ```

## Hướng Dẫn Chạy Dự Án Trên Máy

1. Để chạy dự án này, bạn cần cài đặt Node.js từ [trang web chính thức](https://nodejs.org/) và kiểm tra phiên bản bằng lệnh `node -v`. Sau đó, tạo một thư mục mới cho dự án và cài đặt các gói cần thiết bằng các lệnh sau:

```bash
mkdir flower-shop-website
cd flower-shop-website
npm init -y
npm install express cors nodemailer dotenv
```

2. Tiếp theo, tạo file cấu hình .env trong thư mục gốc của dự án để lưu trữ thông tin cấu hình email. Mở trình soạn thảo văn bản và thêm các thông tin sau:
```bash
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
EMAIL_USER=your_email@example.com
EMAIL_PASS=your_email_password
```
Trong đó:
<br>
SMTP_HOST: smtp.gmail.com là máy chủ SMTP của Gmail, nơi gửi email.
<br>
SMTP_PORT: 465 là cổng thường dùng cho giao thức SMTP qua SSL (Secure Sockets Layer).
<br>
Thay thế your_email@example.com, và your_email_password bằng thông tin thực tế của bạn. Search Google để biết cách lấy mật khẩu ứng dụng của tài khoản Gmail của bạn.
<br>
Ví dụ:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
EMAIL_USER=*********@gmail.com
EMAIL_PASS=**** **** **** ****
```
3. Sau khi hoàn tất, bạn có thể chạy server bằng lệnh node server.js trong terminal.

```bash
node server.js
```
