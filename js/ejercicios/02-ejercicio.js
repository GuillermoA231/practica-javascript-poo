/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades: Una propiedad titular con el valor "Alex". Una propiedad saldo, teniendo como valor inicial 0. Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro Un método extraer() que permita retirar la cantidad pasada como parámetro. Un método informar() que retorne la información del estado de la cuenta. Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.*/

const cuenta = {
  propiedadTitular: "Jorge",
  saldo: 0,
  ingresar: function () {
    let saldoDeseado;
    do {
      saldoDeseado = prompt("ingrese el saldo deseado");
    } while (isNaN(saldoDeseado) || saldoDeseado < 0);
    this.saldo += Number(saldoDeseado);
  },
  extraer: function () {
    let saldoAExtraer;
    do {
      saldoAExtraer = prompt("ingrese el saldo a extraer");
    } while (isNaN(saldoAExtraer) || saldoAExtraer < 0);
    saldoAExtraer > this.saldo
      ? confirm("Saldo insuficiente, ¿desea extraer igualmente?")
        ? (this.saldo -= Number(saldoAExtraer))
        : null
      : (this.saldo -= Number(saldoAExtraer));
  },
  informar: function () {
    let informe = `Titular de la cuenta: ${this.propiedadTitular} - Saldo de la cuenta: ${this.saldo}`;
    return informe;
  },
};
document.write(`<p>${cuenta.informar()}</p><hr>`);
cuenta.ingresar();
document.write(`<p>${cuenta.informar()}</p><hr>`);
cuenta.extraer();
document.write(`<p>${cuenta.informar()}</p><hr>`);
