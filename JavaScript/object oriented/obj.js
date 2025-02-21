// objects are a const. that has variables put in in a specific catagory, for example, you can put the make, model, color, and year of a car in an object.

//ex

// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     color: "Blue",
//     year: 2004
// }

// use "this." to refer to an object as a whole, such as "this.make" or "this.model".
// That way when you type in the object name, it will refer to the object as a whole, and not just the variable.

function Car(make, model, year, engine) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.engine = engine;
}

let Turbo = new engine(turbo, hockeyZ9, 2000);
let myCar = new Car('Toyota', 'Tacoma', 2028, Turbo);

console.log(myCar);


class person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

getFullName() {
    return `${this.firstName} ${this.lastName}`;
}

setFirstName(firstName) {
    this.firstName = firstName;
}

setLastName(lastName) {
    this.lastName = lastName;
}

