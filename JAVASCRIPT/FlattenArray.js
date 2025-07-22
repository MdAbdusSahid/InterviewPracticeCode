const emp = [
  1,
  [2, 3],
  [4, [5, 6]],
  7,
  [8, [9, [10]]],
  "John",
  ["Doe", ["HR", ["Manager"]]]
];
const flattenArray=(arr)=>{
    const result=[]
    arr.forEach(item=>{
        if(Array.isArray(item))
            result.push(...flattenArray(item))
        else
            result.push(item)
    })
    return result
}
console.log(flattenArray(emp));
