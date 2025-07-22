const deBouncing=(fn,delay)=>{
let timeOut
return (...args)=>{
    clearTimeout(timeOut)
    timeOut=setTimeout(()=>{
        fn(...args)
    },delay)
}
}
const search=(query)=>{
    console.log(`Searching for `,query);
    
}
const searchWithDebounce=deBouncing(search,1000)
searchWithDebounce('The');
searchWithDebounce('The L');
searchWithDebounce('The Lo');
searchWithDebounce('The Lor');
searchWithDebounce('The Lord');
searchWithDebounce('The Lord o');
searchWithDebounce('The Lord of');
searchWithDebounce('The Lord of t');
searchWithDebounce('The Lord of the');
searchWithDebounce('The Lord of the R');
searchWithDebounce('The Lord of the Ri');
searchWithDebounce('The Lord of the Rin');
searchWithDebounce('The Lord of the Ring');
searchWithDebounce('The Lord of the Rings');