const server = require("./src/server");

//Iniciar servidor
server.listen(server.get("port"), () => {
  console.log("Servidor en el puerto", server.get("port"));
});
