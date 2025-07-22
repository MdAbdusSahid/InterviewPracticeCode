let emp = [{
    eid: "E102",
    ename: "Jack",
    eaddress: "New.York@gmail.com",
    salary: 50000,
    address:{
        country:'USA'
    }
}]

const makeDeepCopy=(arr)=>{
    if(typeof arr !== 'object' || typeof arr=== null)
        return arr
    var copiedVal=Array.isArray(arr)?[]:{}
    Object.entries(arr).forEach(([key,value])=>{
        copiedVal[key]=makeDeepCopy(value)
})
return copiedVal
}
const newEmpList=makeDeepCopy(emp)
console.log(newEmp[0].address.country="India");
console.log(newEmp);
console.log(emp);

