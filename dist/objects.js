"use strict";
const user = {
    firstName: "Felipe",
    age: 22,
    email: "felipe@doe.com",
    orders: [{ productId: "1", price: 200 }],
    register() {
        return "a";
    },
};
const printLog = (message) => { };
printLog(user.password);
const author = {
    age: 43,
    books: ["Dom Quixote"],
    email: "machado@assis.com",
    firstName: "Machado",
    orders: [],
    register() {
        return "a";
    },
};
const emailUser = {
    email: "felipe@doe.com",
    firstName: "Felipe",
    login() {
        return "a";
    },
};
const newAuthor = {
    email: "author@gmail.com",
    firstName: "Author",
    books: [],
    login() {
        return "a";
    },
};
const grade = 1;
