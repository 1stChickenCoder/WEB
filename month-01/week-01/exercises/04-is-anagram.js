/**
 * Bài 04: isAnagram(a, b)
 *
 * Hai chuỗi là anagram nếu chúng gồm đúng các ký tự giống nhau với số lần giống nhau
 * (chỉ khác thứ tự).
 *
 * Quy tắc:
 *   - KHÔNG phân biệt hoa thường.
 *   - BỎ QUA mọi khoảng trắng (space, tab, xuống dòng).
 *   - Các ký tự khác (dấu câu, số, chữ có dấu tiếng Việt) được tính bình thường.
 *
 *   isAnagram('listen', 'silent')               -> true
 *   isAnagram('Dormitory', 'dirty room')        -> true
 *   isAnagram('rat', 'car')                     -> false
 *   isAnagram('aab', 'abb')                     -> false
 *
 * Yêu cầu:
 *   - O(n) thời gian. KHÔNG dùng sort (sort là O(n log n)).
 *   - Gợi ý: đếm tần suất bằng Map.
 */

export function isAnagram(a, b) {
  // TODO
  // Big-O = O(n)
  const normalize = (str) => str.toLowerCase().replace(/\s+/g, "");

  a = normalize(a);
  b = normalize(b);

  const countMapA = new Map();
  for (const char of a) {
    countMapA.set(char, (countMapA.get(char) || 0) + 1);
  }

  const countMapB = new Map();
  for (const char of b) {
    countMapB.set(char, (countMapB.get(char) || 0) + 1);
  }

  if (countMapA.size !== countMapB.size) {
    return false;
  }

  for (const [char, count] of countMapA.entries()) {
    if (countMapB.get(char) !== count) {
      return false;
    }
  }

  return true;
}