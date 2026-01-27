const str="Dhaikj123akska54haj*$#78"
const chars=[]
const digit=[]
const special=[]
for(let i=0;i<str.length;i++){
    const char=str.charAt(i)
    if((/[a-zA-z]/g).test(char))
        chars.push(char)
    else if(/[0-9]/g.test(char))
        digit.push(char)
    else
        special.push(char)
} 
console.log(chars.join(""));
console.log(digit.join(""));
console.log(special.join(""));
