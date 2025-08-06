// Type
type Order = {
  productId: string | number;
  price: number;
};

type User = {
  firstName: string;
  age: number;
  email: string;
  password?: string;
  orders: Order[];
  register(): string;
};

const user: User = {
  firstName: "Felipe",
  age: 22,
  email: "felipe@doe.com",
  orders: [{ productId: "1", price: 200 }],
  register() {
    return "a";
  },
};

const printLog = (message?: string) => {};

printLog(user.password!);

// Unions

type Author = {
  books: string[];
};

const author: Author & User = {
  age: 43,
  books: ["Dom Quixote"],
  email: "machado@assis.com",
  firstName: "Machado",
  orders: [],
  register() {
    return "a";
  },
};

// Interfaces

interface UserInterface {
  readonly firstName: string;
  email: string;
  login(): string;
}

const emailUser: UserInterface = {
  email: "felipe@doe.com",
  firstName: "Felipe",
  login() {
    return "a";
  },
};

interface AuthorInterface {
  books: string[];
}

const newAuthor: UserInterface & AuthorInterface = {
  email: "author@gmail.com",
  firstName: "Author",
  books: [],
  login() {
    return "a";
  },
};

type Grade = number | string;
const grade: number | string = 1;
