# Nhận xét Tuần 1

**Kết quả:** 80/81 test gốc pass. Thầy viết thêm 6 test cho các lỗi mà test gốc chưa bắt được, nên hiện tại là **80/87**. Nhiệm vụ của em: sửa code cho tới khi đạt 87/87.

**Đánh giá chung:** Bài làm tốt. Em làm đủ 9 bài, mỗi hàm đều có guard clause, đã biết dùng `Map`/`Set` để giảm độ phức tạp, và `deepEqual` có comment từng bước rất rõ ràng. Câu 6 trong `complexity.md` (React + `Set` + nhận định không cần `useMemo`) là câu trả lời ở mức dev có kinh nghiệm. Những lỗi bên dưới phần lớn là **edge case**, đúng thứ tuần này muốn luyện.

---

## Lỗi cần sửa (có test bắt)

| Bài | Lỗi | Test |
|---|---|---|
| 01 `myMap` | `if (res !== undefined) result.push(res)` làm **mất phần tử**. `map` luôn trả mảng cùng độ dài với input; `undefined` cũng là một kết quả hợp lệ. | `myMap (bổ sung)` |
| 03 `groupBy` | (1) `if (!result[key])`: với key `'constructor'`, `result.constructor` là hàm kế thừa từ `Object.prototype` (truthy), nên code gọi `.push` trên một function và crash. Đây chính là câu hỏi suy nghĩ của bài 03 trong thực tế! Dùng `Object.hasOwn(result, key)` hoặc `Map`. (2) `for (let i in arr)` duyệt **mọi key enumerable**, kể cả thuộc tính gắn thêm vào mảng, và `i` là string. Với mảng hãy dùng `for...of` hoặc `for (let i = 0; ...)`. | 2 test `groupBy` mới |
| 05 `twoSum` | `map.set(nums[i], i)` **ghi đè** index cũ khi số bị lặp. Với `[1, 1, 5]` và target 6, code trả `[1, 2]` thay vì `[0, 2]`. Chỉ `set` khi key chưa có. Dùng `map.has(complement)` sẽ rõ ý hơn `map.get(...) !== undefined`. | `số lặp lại` |
| 07 `flatten` | `result.push(...flatten(...))`: spread biến mỗi phần tử thành một **đối số** của hàm, mà JS giới hạn số đối số (khoảng 100k–500k tùy engine). Mảng con lớn sẽ gây `RangeError: Maximum call stack size exceeded`, dù độ sâu đệ quy chỉ là 2! Dùng vòng lặp `for...of` để push từng phần tử. | `mảng con rất lớn` |
| 08 `deepEqual` | `NaN` vs `NaN`: bước 1 dùng `===` nên `NaN` rơi xuống bước 4 và trả `false`. Thêm kiểm tra `Number.isNaN(a) && Number.isNaN(b)`. | `NaN và 0/-0` (test gốc) |
| 09 `analyzeLogs` | `slowestPath = path` dùng path **chưa bỏ query string**. | `slowest.path` |

## Góp ý cải thiện code (không có test, nhưng nên sửa)

**Bài 09:** Đây là bài cần refactor nhiều nhất.
- `checkPath` thực chất là `stripQuery` (nó không *check* gì cả). Tên hàm phải nói đúng việc nó làm.
- Mỗi dòng parse `duration.slice(0, -2)` tới 3 lần. Hãy viết `parseLine(line)` trả về `{ path, status, durationMs }` hoặc `null`, rồi phần thống kê chỉ làm việc với object đã sạch.
- `results.topPaths = paths !== undefined ? paths : ""` là dòng thừa (bị ghi đè ngay sau đó), các `!== undefined ? x : 0` cũng thừa vì biến luôn có giá trị.
- `groupBy(byStatus, Math.floor)` chạy được nhờ JS tự ép `'200'` thành số, nhưng người đọc sẽ hỏi "sao lại floor?". Đếm trực tiếp sẽ rõ hơn: `byStatus[status] = (byStatus[status] ?? 0) + 1`.
- Chuyển topPaths qua `Object.fromEntries` rồi lại `Object.entries` là thừa, và **nguy hiểm**: object tự sắp xếp lại các key dạng số nguyên (`'10'`, `'2'`), nên thứ tự đã sort có thể bị phá. Hãy giữ mảng sau khi `.sort().slice(0, 3)`.
- `Math.round(totalDuration / total) || 0` dựa vào việc `NaN || 0`. Viết `total ? Math.round(totalDuration / total) : 0` sẽ nói rõ ý đồ.
- Tham số `samples` trùng tên với hằng `samples` ở đầu file (shadowing). Xóa dữ liệu mẫu khỏi file chính.

**Chung:**
- Xóa `console.log` và `import util` ở cuối các file `exercises/`. Chúng chạy mỗi lần file được import (kể cả khi chạy test). Muốn thử nhanh thì viết test, hoặc tạo file `playground.js` riêng.
- Bài 01: khi mảng rỗng và không có `initialValue`, message lỗi đang là `"reducer must be a function"`, sai nguyên nhân. Tách thành 2 lệnh `throw` với 2 message riêng. Ngoài ra, bộ nhớ của `myReduce` là **O(1)** (bản thân hàm chỉ giữ `acc` và `i`), không phải O(n).
- Bài 03, 05, 06, 07, 08: còn thiếu comment Big-O.
- Xóa các dòng `// TODO` khi đã làm xong.

## complexity.md

| Câu | Nhận xét |
|---|---|
| 1 | Thời gian O(n) ✅. **Bộ nhớ là O(1)**, không phải O(n): hàm chỉ tạo `sum`, `product` và một mảng 2 phần tử, không phụ thuộc n. Input không tính vào bộ nhớ *thêm*. |
| 2 | Thời gian O(n²) ✅, bản tối ưu bằng `Set` ✅. **Bộ nhớ của bản gốc là O(1)** (chỉ có `i`, `j`). Hai vòng lặp lồng nhau làm tăng *thời gian*, không tốn *bộ nhớ*. Bản dùng `Set` thì O(n) bộ nhớ: đổi bộ nhớ lấy tốc độ. |
| 3 | ✅ O(n·m) → O(n + m). Có lỗi gõ `new Set(b)qqq`. |
| 4 | Phân tích O(n²) ✅, nhưng **bản tối ưu đang y hệt bản gốc**. Gợi ý: sửa trực tiếp `acc` (nó là object do chính reduce tạo, nên không vi phạm tính thuần ra bên ngoài) hoặc dùng vòng `for...of`. |
| 5 | ✅ Chính xác, giải thích tốt. |
| 6 | ✅ Xuất sắc: ước lượng đúng 1.000.000 phép so sánh, tối ưu bằng `Set`, và lý luận về `useMemo` rất chín chắn. |

## NOTES.md

- Phần "3 điều quan trọng nhất" còn trống, và 4/5 câu hỏi suy nghĩ chưa trả lời. Đây là phần quan trọng nhất của tuần: **nếu không tự giải thích được bằng lời thì kiến thức chưa thành của mình**. Hãy hoàn thành trước khi sang Tuần 2.
- Câu bài 03: hướng đúng (Map không dính prototype chain), nhưng cần chỉnh lại 2 ý:
  - `{ ['__proto__']: 'x' }` (computed key) thực ra tạo ra một **own property** bình thường, khá an toàn. Thứ nguy hiểm là **gán** `obj['__proto__'] = value` với key đến từ input người dùng: lệnh gán gọi setter và **đổi prototype** của object. Còn `merge`/`set` sâu với key `__proto__` thì có thể sửa `Object.prototype` của **toàn bộ ứng dụng**: lỗ hổng *prototype pollution*. Em sẽ gặp lại chủ đề này ở Tháng 6.
  - Với `constructor`, vấn đề *thực tế* chính là lỗi trong `groupBy` của em ở trên: `result['constructor']` đã có sẵn giá trị (kế thừa) ngay khi object còn rỗng.
- Bảng "Chỗ tôi bị bí" còn trống. Ghi thật (kể cả khi có hỏi AI) để thầy biết cần củng cố chỗ nào.

## Quy trình nộp bài

Tuần này em đẩy thẳng lên `main`, nên thầy không comment được vào từng dòng code. Từ Tuần 2, hãy làm theo [README](../../README.md): tạo nhánh `submit/week-02` rồi mở Pull Request. Phần sửa lỗi Tuần 1 thì em làm trên nhánh `submit/week-01-fix`.

Thư mục `myNote/` ghi chú lý thuyết rất tốt, em hãy tiếp tục duy trì.
