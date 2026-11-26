/**
 * Bài 09 (Mini project): analyzeLogs(lines)
 *
 * Bạn là FE dev được giao làm trang "Thống kê request" cho team. BE gửi về một mảng
 * các dòng log dạng chuỗi. Viết hàm tính thống kê để FE hiển thị.
 *
 * Định dạng một dòng hợp lệ (các trường cách nhau bởi 1 hoặc nhiều khoảng trắng):
 *   <thời gian ISO> <METHOD> <path> <status> <duration>ms
 *   ví dụ: '2026-11-10T08:00:01Z GET /api/users?page=2 200 123ms'
 *
 * Dòng KHÔNG hợp lệ nếu: không đúng 5 trường, METHOD không thuộc
 * GET/POST/PUT/PATCH/DELETE, status không phải số nguyên 100–599, duration không có
 * dạng <số nguyên không âm>ms. Dòng không hợp lệ được ĐẾM vào `invalid` và bỏ qua.
 * (Không cần kiểm tra thời gian có đúng ISO hay không.)
 *
 * Path: bỏ phần query string. '/api/users?page=2' -> '/api/users'.
 *
 * Trả về object:
 * {
 *   total: number,              // số dòng HỢP LỆ
 *   invalid: number,            // số dòng không hợp lệ
 *   byStatus: { [status]: n },  // đếm theo status code, ví dụ { '200': 3, '404': 1 }
 *   topPaths: [{ path, count }],// tối đa 3 path nhiều request nhất,
 *                               // sắp xếp count giảm dần, hòa thì path tăng dần (theo bảng chữ cái)
 *   avgDurationMs: number,      // trung bình duration, làm tròn số nguyên (Math.round). 0 nếu total = 0
 *   errorRatePercent: number,   // % request có status >= 500, làm tròn 1 chữ số thập phân. 0 nếu total = 0
 *   slowest: { path, durationMs } | null // request chậm nhất; hòa thì lấy dòng xuất hiện trước. null nếu total = 0
 * }
 *
 * Gợi ý thiết kế: đừng viết tất cả trong một hàm dài. Tách hàm nhỏ, ví dụ:
 *   parseLine(line) -> object | null
 *   countBy(items, keyFn)
 *   topN(countMap, n)
 * Có thể tái sử dụng groupBy/chunk... bạn đã viết.
 *
 * Độ phức tạp mong đợi: O(n) cho phần thống kê (phần sort top path: O(k log k), k = số path khác nhau).
 */

import { groupBy } from "./03-group-by.js";

const samples = [
  "2026-11-10T08:00:01Z GET /api/users?page=2 200 120ms",
  "2026-11-10T08:00:02Z GET /api/users 200 80ms",
  "2026-11-10T08:00:03Z POST /api/login 401 30ms",
  "2026-11-10T08:00:04Z GET /api/products 500 900ms",
  "dòng rác không đúng định dạng",
  "2026-11-10T08:00:05Z GET /api/products   200   100ms",
  "2026-11-10T08:00:06Z FETCH /api/users 200 10ms",
  "2026-11-10T08:00:07Z GET /api/orders 200 abcms",
  "2026-11-10T08:00:08Z DELETE /api/users/7 204 50ms",
  "2026-11-10T08:00:09Z GET /api/users 503 900ms",
];

// Helpers
const splitComponents = (line) => {
  const parts = line.trim().split(/\s+/);
  return parts.length === 5 ? parts : [];
};

const checkMethod = (method) => {
  const validMethods = ["GET", "POST", "PUT", "PATCH", "DELETE"];
  return validMethods.includes(method);
};

const checkStatus = (status) => {
  if (typeof status === "string" && !/^\d+$/.test(status)) return false;
  const n = Number(status);
  return Number.isInteger(n) && n >= 100 && n <= 599;
};

const stripQuery = (path) => {
  let _path = "";
  _path = path.split("?")?.[0];
  return _path;
};

const checkDuration = (duration) => {
  const ms = duration.slice(-2);
  if (ms !== "ms") return false;

  const value = duration.slice(0, -2);
  if (typeof value === "string" && !/^\d+$/.test(value)) return false;
  const n = Number(value);
  return Number.isInteger(n) && n >= 0;
};

// Main function
export function analyzeLogs(samples) {
  const results = {
    total: 0, // số dòng HỢP LỆ
    invalid: 0, // số dòng không hợp lệ
    byStatus: {}, // đếm theo status code, ví dụ { '200': 3, '404': 1 }
    topPaths: [], // tối đa 3 path nhiều request nhất,
    // sắp xếp count giảm dần, hòa thì path tăng dần (theo bảng chữ cái)
    avgDurationMs: 0, // trung bình duration, làm tròn số nguyên (Math.round). 0 nếu total = 0
    errorRatePercent: 0, // % request có status >= 500, làm tròn 1 chữ số thập phân. 0 nếu total = 0
    slowest: {}, // request chậm nhất; hòa thì lấy dòng xuất hiện trước. null nếu total = 0
  };
  let total = 0;
  let invalid = 0;

  const byStatus = [];
  let countStatus = [];

  const paths = [];
  let countPath = [];

  let totalDuration = 0;
  let errorStatus = 0;

  let [slowestPath, slowestDuration] = ["", 0];

  for (let i = 0; i < samples.length; i++) {
    let [time, method, path, status, duration] = splitComponents(samples[i]);

    if (checkMethod(method) && checkStatus(status) && checkDuration(duration)) {
      total++;

      byStatus.push(status);

      paths.push(stripQuery(path));

      totalDuration += Number(duration.slice(0, -2));

      if (Number(status) >= 500) errorStatus++;

      if (Number(duration.slice(0, -2)) > slowestDuration) {
        slowestDuration = Number(duration.slice(0, -2));
        slowestPath = path;
      }
    } else invalid++;
  }

  countStatus = Object.fromEntries(
    Object.entries(groupBy(byStatus, Math.floor)).map(([key, values]) => [
      key,
      values.length,
    ]),
  );

  countPath = Object.fromEntries(
    Object.entries(groupBy(paths, String))
      .map(([key, values]) => [key, values.length])
      .sort((x, y) => y[1] - x[1] || x[0].localeCompare(y[0]))
      .slice(0, 3),
  );

  results.total = total !== undefined ? total : 0;
  results.invalid = invalid !== undefined ? invalid : 0;
  results.byStatus = countStatus !== undefined ? countStatus : {};
  results.topPaths = Object.entries(countPath).map((path) => ({
    path: path[0],
    count: path[1],
  }));
  results.avgDurationMs = Math.round(totalDuration / total) || 0;
  results.errorRatePercent = Math.round((errorStatus * 1000) / total) / 10 || 0;
  results.slowest =
    total !== 0
      ? {
          path: slowestPath.split("?")[0],
          durationMs: slowestDuration,
        }
      : null;

  return results;
}
