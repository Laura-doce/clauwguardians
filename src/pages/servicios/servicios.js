fetch("https://66eb3fa455ad32cda47c28f8.mockapi.io/Jonathan/Api/V1/Usuario" {
    method: 'POST'
})
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    document.querySelector("User").textContent = datos.name;
    document.querySelector("pass").textContent = datos.password;
  });
