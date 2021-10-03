router.put('/:id', (req, res) =>{
    const filmesEdit = req.body;
    const id = req.params.id;
    const filmeCadastrado = filmes.find((vaga) => vaga.id == id);
    
    filmeCadastrado.id = filmesEdit.id;
    filmeCadastrado.name = filmesEdit.name;
    filmeCadastrado.imageurl = filmesEdit.imageurl;
    filmeCadastrado.genre = filmesEdit.genre;
    filmeCadastrado.score = filmesEdit.score;

    res.send({
        message: `filme ${filmeCadastrado.id} atualizado com sucesso`,
        data: filmeCadastrado
    })
    
    console.log(filmeCadastrado);
})