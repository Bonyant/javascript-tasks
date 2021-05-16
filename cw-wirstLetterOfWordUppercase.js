function titleCase(str) {
  let arr = str.split(' ');
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i][0].toUpperCase());
    for (let j = 0; j < arr[i].length; j++) {
      if (typeof (arr[i][j + 1]) !== "undefined") {
        newArr.push(arr[i][j + 1].toLowerCase());
      }
    }
  }
  for (let s = 0; s < newArr.length; s++) {
    if (typeof (arr[s]) !== "undefined") {
      if (s !== 0 && newArr[s + 1] === newArr[s + 1].toUpperCase()) {

      }
    }
  }
  let newStr = newArr.join("");
  let string = newStr.replace(/([a-z])([A-Z])/g, '$1 $2');
  string = string.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');
  return console.log(string);
}

titleCase("sHoRt AnD sToUt");