const computeAmount = () => {
  let amount = 0;
  return {
    lacs(n) {
      amount += n * 100000;
      return this;
    },
    crore(n) {
      amount += n * 10000000;
      return this;
    },
    valueOf() {
      return amount;
    },
  };
};

console.log(computeAmount().lacs(10).crore(2).valueOf()); // 21000000
