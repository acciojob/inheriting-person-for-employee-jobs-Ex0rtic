// complete this js code
// complete this js code
// Defining the Person constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Adding greet method to Person's prototype
Person.prototype.greet = function() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
};

// Defining the Employee constructor function and inheriting from Person
function Employee(name, age, jobTitle) {
    Person.call(this, name, age); // Call Person constructor
    this.jobTitle = jobTitle;
}

// Inheriting from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

// Adding jobGreet method to Employee's prototype
Employee.prototype.jobGreet = function() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`;
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
