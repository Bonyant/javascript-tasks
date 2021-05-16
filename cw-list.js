// Format a string of names like 'Bart, Lisa & Maggie'

function list(names) {
  if (names.length === 0) {
    return "";
  }
  if (names.length === 1) {
    return names[0].name;
  }
  if (names.length === 2) {
    return `${names[0].name} & ${names[1].name}`;
  }
  let resultString = "";
  if (names.length > 2) {
    for (let i = 0; i < names.length; i++) {
      if (i < names.length - 1) {
        resultString += `${names[i].name}, `;
      } else {
        let coma = resultString.lastIndexOf(",");
        resultString = `${resultString.slice(0, coma)} & ${names[i].name}`;
      }
    }
  }
  return resultString;
}
