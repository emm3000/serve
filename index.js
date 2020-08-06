const express = require("express");
const app = express();
const cors = require("cors");
// const path = require("path");
// const history = require("connect-history-api-fallback");
const mongoose = require("mongoose");


function randomNumber () {
  return Math.round(Math.random() * 100)
}

mongoose.connect("mongodb://mongo/nginx", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(_ => {
  console.log("Conectado a mongo")
});

const Cat = mongoose.model("Cat", { name: String });




const PORT = process.env.PORT || 3000;

app.use(cors());
// app.use(express.static(path.join(__dirname, "/dist")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(history());
// app.use(express.static(path.join(__dirname, "dist")));

app.get("/gato", async (req, res) => {

  const kitty = new Cat({ name: `${randomNumber()}Emm${randomNumber()}` });
  // const aea = await kitty.save()

  res.json(await kitty.save());
});

app.get("/ww", (req, res) => {

  res.json({
    hola: "aea manitowww"
  });
});

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'))
// })

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});
