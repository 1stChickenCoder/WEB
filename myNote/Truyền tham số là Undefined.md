Trong JavaScript, việc truyền `undefined` làm tham số cho hàm là một việc hoàn toàn hợp pháp và rất phổ biến. Tuy nhiên, cách hàm xử lý giá trị `undefined` đó sẽ phụ thuộc vào cách bạn viết code bên trong hàm.

Dưới đây là những điểm quan trọng cần nắm khi truyền `undefined` làm tham số:

### 1. Hành vi cơ bản: Lấy giá trị mặc định (Default Parameters)

Nếu hàm của bạn được thiết lập giá trị mặc định cho tham số (tính năng ES6), khi bạn truyền rõ ràng `undefined` (hoặc không truyền gì cả), tham số đó sẽ nhận giá trị mặc định.

```js
function chaoHoi(ten = "Bạn mới") {
  console.log(`Xin chào, ${ten}!`);
}

chaoHoi("An"); // Kết quả: Xin chào, An!
chaoHoi(); // Kết quả: Xin chào, Bạn mới! (vì không truyền, ngầm hiểu là undefined)
chaoHoi(undefined); // Kết quả: Xin chào, Bạn mới! (truyền tường minh undefined)
```

```
⚠️ Lưu ý: Chỉ có giá trị undefined mới kích hoạt giá trị mặc định. Nếu bạn truyền null, 0, hay "" (chuỗi rỗng), chúng không kích hoạt giá trị mặc định mà sẽ lấy chính các giá trị đó.
```

### 2. Dùng để "bỏ qua" các tham số đứng trước

Đôi khi một hàm có rất nhiều tham số, và bạn muốn truyền tham số ở phía sau nhưng vẫn giữ nguyên giá trị mặc định của tham số ở phía trước. Truyền `undefined` giúp bạn làm điều này:

```js
function thongTinUser(ten = "Ẩn danh", tuoi = 18, thanhPho = "Hà Nội") {
  console.log(`${ten}, ${tuoi} tuổi, sống tại ${thanhPho}`);
}

// Bạn muốn giữ tên mặc định, tuổi mặc định, nhưng đổi thành phố thành 'TP.HCM'
thongTinUser(undefined, undefined, "TP.HCM");
// Kết quả: Ẩn danh, 18 tuổi, sống tại TP.HCM
```

### 3. Kiểm tra undefined bên trong hàm

Khi viết hàm, nếu người dùng truyền `undefined`, bạn cần có cơ chế kiểm tra để tránh lỗi chương trình (như lỗi `TypeError: Cannot read properties of undefined`):

```js
function xuLyDuLieu(input) {
  // Cách kiểm tra truyền thống
  if (input === undefined) {
    console.log("Chưa có dữ liệu được truyền vào!");
    return;
  }

  // Hoặc kiểm tra rút gọn (nhưng lưu ý các falsy value khác như 0, false, "")
  if (!input) {
    // ...
  }

  console.log("Đang xử lý:", input);
}

xuLyDuLieu(undefined);
// Kết quả: Chưa có dữ liệu được truyền vào!
```

### 4. Khác biệt giữa undefined và null khi truyền tham số

* `undefined`: Có nghĩa là "biến này chưa được gán giá trị" hoặc "không có giá trị". Thường dùng để kích hoạt giá trị mặc định của hàm.

* `null`: Có nghĩa là "có giá trị nhưng giá trị đó là trống/rỗng (vô chủ đích)". Khi truyền `null`, hàm sẽ nhận `null` chứ không kích hoạt giá trị mặc định.
