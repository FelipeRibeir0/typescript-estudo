type NumberOrString = number | string;

function person(name:string, age:NumberOrString, address:{street:string, number:NumberOrString}) {
    console.log(name, age, address)
}

person('Felipe', '22', {street: 'Minha rua', number:593});

let user:{
    age: NumberOrString;
};

user = {
    age: 22
};

console.log(user)