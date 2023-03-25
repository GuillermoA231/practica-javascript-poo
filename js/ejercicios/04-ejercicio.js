/*4- Escribe una clase Producto para crear objetos. Estos objetos, deben presentar las propiedades código, nombre y precio, además del método imprime datos, el cual escribe por pantalla los valores de sus propiedades. Posteriormente, cree tres instancias de este objeto y guárdalas en un array. Por último, utilice el método imprime datos para mostrar por pantalla los valores de los tres objetos instanciados. */
class Producto {
    constructor(codigo,nombre,precio){
        this._codigo = codigo;
        this._nombre = nombre;
        this._precio = precio;
    }
    set cambiarCodigo(valor){
        this._codigo = valor;
    }
    set cambiarNombre(valor){
        this._nombre = valor;
    }
    set cambiarPrecio(valor){
        this._codigo = valor;
    }

    get imprimeDatos(){
        let datos;
        return datos = `codigo: ${this._codigo} - nombre: ${this._nombre} - precio: ${this._precio}`
    }
}


let producto1 = new Producto(001,'Shampu',500);
let producto2 = new Producto(002,'Jabon',100);
let producto3 = new Producto(003,'Zapatos',4000);


let productos = [producto1,producto2,producto3]

productos.forEach(producto => {
    document.write(`<p>${producto.imprimeDatos}</p>`);
});