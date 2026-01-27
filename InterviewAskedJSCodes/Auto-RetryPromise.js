const fetchWithAutoRetry = async (fetcher, count) => {
  for (let i = 0; i < count; i++) {
    try {
      return await fetcher();
    } catch (err) {
      if (i === count - 1) throw err;
    }
  }
};
