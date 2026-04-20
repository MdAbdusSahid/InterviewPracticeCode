const charCount=(str,char)=>{
    const loweCaseStr=str.toLowerCase()
    const loweCaseChar=char.toLowerCase()
    let count=0;
    for(let i=0;i<str.length;i++){
        if(loweCaseStr[i]===loweCaseChar)
            count++
    }
    return count
}
console.log(charCount('HelloIAmoooooo','o'));




const charCount = (str, val) => {
  const freq = {};
  for (let i of str) freq[i] = (freq[i] || 0) + 1;
  return freq[val] || 0;
};
console.log(charCount("HelloIAmoooooo", "o"));
