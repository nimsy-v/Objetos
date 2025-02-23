//Se crea el objeto con las siguientes propiedades
const libros = {
  titulo: "Batallas en el desierto",
  autor: "José Emilio Pacheco",
  año: 1981,
  estado: "disponible",
  capitulos: [
    "El mundo antiguo",
    "Los desastre de la gerra",
    "Lugar de en medio",
  ],

  //Se crea una funcion dentro del objeto llamado describirLibro
  describirLibro: function () {
    return `Libro titulado ${this.titulo}, escrito por ${this.autor} en el año ${this.año}, el estado es: ${this.estado}`;
  },

  listaCapitulos: function () {
    console.log(`Lista de capitulos del libro ${this.titulo}`);
    //Se recorre el arreglo capitulos y se imprime cada uno de los elementos
    this.capitulos.forEach((capitulo, index) => {
      console.log(`${index + 1}. ${capitulo}`);
    });
  },
  //Se crea una funcion dentro del objeto llamado agregarCapitulos
  agregarCapitulos: function (capitulo) {
    this.capitulos.push(capitulo);
    console.log(`Se ha agregado el capitulo ${capitulo}`);
    this.listaCapitulos();
  },
  //Se crea una funcion dentro del objeto llamado eliminarCapitulos
  eliminarCapitulos: function (capitulo) {
    const index = this.capitulos.indexOf(capitulo);
    if (index !== 1) {
      this.capitulos.splice(index, 1);
      console.log(`Se ha eliminado el capitulo ${capitulo}`);
      this.listaCapitulos();
    } else {
      console.log(`El capitulo ${capitulo} no existe`);
    }
  },
};

console.log(libros.describirLibro());
libros.agregarCapitulos(`Principe de este mundo`);
libros.eliminarCapitulos(`El mundo antiguo`);
