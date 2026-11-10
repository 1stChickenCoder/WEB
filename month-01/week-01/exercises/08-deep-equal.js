/**
 * Bài 08: deepEqual(a, b)
 *
 * So sánh "sâu" hai giá trị.
 *
 * Quy tắc:
 *   - Primitive: bằng nhau nếu ===, NGOẠI TRỪ NaN bằng NaN. (0 và -0 coi là bằng nhau)
 *   - null chỉ bằng null; undefined chỉ bằng undefined.
 *   - Array: cùng độ dài và từng phần tử deepEqual theo đúng thứ tự.
 *   - Date: bằng nhau nếu cùng thời điểm (getTime).
 *   - Object thường: cùng tập key riêng (Object.keys) và giá trị của từng key deepEqual.
 *     Thứ tự key không quan trọng.
 *   - Array và object không bao giờ bằng nhau (kể cả [] và {}).
 *   - Function: chỉ bằng nhau nếu cùng tham chiếu.
 *
 *   deepEqual({ a: [1, { b: 2 }] }, { a: [1, { b: 2 }] })  -> true
 *   deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 })              -> true
 *   deepEqual({ a: undefined }, {})                        -> false  (khác tập key)
 *   deepEqual([1, 2], { 0: 1, 1: 2, length: 2 })          -> false
 *   deepEqual(NaN, NaN)                                    -> true
 *
 * Không cần xử lý Map, Set, tham chiếu vòng (circular). Đó là thử thách thêm.
 *
 * Liên hệ thực tế: đây chính là thứ React KHÔNG làm khi so sánh props/state
 * (React chỉ so sánh nông bằng Object.is). Vì sao React chọn như vậy? (ghi vào NOTES.md)
 */

export function deepEqual(a, b) {
  // TODO
}
