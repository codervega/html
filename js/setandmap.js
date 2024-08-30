// //set 
// // set is the collection of elements , point to be noted  is that set basically don't contain any duplicate value in the collection , let's try to create an empty set 
// const companies = new Set();
// console.log(companies);

// // // creating set from an array 
// // const language = ['hindi','kannada','English','tamil','hindi','kannada','English','tamil'];
// // const setlanguage = new Set(language);
// // console.log(setlanguage);

// // // iteration of set 
// // // for(let key  of setlanguage)
// // // {
// // //   console.log(key);
// // // }

// // // to add an element to the set 
// // // there is a method in js called as add to add an element to an set
// // companies.add('Microsoft');
// // companies.add('Facebook');
// // companies.add('Dell')
// // console.log(companies.size);
// // for(let key of companies)
// // {
// //   console.log(key);
// // }
// // const service = ['Peol','infosis','wipro'];
// // for(let app of service)
// // {
// //   companies.add(app);
// // }
// // console.log(companies);

// // // deleting an element from the set 
// // // we actually have a method called as delete to delete an element from set
// // companies.delete('Microsoft');
// // console.log(companies);
// // companies.clear();
// // console.log(companies);
// // // we are gonna perform set intersection and union and distinct operation on the set 
// // // all this can be done using higher order function
// // let array1 = [1,2,3,4,5];
// // let array2 = [6,,7,8,9,10];
// // let set1 =  new Set(array1);
// // let set2 = new Set(array2);
// // let set3 = [...set1,...set2];
// // console.log(set3);

// // // map data structure in js
// // // the map data structure in js is used to store the data in key value pair 
// // // here is an example for data structure
// // let newmap = new Map();
// // newmap.set(1,'Abhishek');
// // newmap.set(2,'tarun');
// // newmap.set(3,'chotu');
// // newmap.set('surname','Shukla');
// // console.log(newmap)
// // console.log(newmap.get(1));
// // console.log(newmap.has(2));
// // newmap.delete(3);
// // console.log(newmap);

// // exercise - 1
// let week = new Set();
// console.log(week);
// // Create a set containing 0 to 10 using loop
// for( let i = 0 ; i<=10 ;i++)
// {
//   week.add(i);
// }
// console.log(week);
// // Remove an element from a set
// week.delete(2);
// console.log(week);
// // Clear a set
// week.clear();
// console.log(week);

// // Create a set of 5 string elements from array
// let Area = ['koramangala','jayanagar','Mejestic','Mg Road'];
// let area = new Set(Area);
// console.log(area);

// // Create a map of countries and number of characters of a country
// let countries = new Map();
// countries.set('india','india'.length)
// countries.set('pakistan','pakistan'.length);
// countries.set('china','china'.length);
// countries.set('America','America'.length);
// for(let key of countries)
// {
//   console.log(key);
// }


// excercise level 2
// Find a union b
// let array1 = [1,2,3,4,5,6,7,8,8,9];
// let array = [2,3,4,4,6,7,'','d'];
// let arrayunion = [...array1,...array];
// let set = new Set(arrayunion);
// console.log(set);
// object  clone ....
let obj = {
  nam : 'Abhishek',
  surname : 'Shukla',
}
let obj1 = {...obj};
obj['age'] = 20;
console.log(obj1);
console.log(obj);



