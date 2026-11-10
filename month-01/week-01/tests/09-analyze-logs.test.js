import { test } from 'node:test';
import assert from 'node:assert/strict';
import { analyzeLogs } from '../exercises/09-analyze-logs.js';

const sample = [
  '2026-11-10T08:00:01Z GET /api/users?page=2 200 120ms',
  '2026-11-10T08:00:02Z GET /api/users 200 80ms',
  '2026-11-10T08:00:03Z POST /api/login 401 30ms',
  '2026-11-10T08:00:04Z GET /api/products 500 900ms',
  'dòng rác không đúng định dạng',
  '2026-11-10T08:00:05Z GET /api/products   200   100ms',
  '2026-11-10T08:00:06Z FETCH /api/users 200 10ms',
  '2026-11-10T08:00:07Z GET /api/orders 200 abcms',
  '2026-11-10T08:00:08Z DELETE /api/users/7 204 50ms',
  '2026-11-10T08:00:09Z GET /api/users 503 900ms',
];

test('đếm total và invalid', () => {
  const r = analyzeLogs(sample);
  assert.equal(r.total, 7);
  assert.equal(r.invalid, 3);
});
test('byStatus', () => {
  assert.deepEqual(analyzeLogs(sample).byStatus, { 200: 3, 204: 1, 401: 1, 500: 1, 503: 1 });
});
test('topPaths: bỏ query string, sắp xếp count giảm dần rồi path tăng dần, tối đa 3', () => {
  assert.deepEqual(analyzeLogs(sample).topPaths, [
    { path: '/api/users', count: 3 },
    { path: '/api/products', count: 2 },
    { path: '/api/login', count: 1 },
  ]);
});
test('avgDurationMs làm tròn', () => {
  // (120 + 80 + 30 + 900 + 100 + 50 + 900) / 7 = 311.43
  assert.equal(analyzeLogs(sample).avgDurationMs, 311);
});
test('errorRatePercent làm tròn 1 chữ số', () => {
  // 2/7 = 28.571...%
  assert.equal(analyzeLogs(sample).errorRatePercent, 28.6);
});
test('slowest: hòa thì lấy dòng xuất hiện trước', () => {
  assert.deepEqual(analyzeLogs(sample).slowest, { path: '/api/products', durationMs: 900 });
});
test('mảng rỗng', () => {
  assert.deepEqual(analyzeLogs([]), {
    total: 0, invalid: 0, byStatus: {}, topPaths: [], avgDurationMs: 0, errorRatePercent: 0, slowest: null,
  });
});
test('status ngoài khoảng 100–599 hoặc không phải số nguyên là không hợp lệ', () => {
  const r = analyzeLogs([
    't GET /a 99 1ms',
    't GET /a 600 1ms',
    't GET /a 2.5 1ms',
    't GET /a 200 1ms',
  ]);
  assert.equal(r.total, 1);
  assert.equal(r.invalid, 3);
});
test('duration phải là số nguyên không âm + "ms"', () => {
  const r = analyzeLogs([
    't GET /a 200 10',
    't GET /a 200 -5ms',
    't GET /a 200 1.5ms',
    't GET /a 200 0ms',
  ]);
  assert.equal(r.total, 1);
  assert.equal(r.invalid, 3);
});
test('topPaths hòa count thì sắp theo path', () => {
  const r = analyzeLogs(['t GET /c 200 1ms', 't GET /a 200 1ms', 't GET /b 200 1ms', 't GET /d 200 1ms']);
  assert.deepEqual(r.topPaths, [
    { path: '/a', count: 1 }, { path: '/b', count: 1 }, { path: '/c', count: 1 },
  ]);
});
