Các công việc đã thực hiện :
+1: Deloy git bằng git pages
+2: Thêm thư viện axios:
=>để call api
=> npm install axios
+3: Thêm thư viện redux toolkit:
sử dụng redux để quản lý các state
=>@reduxjs/redux
=> npm install redux-toolkit
+4 : thêm react-router-dom
=> để chuyển qua lại giữa giữa các trang
+5 : thêm Material
=> npm install @mui/icons-material @mui/material @mui/styled-engine-sc (cung cấp icon , sử dụng material , )
+6: sử dụng navigation để định dạng tuyến
+7 sử dụng AOS : Để làm animation
=>npm install aos --save ,

<!-- <script>
  AOS.init();
</script> --> thêm vào html

\*Các chú thích

1: Autocomplete cung cấp tính năng tự động nhận diện những gì người dùng nhập vào

Hàm định giá tiền việt
// Định dạng giá theo tiền Việt Nam Đồng
const formattedPrice = item.price.toLocaleString('vi-VN', {
style: 'currency',
currency: 'VND',
minimumFractionDigits: 0
});
