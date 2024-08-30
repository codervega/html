// "use strict";
// var nam = "Abhishek Shukla";
// console.log(nam);
// nam = "tarun shukla";
// console.log(nam);
// console.log(nam.length);
// console.log(nam[nam.length-1]);

// let abhi = "                     Abhishek         shukla";
// console.log(abhi.length);

// let newabhi = abhi.trim();
// console.log(newabhi);
// console.log(newabhi.length);

// // to perform string operation
// // charcodeAt()--> it return the ascii value of the alphabet 

// let var1 = 'Abhishek Shukla';
// console.log(var1.charCodeAt(14));
// console.log(var1.charAt(1));
// console.log(var1.concat(abhi));
// console.log(var1.endsWith('Abhishek'));
// console.log(var1.endsWith('Shukla'));
// console.log(var1.includes('Abhishek'));
// console.log(var1.indexOf('a'));
// console.log(var1.lastIndexOf('Shukla'));
// let variable = 'Abhishek shukla is a good boy';
// // match method in js
// console.log(variable.match('a'));
// console.log(variable.match(/a/));
// // the below code shows the code which basically tells about the all the matching patters present inside the code
// console.log(variable.match(/a/g));
// // the below does the same but the difference is that the code basically have an ignore the case sensitivity
// console.log(variable.match(/a/gi));
// console.log(variable.repeat(10*10));
// console.log(variable.replace('good','bad'));
// console.log(variable.search('shukla'));
// console.log(variable.startsWith("Abhishek"));
// console.log(variable.substring(2,5));
// console.log(variable.toLowerCase());
// console.log(variable.toUpperCase());

// let var2 = 'Abhishek shukla';
// console.log(typeof var2);
// var2 = 21;
// console.log(typeof var2);
// var2 = 21.2;
// console.log(typeof var2);
// var2 = true;
// console.log(typeof var2);
// var2 = NaN;
// console.log(typeof var2);

// let num = '12';
// let newnum = parseInt(num);
// console.log(newnum);

// let newnum2 = Number(num);
// console.log(newnum2);
// let newnum3 = +num;
// console.log(newnum3);

// const pi = Math.PI;
// console.log(pi);

// console.log(Math.round(pi));
// console.log(Math.round(89.345));
// console.log(Math.floor(pi));
// console.log(Math.ceil(pi));
// console.log(Math.min(10,32,34,76));
// console.log(Math.max(21,89,-2,0,21));
// console.log(Math.random());
// console.log(Math.ceil(Math.random()));
// console.log(Math.abs(-10));

// // exercise 1.2 
// console.log(typeof '10');
// console.log(typeof 10);
// console.log(typeof parseInt('10'));
// console.log(typeof parseFloat(9.3));
// console.log(Math.ceil(9.8));

// let st1 = 'python';
// let str2 = 'Jargon';
// console.log(st1.includes('on') && str2.includes('on'));

// // I hope this course is not full of jargon. Check if jargon is in the sentence.

// let tata = "I hope this course is not full of jargon";
// console.log(tata.includes('jargon'));

// // Generate a random number between 0 and 100 inclusively.

// console.log(Math.random()*50);

// // Generate a random number between 50 and 100 inclusively.

// console.log(Math.random() * 70);

// // Generate a random number between 0 and 255 inclusively.

// console.log(Math.random()*1000);

// // Access the 'JavaScript' string characters using a random number.

// let n1 = 'JavaScript';
// console.log(n1.charAt(Math.ceil(Math.random()*10)));

// // Use console.log() and escape characters to print the following pattern.

// // 1 1 1 1 1
// // 2 1 2 4 8
// // 3 1 3 9 27
// // 4 1 4 16 64
// // 5 1 5 25 125

// console.log( '1 1 1 1 1 \n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125');

// // 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

// let n3 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
// let n4 = n3.match(/love/gi);
// console.log(n4.length);

// // Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
// let n5 = 'You cannot end a sentence with because because because is a conjunction';
// let n6 = (n5.match(/because/gi));
// console.log(n6.length);

// // Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
// let n7 =  'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
// let n8 = (n7.match(/\d+/gi));
// let total = 0;
// for( let i = 0 ; i < n8.length ; i++ )
// {
//   total = total + parseInt(n8[i]);
// }
// console.log(total);

// // terniary operator 
// let rain = true;
// rain
// ? console.log("it's raining outside") : console.log("it's not raining outside");

// alert("hi my name is abhishek shukla");

// let n10 = prompt("enter the first numer","enter the first number");
// let n11 = prompt("enter the second number","enter the second number");
// let n12 = prompt("enter the operation need to be performed", "+\t -\t *\t /\t **\t %\t");
// confirm("are u sure u want to see the result");
// let result = 0;
// switch(n12){
// case '+':
//   result = n10 + n11;
//   console.log(result);
//   break;

// case '-':
//   result = n10 - n11;
//   console.log(result);
//   break;

// case '*':
//   result = n10 * n11;
//   console.log(result);
//   break;

// case '/':
//   result = n10 / n11;
//   console.log(result);
//   break;

// case '**':
//   result = n10 ** n11;
//   console.log(result);
//   break;
// }

// // creating date object 
// const now1 = new Date;
// console.log(now1);
// console.log(now1.getFullYear());
// console.log(now1.getMonth()+1);
// console.log(now1.getDate());
// console.log(now1.getDay());
// console.log(now1.getHours())
// console.log(now1.getMinutes());
// console.log(now1.getSeconds());
// console.log(now1.getTime());

// // task write a code in a human readable FormData

// let dd = new Date;
// let year = dd.getFullYear();
// let month = dd.getMonth();
// let date = dd.getDate();
// let hh = dd.getHours();
// let mm = dd.getMinutes();
// let ss = dd.getSeconds();
// console.log(`${year}/${month}/${date}/${hh}/${mm}/${ss}`);

// let n15 = "python".length;
// let n16 = "jargon".length;
// console.log(n15 != n16);

// console.log(4 != '4');

// let now = new Date;
// console.log(now.getFullYear());
// console.log(now.getMonth()+1);
// console.log(now.getDate());
// console.log(now.getDay()+1);
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getMilliseconds());
// console.log(now.getTime());

// let h = prompt("enter the height of the triangle");
// let b = prompt("enter the base of the triangle");
// console.log(0.5*b*h);

// program to calculate perimeter of triangle
// let a = parseInt(prompt("enter side a of triangle"));
// let b = parseInt(prompt("enter side b of triangle"));
// let c = parseInt(prompt("enter side c of triangle"));
// let p = a+b+c;
// console.log(p);

// Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// let lenght = parseInt(prompt("enter the lenght of the rectangle"));
// let widht = parseInt(prompt("enter the widht"));
// console.log(2*(lenght+widht));

// Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// const pi = Math.PI;
// let r = parseFloat(prompt(("enter the radius of circe")));
// console.log(pi*r*r);
// console.log("circumferance of circle :", 2*pi*r);

// Calculate the slope, x-intercept and y-intercept of y = 2x -2
// let x_inter = parseInt(prompt("enter the value of y"));
// let x = x_inter+2/2;
// console.log(x);

// let y_inter = parseFloat(prompt("enter the value of y"));
// let y = y_inter*2 - 2 ;
// console.log(y);

// Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// let x1 = 2;
// let x2 = 6;
// let y1 = 2;
// let y2 = 10;
// let m = (y2-y1)/(x2-x1);
// console.log(m);

// calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// let x = parseInt(prompt("enter the value of x"));
// let y = x**2 + 6*x + 9;
// console.log(y);

// Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// let hour = parseInt(prompt("enter the hours"));
// let rate = parseInt(prompt("enter your rate"));
// console.log(hour * rate);

// If the length of your name is greater than 7 say, your name is long else say your name is short.
// let nam = prompt("enter your name");
// nam.length > 7
// ? console.log("ur name is long") : console.log("ypur name is short");

// Compare your first name length and your family name length and you should get this output.

//  let firstName = 'Asabeneh';
// let lastName = 'Yetayeh';
// firstName.length > lastName.length
// ?console.log("your first name ,${firstName} is greater than last name"):console.log("your fmaily name ${lastName} is greater than last name");

// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
// let score = prompt("enter the marks");
// if(score>=80 && score<=100){
//   console.log("A");
// }
// else if(score>=70 && score<=89)
// {
//   console.log("B");
// }
// else if(score>=60 && score<=69)
// {
//   console.log("c");
// }
// else if(score>=50 && score <= 59)
// {
//   console.log("D");
// }
// else
// {
//   console.log("F");
// }


// Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.
// let my = 24;

// let your_age = parseInt(prompt("enter your age"));
// if(your_age > my)
// {
//   console.log("you are",(your_age-my),"older than me");
// }
// else
// {
//   console.log("i am older");
// }


// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// 
// using if else
// ternary operator.
  // let a = 4
  // let b = 3
  // a>b
  // ?console.log("A is greater than B")
  // :console.log("a is less than B");


  // Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// Enter a number: 2
// 2 is an even number
// Enter a number: 9
// 9 is is an odd number.
// let n17 = prompt("enter the number");
// if(n17 % 2 == 0)
// {
//   console.log(n17 ," is an even number");
// }
// else{
//   console.log(n17,"is an odd number");
// }

// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
// let month = prompt("enter the month");
// if(month == 'September' || month == 'October' || month == 'November' )
// {
//   console.log("The season is Autumn");
// }
// else if(month == 'December' || month == 'January' || month == 'February')
// {
//   console.log("The seaseon is Winter");
// }
// else if(month == 'March' || month == 'April' || month == 'May')
// {
//     console.log("The season is Spring");
// }
// else{
//   console.log("The season is Summer");
// }

// Write a program which tells the number of days in a month.
  // Enter a month: January
  // January has 31 days.

  // Enter a month: JANUARY
  // January has 31 day

  // Enter a month: February
  // February has 28 days.

  // Enter a month: FEbruary
  // February has 28 days.

  // let month = prompt("enter the month");
  // if( month == 'January' || month == 'March' || month == 'May' || month == 'July' || month == 'August' || month == 'October' || month ==  'December')
  // {
  //   console.log("31 days");
  // }
  // else if(month = 'february')
  // {
  //   console.log("28");
  // }
  // else 
  // {
  //   console.log("30 days");
  // }








