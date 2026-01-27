const createCounter = (initial = 0) => {
  let count = initial;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = initial),
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.decrement()); // 5
console.log(counter.reset()); // 5
