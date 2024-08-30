// let trans = new Promise((resolve, reject) => {
//  setInterval(()=>{
//   if (10 < 20) {
//     resolve(fetch("https://api.thecatapi.com/v1/images/0XYvRd7oD"));
//   } else {
//     reject(new Error('API NOT FETCHED'));
//   }
//  },5000);
// });

// trans
//   .then((value) => {
//     console.log(value.status);
//     console.log(value.ok)
//     return value.json();
//   })
//   .then((value2) => {
//   console.log(value2) // Log the error instead of calling reject
//   })
//   .catch((err)=>{
//     console.log(err);
//   })


  // working with post request in javascript
  let Abhi=fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      title: 'Abhishek',
      body: 'Aesthetic',
      userId: 69,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
// .then((value)=>{
//     console.log(value.status);
//     console.log(value.ok);
//     return value.json();
//   }
// ).then((value2)=>{
//   console.log(value2);
// })

// let kabhi = fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
//   console.log(response.status);
//   console.log(response.ok);
//   return response.text();
// }).then((value2)=>{
//   console.log(value2);
// })

const check = (id)=>{
  fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
    console.log(response.status);
    console.log(response.ok);
    return response.text();
  }
  ).then((response)=>{
    console.log(response);
  })
  .catch((err)=>{
    
      console.log(err);
    
  })
}
check(69);
  