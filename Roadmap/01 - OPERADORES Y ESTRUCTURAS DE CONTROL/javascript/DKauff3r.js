// Operadores aritméticos
let a = 10;  // Asignación de valor
let b = 20;  // Asignación de valor

let suma = a + b;  // Suma: 10 + 20 = 30
let resta = a - b;  // Resta: 10 - 20 = -10
let multiplicacion = a * b;  // Multiplicación: 10 * 20 = 200
let division = b / a;  // División: 20 / 10 = 2
let modulo = b % a;  // Módulo: 20 % 10 = 0
let incremento = ++a;  // Incremento: a = a + 1
let decremento = --b;  // Decremento: b = b - 1

console.log("Operadores aritméticos:");
console.log(suma, resta, multiplicacion, division, modulo, incremento, decremento);

// Operadores de comparación
let igual = a == b;  // Igualdad: false
let estrictamenteIgual = a === b;  // Estricta igualdad: false
let diferente = a != b;  // Diferente: true
let estrictamenteDiferente = a !== b;  // Estrictamente diferente: true
let mayorQue = a > b;  // Mayor que: false
let menorQue = a < b;  // Menor que: true
let mayorOIgualQue = a >= b;  // Mayor o igual que: false
let menorOIgualQue = a <= b;  // Menor o igual que: true

console.log("Operadores de comparación:");
console.log(igual, estrictamenteIgual, diferente, estrictamenteDiferente, mayorQue, menorQue, mayorOIgualQue, menorOIgualQue);

// Operadores lógicos
let yLogico = (a < b) && (a > 0);  // AND lógico: true && true = true
let oLogico = (a > b) || (a > 0);  // OR lógico: false || true = true
let negacionLogica = !(a < b);  // Negación lógica: !true = false

console.log("Operadores lógicos:");
console.log(yLogico, oLogico, negacionLogica);

// Operadores de asignación
let x = 5;  // Asignación de valor
x += 10;  // Asignación de suma: x = x + 10 = 15
x -= 3;  // Asignación de resta: x = x - 3 = 12
x *= 2;  // Asignación de multiplicación: x = x * 2 = 24
x /= 4;  // Asignación de división: x = x / 4 = 6
x %= 2;  // Asignación de módulo: x = x % 2 = 0

console.log("Operadores de asignación:");
console.log(x);

// Operadores de identidad (en JS no hay identidad, usamos comparación estricta)

// Operadores de pertenencia (en JS, el operador 'in' para objetos)
let objeto = { nombre: "Juan", edad: 30 };
let pertenencia = "nombre" in objeto;  // 'nombre' existe en objeto: true

console.log("Operadores de pertenencia:");
console.log(pertenencia);

// Operadores a nivel de bits
let bitAND = 5 & 1;  // AND bit a bit: 0101 & 0001 = 0001 (1)
let bitOR = 5 | 1;  // OR bit a bit: 0101 | 0001 = 0101 (5)
let bitXOR = 5 ^ 1;  // XOR bit a bit: 0101 ^ 0001 = 0100 (4)
let bitNOT = ~5;  // NOT bit a bit: ~0101 = 1010 (en complemento a dos)
let desplazamientoIzq = 5 << 1;  // Desplazamiento a la izquierda: 0101 << 1 = 1010 (10)
let desplazamientoDer = 5 >> 1;  // Desplazamiento a la derecha: 0101 >> 1 = 0010 (2)

console.log("Operadores a nivel de bits:");
console.log(bitAND, bitOR, bitXOR, bitNOT, desplazamientoIzq, desplazamientoDer);

// Estructuras de control

// Condicionales
let num = 10;
if (num > 5) {
  console.log("El número es mayor que 5");
} else if (num < 5) {
  console.log("El número es menor que 5");
} else {
  console.log("El número es igual a 5");
}

// Iterativas

// Bucle for
for (let i = 0; i < 5; i++) {
  console.log("For loop:", i);
}

// Bucle while
let i = 0;
while (i < 5) {
  console.log("While loop:", i);
  i++;
}

// Bucle do-while
i = 0;
do {
  console.log("Do-while loop:", i);
  i++;
} while (i < 5);

// Manejo de excepciones
try {
  let resultado = 10 / 0;
  if (!isFinite(resultado)) {
    throw new Error("División por cero no permitida");
  }
  console.log(resultado);
} catch (error) {
  console.log("Error:", error.message);
}

// DIFICULTAD EXTRA: Números pares entre 10 y 55 (excluyendo 16 y múltiplos de 3)
console.log("Dificultad extra:");
for (let i = 10; i <= 55; i++) {
  if (i % 2 === 0 && i !== 16 && i % 3 !== 0) {
    console.log(i);
  }
}
