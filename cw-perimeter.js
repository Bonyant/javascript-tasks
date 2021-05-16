// Perimeter of squares in a rectangle

function perimeter(n) {
  if (n < 1) {
    return 4;
  }
  let arr = [1,1]; 
  for (let i = 2; i <= n; i++) { 
    arr[i] = arr[i-1] + arr[i-2]; 
  } 
  return 4 * arr.reduce((a,b) => { return a+b }); 
}