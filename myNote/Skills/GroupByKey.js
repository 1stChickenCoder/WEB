// Kỹ thuật nhóm các phần tử theo key. Key có thể là một function hoặc một string.  
// Output trả về object, mỗi key là một mảng các phần tử theo đúng thứ tự xuất hiện.

function groupBy(arr, keyOrFn) {
  if (!Array.isArray(arr)) {
    throw new TypeError("arr must be an array");
  }
  const result = {};
  for (let i in arr) {
    const item = arr[i];
    let key;
    if (typeof keyOrFn === "function") {
      key = keyOrFn(item);
    } else if (typeof keyOrFn === "string") {
      key = item[keyOrFn];
    } else {
      throw new TypeError("keyOrFn must be a function or a string");
    }
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }
  return result;
}