const infiniteCurrying=(a)=>{
    return(b)=>{
        if(b!==undefined)
            return infiniteCurrying(a+b)
        return a
    }
}
console.log(infiniteCurrying(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)());