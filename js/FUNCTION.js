const isEven = (num) =>{
  return num % 2 === 0;
}
 if(isEven(2))
 {
  console.log('Element entered is Even');
 }
 else{
  console.log('is an odd number');
 }

 // function inside function

 const nam = () =>{
  surname();
  function surname()
  {
    console.log('Shukla');
  }
  console.log('Abhishek');
 }
 nam();
 // function parameter with unlimited parameter
 // there is different way actually for unlimited parameter in normal function declaration and unlimited function declaration

//  let's try to understand for function declaration
function sum(a,...b)
{
  console.log(a);
  console.log(b);
}
sum(1,2,3,4,5,6,7);

// parameter destructuring
// first create an object
let info = { 
 nam : 'Abhishek',
 age : 23,
 gender : 'male'
}
function information({nam,age,gender})
{
  console.log(nam);
  console.log(age);
  console.log(gender);
}
information(info);
// the above process is called as destructing of paramater it is highly used in react 




// callback function in js
function city(){
  return 'this is bangalore';
}
function country(callback)
{
  console.log(callback);
  console.log(callback());

}

country(city);

//function returing a function 
//let's try to understand this 

function mess()
{
  function mess1()
  {
    console.log('Hello Abhishek Shukla , Hope So ur going great ');
  }
  return mess1;
}
console.log(mess());
var me = mess();
me();


// excercise 1
// Declare a function fullName and it print out your full name.
// function fullname() {
// console.log('Abhishek Shukla');
// }
// fullname();

// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullname(first,last)
{
  console.log(first, last);
}
fullname('Abhishek','shukla');

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(one=0,two=0)
{
  let sum = one +two;
  return sum;
}
console.log(addNumbers(1,2));

// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function area(lenght , width)
{
 let area = lenght * width;
 return area;
}
console.log(area(10,10));

// perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeter(x,lenght,width)
{
  let perimeter = 2*x*(lenght* width);
  return perimeter;
}
console.log(perimeter(2,2,2));

// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(length = 0 , width = 0 ,High = 0){
  let vol = length * width * High;
  return vol;
}
console.log(volumeOfRectPrism(2,2,2));

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function Area(r)
{
  let area = Math.PI * r *r;
  return area;
}
console.log(Area(2));
 
// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function Circumference(r)
{
  let circumfurance = Math.PI * 2 *r;
  return circumfurance;
}
console.log(Circumference(2));

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function speed(distance,Time)
{
  let Speed = distance/Time;
  return Speed;
}
console.log(speed(10,10));

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function Temperature(oC)
{
  let oF = (oC * 9/5)+32;
  return oF;
}
console.log(Temperature(104));

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or o bese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function bodymassindex(weight,h)
{
  let bmi = weight / (h*h);
  return bmi;
}
console.log('the bmi',bodymassindex(80,1.73736));

// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
function mathmax(...a){
  let r =a;
  let len = r.length;
  let max = r[0];
  for(let i=0 ;i<len;i++)
  {
    if(max<r[i])
    {
      max = r[i];
    }
  }
  return max;
}
console.log('Max is ',mathmax(2,4,5,6,7,8,9,0));

// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
function solveLinEquation(a,b,c,x,y)
{
   return a*x+b*y+c;
}
console.log(solveLinEquation(1,2,4,6,8));

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.



function solveQuadratic(a=0,b=0,c=0)
{
  var d = (b*b)-(4*a*c);
  if(d>0)
  {
    console.log('roots are real and different');
    console.log((-b+Math.sqrt(d)) / ( 2 * a ));
    console.log((-b-Math.sqrt(d)) / ( 2 * a ));
  }
  else if(d===0){
    console.log("roots are real and equal");
    console.log(-b/(2*a));
  }
  else{
    console.log('roots are real and inaginary');
    let a = -b/(2*a);
    let b = Math.sqrt(-d)/(2*a);
    console.log('the sqr troots is ${a}+i${b} and ${a}-i${b}');
  }
}

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

//Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
 Array = [1,4,6,9,7,5,'k'];
 function printArray(Array)
 {
  let l = Array.length;
  for(let i = 0;i<l;i++ )
  {
    console.log('hi',Array[i]);
  }
 }
 printArray(Array);

 //Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

// showDateTime()
// 08/01/2020 04:08
let Dat =  new Date;
function showDateTime()
{
  let yy=Dat.getFullYear();
  let mm = Dat.getMonth();
  let dd = Dat.getDate() ;
  let date =(yy+'/'+mm+'/'+dd);
  return date;
}
console.log(showDateTime());

// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
Array1=[1, 2, 3, 4, 5];
console.log(reverseArray(Array1));
//[5, 4, 3, 2, 1]
// console.log(reverseArray(['A', 'B', 'C']))
// ['C', 'B', 'A']
function reverseArray(Array1)
{
  let l = Array1.length;
  for(let i = 0 ; i < l/2; i++)
  {
    let temp = Array1[i];
    Array1[i]=Array1[(l-i)-1];
    Array1[(l-i)-1]=temp;
  }
  return Array1;
}
// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.

function evensAndOdds(n)
{
  let even = 0 ;
  let odd = 0;
  for(i =0 ; i<=n ; i++)
  {
    if(i % 2 == 0)
    {
      even +=1;
    }
    else
    {
      odd +=1;
    }
  }
console.log( 'even'+even+' odd '+ odd);
}
evensAndOdds(100);

