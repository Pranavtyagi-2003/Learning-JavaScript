let count = 0;
let makeApiCall

const throttling = (fn,delay) =>{
    if(makeApiCall)return
    makeApiCall = true;
    setTimeout(()=>{
        fn()
        makeApiCall = false
    },delay)
}

const callApi = () =>{
   throttling(getData,2000)
}

const getData = () =>{
    console.log(" Api Called " + count++);
}