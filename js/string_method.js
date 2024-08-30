let var1 = 'Abhishek Shukla';
console.log(var1.charCodeAt(14));
console.log(var1.charAt(1));
console.log(var1.concat(abhi));
console.log(var1.endsWith('Abhishek'));
console.log(var1.endsWith('Shukla'));
console.log(var1.includes('Abhishek'));
console.log(var1.indexOf('a'));
console.log(var1.lastIndexOf('Shukla'));
let variable = 'Abhishek shukla is a good boy';
// match method in js
console.log(variable.match('a'));
console.log(variable.match(/a/));
// the below code shows the code which basically tells about the all the matching patters present inside the code
console.log(variable.match(/a/g));
// the below does the same but the difference is that the code basically have an ignore the case sensitivity
console.log(variable.match(/a/gi));
console.log(variable.repeat(10*10));
console.log(variable.replace('good','bad'));
console.log(variable.search('shukla'));
console.log(variable.startsWith("Abhishek"));
console.log(variable.substring(2,5));
console.log(variable.toLowerCase());
console.log(variable.toUpperCase());

