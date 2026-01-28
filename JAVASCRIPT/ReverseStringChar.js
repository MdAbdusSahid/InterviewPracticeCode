  const reverseStringChar = (str) => {
    const newStr = str
      .split(" ")
      .map((word) => word.split("").reverse().join(""))
      .join(" ");
    return newStr;
  };
  console.log(reverseStringChar("Hello World"));
