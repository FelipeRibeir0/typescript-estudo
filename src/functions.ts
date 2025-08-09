interface MathFunc {
    (number1: number, number2: number): number;
}

const sum: MathFunc = (number1: number, number2: number): number => {
return number1 + number2;
};

const sub: MathFunc = (number1: number, number2: number): number =>{
    return number1 - number2
}

const value = sum(1, 3);

const log = (message: string): void => {
    console.log(message);
}
