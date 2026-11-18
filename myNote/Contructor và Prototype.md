## constructor

`constructor` là hàm dùng để tạo `object`. Khi gọi hàm với `new`, JS tạo một `object` mới và gán `this` vào `object` đó.

```js
function Person(name) {
  this.name = name;
}

const p = new Person("An");
console.log(p.name); // "An"
```

Mỗi hàm thường đều có sẵn thuộc tính `prototype`. Đây là một `object`, và trong `object` đó có thuộc tính `constructor` trỏ ngược về chính hàm:

```js
Person.prototype.constructor === Person; // true
p.constructor === Person; // true (lấy qua prototype)
```

Với cú pháp `class`, `constructor` là phương thức chạy khi khởi tạo. Về bản chất nó vẫn là cơ chế trên:

```js
class Person {
  constructor(name) {
    this.name = name;
  }
}
```

## proto

`__proto__` là đường liên kết từ một `object` tới `prototype` của nó, tức `object` mà nó “kế thừa” thuộc tính và phương thức. Khi bạn tạo `new Person()`, JS gán:

```js
p.__proto__ === Person.prototype; // true
```

Vì vậy, nếu bạn thêm phương thức vào `Person.prototype`, mọi `instance` đều dùng được:

```js
Person.prototype.sayHi = function () {
  return "Hi, " + this.name;
};

p.sayHi(); // "Hi, An"  → p không có sayHi, JS tìm lên p.__proto__
```

## Prototype chain (chuỗi nguyên mẫu)

Khi truy cập một thuộc tính, JS tìm trên chính `object` trước. Nếu không thấy, nó đi theo `__proto__` lên từng cấp cho tới khi gặp `null`:

```
p  →  Person.prototype  →  Object.prototype  →  null
```

Đó là lý do `p.toString()` vẫn chạy được: phương thức này nằm ở `Object.prototype`. Có nghĩa là nó trỏ đến thằng tạo ra nó từ `contructor` trước, sau đó mới nhảy đến các thuộc tính của Object nói chung. Nếu không có thuộc tính ấy nó mới trả về `null`.

## Phân biệt nhanh

|             | Thuộc về          | Ý nghĩa                                |
| ----------- | ----------------- | -------------------------------------- |
| prototype   | Hàm (constructor) | Object dùng làm khuôn cho các instance |
| **proto**   | Mọi object        | Trỏ tới prototype mà object kế thừa    |
| constructor | Object prototype  | Trỏ ngược về hàm đã tạo ra nó          |

## Tóm lại:

`new Person()` tạo ra `p`, và `p.__proto__ === Person.prototype`. Ngược lại, `Person.prototype.constructor === Person`.

## Lưu ý:

`__proto__` là cách cũ và không nên dùng trong code thật. Bạn nên dùng `Object.getPrototypeOf(obj)` để đọc và `Object`.`setPrototypeOf(obj, proto)` hoặc `Object.create(proto)` để gán.
