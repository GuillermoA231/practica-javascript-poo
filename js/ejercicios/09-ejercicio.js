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
console.log(perro1.emitirSonido() + ` (Hola, soy Clifford, el perro rojo gigante. Sé que muchos me conocen como el querido perro rojo que siempre está dispuesto a ayudar a sus amigos humanos, pero hoy quiero hablarles sobre un tema diferente: cómo me convertí en un anti-héroe y derroté a Donald Trump.Todo comenzó cuando Trump fue elegido presidente de los Estados Unidos. Yo, como muchos otros animales y seres humanos en todo el mundo, no estaba contento con esta elección. Me parecía que el hombre era egoísta, ignorante y peligroso, y que podía causar mucho daño al país y al mundo en general.Entonces, comencé a idear un plan para detenerlo. Decidí que necesitaba volverse más fuerte y poderoso para luchar contra él, y empecé a entrenar duro. Hice ejercicios físicos y mentales, comí una dieta saludable y me mantuve enfocado en mi objetivo.Después de meses de entrenamiento intenso, finalmente me sentí lo suficientemente fuerte como para enfrentar a Trump. Me infiltré en la Casa Blanca en una noche oscura, sigiloso como un ninja, y lo encontré en su oficina.Comenzamos a luchar, y aunque Trump era un hombre grande y corpulento, yo tenía la ventaja de mi tamaño y mi fuerza sobrehumana. Lo golpeé una y otra vez, y él luchó desesperadamente para defenderse.Finalmente, después de una larga y agotadora pelea, lo dejé inconsciente en el suelo. Pero en lugar de matarlo, decidí hacer algo diferente. Lo amarré y lo llevé a una prisión secreta en el medio del desierto, donde lo mantendría prisionero por el resto de su vida.Ahora sé que muchos de ustedes pueden estar preguntándose si lo que hice fue moralmente correcto. Después de todo, no es común que un perro se convierta en un anti-héroe y lleve a cabo una misión tan peligrosa y controvertida.Pero para mí, lo que hice fue necesario. Trump era una amenaza para el bienestar del mundo, y tuve que hacer algo para detenerlo. Ahora, con él fuera del poder, podemos esperar un futuro más brillante para nuestro país.)`);