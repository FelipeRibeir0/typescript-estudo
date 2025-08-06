"use strict";
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    sayMyName() {
        return this.name;
    }
}
// Person Refatorado
class PersonRefact {
    constructor(id, name, age) {
        this.id = id;
    }
}
class Employee extends Person {
    constructor(id, name, age) {
        super(id, name, age);
    }
}
const person1 = new Person(1, "Felipe", 22);
