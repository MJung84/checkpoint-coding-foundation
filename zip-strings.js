function zipStrings(strA, strB) {
  // split -> Array of strings -> push("") -> newArray of strings -> join("")

  let splitA = strA.split("");
  let splitB = strB.split("");
  let zipString = [];

  if (splitA.length >= splitB.length) {
    for (let i = 0; i < splitA.length; i++) {
      zipString.push(splitA[i]);
      zipString.push(splitB[i]);
    }
  } else {
    for (let i = 0; i < splitB.length; i++) {
      zipString.push(splitA[i]);
      zipString.push(splitB[i]);
    }
  }
  console.log(zipString.join(""));
  return zipString.join("");
}
