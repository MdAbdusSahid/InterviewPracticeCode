const str = "abdvsfFGDYHH677566$%$^$";

const divideString = (str) => {
  return str.split("").reduce(
    (acc, char) => {
      if (/[A-Z]/.test(char)) {
        acc.capsAlphabet += char;
        acc.capsAlphabetCount++;
      } else if (/[a-z]/.test(char)) {
        acc.smallAlphabet += char;
        acc.smallAlphabetCount++;
      } else if (/[0-9]/.test(char)) {
        acc.numbers += char;
        acc.numberCount++;
      } else {
        acc.symbols += char;
        acc.symbolCount++;
      }
      return acc;
    },
    {
      capsAlphabet: "",
      smallAlphabet: "",
      numbers: "",
      symbols: "",
      capsAlphabetCount: 0,
      smallAlphabetCount: 0,
      numberCount: 0,
      symbolCount: 0,
    }
  );
};

console.log(divideString(str));
