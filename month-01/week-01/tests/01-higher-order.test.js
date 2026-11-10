import { test, describe } from 'node:test';
import assert from 'node:assert/strict';
import { myMap, myFilter, myReduce } from '../exercises/01-higher-order.js';

// Bẫy: nếu bạn dùng built-in, các test này sẽ bắt được
function banBuiltins(fn) {
  const names = ['map', 'filter', 'reduce', 'forEach', 'flatMap'];
  const originals = {};
  for (const n of names) {
    originals[n] = Array.prototype[n];
    Array.prototype[n] = function () { throw new Error(`Không được dùng Array.prototype.${n}`); };
  }
  try { return fn(); } finally {
    for (const n of names) Array.prototype[n] = originals[n];
  }
}

describe('myMap', () => {
  test('nhân đôi từng phần tử', () => {
    assert.deepEqual(banBuiltins(() => myMap([1, 2, 3], (x) => x * 2)), [2, 4, 6]);
  });
  test('truyền index và mảng gốc vào callback', () => {
    const arr = ['a', 'b'];
    const calls = [];
    banBuiltins(() => myMap(arr, (x, i, a) => calls.push([x, i, a])));
    assert.deepEqual(calls, [['a', 0, arr], ['b', 1, arr]]);
  });
  test('mảng rỗng -> mảng rỗng mới', () => {
    const arr = [];
    const result = banBuiltins(() => myMap(arr, (x) => x));
    assert.deepEqual(result, []);
    assert.notEqual(result, arr);
  });
  test('không sửa mảng gốc', () => {
    const arr = [1, 2, 3];
    banBuiltins(() => myMap(arr, (x) => x + 1));
    assert.deepEqual(arr, [1, 2, 3]);
  });
  test('callback không phải function -> TypeError', () => {
    assert.throws(() => myMap([1], 'abc'), TypeError);
  });
});

describe('myFilter', () => {
  test('lọc số chẵn', () => {
    assert.deepEqual(banBuiltins(() => myFilter([1, 2, 3, 4], (x) => x % 2 === 0)), [2, 4]);
  });
  test('dùng truthy/falsy', () => {
    assert.deepEqual(banBuiltins(() => myFilter([0, 1, '', 'a', null, {}], (x) => x)), [1, 'a', {}]);
  });
  test('truyền index vào predicate', () => {
    assert.deepEqual(banBuiltins(() => myFilter(['a', 'b', 'c', 'd'], (_, i) => i >= 2)), ['c', 'd']);
  });
  test('predicate không phải function -> TypeError', () => {
    assert.throws(() => myFilter([1], null), TypeError);
  });
});

describe('myReduce', () => {
  test('tính tổng có initialValue', () => {
    assert.equal(banBuiltins(() => myReduce([1, 2, 3], (acc, x) => acc + x, 10)), 16);
  });
  test('tính tổng không có initialValue', () => {
    assert.equal(banBuiltins(() => myReduce([1, 2, 3], (acc, x) => acc + x)), 6);
  });
  test('không có initialValue thì bắt đầu từ index 1', () => {
    const indexes = [];
    banBuiltins(() => myReduce(['a', 'b', 'c'], (acc, x, i) => { indexes.push(i); return acc + x; }));
    assert.deepEqual(indexes, [1, 2]);
  });
  test('initialValue là undefined vẫn được tính là CÓ truyền', () => {
    const accs = [];
    banBuiltins(() => myReduce([1, 2], (acc, x) => { accs.push(acc); return x; }, undefined));
    assert.deepEqual(accs, [undefined, 1]);
  });
  test('initialValue = 0 hoặc chuỗi rỗng', () => {
    assert.equal(banBuiltins(() => myReduce([], (a, x) => a + x, 0)), 0);
    assert.equal(banBuiltins(() => myReduce(['a', 'b'], (a, x) => a + x, '')), 'ab');
  });
  test('mảng rỗng không có initialValue -> TypeError', () => {
    assert.throws(() => banBuiltins(() => myReduce([], (a, x) => a + x)), TypeError);
  });
  test('mảng 1 phần tử không initialValue -> trả về phần tử đó, không gọi reducer', () => {
    let called = false;
    assert.equal(banBuiltins(() => myReduce([42], () => { called = true; })), 42);
    assert.equal(called, false);
  });
  test('reduce thành object', () => {
    const result = banBuiltins(() =>
      myReduce(['a', 'b', 'a'], (acc, x) => { acc[x] = (acc[x] ?? 0) + 1; return acc; }, {}));
    assert.deepEqual(result, { a: 2, b: 1 });
  });
  test('reducer không phải function -> TypeError', () => {
    assert.throws(() => myReduce([1], undefined, 0), TypeError);
  });
});
