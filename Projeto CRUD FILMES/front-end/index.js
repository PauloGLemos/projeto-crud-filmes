const urlApi = 'http://localhost:3000/filmes';
const lista = document.getElementById('lista');
let edicao = false;
let idEdicao = 0;

const getMovies = async () => {
   const response =  await fetch(urlApi);
   const data = await response.json();
   console.log(data);
   
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
                <button type="button" class="btn btn-primary" onclick="putMovie('${movie._id}')">Edit</button>
                <button type="button" class="btn btn-danger" onclick="deleteMovie('${movie._id}')">Delete</button>
            </div>
            </div>
        </div>
        </div>
       
      `)
   })
}
getMovies();


const submitForm = async (evento) => {
    evento.preventDefault();

    let name = document.getElementById('name');
    let image = document.getElementById('image');
    let genre = document.getElementById('genre');
    let score = document.getElementById('score');
    let watch = document.getElementById('watch');

    const filme = {
        name: name.value,
        image: image.value,
        genre: genre.value,
        score: score.value,
        watch: watch.value
    }

    console.log(movie);

    if(!edicao) { 
        const request = new Request(`${urlApi}`, {
          method: 'POST',
          body: JSON.stringify(movie),
          headers: new Headers({
            'Content-Type': 'application/json'
          })
        })

        const response = await fetch(request);
        const result = await response.json();

    if(result)  {
        getMovies();
    }

    } else {

        const request = new Request(`${urlApi}/${idEdicao}`, {
        method: 'PUT',
        body: JSON.stringify(movie),
        headers: new Headers({
            'Content-Type': 'application/json'
        })
        })

        const response = await fetch(request);
        const result = await response.json();

        if(result) {
        edicao = false;
        getMovies();
        }
    }


    name.value = '';
    image.value = '';
    genre.value = '';
    score.value = '';
    watch.value = '';

    lista.innerHTML = '';
    }

    const getMoviesById =  async (id) => {
    const response =  await fetch(`${urlApi}/${id}`);
    return movie = response.json();
    }

    const putFilme = async (id) => {
    edicao = true;
    idEdicao = id;

    // recebemos o objeto da vaga de acordo com o seu id
    const movie = await getMoviesById(id);

    // salvamos os elementos do html para poder manipular.
    let nameEl = document.getElementById('name');
    let imageEl = document.getElementById('image');
    let genreEl = document.getElementById('genre');
    let scoreEl = document.getElementById('score');
    let watchEl = document.getElementById('watch');

    nameEl.value = filme.name;
    imageEl.value = filme.image;
    genreEl.value = filme.genre;
    scoreEl.value = filme.score;
    watchEl.value = filme.watch

    }


    const deleteMovie = async (id) => {
    const request = new Request(`${urlApi}/${id}`, {
        method: 'DELETE',
    })
    const response = await fetch(request);
    const data = await response.json();
    console.log(data.message);

    lista.innerHTML = '';
    getMovies();
    }