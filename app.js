const listaContactos = [
  { id: 1, nombres: "Julian", apellidos: "Ruiz" },
  { id: 2, nombres: "Diana", apellidos: "Morales" },
  { id: 3, nombres: "Nicolas", apellidos: "Garcia" },
  { id: 4, nombres: "Laura", apellidos: "Rodriguez" },
];

console.log(listaContactos);

function agregarContacto(id, nombres, apellidos) {
  const contacto = { id, nombres, apellidos };
  listaContactos.push(contacto);
}

agregarContacto(5, "Julian", "Morales");

console.log(listaContactos);

function borrarContacto(id) {
  const indice = listaContactos.findIndex((contacto) => contacto.id === id);
  if (indice !== -1) {
    const nombreCompleto = `${listaContactos[indice].nombres} ${listaContactos[indice].apellidos}`;
    listaContactos.splice(indice, 1);
    console.log(`Contacto ${nombreCompleto} borrado correctamente.`);
  } else {
    console.log(`El contacto con ID ${id} no existe en la lista.`);
  }
}

borrarContacto(5);

function imprimirContactos() {
  console.log("Contactos en la lista:");
  for (let i = 0; i < listaContactos.length; i++) {
    const { id, nombres, apellidos } = listaContactos[i];
    console.log(`ID: ${id}, Nombres: ${nombres}, Apellidos: ${apellidos}`);
  }
}

imprimirContactos();
