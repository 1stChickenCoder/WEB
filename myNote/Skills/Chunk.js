// Chia mảng thành các mảng con, mỗi mảng con có tối đa `size` phần tử.

function chunk(arr, size) {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr must be an array');
    }
    if (!Number.isInteger(size) || size <= 0) {
        throw new RangeError('size must be a positive integer');
    }
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}