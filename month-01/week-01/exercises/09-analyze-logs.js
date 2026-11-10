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

export function analyzeLogs(lines) {
  // TODO
}
