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