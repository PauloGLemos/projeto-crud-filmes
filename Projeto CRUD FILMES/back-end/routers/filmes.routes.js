const express = require('express');
const router = express.Router();

const filmes = [
  {

  },
]

router.get('/', (req, res) => {
  res.send(filmes);
})


router.get('/:id', (req, res) => {
  const idParam = req.params.id;
  const index = filmes.findIndex(filme => filme.id == idParam);
  const filme = filmes[index];
  res.send(filme);
})


router.put('/:id', (req, res) => {
  const filmeEdit = req.body;
  const id = req.params.id;
  let filmePreCadastrado = filmes.find((filme) => filme.id == id);

  filmePreCadastrado.titulo = vagaEdit.titulo;
  filmePreCadastrado.descricao = vagaEdit.descricao;
  filmePreCadastrado.salario = vagaEdit.salario;
  filmePreCadastrado.senioridade = vagaEdit.senioridade;

  res.send({
    message: `filme ${filmePreCadastrado.id} atualizada com sucesso`,
  })
})




router.post('/add', (req, res) => {
  const filme = req.body;
  vaga.id = Date.now();
  vagas.push(vaga);
  res.status(201).send({
    message: 'cadastrado com sucesso',
  });
})

router.delete('/:id', (req, res) => {
  const id = req.params.id;
  const index = filmes.findIndex((filme) => filme.id == id);
  filmes.splice(index, 1);

  res.send({
    message: `filme excluido com sucesso`,
  })
})

module.exports = router;