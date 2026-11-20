// Kỹ thuật so sánh 2 thành phần trong JS

export function deepEqual(a, b) {
  // 1. Cùng giá trị/tham chiếu (0 === -0 là true, NaN === NaN là false)
  if (a === b) return true;

  // 2. Khác kiểu thì không bằng
  if (typeof a !== typeof b) return false;

  // 3. null
  if (a === null || b === null) return false;

  // 4. Primitive và function: đã khác nhau ở bước 1 thì không bằng
  if (typeof a !== "object") return false;

  // 5. Date
  if (a instanceof Date || b instanceof Date) {
    return (
      a instanceof Date && b instanceof Date && a.getTime() === b.getTime()
    );
  }

  // 6. Array và Object không bao giờ bằng nhau
  const isArrayA = Array.isArray(a);
  const isArrayB = Array.isArray(b);
  if (isArrayA !== isArrayB) return false;

  // 7. Array
  if (isArrayA) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }

  // 8. Object
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;

  for (const key of keysA) {
    if (!Object.prototype.hasOwnProperty.call(b, key)) return false;
    if (!deepEqual(a[key], b[key])) return false;
  }
  return true;
}
