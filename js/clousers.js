function outerfunction()
{
  let count = 0;
  function increment()
  {
    return count++;
  }
  function decrement()
  {
    return count = count-1;
  }
  function multiple()
  {
     count=count*5;
     return count;
  }
  return {
    increment:increment,
    decrement:decrement,
    multiple:multiple
  };
  
}
let abhi = outerfunction();
console.log(abhi.increment());
console.log(abhi.increment());
console.log(abhi.increment());
console.log(abhi.decrement());
console.log(abhi.multiple());

// Create a closure which has three inner functions
//Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
function personAccount()
{
  let firstname = prompt("Enter the first Name");
  let last = prompt("enter the last name");
  let incomes =  prompt("enter the incomes");
  let expense = prompt("enter the expense");
  
  function accountBalance()
  {
     let income = []
  }


}
