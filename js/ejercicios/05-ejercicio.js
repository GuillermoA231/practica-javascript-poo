/*5- Crea una clase llamada Persona que siga las siguientes condiciones: Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo. Los métodos que se debe poder utilizar son: mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación. Para realizar este método tener en cuenta la siguiente tabla de generaciones:*/
/*
Generación Z
MARCO TEMPORAL EN ESPAÑA: 1994-2010
POBLACIÓN: 7.800.000
CIRCUNSTANCIA HISTORIA: Expansión masiva de internet
RASGO CARACTERISTICO: Irreverencia

Generación Y millennials
MARCO TEMPORAL: 1981-1993
POBLACIÓN: 7.200.000
CIRCUNSTANCIA HISTORIA: Inicio de la digilitación
RASGO CARACTERISTICO: Frustración

Generación X
MARCO TEMPORAL: 1969-1980
POBLACION: 9.300.000
CIRCUNSTANCIA HISTORICA: Crisis del 73 y transición española
RASGO CARACTERISTICO: Obsesión por el éxito

Baby Boom 
MARCO TEMPORAL: 1949-1968
POBLACION: 12.200.000
CIRCUNSTANCIA HISTORICA: Paz y explosión demográfica
RASGO CARACTERISTICO: Ambición

Silent Generation los niños de la posguerra
MARCO TEMPORAL: 1930-1948
POBLACION: 6.300.000
CIRCUNSTANCIA HISTORIA: CONFLICTOS BELICOS
RASCO CARACTERISTICO: AUSTERIDAD*/
const FECHA = new Date();
class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura) {
    if (typeof nombre !== "string" || !isNaN(nombre)) {
      throw new Error(
        `El nombre debe ser una cadena de caracteres, usted ingresó un ${typeof nombre}`
      );
    }

    if (isNaN(edad) || edad < 0) {
      throw new Error("La edad debe ser un número positivo.");
    }

    if (
      sexo.toLowerCase() != "m" &&
      sexo.toLowerCase() != "h"
    ) {
        console.log(sexo === "m")
        console.log(sexo === "h")
      throw new Error(`El sexo debe ser "m" o "h", usted ingresó ${sexo}`);
    }

    if (isNaN(peso) || peso < 0) {
      throw new Error("El peso debe ser un número positivo.");
    }

    if (isNaN(altura) || altura < 0) {
      throw new Error("La altura debe ser un número positivo.");
    }
    this._nombre = nombre;
    this._edad = edad;
    this._dni = this.generarDni;
    this._sexo = sexo;
    this._peso = peso;
    this._altura = altura;
    this._fechaNacimiento = FECHA.getFullYear() - this._edad;
  }
  set cambiarNombre(valor) {
    this._nombre = valor;
  }
  set cambiarEdad(valor) {
    this._edad = valor;
  }
  set cambiarDni(valor) {
    this._dni = valor;
  }
  set cambiarSexo(valor) {
    this._sexo = valor;
  }
  set cambiarPeso(valor) {
    this._peso = valor;
  }
  set cambiarAltura(valor) {
    this._altura = valor;
  }
  /*GENZ 1994-2010 - GENY 1981-1993 - GENX 1969-1980 - BABYBOOM 1949-1968 - SILENTGENERATION 1930-1948 */
  get mostrarGeneracion() {
    let generacion, rasgo;
    this._fechaNacimiento >= 2010
      ? ((generacion = "GEN A"), (rasgo = "Tecnologico"))
      : this._fechaNacimiento >= 1994
      ? ((generacion = "GEN Z"), (rasgo = "Irreverencia"))
      : this._fechaNacimiento >= 1981
      ? ((generacion = "GEN Y"), (rasgo = "Frustración"))
      : this._fechaNacimiento >= 1969
      ? ((generacion = "GEN X"), (rasgo = "Obsesión por el exito"))
      : this._fechaNacimiento >= 1949
      ? ((generacion = "BABY BOOMER"), (rasgo = "Ambición"))
      : this._fechaNacimiento >= 1930
      ? ((generacion = "SILENT GEN"), (rasgo = "Austeridad"))
      : ((generacion = "Muy Anciano"), (rasgo = "Antiguo"));
    return `Generación: ${generacion} - Rasgo: ${rasgo}`;
  }
  get mostrarDatos() {
    return `Nombre: ${this._nombre} - Edad: ${this._edad} - DNI: ${this._dni} - Sexo: ${this._sexo} - Peso: ${this._peso} - Altura: ${this._altura} - Fecha de nacimiento: ${this._fechaNacimiento}`;
  }
  get esMayorDeEdad() {
    return this._edad >= 18 ? true : false;
  }
  get generarDni() {
    return Math.floor(10000000 + Math.random() * 90000000);
  }
}
function crearPersonas(cantidad) {
  let personas = [];
  let seguirCreando;
  do {
    let nombre = prompt("Ingresa el nombre de la persona:");
    let edad = parseInt(prompt("Ingresa la edad de la persona:"));
    let sexo = prompt("Ingresa el sexo de la persona:");
    let peso = parseFloat(
      prompt("Ingresa el peso de la persona en kilogramos:")
    );
    let altura = parseFloat(
      prompt("Ingresa la altura de la persona en metros:")
    );
    let persona = new Persona(nombre, edad, null, sexo.toLowerCase(), peso, altura);
    personas.push(persona);
    seguirCreando = confirm('Crear otra persona?');
  } while (seguirCreando);
  return personas;
}

let listaPersonas = crearPersonas();

for (let i = 0; i < listaPersonas.length; i++) {
  document.write(`<p>${listaPersonas[i].mostrarDatos}</p> ${listaPersonas[i].mostrarGeneracion}<hr>`);
}
