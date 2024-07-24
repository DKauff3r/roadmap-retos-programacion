// Funciones básicas en JavaScript

// Función sin parámetros ni retorno
function saludar() {
    console.log("Hola, mundo!");
  }
  
  // Llamada a la función sin parámetros ni retorno
  saludar();
  
  // Función con un parámetro
  function saludarNombre(nombre) {
    console.log("Hola, " + nombre + "!");
  }
  
  // Llamada a la función con un parámetro
  saludarNombre("Juan");
  
  // Función con varios parámetros
  function sumar(a, b) {
    console.log(a + b);
  }
  
  // Llamada a la función con varios parámetros
  sumar(5, 3);
  
  // Función con retorno
  function multiplicar(a, b) {
    return a * b;
  }
  
  // Llamada a la función con retorno
  let resultadoMultiplicacion = multiplicar(4, 2);
  console.log("Resultado de multiplicar 4 y 2:", resultadoMultiplicacion);
  
  // Función dentro de función
  function funcionExterna() {
    console.log("Soy la función externa");
  
    function funcionInterna() {
      console.log("Soy la función interna");
    }
  
    funcionInterna();
  }
  
  // Llamada a la función que contiene otra función
  funcionExterna();
  
  // Uso de funciones nativas del lenguaje
  let numero = parseInt("123");
  console.log("Resultado de parseInt:", numero);
  
  // Variable local y global
  
  let globalVar = "Soy una variable global";
  
  function ejemploVariables() {
    let localVar = "Soy una variable local";
    console.log(globalVar); // Acceso a variable global dentro de la función
    console.log(localVar);  // Acceso a variable local dentro de la función
  }
  
  ejemploVariables();
  //console.log(localVar);  // Esto causará un error porque localVar no está definida fuera de la función
  
  // DIFICULTAD EXTRA
  
  function desafioExtra(param1, param2) {
    let count = 0;
  
    for (let i = 1; i <= 100; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log(param1 + param2);
      } else if (i % 3 === 0) {
        console.log(param1);
      } else if (i % 5 === 0) {
        console.log(param2);
      } else {
        console.log(i);
        count++;
      }
    }
  
    return count;
  }
  
  let vecesImpresoNumero = desafioExtra("Fizz", "Buzz");
  console.log("Cantidad de veces que se imprimió un número en lugar de textos:", vecesImpresoNumero);
  