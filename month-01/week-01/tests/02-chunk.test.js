import { test } from 'node:test';
import assert from 'node:assert/strict';
import { chunk } from '../exercises/02-chunk.js';

test('chia đều có dư', () => {
  assert.deepEqual(chunk([1, 2, 3, 4, 5], 2), [[1, 2], [3, 4], [5]]);
});
test('chia đều không dư', () => {
  assert.deepEqual(chunk([1, 2, 3, 4], 2), [[1, 2], [3, 4]]);
});
test('size lớn hơn độ dài mảng', () => {
  assert.deepEqual(chunk([1, 2, 3], 5), [[1, 2, 3]]);
});
test('size = 1', () => {
  assert.deepEqual(chunk(['a', 'b'], 1), [['a'], ['b']]);
});
test('mảng rỗng', () => {
  assert.deepEqual(chunk([], 3), []);
});
test('không sửa mảng gốc', () => {
  const arr = [1, 2, 3];
  chunk(arr, 2);
  assert.deepEqual(arr, [1, 2, 3]);
});
test('arr không phải mảng -> TypeError', () => {
  assert.throws(() => chunk('abc', 1), TypeError);
  assert.throws(() => chunk(null, 1), TypeError);
});
test('size không hợp lệ -> RangeError', () => {
  for (const size of [0, -1, 1.5, NaN, '2', undefined, Infinity]) {
    assert.throws(() => chunk([1, 2], size), RangeError, `size = ${String(size)}`);
  }
});
