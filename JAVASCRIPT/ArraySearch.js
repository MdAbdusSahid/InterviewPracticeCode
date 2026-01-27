const array=[1,2,3,4,5,6,5,4,3,2,3,4,5,6,7,8,9,7]
const search=(arr,val)=>{
    const index=[]
    for(let i=0;i<arr.length;i++){
        if(arr[i]===val)
            index.push(i)
    }
    return index.length?index:"Item not Found"
}
console.log(search(array,2))
