// let n = 10;
// let i = 0;
// while(i<n)
// {
// let j = 0;
//  while(j<n)
//  {
//   console.log('*');
//   j++;
//  }
//  i++;
// }
// let even = 0;
// let odd = 0;
// for(let i = 0 ;i<=100 ;i++)
// if(i%2 ==0)
// {
//   even= even + i;
// }
// else{
//   odd = odd + i;
// }
// console.log(even)
// console.log(odd);

// // Develop a small script which generate array of 5 random numbers
// let Array1 = new Array();
// for(let i =0 ;i<5 ;i++)
// {
  
//   Array1.push(Math.ceil(Math.random()*10));
// }
// console.log(Array1);

// // Develop a small script which generate array of 5 random numbers and the numbers must be unique
// const array2 = new Array();

// while(array2.length < 5)
// {
//   let num = Math.ceil(Math.random()*10);
  
  
//     if(!array2.includes(num))
//     {
//       array2.push(num);
//     }
// }
// console.log(array2);

// // Develop a small script which generate a six characters random id:
// let k = '';
// let ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
// for(let i=0 ; i<=5 ;i++)
// {
//   let id = Math.ceil(Math.random()*ch.length);
//  k += ch.charAt(id);

// }
// console.log(k);

// // Develop a small script which generate any number of characters random id:

//   // fe3jo1gl124g
//   // xkqci4utda1lmbelpkm03rba

// let num1 = Math.ceil(Math.random*100)
// let pk = '';
// for(let i = 0;i<num1;i++)
// {
//   let id = Math.ceil(Math.random()*ch.length);
//   pk+= ch.charAt(id);
// }
// console.log(pk);

//developing an hexagonal code 
// let cha = '123456789ABCDEF';
// let mp ='';
// let le = prompt("Enter the number");
// for( let i =0 ;i<le;i++)
// {
//   let kap = Math.ceil(Math.random()*cha.length);
//   {
//      mp += cha.charAt(kap);
//   }
// }
// console.log(mp);

// Using the above countries array, create the following new array.
const newcountries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// import countries from  './array.js';
// const countrybock = Array();
// for(let i = 1 ; i <=counteris.length;i++ )
// {
//   if(newcountries.includes(countries[i]))
//   {
//     countrybock.push(counteris[i]);
//   }
// }

// Using the above countries array, create the following new array.
// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// const each = Array();
let n5 = newcountries.length;
// for(i=0;i<n5;i++)
// {
//   let element = newcountries[i].length;
//   each.push(element);
// }
// console.log(each);

// Use the countries array to create the following array of arrays:

//   // [
//   ['Albania', 'ALB', 7],
//   ['Bolivia', 'BOL', 7],
//   ['Canada', 'CAN', 6],
//   ['Denmark', 'DEN', 7],
//   ['Ethiopia', 'ETH', 8],
//   ['Finland', 'FIN', 7],
//   ['Germany', 'GER', 7],
//   ['Hungary', 'HUN', 7],
//   ['Ireland', 'IRE', 7],
//   ['Iceland', 'ICE', 7],
//   ['Japan', 'JAP', 5],
//   ['Kenya', 'KEN', 5]
// ]
let outarray = new Array();

// for(let i=0 ;i<n5 ;i++)
// {
//   const innerarray = Array(0);
//   let name = newcountries[i];
//   let firstthree = '';
//   for(let j=0 ;j<3;j++)
//   {
//      firstthree += name[j];
//   }
//   let len = newcountries[i].length;

//   innerarray.push(name);
//   innerarray.push(firstthree);
//   innerarray.push(len);

//   outarray.push(innerarray);
// }
// console.log(outarray);

// In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

// ['Finland','Ireland', 'Iceland';
let aa = new Array();
for(let i=0;i<n5;i++)
{
  if(newcountries[i].match(/land/gi))
  {
    outarray.push(newcountries[i]);
  }
  else
  {
    aa.push(newcountries[i]);
  }
}
console.log('the countries not containing land',aa);
console.log(outarray);

// In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

// ['Albania', 'Bolivia','Ethiopia']
let aa2 = new Array();
for(let i=0 ;i<n5;i++)
{
  if(newcountries[i].endsWith('IA'))
  {
    aa2.push(newcountries[i]);
  }
}
console.log(aa2);