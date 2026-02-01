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
    for(let key in arr)
        copiedVal[key]=makeDeepCopy(arr[key])
})
return copiedVal
}
const newEmpList=makeDeepCopy(emp)
const deepCopyObj = structuredClone(emp);
console.log(deepCopyObj);
console.log(newEmp[0].address.country="India");
console.log(newEmp);
console.log(emp);

