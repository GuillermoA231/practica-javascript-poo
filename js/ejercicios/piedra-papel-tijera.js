/*Piedra-papel-tijera 👊🏻 ✋🏻 ✌🏻
crear un script con toda la logica necesaria que solicite al usuario un movimiento (piedra - papel - tijera) 
la PC elija aleatoriamente un movimiento y al final mostrar por pantalla quien gano, 
luego preguntar si queremos jugar otra vez. 
Este ejercicio forma parte del TP4 (se puede realizar con los conceptos vistos hasta hoy)*/

const EMOJIS = [`&#9994;`, `&#9995;`, `&#9996;`];
let eleccionUsuario, eleccionMaquina,resultado;

const movimientoAIndex = (movimiento) => {
  movimiento === "piedra"
    ? (movimiento = 0)
    : movimiento === "papel"
    ? (movimiento = 1)
    : movimiento === "tijeras"
    ? (movimiento = 2)
    : movimiento;
  movimiento = EMOJIS[movimiento];
  return movimiento;
};
const movimientoUsuario = () => {
  let input;
  do {
    input = prompt("Piedra, Papel o tijeras?");
    input = input.toLowerCase();
  } while (
    !isNaN(input) ||
    (input !== "piedra" && input !== "papel" && input !== "tijeras")
  );
  return movimientoAIndex(input);
};

const movimientoMaquina = () => {
  let movimiento = Math.floor(Math.random() * 3);
  return movimientoAIndex(movimiento);
};
const verificarGanador = (usuario, maquina) => {
  return usuario === maquina
    ? "EMPATE!"
    : (usuario === EMOJIS[0] && maquina === EMOJIS[2]) ||
      (usuario === EMOJIS[1] && maquina === EMOJIS[0]) ||
      (usuario === EMOJIS[2] && maquina === EMOJIS[1])
    ? "GANO EL USUARIO!"
    : "GANO LA MAQUINA!";
};

eleccionUsuario = movimientoUsuario();
eleccionMaquina = movimientoMaquina();
resultado = verificarGanador(eleccionUsuario,eleccionMaquina);
document.write(`<h1>${eleccionUsuario} VS ${eleccionMaquina}</h1><br><h2>Quien gana?....</h2><br><h2>${resultado}</h2>`);
