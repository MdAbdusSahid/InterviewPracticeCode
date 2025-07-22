const reverseStr=(str)=>{
    const newStr= str.split("").reverse().join("")
    return str===newStr
}
console.log(reverseStr("madam"));