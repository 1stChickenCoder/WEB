/**
 * Bài 01: Tự viết myMap, myFilter, myReduce
 *
 * KHÔNG được dùng Array.prototype.map / filter / reduce / forEach / flatMap.
 * Chỉ dùng vòng lặp for / for...of / while.
 *
 * myMap(arr, fn)
 *   - Gọi fn(phầnTử, index, arr) cho từng phần tử, trả về MẢNG MỚI chứa kết quả.
 *   - myMap([1, 2, 3], x => x * 2) -> [2, 4, 6]
 *
 * myFilter(arr, predicate)
 *   - Giữ lại các phần tử mà predicate(phầnTử, index, arr) trả về giá trị truthy.
 *   - myFilter([1, 2, 3, 4], x => x % 2 === 0) -> [2, 4]
 *
 * myReduce(arr, reducer, initialValue?)
 *   - Gọi reducer(acc, phầnTử, index, arr) lần lượt, trả về acc cuối cùng.
 *   - Nếu CÓ truyền initialValue (kể cả khi nó là undefined, 0, ''): acc bắt đầu = initialValue, duyệt từ index 0.
 *   - Nếu KHÔNG truyền initialValue: acc bắt đầu = arr[0], duyệt từ index 1.
 *   - Mảng rỗng và không có initialValue -> throw TypeError (giống hành vi gốc của JS).
 *   - Gợi ý: phân biệt "không truyền" và "truyền undefined" bằng cách nào?
 *
 * Cả 3 hàm:
 *   - Không được sửa mảng đầu vào.
 *   - Nếu fn/predicate/reducer không phải function -> throw TypeError.
 *
 * Ghi độ phức tạp (Big-O) của từng hàm vào comment.
 */

export function myMap(arr, fn) {
  // TODO
  const result = [];
  for (let v of arr) {
    result.push(fn(v));
  }
  return result;
}


export function myFilter(arr, predicate) {
  // TODO
}

export function myReduce(arr, reducer, initialValue) {
  // TODO
}
