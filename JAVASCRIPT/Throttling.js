const throttle = (func, limit) => {
  let lastRunTime = 0;
  let timeout;

  return (...args) => {
    const now = Date.now();

    if (now - lastRunTime >= limit) {
      func(...args);
      lastRunTime = now;
    } else {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        func(...args);
        lastRunTime = Date.now();
      }, limit - (now - lastRunTime));
    }
  };
};
const logScroll = () => {
  console.log('Scroll event triggered');
};

window.addEventListener('scroll', throttle(logScroll, 200));

