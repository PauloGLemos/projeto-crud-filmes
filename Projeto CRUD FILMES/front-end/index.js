const urlApi = 'http://localhost:3000/filmes';
const lista = document.getElementById('lista');

const getMovies = async () => {
   const response =  await fetch(urlApi);
   const data = await response.json();
   console.log(data)
   data.map((movie) => {
       lista.insertAdjacentHTML('beforeend', `

            <div class="card mb-3" style="max-width: 450px;border: 1px solid #EBECEC;background-color: #F8F9FA; box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;">
        <div class="row g-0">
            <div class="col-md-4">
            <img src="${movie.image}" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <p class="card-text">Name: ${movie.name}</p>
                <p class="card-text">Genre: ${movie.genre}</p>
                <p class="card-text">Score: ${movie.score}</p>
                <p class="card-text">Watched: ${movie.watch}</p>
            </div>
            </div>
        </div>
        </div>
       
      `)
   })
}
getMovies();


const postMovie = async (evento) => {
    evento.preventDefault();

    let name = document.getElementById('name').value;
    let image = document.getElementById('image').value;
    let genre = document.getElementById('genre').value;
    let score = document.getElementById('score').value;
    let watch = document.getElementById('watch').value;

    const filme = {
        name,
        image,
        genre,
        score,
        watch
    }

    console.log(filme);

    const request = new Request(urlApi, {
        method: 'POST',
        body: JSON.stringify(filme),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })

    const response = await fetch(request);
    const result = await response.json();
    console.log(`Filme ${result.name} salvo com sucesso`);
    
    name = '';
    image = '';
    genre = '';
    score = '';
    watch = '';

    lista.innerHTML = '';

    if(result){
        getMovies();
    }
}