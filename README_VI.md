# Mô tả dự án

## Cấu trúc dự án

```js
📦src
┣ 📂apis          // Chứa các giao thức kết nối với cơ sở dữ liệu.
┣ 📂assets        // Chứa các tệp đa phương tiện được sử dụng.
┣ 📂components    // Chứa các bộ phận được sử dụng lại.
┣ 📂pages         // Chứa các trang web chính
┣ 📂services      // Chứa các dịch vụ được dùng: FirebaseAuthen, v.v
┣ 📂stores        // Chứa các State chính của các bộ phận chính, là nơi chia sẻ global state.
┣ 📂utils         // Chứa các hàm xử lý những phần đơn giản.
```

## Các lệnh sử dụng

### Lệnh chạy môi trường phát triển (DEV)

`yarn start`

Mở trình duyệt đường link: [http://localhost:3000](http://localhost:3000)

### Lệnh pull code từ github

`git clone https://github.com/kyunkakata/my-web-app.git`

rồi trỏ thư mục vào my-web-app/

dùng câu lệnh

`yarn` hoặc `npm install`

để cài đặt các thư viện cần thiết.
