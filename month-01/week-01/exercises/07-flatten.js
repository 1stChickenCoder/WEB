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
export function flatten(arr, depth = Infinity) {
  if (!Array.isArray(arr)) throw new TypeError("arr must be an array");

  const result = [];
  const stack = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    stack.push([arr[i], depth]);
  }

  while (stack.length > 0) {
    const [current, currentDepth] = stack.pop();

    if (Array.isArray(current) && currentDepth > 0) {
      for (let i = current.length - 1; i >= 0; i--) {
        stack.push([current[i], currentDepth - 1]);
      }
    } else {
      result.push(current);
    }
  }

  return result;
}
