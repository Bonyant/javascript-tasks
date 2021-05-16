function NOK(arr) {
  let n = arr.length,
    a = Math.abs(arr[0]);
  for (let i = 1; i < n; i++) {
    let b = Math.abs(arr[i]),
      c = a;
    while (a && b) {
      a > b ? (a %= b) : (b %= a);
    }
    a = Math.abs(c * arr[i]) / (a + b);
  }
  return a;
}
// arr - массив целых чисел (например: [-50, 25, -45, -18, 90, 447])
