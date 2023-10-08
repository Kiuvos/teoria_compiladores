function reconocerCadena(matrizTransicion, cadena) {
    let estadoActual = 'A';  // Estado inicial A
    for (let i = 0; i < cadena.length; i++) {
      const caracter = cadena.charAt(i);
      if (!matrizTransicion[estadoActual][caracter]) {
        return false;  // Si no hay transición para el caracter, la cadena no es válida
      }
      estadoActual = matrizTransicion[estadoActual][caracter];
    }
  
    const estadosFinales = new Set(['C', 'D', 'E', 'H', 'K', 'M', 'N', 'O', 'P', 'Q', 'R']);
    return estadosFinales.has(estadoActual);
  }
  
  // Matriz de transición del AFD
  const matrizTransicion = {
    'A': {'a': 'B', 'b': 'C', 'c': 'D', 'd': 'E'},
    'B': {'a': 'F', 'b': 'C', ':': 'G'},
    'C': {'e': 'H', ':': 'G'},
    'D': {'e': 'H', ':': 'G'},
    'E': {':': 'I'},
    'F': {':': 'G'},
    'G': {'a': 'J', 'f': 'K'},
    'H': {},
    'I': {'a': 'L', 'f': 'M'},
    'J': {'a': 'N', 'b': 'O'},
    'K': {'e': 'P'},
    'L': {'a': 'Q', 'b': 'R'},
    'M': {},
    'N': {'e': 'P'},
    'O': {'e': 'P'},
    'P': {},
    'Q': {},
    'R': {}
  };
  
  // Cadena a verificar
  const cadena = "a:a";
  
  if (reconocerCadena(matrizTransicion, cadena)) {
    console.log(`La cadena "${cadena}" es aceptada por la definición regular.`);
  } else {
    console.log(`La cadena "${cadena}" no es aceptada por la definición regular.`);
  }
  