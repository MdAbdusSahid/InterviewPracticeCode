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
return arr.reduce((acc,item)=>{
    return acc.concat(Array.isArray(item)?flattenArray(item):item)
},[])
}
console.log(flattenArray(emp));
