interface IPerson {
  id: number;
  name: string;
  age: number;
  sayMyName(): string;
}

class Person implements IPerson {
  readonly id: number;
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }

  sayMyName(): string {
    return this.name;
  }
}

// Person Refatorado
class PersonRefact {
  constructor(readonly id: number, name: string, age: number) {}
}

class Employee extends Person {
  constructor(id: number, name: string, age: number) {
    super(id, name, age);
  }
}

const person1 = new Person(1, "Felipe", 22);