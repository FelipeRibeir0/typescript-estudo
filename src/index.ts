let age: number = 5;
const firstName: string = "Felipe";
const isValid: boolean = true;
let idk: any = 5;

const ids: number[] = [1,2,3,4,5];
const booleans: boolean[] = [true, false, false, true, true];
const names: string[] = ["Felipe", "Ribeiro"]

// Tupla

const person: [number, string] = [1,'1']

// Lista de Tuplas

const people: [number, string][] = [
    [1, 'Felipe'],
    [2, 'Ribeiro']
];

// Intersections

const productId: string | number | boolean = false;

// Enum

enum Direction {
    Up = 1,
    Down = 2
}

const direction = Direction.Up;

// Type Assertions

const productName: any = "Boné";

// let itemId = productName as string;
let itemId = <string>productName;

console.log(age)