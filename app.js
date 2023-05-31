const listaContactos = [
  "Julian Ruiz",
  "Diana Morales",
  "Nicolas Garcia",
  "Laura Rodriguez",
];

console.log(listaContactos);

function agregarContacto(nombreCompleto) {
  listaContactos.push(nombreCompleto);
}

agregarContacto("Julian Morales");

console.log(listaContactos);

function borrarContacto(nombreCompleto) {
  const indice = listaContactos.indexOf(nombreCompleto);
  if (indice !== -1) {
    listaContactos.splice(indice, 1);
    console.log(`Contacto ${nombreCompleto} borrado correctamente.`);
  } else {
    console.log(`El contacto ${nombreCompleto} no existe en la lista.`);
  }
}


borrarContacto("Julian Morales");


function imprimirContactos() {
  console.log("Contactos en la lista:");
  for (let i = 0; i < listaContactos.length; i++) {
    console.log(listaContactos[i]);
  }
}

imprimirContactos();


