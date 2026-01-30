function reverseString(str) {
  const ch = str.split(""); // convert string to array
  let start = 0, end = ch.length - 1;

  while (start < end) {
    const temp = ch[start];
    ch[start] = ch[end];
    ch[end] = temp;
    start++;
    end--;
  }

  return ch.join(""); // convert back to string
}

// Driver
console.log(reverseString("Hello World")); // "dlroW olleH"


function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("Hello World"));


function reverseString(str) {
  return str.split("").reduce((acc, ch) => ch + acc, "");
}

console.log(reverseString("Hello World"));


function reverseString(str) {
  const arr = [];
  for (let ch of str) {
    arr.unshift(ch);
  }
  return arr.join("");
}

console.log(reverseString("Hello World"));


function reverseString(str) {
  if (str === "") return "";
  return reverseString(str.slice(1)) + str[0];
}

console.log(reverseString("Hello World"));


function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Hello World"));



function reverseString(str) {
  const stack = [];
  for (let ch of str) stack.push(ch);

  let reversed = "";
  while (stack.length) {
    reversed += stack.pop();
  }

  return reversed;
}

console.log(reverseString("Hello World"));


