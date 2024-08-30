// Define a callback function before you use it in forEach, map, filter or reduce.
// let number = [1,2,3,4,5,6,7];

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];
// let kk = countries.map((element)=>{
//   return element.length;
// })

// kk.forEach((eke)=>{
//   console.log(eke)
// });


const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];
// names.forEach((nam)=>console.log(nam));

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// numbers.forEach((item)=>console.log(item));


// Use map to create a new array by changing each number to square in the numbers array
// let square = number.map((num)=>{
//   return num * num;
// })
// console.log(square);

// Use map to change to each name to uppercase in the names array
// let newname = names.map((elem)=>{
//   return elem.toUpperCase();
// })
// newname.forEach((ele)=>{
//   console.log(ele);
// })
//Use map to map the products array to its corresponding price
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]
// let abhi=products.map((object)=>{
//   return {
//     [object.product] : object.price
//   };
// })
// abhi.forEach((ele)=>{
//   console.log(ele)
// });
// let k =countries.filter((ele)=>{
//   return ele.includes('land');
// })
// console.log(k);

// Use filter to filter out countries having six character.
// let Abhi = countries.filter((ele)=>{
//   return ele.length>=6;
// })
// console.log(Abhi);

//Use filter to filter out country start with 'E';
// let Abhi = countries.filter((ele)=>{
//   return ele.startsWith('I');
// })
// console.log(Abhi);
// Use filter to filter out only prices with values.
// let Abhi = products.filter((obj)=>{
//   return typeof obj.price === 'number' 
//   && obj.price != ''
// })
// console.log(Abhi);

// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

// let array = [1,2,'Abhishke','kk',true];

// function getStringLists(arr){
//   let Abhi = arr.filter((ele)=>{
//     return typeof ele === 'string';
//   })
//   return Abhi;
// }
// var arrp = getStringLists(array);
// console.log(arrp);


// Use reduce to sum all the numbers in the numbers array.
// const Abhi = [1,2,3,4,5,6,7];
// console.log(Abhi.reduce((accumu,currentvalue)=>{
//   return accumu + currentvalue;
// },100))

// //Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
// console.log(countries.reduce((accumulator,currentvale)=>{
//   return accumulator +', '+ currentvale;
// }))

// Use some to check if some names' length greater than seven in names array
// console.log(names.some((ele)=>{
//   return ele.length > 7;
// }))

//Use every to check if all the countries contain the word land
console.log(countries.every((ele)=>{
  return ele.includes('land');
}))

// Explain the difference between find and findIndex
// Use find to find the first country containing only six letters in the countries array
console.log(countries.find((ele)=>{
  return ele.length === 6;
}))

// level 2
// Find the total price of products by chaining two or more array iterators
console.log(products.filter(()=>{check if the Object.price is number}).reduce(()=>{calculate the sum}))