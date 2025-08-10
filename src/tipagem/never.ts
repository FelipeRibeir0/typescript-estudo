function funcaoVoid(): void {
  console.log("Executando funcaoVoid");
}

function funcaoNeverLoop(): never {
  // Essa função gera um erro de loop infinito
  console.log("Executando funcaoNeverLoop");
  while (true) {}
}

function funcaoNeverErro(): never {
  console.log("Executando funcaoNeverErro");
  throw new Error("Erro gerado");
}

// Void
console.log('Chamada "funcaoVoid()":', funcaoVoid());

console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

// Never - Error
try {
  console.log('Chamada "funcaoNeverErro()":', funcaoNeverErro());
} catch {
  console.log('A função "funcaoNeverErro()" foi chamada e entrou no "catch"');
}

console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=");

// Never - Loop
try {
  console.log('Chamada "funcaoNeverLoop()":', funcaoNeverLoop());
} catch {
  console.log('A função "funcaoNeverLoop()" foi chamada e entrou no "catch"');
}