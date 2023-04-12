const express = require("express");
const app = express();

//Archivos estaticos
//Cargar CSS en nodejs
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
//app.use('/img', express.static(__dirname + 'public/img'))

//Set de views
//aqui se puede establecer el uso del conjunto de hojas ejs
app.set("views", "./views");
app.set("view engine", "ejs");

//Rutas

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/maps", (req, res) => {
  res.render("maps");
  console.log("Se ha renderizado la pagina");
});

//Puerto de conexion
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`**La app ha arrancado en el puerto: http://localhost:${port}`);
  console.log(
    `**La parte para Maps se encuentra aqui: http://localhost:${port}/api/maps`
  );
});
