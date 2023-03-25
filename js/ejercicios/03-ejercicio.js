/*3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área*/

const rectangulo = {
    alto: 0,
    ancho: 0,
    dibujar: function(){
        let pedirAlto, pedirAncho;
        do {
            pedirAlto = prompt("Escriba el alto del rectangulo.");
            pedirAncho = prompt("Escriba el ancho del rectangulo.");
        } while (isNaN(pedirAlto) || isNaN(pedirAncho) || pedirAlto < 0 || pedirAncho < 0);
        this.alto = pedirAlto;
        this.ancho = pedirAncho;
    },
    mostrar:function(){
        let mostrarPropiedades = `Alto: ${this.alto} - Ancho: ${this.ancho}`;
        return mostrarPropiedades;
    },
    perimetro:function(){
        let perimetro = this.alto*2 + this.ancho*2;
        return perimetro;
    },
    area:function(){
        let area = this.alto * this.ancho;
        return area;
    }
}
rectangulo.dibujar();
document.write(`<p>${rectangulo.mostrar()}</p>`);
document.write(`<p>Perimetro: ${rectangulo.perimetro()}</p>`);
document.write(`<p>Area: ${rectangulo.area()}</p>`);