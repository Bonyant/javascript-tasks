function myReplace(str, before, after) {
  let arr = str.split(" ");
  let check = before.toLowerCase();
  let index = arr.indexOf(before);
  if (index > 0) {
    if (before[0] === before[0].toUpperCase()) {
      after = after[0].toUpperCase() + after.slice(1);
      arr[index] = after;
    } else if (before[0] !== before[0].toUpperCase()) {
      after = after[0].toLowerCase() + after.slice(1);
      arr[index] = after;
    }
  }
  let result = arr.join(" ");
  return result;
}

myReplace("Let us get back to more Coding", "Coding", "algorithms");