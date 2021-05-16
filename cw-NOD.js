function NOD(arr) {
  let n = arr.length,
    x = Math.abs(arr[0]);
  for (let i = 1; i < n; i++) {
    let y = Math.abs(arr[i]);
    while (x && y) {
      x > y ? (x %= y) : (y %= x);
    }
    x += y;
  }
  return x;
}
// arr - массив целых чисел (например: [57, 0, -45, -18, 90, 447])
