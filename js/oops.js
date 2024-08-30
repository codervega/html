// // learning about call() Method 
// //let's decalere a method which display name and age and address
// let fun = function(){
//   console.log(this.nam,this.address);
// }
// let obj1 = {
//   nam : 'Abhishek Shukla',
//   age : 23,
//   address : "Bangalore"
// }
// let obj2 = {
//   nam : 'Tarun Shukla',
//   age : 23,
//   address : "pune"
// }
// // let obj3 = {
// //   nam : 'chotu Shukla',
// //   age : 23,
// //   address : "pratapgard UP"
// // }
// // fun.call(obj2);
// // fun.apply(obj2);
// // let abhi = fun.bind(obj1);
// // abhi();

// // creting emply object from other object 
// let obj4 = {
//   value1 :'hello',
//   value2 : 'maana'
// }
// let obj5 = Object.create(obj4)
// // let obj5 = {...obj4};
// console.log(obj5);

// CREATING A OBJECT AND METHOD
let check = {
 canvote : function()
  {
    if (this.age < 18)
    {
      return `Can't vote `;
    }
    else{
      return `can vote`;
    }
  }
}

function INFO(nam,address,age,addhar_no){
  const user = Object.create(check)
  user.nam = nam;
  user.address = address;
  user.age = age;
  user.addhar_no = addhar_no;
  return user;
}
let p1 = INFO('Abhishek','bangalore','22',120909089);
for(let key in p1)
{
  console.log(p1[key]);
}
console.log(p1.canvote());

// let's say we have an array 
Array.prototype.sum=function(){
 return this.reduce((acc,curr) => acc+curr,0);
}
num = [1,2,3,4,5,56,6,7];
let k  = num.sum();
nums2 = [1,2,4,5,5,6,9,10,87,89,86,56];
console.log(k)
console.log(nums2.sum());
Array.prototype.mul = function()
{
  return this.reduce((acc,cur)=> acc*cur);
}
console.log(num.mul());
Array.prototype.expo = function()
{
  return this.reduce((acc,cur)=> acc**cur);
}
console.log(num.expo());

// now we are gonna study about classes in js
// the very first important thing is class keyword
// let's try to understand the topic with an example
class info
{
  constructor(nam,age)
  {
    this.name = nam;
    this.age = age;
  }
  is18()
  {
    if(this.age >= 18)
    {
      return 'Eligible to vote';
    }
    else{
      return 'Not Eligible to vote';
    }
  }
}
// let Abhishek = new info('Abhishek Shukla',22);
// console.log(Abhishek.is18());

// now let's see parent class in js
class grade extends info
{
  constructor(nam,age,marks)
  {
    super(nam,age)
    this.marks = marks;
  }
  get check()
  {
    if (this.marks> 50) {
      return 'Pass';
    }
    else{
      return ' Fail';
    }
  }
  set up(date)
  {
    this.nam = date.nam;
    this.age = date.age;
    this.marks = date.marks
  }
}
let Abhishek = new grade('Abhishek shukla',21,51);
// console.log(Abhishek.check);
Abhishek.up={nam:'Abhishek Shukla',age:32,marks:12};
console.log(Abhishek.check)
// console.log(Abhishek.is18());
