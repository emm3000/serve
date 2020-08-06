const express = require("express")
const app = express()
const cors = require("cors")
const path = require("path")
const history = require("connect-history-api-fallback")

const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.static(path.join(__dirname, "/dist")))
console.log(path.join(__dirname, "/dist"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use(history());
app.use(express.static(path.join(__dirname, 'dist')));

app.get("/prueba", (req, res) => {
  res.json({
    hola: "manito"
  })
})

// app.get("/*", (req, res) => {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'))
// })

app.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`)
})