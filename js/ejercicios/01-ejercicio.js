/*1- Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.*/

const auto = {
  color: `Verde`,
  marca: `Ford`,
  modelo: `Falcon`,
  estaEncendido: false,
  encenderOApagar: function () {
    this.estaEncendido === false
      ? (this.estaEncendido = true)
      : (this.estaEncendido = false);
  },

  mostrarEstado: function () {
    let stringEstado = "";
    return this.estaEncendido === true
      ? (this.stringEstado = "encendido")
      : (this.stringEstado = "apagado");
  },
};

document.write(
  `<p><b>Leonel Messi: </b>Me compre un nuevo Auto! Es de color ${auto.color}, su marca es ${auto.marca} y su modelo es ${auto.modelo}!</p>
  <p><b>Javier Mascherano: </b>Lo vi el otro dia... estaba ${auto.mostrarEstado()}</p>`
);
auto.encenderOApagar();
document.write(
  `<p><b>Leonel Messi: </b>De verdad? hmm espera un minuto.... <i><b>Saca unas llaves y suena un pitido</b></i>, listo! ahora deberia de estar ${auto.mostrarEstado()}.</p>`
);
