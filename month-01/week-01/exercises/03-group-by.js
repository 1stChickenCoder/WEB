/**
 * Bài 03: groupBy(arr, keyOrFn)
 *
 * Nhóm các phần tử theo key. keyOrFn có thể là:
 *   - một function: key = keyOrFn(phầnTử)
 *   - một string: key = phầnTử[keyOrFn]
 *
 * Trả về một object thường ({}), mỗi key là một mảng các phần tử theo đúng thứ tự xuất hiện.
 *
 *   groupBy([1.2, 1.8, 2.1], Math.floor)
 *     -> { '1': [1.2, 1.8], '2': [2.1] }
 *
 *   groupBy([{ role: 'admin', name: 'An' }, { role: 'user', name: 'Bình' }, { role: 'admin', name: 'Chi' }], 'role')
 *     -> { admin: [{...An}, {...Chi}], user: [{...Bình}] }
 *
 * Yêu cầu:
 *   - O(n) thời gian. Không dùng Object.groupBy (hãy tự viết!).
 *   - Không sửa mảng đầu vào.
 *
 * Câu hỏi suy nghĩ (trả lời trong NOTES.md): nếu key là 'constructor' hoặc '__proto__' thì
 * object thường có vấn đề gì? Dùng Map thì sao?
 */

export function groupBy(arr, keyOrFn) {
  // TODO
}
