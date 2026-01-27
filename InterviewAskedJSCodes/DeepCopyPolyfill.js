const deepCopy = (obj, seen = new WeakMap()) => {
  if (obj === null || typeof obj !== "object") return obj;
  if (seen.has(obj)) return seen.get(obj);

  let copy = Array.isArray(obj) ? [] : {};
  seen.set(obj, copy);

  for (let key in obj) {
    copy[key] = deepCopy(obj[key], seen);
  }
  return copy;
};
