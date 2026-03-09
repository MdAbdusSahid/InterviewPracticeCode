  const reverseStringChar = (str) => {
    const newStr = str
      .split(" ")
      .map((word) => word.split("").reverse().join(""))
      .join(" ");
    return newStr;
  };
  console.log(reverseStringChar("Hello World"));
  const reverseStringChar = (str) => {
    str = str.split("");
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
      [str[left], str[right]] = [str[right], str[left]];
      left++;
      right--;
    }
    return str.join("");
  };
