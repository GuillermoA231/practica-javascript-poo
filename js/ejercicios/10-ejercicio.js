/*crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información en caso de encontrarlo, si no lo encontró indicar con un mensaje.Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros. Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión está lleno. Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones a diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar. */

class Avion {
  constructor(nombre, capacidad, destino, listaPasajeros = []) {
    this._nombre = nombre;
    this._capacidad = capacidad;
    this._destino = destino;
    this._listaPasajeros = listaPasajeros;
  }
  get nombre() {
    return this._nombre;
  }
  get capacidad() {
    return this._capacidad;
  }
  get destino() {
    return this._destino;
  }
  get listaPasajeros() {
    return this._listaPasajeros;
  }

  abordar(nombrePasajero) {
    this.capacidad > this.listaPasajeros.length
      ? alert(`No hay asientos disponibles`)
      : (this._listaPasajeros.push(nombrePasajero),
        console.log(
          `Pasajero ${
            this.listaPasajeros[this.listaPasajeros.length - 1]
          } a bordo!`
        ));
  }
}
class Aeropuerto {
  constructor(nombreAeropuerto, listaAviones = []) {
    this._nombreAeropuerto = nombreAeropuerto.trim();
    this._listaAviones = listaAviones;
  }
  agregarAvion(avion) {
    this._listaAviones.push(avion);
  }
  get listaAviones() {
    return this._listaAviones;
  }
  buscarAvion(avion) {
    let avionBuscar = this._listaAviones.find(
      (element) => element.nombre == avion
    ).nombre;
    return avionBuscar;
  }
}
let aeropuerto1 = new Aeropuerto(`Aeropuerto Internacional`);
let avion1 = new Avion("Malasya Airlines", 4, `Beijing, China`, [
  "Sum Ting Wong",
  "Wi Tu Lo",
  "Ho Lee Fuk",
  "Bang Ding Ow",
]);
let avion2 = new Avion("Air France", 3, `París, Francia`);
let avion3 = new Avion(`Star Dust`, 11, `Santiago, Chile`, ["Maradona Diego"]);
//gregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar. */

aeropuerto1.agregarAvion(avion1);
aeropuerto1.agregarAvion(avion2);
aeropuerto1.agregarAvion(avion3);
console.log(aeropuerto1.buscarAvion("Malasya Airlines"));
avion1.abordar("Pedro perez");
