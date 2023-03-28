/*6- Crear una clase Libro que contenga al menos las siguientes propiedades: ISBN Título Autor Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro(); Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.*/

class Libro {
  constructor(isbn, titulo, autor, numPaginas) {
    if (
      (isbn.length !== 10)
    ) {
      throw new Error(`El ISBN debe tener una longitud de 10 digitos`);
    }
    if (typeof titulo !== "string") {
      throw new Error("El titulo debe ser una cadena de texto");
    }
    if (typeof autor !== "string") {
      throw new Error("El autor debe ser una cadena de texto");
    }
    if (typeof numPaginas !== "number" && numPaginas > 0) {
      throw new Error("El número de paginas debe ser una número positivo");
    }
    this._isbn = isbn;
    this._titulo = titulo;
    this._autor = autor;
    this._numPaginas = numPaginas;
  }

  get isbn() {
    return this._isbn;
  }
  set modificarIsbn(valor) {
    this._isbn = valor;
  }

  get titulo() {
    return this._titulo;
  }
  set modificartitulo(valor) {
    this._titulo = valor;
  }

  get autor() {
    return this._autor;
  }
  set modificarAutor(valor) {
    this._autor = valor;
  }

  get numPaginas() {
    return this._numPaginas;
  }
  set modificarNumPaginas(valor) {
    this._numPaginas = valor;
  }

  get mostrarLibro() {
    return `El libro ${this._titulo} con ISBN ${this._isbn} creado por el autor ${this._autor} tiene ${this._numPaginas} páginas.`;
  }
}

/*“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro(); Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.*/

let libro1 = new Libro('1420926381','La divina Comedia','Alighieri Dante',320);
let libro2 = new Libro('0679720200','El Extranjero','Albert Camus',120);
libro1.mostrarLibro;
libro2.mostrarLibro;

libro1.numPaginas > libro2.numPaginas ? document.write(`<p>El libro ${libro1.titulo} tiene mas paginas que el libro ${libro2.titulo}</p>`) : libro2.numPaginas > libro1.numPaginas ? document.write(`<p>El libro ${libro2.titulo} tiene mas paginas que el libro ${libro1.titulo}</p>`): document.write('Los dos libros tienen la misma cantidad de hojas');