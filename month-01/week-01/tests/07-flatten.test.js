import { test } from 'node:test';
import assert from 'node:assert/strict';
import { flatten } from '../exercises/07-flatten.js';

function banFlat(fn) {
  const { flat, flatMap } = Array.prototype;
  Array.prototype.flat = () => { throw new Error('Không được dùng Array.prototype.flat'); };
  Array.prototype.flatMap = () => { throw new Error('Không được dùng Array.prototype.flatMap'); };
  try { return fn(); } finally { Array.prototype.flat = flat; Array.prototype.flatMap = flatMap; }
}

test('làm phẳng hoàn toàn (mặc định)', () => {
  assert.deepEqual(banFlat(() => flatten([1, [2, [3, [4]]]])), [1, 2, 3, 4]);
});
test('depth = 1', () => {
  assert.deepEqual(banFlat(() => flatten([1, [2, [3, [4]]]], 1)), [1, 2, [3, [4]]]);
});
test('depth = 2', () => {
  assert.deepEqual(banFlat(() => flatten([1, [2, [3, [4]]]], 2)), [1, 2, 3, [4]]);
});
test('depth = 0 -> bản sao nông', () => {
  const arr = [1, [2]];
  const result = banFlat(() => flatten(arr, 0));
  assert.deepEqual(result, [1, [2]]);
  assert.notEqual(result, arr);
  assert.equal(result[1], arr[1]);
});
test('mảng rỗng lồng nhau', () => {
  assert.deepEqual(banFlat(() => flatten([[], [[]]])), []);
});
test('giữ nguyên các giá trị không phải mảng (object, null, string)', () => {
  const obj = { a: 1 };
  assert.deepEqual(banFlat(() => flatten([obj, [null, ['x', [undefined]]]])), [obj, null, 'x', undefined]);
});
test('không sửa mảng gốc', () => {
  const inner = [2, [3]];
  const arr = [1, inner];
  banFlat(() => flatten(arr));
  assert.deepEqual(arr, [1, [2, [3]]]);
  assert.equal(arr[1], inner);
});
