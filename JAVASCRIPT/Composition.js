const addFive=(a)=>{
    return a+5
}
const substractTwo=(a)=>{
    return a-2
}
const multiplyFour=(a)=>{
    return a*4
}
const compose=(...fns)=>{
    return (args)=>{
        return fns.reduceRight((arg,fn)=>fn(arg),args)
    }
}
const evaluate=compose(addFive,substractTwo,multiplyFour)
console.log(evaluate(5));