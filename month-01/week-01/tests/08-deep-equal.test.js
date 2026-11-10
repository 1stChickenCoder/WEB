import { test } from 'node:test';
import assert from 'node:assert/strict';
import { deepEqual } from '../exercises/08-deep-equal.js';

test('primitive', () => {
  assert.equal(deepEqual(1, 1), true);
  assert.equal(deepEqual('a', 'a'), true);
  assert.equal(deepEqual(1, '1'), false);
  assert.equal(deepEqual(true, 1), false);
});
test('NaN và 0/-0', () => {
  assert.equal(deepEqual(NaN, NaN), true);
  assert.equal(deepEqual(0, -0), true);
  assert.equal(deepEqual(NaN, 0), false);
});
test('null và undefined', () => {
  assert.equal(deepEqual(null, null), true);
  assert.equal(deepEqual(undefined, undefined), true);
  assert.equal(deepEqual(null, undefined), false);
  assert.equal(deepEqual(null, {}), false);
  assert.equal(deepEqual({}, null), false);
  assert.equal(deepEqual(null, 0), false);
});
test('mảng', () => {
  assert.equal(deepEqual([1, 2, 3], [1, 2, 3]), true);
  assert.equal(deepEqual([1, 2, 3], [1, 3, 2]), false);
  assert.equal(deepEqual([1, 2], [1, 2, 3]), false);
  assert.equal(deepEqual([], []), true);
  assert.equal(deepEqual([[1, [2]]], [[1, [2]]]), true);
});
test('object', () => {
  assert.equal(deepEqual({ a: 1, b: 2 }, { b: 2, a: 1 }), true);
  assert.equal(deepEqual({ a: 1 }, { a: 2 }), false);
  assert.equal(deepEqual({ a: 1 }, { a: 1, b: 2 }), false);
  assert.equal(deepEqual({ a: 1, b: 2 }, { a: 1 }), false);
  assert.equal(deepEqual({ a: undefined }, {}), false);
  assert.equal(deepEqual({ a: undefined }, { b: undefined }), false);
});
test('lồng nhau', () => {
  assert.equal(deepEqual({ a: [1, { b: 2 }] }, { a: [1, { b: 2 }] }), true);
  assert.equal(deepEqual({ a: [1, { b: 2 }] }, { a: [1, { b: 3 }] }), false);
});
test('mảng khác object', () => {
  assert.equal(deepEqual([], {}), false);
  assert.equal(deepEqual({}, []), false);
  assert.equal(deepEqual([1, 2], { 0: 1, 1: 2, length: 2 }), false);
});
test('Date', () => {
  assert.equal(deepEqual(new Date('2026-01-01'), new Date('2026-01-01')), true);
  assert.equal(deepEqual(new Date('2026-01-01'), new Date('2026-01-02')), false);
  assert.equal(deepEqual(new Date(0), {}), false);
});
test('function', () => {
  const f = () => 1;
  assert.equal(deepEqual(f, f), true);
  assert.equal(deepEqual(() => 1, () => 1), false);
  assert.equal(deepEqual({ f }, { f }), true);
});
