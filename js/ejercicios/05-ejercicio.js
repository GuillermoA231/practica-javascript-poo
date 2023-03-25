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
    typeof nombre !== "string"
      ? () => {
          throw new Error(
            `El nombre debe de ser un texto, usted ingreso un ${typeof nombre}`
          );
        }
      : false;
    isNaN(edad) || edad < 0
      ? () => {
          throw new Error(`La edad debe de ser un número positivo`);
        }
      : false;
    isNaN(dni) || dni.toString().length !== 8
      ? () => {
          throw new Error(`El dni debe de ser un numero de 8 digitos`);
        }
      : false;
    typeof sexo !== "char" ||
    sexo.toLowerCase() !== "m" ||
    sexo.toLowerCase() !== "h"
      ? () => {
          throw new Error(`debe de ingresar H (Hombre) o M (Mujer)`);
        }
      : false;

    isNaN(peso) || peso < 0
      ? () => {
          throw new Error(`Debe de escribir un número positivo para el peso`);
        }
      : false;
    isNaN(altura) || altura < 0
      ? () => {
          throw new Error(`Debe de escribir un número positivo para la altura`);
        }
      : false;
    this._nombre = nombre;
    this._edad = edad;
    this._dni = dni || this.generarDni;
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
      ? ((generacion = "GEN Z"), (rasgo = "Ireverencia"))
      : this._fechaNacimiento >= 1981
      ? ((generacion = "GEN Y"), (rasgo = "Frustración"))
      : this._fechaNacimiento >= 1969
      ? ((generacion = "GEN X"), (rasgo = "Obsesión por el exito"))
      : this._fechaNacimiento >= 1949
      ? ((generacion = "BABY BOOMER"), (rasgo = "Ambición"))
      : this._fechaNacimiento >= 1930
      ? ((generacion = "SILENT GEN"), (rasgo = "Austeridad"))
      : ((generacion = "Muy Anciano"), (rasgo = "Antiguo"));
    return generacion + " - " + rasgo;
  }
  get mostrarDatos() {
    return `Nombre: ${this._nombre} - Edad: ${this._edad} - DNI: ${this._dni} - Sexo: ${this._sexo} - Peso: ${this._peso} - Altura: ${this._altura} - Fecha de nacimiento: ${this._fechaNacimiento}`;
  }
  get esMayorDeEdad() {
    return this._edad >= 18 ? true : false;
  }
  get generarDni() {
    this._dni = Math.floor(10000000 + Math.random() * 90000000);
  }
}
function crearPersonas(cantidad) {
    let personas = [];
    for (let i = 0; i < cantidad; i++) {
      let nombre = prompt("Ingresa el nombre de la persona:");
      let edad = parseInt(prompt("Ingresa la edad de la persona:"));
      let dni = Persona.generarDni;
      let sexo = prompt("Ingresa el sexo de la persona:");
      let peso = parseFloat(prompt("Ingresa el peso de la persona en kilogramos:"));
      let altura = parseFloat(prompt("Ingresa la altura de la persona en metros:"));
      let persona = new Persona(nombre, edad, dni, sexo, peso, altura);
      personas.push(persona);
    }
    return personas;
  }
  
  let cantidadPersonas = parseInt(prompt("Ingresa la cantidad de personas a crear:"));
  let listaPersonas = crearPersonas(cantidadPersonas);
  
  for (let i = 0; i < listaPersonas.length; i++) {
    document.write(`${listaPersonas[i].mostrarDatos}`);
  }
