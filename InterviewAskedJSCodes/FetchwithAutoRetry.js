const fetchWithAutoRetry = async (fetcher, maxRetries = 3) => {
  let attempt = 0;
  while (attempt < maxRetries) {
    try {
      return await fetcher();
    } catch (err) {
      attempt++;
      if (attempt >= maxRetries) throw err;
    }
  }
};
