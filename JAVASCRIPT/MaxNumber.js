const arr=[1,6,3,4,5,34,99,1001,34,23,65,7,5,6]
let max=arr[0]
for(let i=1;i<arr.length;i++){
    if(arr[i]>max)
        max=arr[i]
}
console.log(max);