/*9- Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato" que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado. */

class Animal {
    constructor(nombre,edad){
        this._nombre = nombre;
        this._edad = edad;
    }
    emitirSonido(){
        return `Sonido: `
    }
}
class Perro extends Animal {
    constructor(nombre,edad){
        super(nombre,edad);
    }
    emitirSonido(){
       
        return  super.emitirSonido() + `Guau Guau`;
    }
}
class Gato extends Animal {
    constructor(nombre,edad){
        super(nombre,edad);
    }
    emitirSonido(){
        return super.emitirSonido() + `Miau Miau`
    }
}
let gato1 = new Gato(`Garfield`, 100)
let perro1 = new Perro(`Clifford`, 100)
console.log(gato1.emitirSonido() + ` (Odio la lasagna y los lunes)`)
console.log(perro1.emitirSonido() + ` (Hola, soy Clifford, el perro rojo gigante.)`);