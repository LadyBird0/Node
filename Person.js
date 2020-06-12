var Person = require("./Person.js");

// Checks whether minimum of 3 parameters have been entered

// 

if(process.argv.length <= 2) {

  console.log("You must pass the age of the person.");

  // Exists 

  process.exit();

}

// Creates the person using the constructor function

// 

var person = new Person(1, false);



console.log("Person is an adult is: " + person.isAdult());

console.log("Person can have bank account is: " + person.canHaveBankAccounts());

// Sets the age of the person

// 

person.setAge(process.argv[2]);



console.log("Person is an adult is: " + person.isAdult());

console.log("Person can have bank account is: " + person.canHaveBankAccounts());