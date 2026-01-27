const flatten = (obj, prefix = "", res = {}) => {
  for (let key in obj) {
    let newKey = prefix ? `${prefix}.${key}` : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      flatten(obj[key], newKey, res);
    } else {
      res[newKey] = obj[key];
    }
  }
  return res;
};

console.log(flatten({ a: { b: { c: 1 } } })); // { "a.b.c": 1 }
