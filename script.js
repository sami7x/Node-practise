/*
//creating a promis
let myPromise = new Promise((resolve, reject)=>
{
setTimeout(()=>
{
    resolve("Promise Completed");
}, 3000);
});


//promise action
myPromise 
.then((successMessage)=>
{
    //async code here
    console.log("Promise Completed :)");
})

.catch((errorMessage)=>
{
    console.log({errorMessage});
    console.log("Couldnt fullfill promise");
});
*/



//chaining promise
function promise1(){
   return new Promise((resolve)=>{
     setTimeout(()=>
    {
    resolve("First promise to buy car. ");
    },3000);
    });
}

function promise2(value)
{
    return new Promise((resolve)=>
    {
        setTimeout(()=>
        {
        resolve(`${value} :) Take a worldtour.`);
         });
    });
}


//promise fullfilling actions
promise1()
.then((result) =>promise2(result))
.then((finalResult)=> {
    console.log(finalResult);
})
.catch((error)=>{
console.log("Problem Fullfilling promise",error);
});