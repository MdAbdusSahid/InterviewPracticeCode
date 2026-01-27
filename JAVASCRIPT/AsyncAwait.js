const fetchData=()=>{
    return new Promise((res,rej)=>{
        const success=true
        setTimeout(()=>{
            if(success)
            res("Fetch data correctly")
            else
            rej("Unable to fetch data")
        },2000)
    })
}
const getData= async()=>{
    try{
    const result= await fetchData()
    console.log(result)
    }
    catch(error){
        console.log(error)
    }
}
getData()
