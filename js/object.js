// // const Abhishek = {
// //   Tenth : '68.32%',
// //   tweth : '72%',
// //   BE : 'COMPUTER Science-->(64.8%)',
// //   Skill : ['HTML','CSS','JAVASCRIPT','REACT.JS', 'DATA STRUCTURE','EXPRESS.JS','NODE.JS','EXPRESS.JS','VUE.JS','NEXT.JS','PYTHON','DJANGO','CPP','ABAP','KAFKA','ZOOKER','MONGODB','SQL','GITHUB','GITBASH'],
// //   PROJECT : {
// //     MERN :{
// //       PROJECT1 : 'XYZ',
// //       PROJECT2 : 'XYZ2'
// //     },
// //     DJANDO :{
// //       PROJECT1 :'XYZ',
// //       PROJECT2 : 'XYZ2',
// //     }
// //   },
// //   nam : 'Abhishek Shukla',
// //   getname : function(){
// //     return (`the name of the person is ${this.nam}`)
// //   }
// // }
// // console.log(Abhishek.PROJECT.DJANDO.PROJECT1);
//   // task to add a key value pair using the property prompt ok and that particular thing should be added;
//   // let key = prompt("Enter the key");
//   // let prop = prompt("enter the property");
//   // Abhishek[key] = prop;
//   // console.log(Abhishek);
//   // // iteration of object
//   // for(let key in Abhishek)
//   // {
//   //   console.log(Abhishek[key]);
//   // }
//   // for(let key of Object.keys(Abhishek))
//   // {
//   //   console.log(Abhishek[key]);
//   // }
// //   console.log(Abhishek.getname());
// //   // for (let key in Abhishek.Skill)
// //   // {
// //   //   console.log(Abhishek.Skill[key]);
// //   // } 
// //   for (let key in Abhishek.PROJECT)
// //   {
// //     console.log(key);
// // }

// //spread operator in javascript
// let obj1={
//   num1 : 1,
//   num2 : 2
// }
// let obj2 = {
//   num3 : 3,
//   num4 : 4
// }
// let newobj ={...obj1,...obj2};
// console.log(newobj);

// // destructuring of object
// // let{num1,num2}=obj1;
// // console.log(num1);
// // console.log(num2);

// // OBJECT INSIDE AN ARRAY
// const array = [obj1];
// console.log(array[0]);

// // nested destructuring
// let abhi = [{obj1},{obj2}];
// // let abhi = [{ obj1 }, { obj2 }];
// const[{obj1:{num1,num2}}]=abhi;
// console.log(num1);

// // Assignment
// // Create an empty object called dog
// // const dog = {};
// // console.log(dog);

// //Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
// let dog = {
// legs : 4,
// nam :'barkho',
// color :'white and black',
// age : 7,
//  bark : function()
// {
//   console.log('woof woof');
// }
// }
// dog.bark();

// //Get name, legs, color, age and bark value from the dog object
// let {legs,nam,color,age} = dog;
// console.log(legs);
// console.log(nam);
// console.log(color);
// console.log(age);

// //Set new properties the dog object: breed, getDogInfo
// dog['breed']='indian';
// // console.log(dog[breed]);
// console.log(dog)

// //excercise level 2
// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   }
// };
// //Find the person who has many skills in the users object.
// var person = '';
// var skill = 0;

// for (let key in users)
// {
  
//     let len  = users[key].skills.length;
//     if(skill < len)
//     {
//       person = key;
//       skill = len;
//     }

//   }


// console.log(person);

// // The number of people who are logged in.
// var count = 0;
// for( let key in users)
// {
//   if(users[key].isLoggedIn)
//   {
//    count += 1;
//   }
// }
// console.log(count);

// //The number of people who have more than 40 points.
// let point = 0;
// for(let key in users)
// {
//   if(users[key].points > 40)
//   {
//     point += 1;
//   }
// }
// console.log(point);

// let countmail = 0;
// for(let key in users)
// {
//   if(users[key].email.length > countmail)
//   {
//     var personname = key;
//     countmail = users[key].email.length;
//   }
// }
// console.log(personname);

//An array of all users sorted by the number of skills they have in descending order.
// Find people who are MERN stack developer from the users object
let mern = ['Node','MongoDB','React','Express'];
// let countmern = 0;
// for(let k in users)
// {
//   for (let i=0 ;i<mern.length;i++)
//     {
//      if(!users[k].skills.includes(mern[i]))
//      {
//        break;
     
//      }
//      else
//      {
//       countmern += 1; 
//      }
//      if(countmern === 4)
//       {
//        var Array1=Array();
//        Array1.push(k);
//       }
//     }

// }
// // console.log(Array1);

// // let mern = ['Node', 'Mongodb', 'React', 'Express'];
// let Array1 = []; // Initialize the array to store names of MERN stack developers

// for (let k in users) {
//   let countmern = 0; // Reset the count for each user
//   for (let i = 0; i < mern.length; i++) {
//     if (!users[k].skills.includes(mern[i])) {
//       // If a skill is missing, break out of the loop
//       countmern = 0; // Reset count because the user is not a complete MERN developer
//       break;
//     } else {
//       countmern += 1; // Increment the count for each skill found
//     }
//   }
//   if (countmern === mern.length) {
//     // If count equals the number of required skills, add the user to the array
//     Array1.push(k);
//   }
// }

// // console.log(Array1);

// // //Set your name in the users object without modifying the original users object
// // users ['Abhihsek Shukla']= {
// //   email: 'daniel@daniel.com',
// //     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux','nodes'],
// //     age: 30,
// //     isLoggedIn: true,
// //     points: 50

// // };
// // console.log(users);
// // for(key in users)
// // {
// //   console.log(key);
// // }
// // Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

// const personAccount ={
//   firstName : 'Abhihsek',
//   lastname : 'Shukla',
//   incomes : {
//     desscription : 'salary',
//     income : 50000
//   },
//   expense : {
//     income : 10000,
//     desscription : 'expense'
//   },
//   totalincome : function() { },
//   addincome : function(){},
//   addExpense : function(){},
//   accountBalance : function(){},

// }
// console.log(personAccount);

// //   question are based on the following way 
//  const users = [
//   {
//     _id: 'ab12ex',
//     username: 'Alex',
//     email: 'alex@alex.com',
//     password: '123123',
//     createdAt:'08/01/2020 9:00 AM',
//     isLoggedIn: false
// },
// {
//     _id: 'fg12cy',
//     username: 'Asab',
//     email: 'asab@asab.com',
//     password: '123456',
//     createdAt:'08/01/2020 9:30 AM',
//     isLoggedIn: true
// },
// {
//     _id: 'zwf8md',
//     username: 'Brook',
//     email: 'brook@brook.com',
//     password: '123111',
//     createdAt:'08/01/2020 9:45 AM',
//     isLoggedIn: true
// },
// {
//     _id: 'eefamr',
//     username: 'Martha',
//     email: 'martha@martha.com',
//     password: '123222',
//     createdAt:'08/01/2020 9:50 AM',
//     isLoggedIn: false
// },
// {
//     _id: 'ghderc',
//     username: 'Thomas',
//     email: 'thomas@thomas.com',
//     password: '123333',
//     createdAt:'08/01/2020 10:00 AM',
//     isLoggedIn: false
// }
// ];

// // Imagine you are getting the above users collection from a MongoDB database. 
// // a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// // b. Create a function called signIn which allows user to sign in to the application

// function check(k)
// {
//   // var len = products.length;
//   for(let key in users)
//   {
//     if(users[key]._id === k._id)
//     {
//       return -1;
//     }
//   }
//   return 1;
// }
// function signup(k)
// {
//   if(check(k) === 1)
//   {
//     users.push(k);
//     console.log("added successfully");
//   }
//   else{
//     console.log('already there');
//   }
// }

// function signin(k)
// {
//   if(check(k)===-1)
//   {
//     console.log('signined');
//   }
//   else{
//     console.log("user does not exist in the database");
//   }
// }

// let k = {
//   _id: 'eefamr',
//   username: 'Thomas',
//   email: 'thomas@thomas.com',
//   password: '123333',
//   createdAt:'08/01/2020 10:00 AM',
//   isLoggedIn: false
// }
// signup(k);
// signin(k);


// The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product
const products = [
  {
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
  },
  {
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
  },
  {
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
  }
  ]

  function checkproduct(product_id,product)
  {
   let len = product.len;
   for(var key in product) 
   {
    if(product[key]._id===product_id)
    {
      return key;
    }
   }
   return -1
  }
//   function rateproduct(product_id,product,person_id,rate1)
//   {
//     let index = checkproduct(product_id,product)
//     if(index===-1)
//     {
//       console.log('product does not exist');
//     }
//     else{
//       product[index].ratings.push({'id':person_id, 'rate' :rate1});
      
//     }
//   }

//   let product_id = prompt('enter the product id');
//   rateproduct(product_id,products,'12uwbbs',3.3);
//   console.log(products);

//   //. Create a function called averageRating which calculate the average rating of a product
//   function averagerate(product_id,product)
//   {
//     let average = 0;
//     let index = checkproduct(product_id,product);
//     if(index === -1)
//     {
//       console.log("product does not exist");
//     }
//     else{
//       let pro = product[index];
//       for( let i = 0 ;i<pro.ratings.length ;i++)
//       {
//         average += pro.ratings[i].rate;
//       }
//       console.log(average/pro.ratings.length);
//     }
//   }
//   averagerate(product_id,products);

  //Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
function  likeproduct(product,product_id,user_id,ch)
  {
    let index = checkproduct(product_id,product);
    if(index === -1)
    {
      console.log("product does not exist");
    }
    else{
      let pro = product[index];
     switch(ch)
     {
      case 'add' : pro.likes.push(user_id);
      break;
      case 'remove':
        if(pro.likes.length > 0)
        {
          pro.likes.pop();
        }
        else
        {
          console.log("it does't have any likes yet, wish to give");
        }
     }
    }
  }
  likeproduct(products,'aegfal','idke','add');
  console.log(products);