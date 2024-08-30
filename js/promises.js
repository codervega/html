let promise1 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve("hi my name is Abhishek Shukla");
  },5000)
})
let num1 = prompt("Enter the number1");
let promise2 = new Promise((resolve,reject)=>{
  setTimeout(()=>{
    if(num1 > 10)
    {
      resolve("Is statement true");
    }
    else{
      reject(new Error("the statment is not correct"));
    }
  },2000)
})
// promise2.then((value)=>{
//   console.log(value);
// }).catch((value)=>{
//   console.log(value);
// });


Promise.all([promise1,promise2]).then((resuult)=>{
  console.log(resuult)
}).catch((err)=>{
  console.log(err);
})


Promise.race([promise1,promise2]).then((resuult)=>{
  console.log(resuult)
})

Promise.allSettled([promise1,promise2]).then((resuult)=>{
  console.log(resuult)
}).catch((err)=>console.log(err));