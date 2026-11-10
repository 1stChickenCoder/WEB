import { test } from 'node:test';
import assert from 'node:assert/strict';
import { twoSum } from '../exercises/05-two-sum.js';

test('ví dụ cơ bản', () => {
  assert.deepEqual(twoSum([2, 7, 11, 15], 9), [0, 1]);
  assert.deepEqual(twoSum([3, 2, 4], 6), [1, 2]);
});
test('hai số bằng nhau', () => {
  assert.deepEqual(twoSum([3, 3], 6), [0, 1]);
});
test('không dùng 1 phần tử 2 lần', () => {
  assert.equal(twoSum([3, 5], 6), null);
});
test('không có cặp nào', () => {
  assert.equal(twoSum([1, 2], 10), null);
  assert.equal(twoSum([], 0), null);
  assert.equal(twoSum([5], 5), null);
});
test('số âm và số 0', () => {
  assert.deepEqual(twoSum([-3, 4, 3, 90], 0), [0, 2]);
  assert.deepEqual(twoSum([0, 4, 3, 0], 0), [0, 3]);
});
test('nhiều cặp: chọn j nhỏ nhất, rồi i nhỏ nhất', () => {
  // cặp (1,2) có j=2 nhỏ nhất
  assert.deepEqual(twoSum([1, 5, 1, 5], 6), [0, 1]);
  assert.deepEqual(twoSum([2, 2, 2], 4), [0, 1]);
  assert.deepEqual(twoSum([1, 3, 2, 4], 5), [1, 2]);
});
test('hiệu năng: 100.000 phần tử phải chạy dưới 300ms (O(n))', () => {
  const n = 100_000;
  const nums = Array.from({ length: n }, (_, i) => i * 2); // toàn số chẵn
  const target = nums[n - 2] + nums[n - 1];
  const start = performance.now();
  const result = twoSum(nums, target);
  const elapsed = performance.now() - start;
  assert.deepEqual(result, [n - 2, n - 1]);
  assert.ok(elapsed < 300, `Mất ${elapsed.toFixed(0)}ms, có vẻ là O(n²)`);
});
