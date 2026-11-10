import { test } from 'node:test';
import assert from 'node:assert/strict';
import { groupBy } from '../exercises/03-group-by.js';

test('nhóm bằng function', () => {
  assert.deepEqual(groupBy([1.2, 1.8, 2.1], Math.floor), { 1: [1.2, 1.8], 2: [2.1] });
});
test('nhóm bằng tên thuộc tính', () => {
  const an = { role: 'admin', name: 'An' };
  const binh = { role: 'user', name: 'Bình' };
  const chi = { role: 'admin', name: 'Chi' };
  assert.deepEqual(groupBy([an, binh, chi], 'role'), { admin: [an, chi], user: [binh] });
});
test('giữ nguyên tham chiếu phần tử (không copy)', () => {
  const item = { type: 'x' };
  assert.equal(groupBy([item], 'type').x[0], item);
});
test('nhóm theo độ dài chuỗi', () => {
  assert.deepEqual(groupBy(['one', 'two', 'three'], (s) => s.length), { 3: ['one', 'two'], 5: ['three'] });
});
test('mảng rỗng -> {}', () => {
  assert.deepEqual(groupBy([], (x) => x), {});
});
test('không sửa mảng gốc', () => {
  const arr = [1, 2, 3];
  groupBy(arr, (x) => x % 2);
  assert.deepEqual(arr, [1, 2, 3]);
});
