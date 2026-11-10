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
- Thời gian:
- Bộ nhớ:
- Giải thích:

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
- Thời gian:
- Bộ nhớ:
- Giải thích:
- Phiên bản tối ưu:

### Câu 3
```js
function commonItems(a, b) {
  return a.filter((x) => b.includes(x));
}
```
- Thời gian (gọi n = a.length, m = b.length):
- Bộ nhớ:
- Giải thích:
- Phiên bản tối ưu:

### Câu 4
```js
function toLookup(users) {
  return users.reduce((acc, u) => ({ ...acc, [u.id]: u }), {});
}
```
- Thời gian:
- Bộ nhớ:
- Giải thích (gợi ý: spread `...acc` tốn bao nhiêu mỗi lần?):
- Phiên bản tối ưu:

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
- Thời gian:
- Bộ nhớ:
- Giải thích:

### Câu 6 (tình huống React)
```jsx
function ProductList({ products, cartIds }) {
  // products: 2.000 sản phẩm, cartIds: mảng 500 id
  return products.map((p) => (
    <Item key={p.id} product={p} inCart={cartIds.includes(p.id)} />
  ));
}
```
- Mỗi lần render tốn bao nhiêu phép so sánh (ước lượng)?
- Viết lại để mỗi lần kiểm tra `inCart` là O(1). Có nên dùng `useMemo` ở đây không, vì sao?
