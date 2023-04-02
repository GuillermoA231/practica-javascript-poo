/*7- Nos piden realizar una agenda telefónica de contactos. Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales. Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10). Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla. existeContacto(Conctacto): indica si el contacto pasado existe o no. listarContactos(): Lista toda la agenda buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono. eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla agendaLlena(): indica si la agenda está llena. huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas funcionalidades. */

let inputConsola = -1;
let mensajeIntroduccion = `TRABAJO PRACTICO NUMERO 7 - AGENDA
0 - SALIR DE LA CONSOLA
1 - AÑADIR CONTACTO
2 - VERIFICAR CONTACTO 
3 - LISTA DE CONTACTOS
4 - BUSCAR TELEFONO 
5 - ELIMINAR CONTACTO
6 - ESTADO DE LA AGENDA
7 - HUECOS LIBRES`;
let inputUsuario;
class Contacto {
  constructor(nombre, telefono) {
    this._nombre = nombre;
    this._telefono = telefono;
  }
  get nombre() {
    return this._nombre;
  }
  set nombre(valor) {
    this._nombre = valor;
  }
  get telefono() {
    return this._telefono;
  }
  set telefono(valor) {
    this._telefono = valor;
  }
  esIgual(obj) {
    return this._nombre === obj._nombre;
  }
}
class Agenda {
  #tamanio
  constructor(contactos = [], tamanio = 10) {
    tamanio === undefined ? (tamanio = 10) : tamanio;
    contactos = [];
    this.#tamanio = tamanio;
    this._contactos = contactos;
  }
  get tamanio(){
    return this.#tamanio;
  }
  set tamanio(nuevoTamanio){
    this.#tamanio = nuevoTamanio
  }
  get contactos(){
    return this.#tamanio;
  }
  agregarContacto(nombre, telefono) {
    let contacto = new Contacto(nombre, telefono);
    this._contactos.length < this.tamanio
      ? this._contactos.push(contacto)
      : alert("Agenda Llena");
  }
  buscarContactoPorTelefono(telefono) {
    return this._contactos.find(c => c.telefono === telefono) || null;
  }
  existeContacto(contacto) {
    return typeof contacto === "string"
      ? this._contactos.find(
          (element) => element.nombre.toLowerCase() === contacto.toLowerCase()
        ) !== undefined
        ? "El contacto si existe"
        : "El contacto no existe"
      : "Ingrese un valor válido";
  }

  buscarContacto(nombre) {
    let contacto = this._contactos.find(
      (c) => c.nombre.toLowerCase() === nombre.toLowerCase()
    );
    //return contacto ? `El número del contacto ${contacto.nombre} es ${contacto.telefono ?? 'desconocido'}` : "El contacto no existe";
    return contacto
      ? `El número del contacto ${contacto.nombre} es ${contacto.telefono}`
      : `El contacto no existe`;
  }

  listarContactos() {
    let listado = [];
    this._contactos.forEach((contacto) => {
      listado.push(
        `Nombre: ${contacto.nombre} - Telefono: ${contacto.telefono}\n`
      );
    });
    return listado;
  }
  eliminarContacto(contacto) {
    let index =
      typeof contacto === "string"
        ? this._contactos.findIndex((element) => element.nombre === contacto)
        : typeof contacto === "number"
        ? this._contactos.findIndex((element) => element.telefono === contacto)
        : -1;
    this._contactos.splice(index, 1);
  }
  agendaLlena() {
    let estaLlena =
      this._contactos.length >= this.#tamanio-1
        ? "La agenda esta llena"
        : "La agenda no esta llena";
    return estaLlena;
  }
  huecosLibres() {
    return `Existe un total de ${
      this.#tamanio - this._contactos.length
    } huecos disponibles`;
  }
}function crearNombre() {
  let nombre = "";
  do {
    nombre = prompt("Nombre del contacto.");
  } while (nombre === "");
  return nombre;
}

function crearTelefono() {
  let telefono = "";
  do {
    telefono = prompt("Telefono del contacto (solo numeros).");
  } while (telefono === "" || isNaN(telefono));
  return telefono;
}

let agenda1 = new Agenda([],10);
/*`TRABAJO PRACTICO NUMERO 7 - AGENDA\n1 - CREAR AGENDA\n2 - AÑADIR CONTACTO\n3 - VERIFICAR CONTACTO \n4 - LISTA DE CONTACTOS\n5 - BUSCAR TELEFONO \n6 - ELIMINAR CONTACTO\n7 - VERIFICAR SI HAY ESPACIO DISPONIBLE\n8 - HUECOS LIBRES`; */
function consola(input) {
  switch (input) {
    case 0:
      break;
    case 1:
      agenda1.agregarContacto(crearNombre(), crearTelefono());
      return;
    case 2:
      inputUsuario = prompt("Ingrese el nombre del contacto");
      alert(agenda1.existeContacto(inputUsuario));
      return;
    case 3:
      alert(agenda1.listarContactos());
      return;
    case 4:
      inputUsuario = prompt("Ingrese el nombre del contacto");
      alert(agenda1.buscarContacto(inputUsuario));
      return;
    case 5:
      inputUsuario = prompt(`Ingrese el nombre o teléfono del contacto`);
      agenda1.eliminarContacto(inputUsuario);
      return;
    case 6:
      alert(agenda1.agendaLlena());
      return;
    case 7:
      alert(agenda1.huecosLibres());
      return;
    default:
      return;
  }
}

do {
  alert(mensajeIntroduccion);
  inputConsola = Number(prompt("Ingrese su elección"));
  consola(inputConsola);
} while (inputConsola !== 0);
