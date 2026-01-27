const parallelLimit = async (tasks, limit) => {
  let results = [],
    running = 0,
    index = 0;

  return new Promise((resolve) => {
    const runNext = () => {
      if (index === tasks.length && running === 0) resolve(results);
      while (running < limit && index < tasks.length) {
        const i = index++;
        running++;
        tasks[i]()
          .then((res) => {
            results[i] = res;
          })
          .finally(() => {
            running--;
            runNext();
          });
      }
    };
    runNext();
  });
};
