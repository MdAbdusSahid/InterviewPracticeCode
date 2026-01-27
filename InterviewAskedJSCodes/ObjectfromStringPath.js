const pathToObject = (str) => {
  const [path, value] = str.split("=");
  const keys = path.split(".");
  let obj = {},
    current = obj;

  keys.forEach((key, i) => {
    if (i === keys.length - 1) current[key] = Number(value);
    else current = current[key] = {};
  });
  return obj;
};

console.log(pathToObject("a.b.c=10")); // { a: { b: { c: 10 }}}
