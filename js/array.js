// const countries = [
//   'Afghanistan',
//   'Albania',
//   'Algeria',
//   'Andorra',
//   'Angola',
//   'Antigua and Barbuda',
//   'Argentina',
//   'Armenia',
//   'Australia',
//   'Austria',
//   'Azerbaijan',
//   'Bahamas',
//   'Bahrain',
//   'Bangladesh',
//   'Barbados',
//   'Belarus',
//   'Belgium',
//   'Belize',
//   'Benin',
//   'Bhutan',
//   'Bolivia',
//   'Bosnia and Herzegovina',
//   'Botswana',
//   'Brazil',
//   'Brunei',
//   'Bulgaria',
//   'Burkina Faso',
//   'Burundi',
//   'Cambodia',
//   'Cameroon',
//   'Canada',
//   'Cape Verde',
//   'Central African Republic',
//   'Chad',
//   'Chile',
//   'China',
//   'Colombi',
//   'Comoros',
//   'Congo (Brazzaville)',
//   'Congo',
//   'Costa Rica',
//   "Cote d'Ivoire",
//   'Croatia',
//   'Cuba',
//   'Cyprus',
//   'Czech Republic',
//   'Denmark',
//   'Djibouti',
//   'Dominica',
//   'Dominican Republic',
//   'East Timor (Timor Timur)',
//   'Ecuador',
//   'Egypt',
//   'El Salvador',
//   'Equatorial Guinea',
//   'Eritrea',
//   'Estonia',
//   'Ethiopia',
//   'Fiji',
//   'Finland',
//   'France',
//   'Gabon',
//   'Gambia, The',
//   'Georgia',
//   'Germany',
//   'Ghana',
//   'Greece',
//   'Grenada',
//   'Guatemala',
//   'Guinea',
//   'Guinea-Bissau',
//   'Guyana',
//   'Haiti',
//   'Honduras',
//   'Hungary',
//   'Iceland',
//   'India',
//   'Indonesia',
//   'Iran',
//   'Iraq',
//   'Ireland',
//   'Israel',
//   'Italy',
//   'Jamaica',
//   'Japan',
//   'Jordan',
//   'Kazakhstan',
//   'Kenya',
//   'Kiribati',
//   'Korea, North',
//   'Korea, South',
//   'Kuwait',
//   'Kyrgyzstan',
//   'Laos',
//   'Latvia',
//   'Lebanon',
//   'Lesotho',
//   'Liberia',
//   'Libya',
//   'Liechtenstein',
//   'Lithuania',
//   'Luxembourg',
//   'Macedonia',
//   'Madagascar',
//   'Malawi',
//   'Malaysia',
//   'Maldives',
//   'Mali',
//   'Malta',
//   'Marshall Islands',
//   'Mauritania',
//   'Mauritius',
//   'Mexico',
//   'Micronesia',
//   'Moldova',
//   'Monaco',
//   'Mongolia',
//   'Morocco',
//   'Mozambique',
//   'Myanmar',
//   'Namibia',
//   'Nauru',
//   'Nepal',
//   'Netherlands',
//   'New Zealand',
//   'Nicaragua',
//   'Niger',
//   'Nigeria',
//   'Norway',
//   'Oman',
//   'Pakistan',
//   'Palau',
//   'Panama',
//   'Papua New Guinea',
//   'Paraguay',
//   'Peru',
//   'Philippines',
//   'Poland',
//   'Portugal',
//   'Qatar',
//   'Romania',
//   'Russia',
//   'Rwanda',
//   'Saint Kitts and Nevis',
//   'Saint Lucia',
//   'Saint Vincent',
//   'Samoa',
//   'San Marino',
//   'Sao Tome and Principe',
//   'Saudi Arabia',
//   'Senegal',
//   'Serbia and Montenegro',
//   'Seychelles',
//   'Sierra Leone',
//   'Singapore',
//   'Slovakia',
//   'Slovenia',
//   'Solomon Islands',
//   'Somalia',
//   'South Africa',
//   'Spain',
//   'Sri Lanka',
//   'Sudan',
//   'Suriname',
//   'Swaziland',
//   'Sweden',
//   'Switzerland',
//   'Syria',
//   'Taiwan',
//   'Tajikistan',
//   'Tanzania',
//   'Thailand',
//   'Togo',
//   'Tonga',
//   'Trinidad and Tobago',
//   'Tunisia',
//   'Turkey',
//   'Turkmenistan',
//   'Tuvalu',
//   'Uganda',
//   'Ukraine',
//   'United Arab Emirates',
//   'United Kingdom',
//   'United States',
//   'Uruguay',
//   'Uzbekistan',
//   'Vanuatu',
//   'Vatican City',
//   'Venezuela',
//   'Vietnam',
//   'Yemen',
//   'Zambia',
//   'Zimbabwe'
// ]

// export default countries;
// // export default countries;
// let i = 0;
// for(i=0;i<countries.length;i++)
// {
//   console.log(countries[i]);
// }

// // const arr = Array();
// // console.log(arr);
// // // it can also be declared using let but it is not prefered to use let to create an arrays in javascript
// // let arr1 = new Array();
// // console.log(arr1);

// // const arr2 = [1,2,3,4,5,5,6,67];
// // console.log(arr2);
// // console.log(arr2.length);

// // const arr3  = ['Abhishek','Shukla',
// // {course :'mern',
// //   package : '10lpa',
// // } ,
// // {
// //   skill : ['HTML','CSS','JAVASCRIPT']
// // }
// // ]
// // console.log(arr3);

// // // they aare different array method which basically need to be implemented

// // // method 1
// // const arr4 = Array(10);
// // console.log(arr4);
// //  const arr5 = Array(3).fill(12);
// //  console.log(arr5);

// // // method2
// // const arr6 = [7,9,0].concat(arr2);
// // console.log(arr6);


// // // note point to be noted that is there exist an element in an array then basically it will return the that index where  
// // // the element is present if not the method indexOf return -1 which indicate that element is not present 

// // console.log(arr6.indexOf(12));
// // console.log(arr6.indexOf(7));

// // let's try to make a program which basically checks weather the given element is present in an array or not 

// const friend = ['moomin','gotam','sarabjeet','navin','amandeep'];
// // let n1 = prompt("enter the friend name","moomin gotam sarabjeet navin amandeep");
// // if(friend.indexOf(n1) == -1)
// // {
// //   console.log("entered name is not in friends");
// // }
// // else{
// //   let k = friend.indexOf(n1);
// //   console.log(k);
// // }


// // includes method is basically used to seach for an eleemnt in an Array
// // let's try to understand this concept 
// console.log(friend.includes("navin"));

// // to check weather the given array is an array or some other datatype
// let n2 = "Abhishek";
// console.log(Array.isArray(n2));

// // method to convert the given array into string
// console.log(friend.toString());

// // join method
// console.log(friend.join('/'));
// console.log(friend.join("<><><><><>"))

// // push method
// const arr7 = ['1','2','3','4','5','6'];
// arr7.push('Abhishek');
// console.log(arr7);

// // pop method
// arr7.pop();
// console.log(arr7);

// // shift method in array 
// // shift method in js basically used to remove an element from the begening of array
// //example
// arr7.shift();
// console.log(arr7)

// //unshift method in js
// //unshift meoth is used to add element at begining of the array
// //example
// arr7.unshift(23);
// console.log(arr7);

// //sort method in array
// // this method is used to add an element in the begining of an array
// //example
// arr7.sort();
// console.log(arr7);


// //reverse method in js
// // reverse method in js is basically used to reverse an array
// // lets try to understand the concept with an example
// arr7.reverse();
// console.log(arr7);

// const mixedDatatype = [1 ,'abhsuehk',
// {set : 'a', key :'b' },
// {skill : [1,2,3]},
// true
// ];
// console.log(mixedDatatype);
// // question 6 
// let k = 'Facebook, Google, Microsoft, Apple, IBM, Oracle , Amazon';
// const itcompanies = k.split(",");
// console.log(itcompanies);
// let len = itcompanies.length;
// console.log('mid Company:',itcompanies[(len-1)/2]);
// console.log('last comapny :',itcompanies[len-1]);
// console.log('start comoany :', itcompanies[0]);
// for(let i = 0;i <= len-1 ;i++)
// {
//   let up = itcompanies[i];
//   itcompanies[i] = up.toUpperCase();
  
// }
// console.log(itcompanies);


// // Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// let nam = prompt("enter the name of company");
// let check  = k.indexOf(nam);
// console.log(check);
// if (check == -1)
// {
//   console.log("company name does not exist in the list");
// }
// else {
//   console.log(itcompanies[check]);
// }

// // Filter out companies which have more than one 'o' without the filter method
// let companies = ['google','peol','microsoft','Facebook','infosis'];
// const Array1 =  Array();
// for(let i = 0 ; i < companies.length;i++)
// {
//   let each = companies[i];
//   let news = each.match(/o/gi);
//   if(news.length >= 2)
//   {
//     Array1.push(each);
//   } 
// }
// console.log(Array1);

// //Sort the array using sort() method
// companies.sort();
// console.log(companies);

// // Reverse the array using reverse() method
// companies.reverse();
// console.log(companies);

// console.log(companies.slice(0,3));

// // Slice out the last 3 companies from the array
// let l = companies.length
// console.log(companies.slice(l-3,l));

// // Slice out the middle It company or compies from the array
// console.log(companies.slice(l/2,l/2+1));

// // Remove the first IT company from the array
// companies.shift();
// console.log(companies);

// //Remove the last IT company from the array
// companies.pop();
// console.log(companies);

// // Remove all IT companies
// companies.splice(0,l);
// console.log(companies);

// let mern = require("./p1.js")

import mern from './p1.js';
import company from './p2.js';

console.log(mern);
console.log(company);

//First remove all the punctuations and change the string to array and count the number of words in the array

// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// console.log(words)
// console.log(words.length);

  


// In the following shopping cart add, remove, edit items

//  const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
// let le = shoppingCart.length;
// if(shoppingCart.includes('Meat'))
// {
//   const i=0;
// }
// else{
//   // shoppingCart.unshift('Meat');
//   shoppingCart.push('Sugar');
// }
// console.log(shoppingCart);


// let choice = prompt("Enter the item u want to remove");
// let element = shoppingCart.indexOf(choice);

// if(shoppingCart.includes(choice))
// {
//   shoppingCart.splice(element,1);
//   console.log(shoppingCart);
// }
// else{
//   console.log("element is not present in the array");
// }

// // In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// if(countries.includes('Ethiopia'))
// {
//   console.log('ehopia is already present');
// }
// else{
//   countries.push('Ethiopia');
// }

// // Concatenate the following two variables and store it in a fullStack variable.

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// fullStack = frontEnd.concat(backEnd);
// console.log(fullStack)

// // The following is an array of 10 students ages:

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// // Sort the array and find the min and max age
// // Find the median age(one middle item or two middle items divided by two)
// // Find the average age(all items divided by number of items)
// // Find the range of the ages(max minus min)
// // Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

// ages.sort();
// console.log(ages[0],ages[ages.length-1]);

// let n18 = ages.length;
// if(n18%2 == 0)
// {
//   let sum = ages[n18/2]+ages[n18/2+1];
//   console.log(sum);
// }
// else{
//   console.log(ages[n18]);
// }

// let sum2 = 0;
// for(let i = 0;i<n18 ; i++)
// {
//    sum2 = ages[i];
// }
// console.log(sum2);

// console.log('range of the ages',ages[n18-1]-ages[0]);



// let n19 = countries.length;
// if(n19%2 === 0)
// {
//   console.log(countries[ n19 / 2 - 1] );
//   console.log(countries[ n19 / 2 ]);
// }
// else{
//   console.log(countries[Math.floor(n19/2)]);
// }

