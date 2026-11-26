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
  // Big-O: O(n) về thời gian; O(n) về bộ nhớ
  if (typeof fn !== "function") throw new TypeError("fn must be a function");
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const res = fn(arr[i], i, arr);
    result.push(res);
  }
  return result;
}

export function myFilter(arr, predicate) {
  // TODO
  // Big-O: O(n) về thời gian; O(n) về bộ nhớ
  if (typeof predicate !== "function")
    throw new TypeError("predicate must be a function");
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i, arr)) result.push(arr[i]);
  }
  return result;
}

export function myReduce(arr, reducer, initialValue) {
  // TODO
  // Big-O: O(n) về thời gian; O(n) về bộ nhớ
  if (
    (arr.length === 0 && arguments.length < 3) ||
    typeof reducer !== "function"
  )
    throw new TypeError("reducer must be a function");
  let acc;
  let startIndex = 0;
  if (arguments.length >= 3) {
    acc = initialValue;
  } else {
    acc = arr[0];
    startIndex = 1;
  }
  for (let i = startIndex; i < arr.length; i++) {
    acc = reducer(acc, arr[i], i, arr);
  }
  return acc;
}