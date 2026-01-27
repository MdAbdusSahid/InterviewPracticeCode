const sum = (a) => {
  return (b) => {
    if (b !== undefined) return sum(a + b);
    return a;
  };
};

console.log(sum(1)(2)(3)()); // 6
