/*Crear un objeto persona que tenga las propiedades: nombre, apellido, edad, un valor verdadero o falso que indique si es estudiante y una lista de hobbies, este objeto debe contener los métodos para presentar a la persona, el cual mostrará todos los datos, y los métodos agregar, borrar y buscar un hobbie.Agregar por lo menos 3 hobbies y mostrarlos por pantalla, luego buscar el hobbie ‘viajar’ e indicar si la persona lo tiene o no. Por ultimo eliminar el primer hobbie y volver a mostrar todos por pantalla. */

const Persona = {
    nombre: `Lebron`,
    apellido: `James`,
    edad: 38,
    esEstudiante: false,
    hobbies: [],
    agregarHobbie(hobbie) {
      this.hobbies.push(hobbie);
    },
    buscarHobbie(hobbie) {
      return this.hobbies.find((element) => element === hobbie);
    },
    borrarHobbie(hobbie) {
      let hobbies = this.hobbies.filter(
        (element) => element !== this.buscarHobbie(hobbie)
      );
      this.hobbies = hobbies;
    },
    presentar() {
      let estudianteString = this.esEstudiante
        ? `Soy un estudiante`
        : "No soy un estudiante";
      let ultimoHobby = this.hobbies.pop();
      console.log(
        `Hola, soy ${this.nombre} ${this.apellido}, tengo ${
          this.edad
        } años y ${estudianteString}, ademas mis hobbies favoritos son ${
          this.hobbies
        } y ${ultimoHobby.toLowerCase()}`
      );
    },
  };
  /*Agregar por lo menos 3 hobbies y mostrarlos por pantalla, luego buscar el hobbie ‘viajar’ e indicar si la persona lo tiene o no. Por ultimo eliminar el primer hobbie y volver a mostrar todos por pantalla. */
  
  Persona.agregarHobbie(`Jugar al baloncesto`);
  Persona.agregarHobbie(`Ver peliculas`);
  Persona.agregarHobbie(`Leer libros`);
  Persona.buscarHobbie("Viajar");
  Persona.borrarHobbie(Persona.hobbies[0]);
  Persona.presentar();
  