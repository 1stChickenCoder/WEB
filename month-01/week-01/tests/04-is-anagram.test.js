import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isAnagram } from '../exercises/04-is-anagram.js';

test('anagram cơ bản', () => {
  assert.equal(isAnagram('listen', 'silent'), true);
  assert.equal(isAnagram('rat', 'tar'), true);
});
test('không phải anagram', () => {
  assert.equal(isAnagram('rat', 'car'), false);
});
test('cùng tập ký tự nhưng khác số lần', () => {
  assert.equal(isAnagram('aab', 'abb'), false);
});
test('khác độ dài', () => {
  assert.equal(isAnagram('abc', 'abcc'), false);
});
test('không phân biệt hoa thường', () => {
  assert.equal(isAnagram('Listen', 'SILENT'), true);
});
test('bỏ qua khoảng trắng', () => {
  assert.equal(isAnagram('Dormitory', 'dirty room'), true);
  assert.equal(isAnagram('a b\tc\n', 'cba'), true);
});
test('dấu câu và số được tính', () => {
  assert.equal(isAnagram('a!', 'a'), false);
  assert.equal(isAnagram('12a', 'a21'), true);
});
test('tiếng Việt có dấu', () => {
  assert.equal(isAnagram('Hà Nội', 'nội hà'), true);
  assert.equal(isAnagram('ha', 'hà'), false);
});
test('chuỗi rỗng', () => {
  assert.equal(isAnagram('', ''), true);
  assert.equal(isAnagram('   ', ''), true);
});
