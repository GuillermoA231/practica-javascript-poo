/*7- Nos piden realizar una agenda telefónica de contactos. Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual a otro cuando sus nombres son iguales. Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto (10). Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede almacenar más contactos indicar por pantalla. existeContacto(Conctacto): indica si el contacto pasado existe o no. listarContactos(): Lista toda la agenda buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono. eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla agendaLlena(): indica si la agenda está llena. huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones por consola para probar todas estas funcionalidades. */

let agendasArreglo = [];
let inputConsola = -1;
let mensajeIntroduccion = `TRABAJO PRACTICO NUMERO 7 - AGENDA\n1 - CREAR AGENDA\n2 - AÑADIR CONTACTO\n3 - VERIFICAR CONTACTO \n4 - LISTA DE CONTACTOS\n5 - BUSCAR TELEFONO \n6 - ELIMINAR CONTACTO\n7 - ESTADO DE LA AGENDA\n8 - HUECOS LIBRES`;
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
    return typeof contacto === "string"
      ? this._contactos.find(
          (element) => element.nombre.toLowerCase() === contacto.toLowerCase()
        ) !== undefined
        ? "El contacto si existe"
        : "El contacto no existe"
      : typeof contacto === "number"
      ? this._contactos.find(
          (element) => element.telefono === Number(contacto)
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
function crearNombre() {
  let nombre = prompt("Nombre del contacto.");
  return nombre;
}
function crearTelefono() {
  let telefono = prompt("Telefono del contacto.");
  return telefono;
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
    let nuevoObjeto = new Agenda(contactoNuevaAgenda, tamanioNuevaAgenda);
    window[nombreObjeto] = nuevoObjeto;
    contador++;
    agendasArreglo.push(nuevoObjeto);
    return nuevoObjeto;
  } else {
    return null;
  }
}
let agenda1 = new Agenda();
agendasArreglo.push(agenda1);
/*`TRABAJO PRACTICO NUMERO 7 - AGENDA\n1 - CREAR AGENDA\n2 - AÑADIR CONTACTO\n3 - VERIFICAR CONTACTO \n4 - LISTA DE CONTACTOS\n5 - BUSCAR TELEFONO \n6 - ELIMINAR CONTACTO\n7 - VERIFICAR SI HAY ESPACIO DISPONIBLE\n8 - HUECOS LIBRES`; */
function consola(input) {
  switch (input) {
    case 0:
      break;
    case 1:
      crearNuevaAgenda();
      return;
    case 2:
      agenda1.agregarContacto(crearNombre(),crearTelefono());
      return;
    case 3:
      inputUsuario = prompt("Ingrese el nombre o telefono del contacto");
      console.log(agenda1.existeContacto(inputUsuario));
      return;
    case 4:
      console.log(agenda1.listarContactos());
      return;
    case 5:
      inputUsuario = prompt("Ingrese el nombre del contacto");
      console.log(agenda1.buscarContacto(inputUsuario));
      return;
    case 6:
      inputUsuario = prompt(`Ingrese el nombre o teléfono del contacto`);
      agenda1.eliminarContacto(inputUsuario);
      return;
    case 7:
      console.log(agenda1.agendaLlena());
      return;
    case 8:
      console.log(agenda1.huecosLibres());
      return;
    default:
      return;
  }
}
do {
  console.log(mensajeIntroduccion);
  inputConsola = Number(prompt("Ingrese su elección"));
  consola(inputConsola);
} while (inputConsola !== 0);
