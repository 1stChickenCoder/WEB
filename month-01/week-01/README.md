# Tuần 1: Tư duy viết hàm, mảng/chuỗi & Big-O

> Mục tiêu tuần: hình thành **quy trình giải bài toán** có hệ thống, viết hàm thuần (pure function) xử lý đủ edge case, đọc được độ phức tạp của code, và quen với việc **tự kiểm chứng code bằng test** thay vì "chạy thử thấy được".

## Kế hoạch 7 ngày

| Ngày | Lý thuyết (30–45') | Thực hành (60–90') |
|---|---|---|
| 1 | Phần 1 & 2 bên dưới: quy trình giải bài, hàm thuần | Bài 01 `myMap/myFilter/myReduce` |
| 2 | Phần 3: Big-O | Bài 02 `chunk`, Bài 03 `groupBy` + làm `complexity.md` câu 1–3 |
| 3 | Phần 4: Hash map, đánh đổi thời gian/bộ nhớ | Bài 04 `isAnagram`, Bài 05 `twoSum` |
| 4 | Phần 5: Đệ quy | Bài 06 `compress`, Bài 07 `flatten` |
| 5 | Phần 6: So sánh giá trị trong JS (`===`, `Object.is`, tham chiếu) | Bài 08 `deepEqual` + `complexity.md` câu 4–6 |
| 6 | Đọc lại toàn bộ | Bài 09 (mini project) `analyzeLogs` |
| 7 | Nghỉ / bù bài | Refactor, viết `NOTES.md`, mở PR nộp bài |

**Quy tắc tuần này:** không dùng AI để viết code. Bài 01 **không được dùng** `Array.prototype.map/filter/reduce/forEach`. Các bài khác được dùng built-in, nhưng phải biết độ phức tạp của built-in đó.

---

## Phần 1: Quy trình 6 bước giải một bài toán

Phần lớn lập trình viên "bí" không phải vì không biết cú pháp mà vì **nhảy vào code quá sớm**. Hãy luôn đi qua 6 bước, kể cả với bài dễ:

1. **Hiểu đề:** Viết lại đề bằng lời của bạn. Input là gì (kiểu, phạm vi)? Output là gì?
2. **Ví dụ:** Tự viết 3 loại ví dụ: bình thường, biên (rỗng, 1 phần tử, số âm, rất lớn), sai (input không hợp lệ).
3. **Giải tay:** Giải ví dụ bằng tay trên giấy. Để ý *chính bạn* đã làm những bước gì: đó là thuật toán.
4. **Pseudo-code:** Viết các bước bằng tiếng Việt/comment trước khi code.
5. **Code:** Dịch pseudo-code sang JS.
6. **Kiểm tra & tối ưu:** Chạy test, chạy tay với ví dụ biên, rồi hỏi: "có làm nhanh hơn/gọn hơn được không?"

Ví dụ áp dụng với bài: *"Đếm số lần xuất hiện của mỗi ký tự trong chuỗi"*

```js
// 1. Input: string. Output: object { ký tự: số lần }
// 2. "aab" -> { a: 2, b: 1 }; "" -> {}; "Aa" -> { A: 1, a: 1 } (phân biệt hoa thường)
// 3. Duyệt từng ký tự, gặp ký tự nào thì tăng bộ đếm của nó
// 4. tạo object rỗng -> lặp từng ký tự -> nếu chưa có thì gán 0 -> cộng 1 -> trả về
function countChars(str) {
  const counts = {};
  for (const ch of str) {
    counts[ch] = (counts[ch] ?? 0) + 1;
  }
  return counts;
}
// 6. O(n) thời gian, O(k) bộ nhớ (k = số ký tự khác nhau)
```

## Phần 2: Hàm thuần (pure function) & thiết kế hàm tốt

Hàm thuần: **(1)** cùng input luôn cho cùng output, **(2)** không có side effect (không sửa input, không sửa biến ngoài, không gọi API, không `console.log` logic).

```js
// ❌ Không thuần: sửa mảng đầu vào
function addItem(cart, item) { cart.push(item); return cart; }
// ✅ Thuần: trả về mảng mới
function addItem(cart, item) { return [...cart, item]; }
```

Vì sao quan trọng? React dựa hoàn toàn vào ý tưởng này: component phải "thuần" với props/state, và state phải **immutable** để React so sánh tham chiếu (`prev !== next`) mà biết có thay đổi. Rất nhiều bug "state không cập nhật" là do sửa trực tiếp mảng/object.

Checklist một hàm tốt:
- Tên là **động từ** nói rõ việc nó làm (`groupBy`, `parseLogLine`), tham số có tên rõ nghĩa.
- Làm **một việc**. Nếu phải dùng chữ "và" để mô tả hàm, hãy tách.
- **Xử lý input sai sớm** (guard clause) thay vì `if` lồng nhau:
  ```js
  function chunk(arr, size) {
    if (!Array.isArray(arr)) throw new TypeError('arr must be an array');
    if (!Number.isInteger(size) || size <= 0) throw new RangeError('size must be a positive integer');
    // ... logic chính, không bị lồng
  }
  ```
- Không sửa input. Trả về giá trị mới.

## Phần 3: Big-O, đọc độ phức tạp của code

Big-O mô tả **thời gian/bộ nhớ tăng thế nào khi input tăng**, bỏ qua hằng số.

| Big-O | Tên | Ví dụ | n = 1 triệu |
|---|---|---|---|
| O(1) | Hằng | `arr[i]`, `map.get(k)` | 1 bước |
| O(log n) | Logarit | Binary search | ~20 bước |
| O(n) | Tuyến tính | 1 vòng lặp qua mảng | 1 triệu |
| O(n log n) | | `arr.sort()` | ~20 triệu |
| O(n²) | Bình phương | 2 vòng lặp lồng nhau | 1 nghìn tỷ ⚠️ |

Quy tắc đọc nhanh:
- Vòng lặp nối tiếp → **cộng**: O(n) + O(n) = O(n).
- Vòng lặp lồng nhau → **nhân**: O(n) × O(n) = O(n²).
- **Bẫy hay gặp:** built-in cũng là vòng lặp! `arr.includes`, `arr.indexOf`, `arr.find`, `arr.slice`, spread `[...arr]` đều O(n). Vậy đoạn này là O(n²):
  ```js
  const unique = [];
  for (const x of arr) {
    if (!unique.includes(x)) unique.push(x); // includes là O(n) bên trong vòng O(n)
  }
  // Sửa: dùng Set → O(n):  const unique = [...new Set(arr)];
  ```
- Bẫy trong `reduce`: `arr.reduce((acc, x) => [...acc, x], [])` là O(n²) vì mỗi lần spread copy lại toàn bộ `acc`.

Bộ nhớ (space complexity) cũng tính tương tự: tạo thêm mảng/object kích thước n → O(n) bộ nhớ.

## Phần 4: Hash map, đánh đổi bộ nhớ lấy tốc độ

Kỹ thuật quan trọng nhất của tuần (và của 50% bài phỏng vấn): khi thấy mình đang **tìm kiếm lặp đi lặp lại trong mảng** (O(n) mỗi lần), hãy lưu sẵn vào `Map`/`Set`/object để tra cứu O(1).

```js
// Bài: có cặp số nào trong mảng cộng lại bằng target không?
// Cách 1: 2 vòng lặp → O(n²)
// Cách 2: duyệt 1 lần, nhớ các số đã gặp trong Set → O(n) thời gian, O(n) bộ nhớ
function hasPairWithSum(nums, target) {
  const seen = new Set();
  for (const n of nums) {
    if (seen.has(target - n)) return true;
    seen.add(n);
  }
  return false;
}
```

`Map` vs object `{}`: `Map` giữ thứ tự chèn, key có thể là bất kỳ kiểu gì, có `.size`, không bị dính key từ prototype (`"constructor"`, `"__proto__"`). Dùng `Map` khi key là dữ liệu động từ người dùng.

## Phần 5: Đệ quy

Một hàm đệ quy cần 2 phần: **trường hợp cơ sở** (dừng) và **bước đệ quy** (gọi chính nó với bài toán *nhỏ hơn*).

```js
// Tổng các số trong mảng lồng nhau: [1, [2, [3]]] -> 6
function deepSum(arr) {
  let total = 0;
  for (const item of arr) {
    if (Array.isArray(item)) total += deepSum(item); // bài toán nhỏ hơn
    else total += item;                               // cơ sở
  }
  return total;
}
```

Cách nghĩ: **tin rằng hàm đã chạy đúng với bài toán nhỏ hơn**, chỉ cần lo cách kết hợp kết quả. Đệ quy rất hợp với dữ liệu dạng cây: DOM, cây component React, JSON lồng nhau, menu nhiều cấp, cây thư mục.

## Phần 6: So sánh giá trị trong JavaScript

```js
1 === 1                 // true
'a' === 'a'             // true
NaN === NaN             // false ⚠️
Object.is(NaN, NaN)     // true
Object.is(0, -0)        // false
[1] === [1]             // false: hai mảng khác tham chiếu
const a = [1]; a === a  // true: cùng tham chiếu
typeof null             // 'object' ⚠️
```

Primitive so sánh theo **giá trị**; object/array so sánh theo **tham chiếu**. React dùng `Object.is` để so sánh state và dependency của `useEffect`; đó là lý do `useEffect(() => {}, [{ a: 1 }])` chạy lại mỗi lần render.

---

## Bài tập

Mỗi bài có file khung trong `exercises/` và test trong `tests/`. Đọc kỹ comment trong file khung: đó là "đề bài" đầy đủ.

| # | Bài | Kỹ năng | Độ khó |
|---|---|---|---|
| 01 | `myMap`, `myFilter`, `myReduce` | Hiểu bản chất higher-order function | ⭐ |
| 02 | `chunk(arr, size)` | Vòng lặp, validate input | ⭐ |
| 03 | `groupBy(arr, keyFn)` | Hash map, callback | ⭐ |
| 04 | `isAnagram(a, b)` | Đếm tần suất, chuẩn hóa chuỗi | ⭐⭐ |
| 05 | `twoSum(nums, target)` | Từ O(n²) xuống O(n) | ⭐⭐ |
| 06 | `compress(str)` | Duyệt chuỗi, xử lý "đuôi" vòng lặp | ⭐⭐ |
| 07 | `flatten(arr, depth)` | Đệ quy có giới hạn độ sâu | ⭐⭐ |
| 08 | `deepEqual(a, b)` | Đệ quy, kiểu dữ liệu, edge case | ⭐⭐⭐ |
| 09 | `analyzeLogs(lines)` | Mini project: parse dữ liệu thật, kết hợp các kỹ năng | ⭐⭐⭐ |
| + | `complexity.md` | Đọc Big-O của code | ⭐⭐ |

Chạy test:
```bash
cd month-01/week-01
node --test                              # tất cả
node --test tests/05-two-sum.test.js     # một bài
```

Lúc đầu mọi test sẽ **fail**: đó là bình thường. Nhiệm vụ của bạn là làm chúng chuyển sang pass.

### Thử thách thêm (không bắt buộc)
- Viết thêm ít nhất **2 test của riêng bạn** cho mỗi bài vào cuối file test tương ứng (đánh dấu `// my test`). Tự nghĩ ra test case là kỹ năng quan trọng không kém viết code.
- Bài 05: viết thêm phiên bản O(n²) và đo thời gian 2 phiên bản với mảng 10.000 phần tử bằng `performance.now()`.

## Tiêu chí thầy chấm

1. **Đúng**: test pass, xử lý đủ edge case.
2. **Rõ ràng**: tên biến, cấu trúc hàm, không lồng `if` quá sâu.
3. **Độ phức tạp**: ghi comment Big-O cho mỗi hàm, và tối ưu được khi đề yêu cầu.
4. **Thuần**: không sửa input.
5. **NOTES.md**: tự giải thích được những gì đã học.

## Tài liệu tuần này

- [javascript.info: Arrays](https://javascript.info/array), [Array methods](https://javascript.info/array-methods), [Map and Set](https://javascript.info/map-set), [Recursion](https://javascript.info/recursion)
- [MDN: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [Equality comparisons and sameness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)
- [Big-O Cheat Sheet](https://www.bigocheatsheet.com/)
- [Node.js test runner](https://nodejs.org/api/test.html)
- Đọc thêm: *How to Solve It* (George Pólya), cuốn sách gốc của "quy trình giải bài toán".
