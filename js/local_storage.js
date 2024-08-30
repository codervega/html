let key = prompt("enter the key value which need to stored");
let value = prompt("Enter the value u want to store");
localStorage.setItem(key,value);
console.log(localStorage.getItem(key));
localStorage.clear();