/*7- Nos piden realizar una agenda telefónica de contactos. Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales. Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10). Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla. existeContacto(Conctacto): indica si el contacto pasado existe o no. listarContactos(): Lista toda la agenda buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono. eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla agendaLlena(): indica si la agenda está llena. huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas funcionalidades. */

let agendasArreglo = [];
let inputUsuario = -1;
let mensajeIntroduccion = `TRABAJO PRACTICO NUMERO 7 - AGENDA\n1 - CREAR AGENDA\n2 - AÑADIR CONTACTO\n3 - VERIFICAR CONTACTO \n4 - LISTA DE CONTACTOS\n5 - BUSCAR TELEFONO \n6 - ELIMINAR CONTACTO\n7 - ESTADO DE LA AGENDA\n8 - HUECOS LIBRES`;
class Contacto {
  constructor(nombre, telefono) {
    this._nombre = nombre.toLowerCase();
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
  constructor(contactos, tamanio) {
    tamanio === undefined ? (tamanio = 10) : tamanio;
    contactos = [];
    this._tamanio = tamanio;
    this._contactos = contactos;
  }
  agregarContacto(nombre, telefono) {
    let contacto = new Contacto(nombre, telefono);
    this._contactos.length < this._tamanio
      ? this._contactos.push(contacto)
      : console.log("Agenda Llena");
  }
  existeContacto(contacto) {
    contacto = contacto.toLowerCase();
    return typeof contacto === "string"
      ? this._contactos.find((element) => element.nombre === contacto)
      : typeof contacto === "number"
      ? this._contactos.find((element) => element.telefono === contacto)
      : "No existe el contacto";
  }
  listarContactos() {
    let listado = [];
    this._contactos.forEach((contacto) => {
      listado.push(
        `Nombre: ${contacto.nombre} - Telefono: ${contacto.telefono}`
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
      this._contactos.length >= this._tamanio
        ? "La agenda esta llena"
        : "La agenda no esta llena";
    return estaLlena;
  }
  huecosLibres() {
    `Existe un total de ${
      this._tamanio - this._contactos.length
    } huecos disponibles`;
  }
}
function crearContacto() {
  let nombre, telefono;
  nombre = prompt("Nombre del contacto.").trim();
  telefono = Number(prompt("Telefono del contacto."));
  return `${nombre},${telefono}`;
}
function crearNuevaAgenda() {
  let tamanioNuevaAgenda;
  let contactoNuevaAgenda = [];
  //   let nuevoContacto = Agenda.agregarContacto(crearContacto());
  let contador = 0;
  if (confirm("¿Deseas crear un nuevo objeto Agenda?")) {
    let nombreObjeto = "agenda" + contador;
    while (window[nombreObjeto]) {
      contador++;
      nombreObjeto = "agenda" + contador;
    }
    tamanioNuevaAgenda = prompt("Ingresa el tamaño de la agenda:");
    if (confirm(`desea crear un contacto para su agenda?`)) {
      let nuevoContacto = crearContacto();
      contactoNuevaAgenda.push(nuevoContacto);
    } else {
      contactoNuevaAgenda = contactoNuevaAgenda;
    }
    let nuevoObjeto = new Agenda(contactoNuevaAgenda, tamanioNuevaAgenda);
    window[nombreObjeto] = nuevoObjeto;
    contador++;
    agendasArreglo.push(nuevoObjeto);
    return nuevoObjeto;
  } else {
    return null;
  }
}
function consola(input) {
  switch (input) {
    case 0:
      break;
    case 1:
      crearNuevaAgenda();
      return;
    case 2:
      return;
    case 3:
      return;
    case 4:
      return;
    case 5:
      return;
    case 6:
      return;
    case 7:
      return;
    case 8:
      return;
    default:
      return;
  }
}
do {
    console.log(mensajeIntroduccion);
  inputUsuario = Number(console.ReadLine("Ingrese su elección"));
  consola(inputUsuario);
} while (inputUsuario !== 0);
