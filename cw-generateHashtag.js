function generateHashtag(str) {
  str = str.trim();
  if (str.length === 0) {
    return false;
  }
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === " " && str[i + 1] === " ") {
      continue;
    }
    if (str[i + 1] && str[i] === " " && str[i + 1] !== " ") {
      newStr += "";
    }
    newStr += str[i];
  }
  if (newStr.length >= 140) {
    return false;
  }
  let array = newStr.split(" ");
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].slice(1);
  }
  return `#${array.join("")}`;
}

console.log(
  generateHashtag(
    "code                                                                                                                                            wars"
  )
); // #CodeWars
