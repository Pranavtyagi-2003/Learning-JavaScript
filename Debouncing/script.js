let timer;
var debounceData;

const debounce = (fn,delay) =>{
    if(timer){
        clearTimeout(timer)
    }
    timer = setTimeout(fn,delay)
}

const getData = (val) =>{
    debounceData = val
    debounce(setData,1000)
}

const setData = ()=>{
    console.log(debounceData)
}
