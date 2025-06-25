const express = require("express");
const cors = require("cors");
const mysql = require("mysql2/promise");

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const port = 4000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
async function getConnection() {
  const datosConexion = {
    host: "localhost",
    port: "3306",
    user: "root",
    password: "password",
    database: "netflix",
  };
  const conexion = await mysql.createConnection(datosConexion);
  await conexion.connect();
  return conexion;
}
server.get("/", (req, res) => {
  console.log("Holis"); // -> Se ve en la terminal

  res.send("Holis Adalabers!!!"); // -> Se ve en la página
});
