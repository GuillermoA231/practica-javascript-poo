/*8- Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión", y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona" con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse". */
let nombre, edad, profesion;
class Persona {
  #nombre;
  #edad;
  #profesion;
  constructor(nombre, edad, profesion) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#profesion = profesion;
  }
  get nombre() {
    return this.#nombre;
  }

  set nombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  get edad() {
    return this.#edad;
  }

  set edad(nuevaEdad) {
    this.#edad = nuevaEdad;
  }

  get profesion() {
    return this.#profesion;
  }

  set profesion(nuevaProfesion) {
    this.#profesion = nuevaProfesion;
  }
  saludar() {
    let esEmpleado =
      (this.profesion && isNaN(this.profesion) && this.profesion.trim() !== "")
        ? `Trabajo como ${this.profesion}`
        : `No trabajo`;
    return `Hola mi nombre es ${this.nombre}, tengo ${
      this.edad
    } años y ${esEmpleado.toLowerCase()}`;
  }
}
let persona1 = new Persona(`Pedro Juares`, 22);
document.write(`<h1>${persona1.saludar()}</h1>`);

nombre = prompt(`ingrese un nombre`);
edad = prompt(`ingrese una edad`);
profesion = prompt(`ingrese una profesión (Si no trabaja presione cancelar)`);
let persona2 = new Persona(nombre, edad, profesion);
document.write(`<h2>${persona2.saludar()}</h2>`);
console.log(persona2);
