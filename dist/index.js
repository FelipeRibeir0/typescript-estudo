"use strict";
let age = 5;
const firstName = "Felipe";
const isValid = true;
let idk = 5;
const ids = [1, 2, 3, 4, 5];
const booleans = [true, false, false, true, true];
const names = ["Felipe", "Ribeiro"];
// Tupla
const person = [1, '1'];
// Lista de Tuplas
const people = [
    [1, 'Felipe'],
    [2, 'Ribeiro']
];
// Intersections
const productId = false;
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
})(Direction || (Direction = {}));
const direction = Direction.Up;
// Type Assertions
const productName = "Boné";
// let itemId = productName as string;
let itemId = productName;
console.log(age);
