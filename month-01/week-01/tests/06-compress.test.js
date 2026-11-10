import { test } from 'node:test';
import assert from 'node:assert/strict';
import { compress } from '../exercises/06-compress.js';

test('nén cơ bản', () => {
  assert.equal(compress('aaabccc'), 'a3b1c3');
});
test('số lần có 2 chữ số', () => {
  assert.equal(compress('aaaaaaaaaaaab'), 'a12b1');
});
test('nhóm cuối cùng được tính', () => {
  assert.equal(compress('abbbbb'), 'a1b5');
  assert.equal(compress('aaaa'), 'a4');
});
test('không ngắn hơn -> trả về chuỗi gốc', () => {
  assert.equal(compress('abc'), 'abc');
  assert.equal(compress('aabbcc'), 'aabbcc');
  assert.equal(compress('a'), 'a');
  assert.equal(compress('aa'), 'aa');
});
test('phân biệt hoa thường', () => {
  assert.equal(compress('aaaAAA'), 'a3A3');
});
test('chuỗi rỗng', () => {
  assert.equal(compress(''), '');
});
test('ký tự xuất hiện lại sau khi bị ngắt quãng', () => {
  assert.equal(compress('aaabbbaaa'), 'a3b3a3');
});
