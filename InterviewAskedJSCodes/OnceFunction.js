const once = (fn) => {
  let called = false,
    result;
  return (...args) => {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
};

const init = once(() => {
  console.log("Initialized");
  return 42;
});
init(); // "Initialized"
init(); // nothing
