/**
 * Bài 07: flatten(arr, depth = Infinity)
 *
 * Làm phẳng mảng lồng nhau tới độ sâu `depth`.
 * KHÔNG dùng Array.prototype.flat / flatMap.
 *
 *   flatten([1, [2, [3, [4]]]])        -> [1, 2, 3, 4]
 *   flatten([1, [2, [3, [4]]]], 1)     -> [1, 2, [3, [4]]]
 *   flatten([1, [2, [3, [4]]]], 2)     -> [1, 2, 3, [4]]
 *   flatten([1, [2]], 0)               -> [1, [2]]   (bản sao nông, không phải chính mảng đầu vào)
 *   flatten([[], [[]]])                -> []
 *
 * Yêu cầu:
 *   - Dùng đệ quy.
 *   - Không sửa mảng đầu vào. Kết quả luôn là mảng mới.
 *
 * Thử thách thêm: viết phiên bản KHÔNG đệ quy, dùng stack (flattenIterative).
 * Khi nào phiên bản đệ quy có thể gây lỗi "Maximum call stack size exceeded"?
 */

// export function flatten(arr, depth = Infinity) {
//   // TODO
// }
import util from 'util';

export function flatten(arr, depth = Infinity) {
  // TODO
  if (!Array.isArray(arr)) throw new TypeError("arr must be an array");

  const result = [];
  for (const item of arr) {
    if (Array.isArray(item) && depth > 0) {
      result.push(...flatten(item, depth - 1));
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log([1, [2, [3, [4]]]].flat(1))

console.log(util.inspect(flatten([1, [2, [3, [4]]]]), { depth: null, colors: true }));
console.log(util.inspect(flatten([1, [2, [3, [4]]]], 1), { depth: null, colors: true }));
console.log(util.inspect(flatten([1, [2, [3, [4]]]], 2), { depth: null, colors: true }));
console.log(util.inspect(flatten([1, [2, [3, [4]]]], 3), { depth: null, colors: true }));
console.log(util.inspect(flatten([]), { depth: null, colors: true }));
