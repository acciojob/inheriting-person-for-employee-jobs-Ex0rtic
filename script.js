// complete this js code
// complete this js code
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.greet = function() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old.`;
};


function Employee(name, age, jobTitle) {
    Person.call(this, name, age); 
    this.jobTitle = jobTitle;
}

// Inheriting from Person
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;


Employee.jobGreet = function() {
    return `Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobTitle}.`;
};

// Do not change code below this line
window.Person = Person;
window.Employee = Employee;
