
const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json())
app.use(cors());

const FilmesRouter = require('./routers/filmes.routes');
app.use('/filmes', FilmesRouter);


app.get('/', (req, res) => {
  res.send('olá Seja Bem Vindo');
})

const port = 3000;

app.listen(port, () => {
  console.log(`O servidor está rodando na porta http://localhost:${port}/`);
})