/**
 * Bài 05: twoSum(nums, target)
 *
 * Tìm 2 vị trí i < j sao cho nums[i] + nums[j] === target. Trả về [i, j].
 * Nếu không có cặp nào -> trả về null.
 * Nếu có nhiều cặp: trả về cặp có j NHỎ NHẤT; nếu vẫn hòa, chọn i nhỏ nhất.
 * Một phần tử không được dùng 2 lần.
 *
 *   twoSum([2, 7, 11, 15], 9)  -> [0, 1]
 *   twoSum([3, 2, 4], 6)       -> [1, 2]
 *   twoSum([3, 3], 6)          -> [0, 1]
 *   twoSum([1, 2], 10)         -> null
 *
 * Yêu cầu: O(n) thời gian. Test có 1 trường hợp mảng 100.000 phần tử,
 * lời giải 2 vòng lặp lồng nhau (O(n²)) sẽ bị FAIL vì quá chậm.
 *
 * Câu hỏi: vì sao quy tắc "j nhỏ nhất, rồi i nhỏ nhất" lại khớp tự nhiên với cách
 * giải dùng Map? (trả lời trong NOTES.md)
 */

export function twoSum(nums, target) {
  // TODO
}
