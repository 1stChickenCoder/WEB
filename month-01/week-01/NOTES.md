# Nhật ký Tuần 1

> Viết bằng lời của bạn, như đang giải thích cho một đồng nghiệp mới. Không copy tài liệu.

## Tổng thời gian đã học

- Ngày 1 (11/11/2026): 2 giờ
- Ngày 2 (12/11/2026): 2 giờ
- Ngày 3 (18/11/2026): 4 giờ

## 3 điều quan trọng nhất tôi học được

- Ngày 1 (11/11/2026):

1.
2.
3.

## Trả lời các câu hỏi suy nghĩ trong bài tập

- Bài 03 (`__proto__`, `constructor`, Map): `__proto__` làm key thì phiên bản ES6+ không làm được. Nếu ép buộc bằng cách khai báo kiểu `const obj = { ['__proto__']: 'giá trị chuỗi' };` thì sẽ gây vấn đề bảo mật.`constructor` làm key sẽ tạo ra một thuộc tính riêng, che khuất đi thuộc tính `contructor` được kế thừa, nếu bên ngoài sử dụng `obj.constructor` thì sẽ gây lỗi. Vấn đề bảo mật được nói ở đây (cả 2 trường hợp) có thể dễ dàng tác động vào dữ liệu bằng cách gọi (`Object.constructor` hoặc `Object.__proto__`) gây hỏng dữ liệu. Dùng `Map` thì giải quyết triệt để vấn đề trên vì trong `Map` mọi key đều là `key thực sự` trong lưu trữ nội bộ của `Map`, hoàn toàn không dính dáng gì đến chuỗi nguyên mẫu (Prototype Chain).

- Bài 05 (vì sao "j nhỏ nhất" khớp với cách dùng Map):
- Bài 06 (`+=` vs `join`):
- Bài 07 (khi nào đệ quy gây stack overflow):
- Bài 08 (vì sao React chỉ so sánh nông):

## Chỗ tôi bị bí & cách tôi gỡ

| Bài | Bí ở đâu | Đã làm gì (tự nghĩ / MDN / hỏi AI gợi ý) |
| --- | -------- | ---------------------------------------- |
|     |          |                                          |

## Câu hỏi cho thầy

-
