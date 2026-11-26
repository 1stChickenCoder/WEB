# Nhật ký Tuần 1

> Viết bằng lời của bạn, như đang giải thích cho một đồng nghiệp mới. Không copy tài liệu.

## Tổng thời gian đã học

- Ngày 1 (11/11/2026): 2 giờ
- Ngày 2 (12/11/2026): 2 giờ
- Ngày 3 (18/11/2026): 4 giờ
- Ngày 4 (19/11/2026): 2 giờ
- Ngày 5 (20/11/2026): 2 giờ
- Ngày 6 (24/11/2026): 4 giờ
- Ngày 7 (25/11/2026): 2 giờ

## 3 điều quan trọng nhất tôi học được

- Ngày 1 (11/11/2026):

1. Đừng code quá sớm, hãy tìm hiểu bài toán cần là gì, thiết kế phương án, các rủi ro về dữ liệu,...
2. Muốn React render một cách chính xác cần thiết kế một hàm thuần khiết
3. Đặt tên hàm phải đúng với chức năng, không được đặt bừa phứa

- Ngày 2 (12/11/2026):

1. Cần giải quyết bài toán BigO để tối ưu thời gian và không gian
2. Sử dụng các thuộc tính được tạo sẵn như `includes` hay `reduce` phải thật cẩn trọng vì chúng có O(n)
3. `Map` và `Set` là những công cụ quan trọng để tối ưu hoá thời gian chạy

- Ngày 3 (18/11/2026):

1. Dùng `Map` khi key là dữ liệu động từ người dùng
2. Dùng `Map` để không dính dáng gì đến chuỗi nguyên mẫu (Prototype Chain)
3. Chú ý khi sử dụng key của Object là `__proto__`, `constructor` bởi nó có thể che khuất đi thuộc tính `contructor` được kế thừa sẵn.

- Ngày 4 (19/11/2026):

1. Đệ quy thích hợp với các kiểu dữ liệu có "độ sâu" như cây, JSON lồng nhau, menu nhiều cấp,...
2. Đệ quy có thể gây stack overflow khi đi vào quá sâu hoặc không có điều kiện dừng
3. Nếu phải xử lý dữ liệu ở mức sâu mà không dùng đệ quy được thì dùng vòng lặp

## Trả lời các câu hỏi suy nghĩ trong bài tập

- Bài 03 (`__proto__`, `constructor`, Map): `__proto__` làm key thì phiên bản ES6+ không làm được. Nếu ép buộc bằng cách khai báo kiểu `const obj = { ['__proto__']: 'giá trị chuỗi' };` thì sẽ gây vấn đề bảo mật.`constructor` làm key sẽ tạo ra một thuộc tính riêng, che khuất đi thuộc tính `contructor` được kế thừa, nếu bên ngoài sử dụng `obj.constructor` thì sẽ gây lỗi. Vấn đề bảo mật được nói ở đây (cả 2 trường hợp) có thể dễ dàng tác động vào dữ liệu bằng cách gọi (`Object.constructor` hoặc `Object.__proto__`) gây hỏng dữ liệu. Dùng `Map` thì giải quyết triệt để vấn đề trên vì trong `Map` mọi key đều là `key thực sự` trong lưu trữ nội bộ của `Map`, hoàn toàn không dính dáng gì đến chuỗi nguyên mẫu (Prototype Chain).

- Bài 05 (vì sao "j nhỏ nhất" khớp với cách dùng Map): sử dụng `Map` thì bài toán dừng ngay lúc điều kiện `j` đúng.

- Bài 06 (`+=` vs `join`): `join` có thể sử dụng với string nối giữa các phần tử. Khi chạy trong vòng lặp, nếu sử dụng `+=` thì sẽ phải cấp phát bộ nhớ liên tục cho từng lần; `join` thì gom vào một mảng và cấp phát bộ nhớ cho một lần.

- Bài 07 (khi nào đệ quy gây stack overflow): khi không có điều kiện dừng hoặc đệ quy vào quá sâu. Khi đó nên dùng vòng lặp

- Bài 08 (vì sao React chỉ so sánh nông):

## Chỗ tôi bị bí & cách tôi gỡ

| Bài | Bí ở đâu | Đã làm gì (tự nghĩ / MDN / hỏi AI gợi ý) |
| --- | -------- | ---------------------------------------- |
|     |          |                                          |

## Câu hỏi cho thầy

- Các xử lý của AI giờ đã rất mạnh rồi, có nên học các kỹ thuật lập trình nữa không?
- Chương trình của mình có học về kiến trúc mạng như mô hình 7 lớp, kiến trúc TCP/IP, MCP,... không?
