/**
 * Bài 06: compress(str): nén chuỗi kiểu Run-Length Encoding
 *
 * Thay mỗi dãy ký tự giống nhau liên tiếp bằng "ký tự + số lần".
 * Nếu chuỗi nén KHÔNG ngắn hơn chuỗi gốc thì trả về chuỗi gốc.
 * Phân biệt hoa thường.
 *
 *   compress('aaabccc')         -> 'a3b1c3'
 *   compress('aaaaaaaaaaaab')  -> 'a12b1'
 *   compress('abc')            -> 'abc'      ('a1b1c1' dài hơn)
 *   compress('aabbcc')         -> 'aabbcc'   ('a2b2c2' bằng độ dài, không ngắn hơn)
 *   compress('')               -> ''
 *
 * Yêu cầu: O(n) thời gian. Cẩn thận với nhóm ký tự CUỐI CÙNG (lỗi hay gặp nhất bài này).
 *
 * Thử thách: tránh nối chuỗi bằng += trong vòng lặp; dùng mảng rồi join. Vì sao cách này
 * thường được khuyên dùng? (tìm hiểu & ghi vào NOTES.md)
 */

export function compress(str) {
  // TODO
  if (typeof str !== 'string') {
    throw new TypeError('str must be a string');
  }

  const result = [];
  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];
    let count = 1;

    while (i + 1 < str.length && str[i + 1] === currentChar) {
      count++;
      i++;
    }

    result.push(currentChar + count);
  }

  const compressed = result.join('');
  return compressed.length < str.length ? compressed : str;
}

console.log(compress('aaabccc'));         // 'a3b1c3'
console.log(compress('aaaaaaaaaaaab'));  // 'a12b1'
console.log(compress('abc'));            // 'abc'
console.log(compress('aabbcc'));         // 'aabbcc'
console.log(compress(''));               // ''  