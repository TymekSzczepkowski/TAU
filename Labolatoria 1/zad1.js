function Sth(arr) {
  if (typeof arr === "string" || typeof arr === "number")
    throw "Invalid type of arr";
  average = (arr) => arr.reduce((p, c) => p + c, 0) / arr.length;
  result = average(arr);
  return result;
}

try {
  Sth("Test");
} catch (e) {
  console.log(e);
}

module.exports = Sth;
