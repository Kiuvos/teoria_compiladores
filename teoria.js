function reconocerCadena(matrizTransicion, cadena) {
  let estadoActual = 'A';  // Comenzamos en el estado inicial A
  for (let i = 0; i < cadena.length; i++) {
    const caracter = cadena.charAt(i);
    if (!matrizTransicion[estadoActual][caracter]) {
      return false;  // Si no hay transición para el caracter, la cadena no es válida
    }
    estadoActual = matrizTransicion[estadoActual][caracter];
  }

  // Después de procesar toda la cadena, verificamos si el estado actual es uno de los estados finales
  const estadosFinales = new Set(['R']);
  return estadosFinales.has(estadoActual);
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

// Cadena a verificar
const cadena = "lgcdsdm";

if (reconocerCadena(matrizTransicion, cadena)) {
  console.log(`La cadena "${cadena}" es aceptada por la definición regular.`);
} else {
  console.log(`La cadena "${cadena}" no es aceptada por la definición regular.`);
}
