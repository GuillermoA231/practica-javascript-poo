/*12 - Crear un objeto calculadora, con las propiedades y métodos necesarios para realizar las operaciones de suma, resta, multiplicación y división. Mostrar por pantalla 2 operaciones con cada método. */

const calculadora = {
  resultado: 0,
  operador: "",

  esDecimal(num) {
    return num !== null
      ? num % 1 === 0
        ? num.toFixed(0)
        : num.toFixed(3)
      : "!MathError";
  },

  sumar(num1, num2) {
    this.resultado = num1 + num2;
    this.operador = num2 < 0 ? `-` : `+`;
    num2 = num2 < 0 ? num2 * -1 : num2;
    return `${num1} ${this.operador} ${num2} = ${this.esDecimal(
      this.resultado
    )}`;
  },

  restar(num1, num2) {
    this.resultado = num1 - num2;
    this.operador = num2 < 0 ? `+` : `-`;
    num2 = num2 < 0 ? num2 * -1 : num2;
    return `${num1} ${this.operador} ${num2} = ${this.esDecimal(
      this.resultado
    )}`;
  },

  multiplicar(num1, num2) {
    this.resultado = num1 * num2;
    this.operador = "x";
    return `${num1} ${this.operador} ${num2} = ${this.esDecimal(
      this.resultado
    )}`;
  },

  dividir(num1, num2) {
    this.resultado = num2 === 0 ? null : num1 / num2;
    this.operador = "/";
    return `${num1} ${this.operador} ${num2} = ${this.esDecimal(
      this.resultado
    )}`;
  },
};

document.write(`<h2>Sumas</h2>`)
document.write(`<h3>${calculadora.sumar(-2, 3)}</h3>`);
document.write(`<h3>${calculadora.sumar(-20, -3)}</h3>`);
document.write(`<h2>Restas</h2>`)
document.write(`<h3>${calculadora.restar(2, 3)}</h3>`);
document.write(`<h3>${calculadora.restar(-20, -3)}</h3>`);
document.write(`<h2>Multiplicaciones</h2>`)
document.write(`<h3>${calculadora.multiplicar(2, 0)}</h3>`);
document.write(`<h3>${calculadora.multiplicar(-20, -3)}</h3>`);
document.write(`<h2>Divisiones</h2>`)
document.write(`<h3>${calculadora.dividir(2, 0)}</h3>`);
document.write(`<h3>${calculadora.dividir(-20, 5)}</h3>`);
