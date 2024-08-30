// async function Abhi()
// {
//   url1 = fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=53.1%2C-0.13');
//   url2 = fetch('https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v2/get-similarities?symbol=INTC');
//   let weather = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//      if(url1 === null)
//       reject(new Error('weather API got failed'));
//     else
//     resolve(url1);
//     },2000);
//   })

//   let finance = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       if(url2!==null)
//       {
//         resolve(url2);
//       }
//       else
//       {
//         reject(new Error('api Got failed'));
//       }
//     },8000)
//   });
//   console.log('data is being fetched from the server for weather......');
//   let abhi = await weather;
  
//   console.log(abhi.json());
//   console.log('fiance data is being fetched from the server ....');
//   let fi = await finance;
//   console.log(fi.json());




// }
// Abhi();




// excercise - 1
// fetch('https://restcountries.com/v2/all')
//   .then(response => response.json())
//   .then(data => {
//     data.forEach(country => {
//       console.log(country.languages);
//     });
//   })
//   .catch(error => console.error('Error fetching data:', error));

// let catname = [];
//   let cat = fetch('https://api.thecatapi.com/v1/breeds')
//   .then(response=>response.json())
//   .then(data=>{
//     catname = data.map(breed=>breed);
//     console.log(catname);
//   }).catch(error=>{
//     console.error('an Error',error);
// //   })

// Array.prototype.sum = function()
// {
//   let sum =0;
//   for(let i = 0; i<this.length;i++)
//   {
//     sum += this[i];
//   }
//   return sum;
// }
// let catweight = [];
//   let cat = fetch('https://api.thecatapi.com/v1/breeds')
//   .then(response=>response.json())
//   .then(data=>{
//     catweight = data.map(catw=>{
//       let wight = catw.weight.imperial.split('-');
//       let average = parseInt(wight[0])+parseInt(wight[1])/2;
//       return average;
//     })
//     console.log(catweight.sum()/catweight.length);
//   }).catch(error=>{
//     console.error('an Error',error);
//   })

  // Read the countries api and find out the 10 largest countries
  // Array.prototype.topten = function(){
  //   let topten = [];
  //   this.sort((a,b)=>{
  //     a.area-b.area;
  //   });
  //   for(let i = 0;i<10;i++ )
  //   {
  //     topten.push(this[i]);
  //   }
  //   return topten;
  // }
  // fetch('https://restcountries.com/v2/all')
  // .then(response=>response.json())
  // .then(data=>{
  //  let country = data.topten();
  //  country.forEach(element => {
  //   console.log(element.name);
  //  });
  // })
  // fetch the country api and print all the country name starting with name 'I';
  // var i = [];
  // fetch('https://restcountries.com/v2/all')
  // .then(response=>response.json())
  // .then(element=>{
  //   i = element.map((name)=>
  //   {
  //     return element.name.startwith('I');
  //   }

  //   )
  //   console.log(i);
  // })
  // Read the countries api and count total number of languages in the world used as officials.
  Array.prototype.count = function()
  {
    let count = 0;
    this.forEach((element)=>
    {
      count += element.languages.length;
    }
     )
      return count;
    }
  
  fetch('https://restcountries.com/v2/all').then(response=>response.json()).then(data=>{
    let total = data.count();
    console.log(total);
  }).catch(err=>{
    console.log(err);
  })