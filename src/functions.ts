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

// Overload

function soma(a: number, b: number): number;
function soma(a: string, b: string): string;

function soma(a: number | string, b: number | string): number | string {
  if (typeof a === "number" && typeof b === "number") {
    return a + b; // soma numérica
  }
  if (typeof a === "string" && typeof b === "string") {
    return a + b; // concatenação string
  }
  throw new Error("Parâmetros inválidos");
}

const resultado1 = soma(10, 20);
const resultado2 = soma("Oi, ", "TS");

// Any

function processaDado(dado: any) {
  console.log("Valor recebido:", dado);
  dado.qualquerCoisa = 123; 
}

processaDado({ nome: "Felipe" }); 
processaDado(42);
processaDado("Hello World");