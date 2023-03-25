/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área*/

let altoUsuario, anchoUsuario;
class Rectangulo {
  constructor(alto, ancho) {
    this._alto = alto;
    this._ancho = ancho;
  }
  set cambiarAlto(valor) {
    this._alto = valor;
  }
  set cambiarAncho(valor) {
    this._ancho = valor;
  }
  get mostrarPropiedades() {
    let mostrarTexto = `Alto: ${this._alto} - Ancho: ${this._ancho}`;
    return mostrarTexto;
  }
  get perimetro() {
    return this._alto * 2 + this._ancho * 2;
  }
  get area() {
    return this._alto * this._ancho;
  }
}

dibujarRectangulo = (objeto, alto, ancho) => {
    objeto.cambiarAlto = alto;
    objeto.cambiarAncho = ancho;
};

let rectangulo = new Rectangulo();

do {
  altoUsuario = Number(prompt("Ingrese el alto."));
  anchoUsuario = Number(prompt("Ingrese el ancho."));
} while (
  isNaN(altoUsuario) ||
  isNaN(anchoUsuario) ||
  altoUsuario < 0 ||
  anchoUsuario < 0
);

dibujarRectangulo(rectangulo, altoUsuario, anchoUsuario);

document.write(`<h1>El rectangulo tiene como propiedades: ${rectangulo.mostrarPropiedades}</h1><h2>El Perimetro del rectangulo es ${rectangulo.perimetro}</h2><h2>El Area del rectangulo es ${rectangulo.area}</h2>`);
