console.log("Start");

setTimeout(() => {
    console.log("Set timeout called");
}, 5000);

console.log("End");

//This will block our main thread of call stack

let startTime = new Date().getTime();
let endTime = startTime;
while(endTime < startTime + 10000){
    endTime = new Date().getTime();
}

console.log("While expires");