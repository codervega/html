// let chat = ()=>{
//   console.log("Hello i am chatbot, to help you");
// }
// // setInterval(chat,1000);

// // setTimeout(chat,1000);


// // function programming

// // forEach
let arr = [1,2,3,4,5,6,7];

// // function abhi(n){
// //   console.log(arr[n]);
// // }
// // arr.forEach(abhi);

// // the above code can be written as
// arr.forEach(() =>{
//   console.log('hello i am abhishke shukla');
// } )

// arr.forEach( (number,index)=>
// {
//   arr[index]=(number*2);
// })
// console.log(arr);

// const users =
// [
//   {firstname :'harshit',age :21},
//   {firstname :'mohit', age:23},
//   {firstname :'nitesh',age : 32},
//   {firstname : 'Abhishek',age: 43}
// ]
// users.forEach(function(firstobj){
//   console.log(firstobj.firstname.toUpperCase())
// })

//map methodin js
// map method basically very similar to forEach method but there is a slight difference in 
// map and forEach method in js
//1) the map method actually create a method new array intead of modifying the cold array 
//let's try to execute the array with very simple format

// // const firstname = users.map((obj)=>{
// //   return obj.firstname+'legends';
// //  })
// //  firstname.forEach((element)=>{
// //   console.log(element);
// //  })

//  //task to be  perfromed with map method
//  // you are given an array of object representing student each student has a name ,score and age, The Score property is an array of number representing the student's marks in different subject.
//  //Your task is to create a new array that constains object with the following properties

// //  1 'name': The name of the Student 
// // 2 ' averageScore' : The average Score of the student
// // 3 'isadult' : A boolean indicating wheather the student is 18 years old or not


// let student = [
//   {
//     nam : "Abhishek",
//     score : [40,30,13],
//     age : 23
//   },
//   {
//     nam : "tarun",
//     score : [45,37,33],
//     age : 21
//   },
//   {
//     nam : "aksath",
//     score : [25,47,51],
//     age : 17
//   }
// ]
// function average(array){
//   let l = array.length;
//   let avg = 0;
//   array.forEach((element)=>{
//     avg += element;
//   })
//   return avg/l;
// }
// function adult(age)
// {
//  if(age>18 )
//  {
//   return true;
//  }
//  else{
//   return false;
//  }
// }
// let array2 = student.map((obj)=>{
//   return {
//   naame : obj.nam,
//   average : average(obj.score),
//   isadult :  adult(obj.age)
//   }
// })
// console.log(array2);

// // reduce method i js
// // reduce method in js basically a method which will have three parameter the "accumulator","currentvale","initial value" as a paramter 
// // let's try to understand with execution
// console.log(arr.reduce((acc,currentvale,initial=1)=>{
// return acc+currentvale;
// }))

// // task on reduce method
// // you are given an array of object representing trasaction, each transaction has a type (either "credit " or "debit" and amount) your task is to calculate the total balance after processing all the transaction

// // 1) 'credit' transaction increse the balance 
// // 2) 'debit' transaction decrease the balance 

// const transactions = [
//   { type: 'credit', amount: 100 },
//   { type: 'debit', amount: 50 },
//   { type: 'credit', amount: 200 },
//   { type: 'debit', amount: 30 },
// ];
// console.log(transactions.reduce((sum,currentvale)=>{
  
//   if(currentvale.type == 'credit')
//   {
//     return sum + currentvale.amount;
//   }
//   else{
//     return sum - currentvale.amount
//   }
// },0))

// //You have an array of products in a shopping cart. Each product is an object with properties name, price, and quantity. Your task is to calculate the total cost of all the items in the cart.
// const cart = [
//   { name: 'Laptop', price: 1000, quantity: 2 },
//   { name: 'Phone', price: 500, quantity: 3 },
//   { name: 'Headphones', price: 100, quantity: 4 }
// ];
// console.log(cart.reduce((sum,crr)=>{
//   return sum + ((crr.price)*(crr.quantity));
// },0))

//You have an array of strings representing a list of words. Your task is to create an object that counts the occurrences of each word in the array.
// var count = 0;
// const words = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

// const arraycount = new Array() ;
// arraycount.push( words.reduce((items)=>{
//   items.forEach(()=>{
//      count += 1;
//   })
// }))
// console.log(arraycount);

// sort method
// console.log(words.sort());
// let Abhi = [1,2,4,5,6,3,54,7,2,5,9,3,-1,7,9]
// console.log(Abhi.sort((a,b)=>{
//   return a - b;
// }))

const products = [
  { name: 'Laptop', price: 1000, rating: 4.5 },
  { name: 'Phone', price: 500, rating: 4.7 },
  { name: 'Tablet', price: 300, rating: 4.3 },
  { name: 'Monitor', price: 200, rating: 4.6 }
];

// console.log(products.sort((a,b)=>{
//   a.price - b.price;
// }))

// find method
// console.log(products.find((product)=>{
//   return product.price < 700;
// }))

//every method in js is used to give true when all the element in js is true 
console.log(products.every((item)=>{
  return item.price > 100;
}))