//Ingrese la Cadena 
const cadenaU = "l_[1,1]"; //Cadena ingresada por el usuario
console.log("La cadena ingresada por el usuario es:",cadenaU);

//Transformamos la cadena ingresada por el usuario
function cadenaAutomata(cadena) {
  let resultado = '';
  for (let i = 0; i < cadenaU.length; i++) {
    const caracter = cadenaU[i].toLowerCase();
    if (/[a-z]/.test(caracter)) {
      resultado += 'l';
    }else if (/[0-9]/.test(caracter)) {
      resultado += 'd';
    }else if (caracter === '_') {
      resultado += 'g';
    }else if (caracter === '[') {
      resultado += 'c';
    }else if (caracter === ']') {
      resultado += 'm';
    }else if (caracter === ',') {
      resultado += 's';
    }else {
      resultado += cadenaU[i];
    }
  }
  return resultado;
}
//Implementamos el metodo cadenAutomata pasando como parametro la cadena del usuario
const cadena = cadenaAutomata(cadenaU);
console.log("La cadena para el automata es", cadena);
//
function reconocerCadena(matrizTransicion, cadena) {
  let estado = 'A';  // Estado inicial
  for (let i = 0; i < cadena.length; i++) {
    const caracter = cadena.charAt(i);
    if (!matrizTransicion[estado][caracter]) {
      return false;  //Si es vacio, no hay transicion, cadena no valida
    }
    estado = matrizTransicion[estado][caracter];
  }
  //Verificamos si el estado actual es uno de los estados finales
  const estadosFinales = new Set(['R']);
  return estadosFinales.has(estado);
}

// Matriz del AFD
const matrizTransicion = {
  'A': {'l': 'B'},
  'B': {'l': 'C', 'd': 'C', 'g': 'D'},
  'C': {'l': 'C', 'd': 'C', 'g': 'E'},
  'D': {'l': 'C', 'd': 'C', 'g': 'F', 'c': 'G'},
  'E': {'g': 'F', 'c': 'G'},
  'F': {'g': 'H', 'c': 'I'},
  'G': {'d': 'J'},
  'H': {'d': 'K', 'c': 'G'},
  'I': {'l': 'L'},
  'J': {'d': 'J', 's': 'M'},
  'K': {'c': 'I'},
  'L': {'l': 'N', 'd': 'N','g': 'Ñ'},
  'M': {'d': 'O'},
  'N': {'l': 'N', 'd': 'N', 'g': 'P'},
  'Ñ': {'l': 'N', 'd': 'N', 'g': 'Q'},
  'O': {'d': 'O', 'm': 'R'},
  'P': {'g': 'Q'},
  'Q': {'g': 'S'},
  'R': {},
  'S': {'g': 'T'},
  'T': {'d': 'Q', 's': 'U'},
  'U': {'l': 'V'},
  'V': {'l': 'W', 'd': 'W', 'g': 'X'},
  'W': {'l': 'W', 'd': 'W', 'g': 'Y'},
  'X': {'l': 'W', 'd': 'W', 'g': 'Z'},
  'Y': {'g': 'Z'},
  'Z': {'g': 'AA'},
  'AA': {'g': 'AB'},
  'AB': {'m': 'R'}
};
//Implementamos el metodo reconocerCadena
if (reconocerCadena(matrizTransicion, cadena)) {
  console.log(`La cadena "${cadena}" es aceptada por la definición regular.`);
} else {
  console.log(`La cadena "${cadena}" no es aceptada por la definición regular.`);
}
