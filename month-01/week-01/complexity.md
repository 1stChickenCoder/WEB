# Bài tập phân tích độ phức tạp (Big-O)

Với mỗi đoạn code: ghi **độ phức tạp thời gian**, **bộ nhớ**, và **giải thích 1–2 câu**.
Nếu có thể tối ưu, viết phiên bản tốt hơn. Không chạy code để đo, hãy đọc và suy luận.

### Câu 1

```js
function sumAndProduct(arr) {
  let sum = 0;
  for (const x of arr) sum += x;
  let product = 1;
  for (const x of arr) product *= x;
  return [sum, product];
}
```

- Thời gian: O(n)
- Bộ nhớ: O(n)
- Giải thích: Chạy qua vòng lặp x bước bằng kích thước arr

### Câu 2

```js
function hasDuplicate(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) return true;
    }
  }
  return false;
}
```

- Thời gian: O(n²)
- Bộ nhớ: O(n²)
- Giải thích: 2 vòng lặp lồng nhau cùng chạy qua số bước bằng kích thước arr
- Phiên bản tối ưu:

```js
function hasDuplicate(arr) {
  const seen = new Set();
  for (const item of arr) {
    if (seen.has(item)) return true;
    seen.add(item);
  }
  return false;
}
```

### Câu 3

```js
function commonItems(a, b) {
  return a.filter((x) => b.includes(x));
}
```

- Thời gian (gọi n = a.length, m = b.length): n\*m
- Bộ nhớ: O(n)
- Giải thích: Về thời gian thì filter có O(n), includes() có O(m), 2 vòng lồng nhau => n\*m. Về không gian thì O(n) nếu toàn bộ a nằm trong b.
- Phiên bản tối ưu:

```js
function commonItems(a, b) {
  const setB = new Set(b)qqq
  return a.filter((x) => setB.has(x));
}
```

### Câu 4

```js
function toLookup(users) {
  return users.reduce((acc, u) => ({ ...acc, [u.id]: u }), {});
}
```

- Thời gian: O(n²)
- Bộ nhớ: O(n)
- Giải thích (gợi ý: spread `...acc` tốn bao nhiêu mỗi lần?): vì mỗi lần chạy 1 bước trong reduce sẽ tạo mới một Object { ...acc, [u.id]: u } và duyệt lại toàn bộ Object
- Phiên bản tối ưu:

```js
function toLookup(users) {
  return users.reduce((acc, u) => ({ ...acc, [u.id]: u }), {});
}
```

### Câu 5

```js
function countHalvings(n) {
  let steps = 0;
  while (n > 1) {
    n = Math.floor(n / 2);
    steps++;
  }
  return steps;
}
```

- Thời gian: O(log n)
- Bộ nhớ: O(1)
- Giải thích: Mỗi vòng lặp chia n cho 2, nên số lần lặp bằng số lần chia đôi n cho tới khi còn 1, tức là log₂(n). Hàm chỉ dùng 2 biến (n, steps), không phụ thuộc kích thước đầu vào, nên bộ nhớ là hằng số.

### Câu 6 (tình huống React)

```jsx
function ProductList({ products, cartIds }) {
  // products: 2.000 sản phẩm, cartIds: mảng 500 id
  return products.map((p) => (
    <Item key={p.id} product={p} inCart={cartIds.includes(p.id)} />
  ));
}
```

- Mỗi lần render tốn bao nhiêu phép so sánh (ước lượng)?: Trường hợp xấu nhất: `includes` duyệt qua 500 id, hàm chạy `map` cho 2000 sản phẩm, vậy tổng có thể lên đến 1000000 phép so sánh.

- Viết lại để mỗi lần kiểm tra `inCart` là O(1).

```js
function ProductList({ products, cartIds }) {
  const cartSet = new Set(cartIds); // O(m) = 500 thao tác

  return products.map((p) => (
    <Item key={p.id} product={p} inCart={cartSet.has(p.id)} /> // O(1) mỗi lần
  ));
}
```

- Có nên dùng `useMemo` ở đây không, vì sao?: Dùng cũng được nhưng không cần thiết vì sử dụng `Set()` chỉ tốn thêm 500 thao tác, nhất nhỏ so với việc `React` render 2000 thẻ `<Item>` mỗi lần. `useMemo` còn cần phải so sánh `dependency` và giữ bộ nhớ.
