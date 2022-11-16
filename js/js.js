input = document.querySelector("input");
button = document.querySelector("button");


function mostrarDatos() {

    fetch('https://www.omdbapi.com/?s=fast&apikey=9b7084cb')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            var content = document.getElementById('content');
            var movie = myJson.Search;
            var informacion = "";

            movie.forEach(function(info) {
                informacion += `
                     <div class="col-md-4 espacio">
                         <div class="card" style="width: 18rem;">
                           <img class="card-img-top" src="${info.Poster}">
                             <div class="card-body">
                                   <h5 class="card-title">${info.Title}</h5>
                                   <p class="card-text">${info.Type}</p>
                                   <a href="#" class="btn btn-primary">Ver Movie</a>
                            </div>
                         </div>
                       </div> `;
            })

            document.getElementById("content").innerHTML = informacion;
        });
}

mostrarDatos();


function buscar() {
    let busqueda = document.getElementById("buscar").value;
    informacion = "";

    fetch(`https://www.omdbapi.com/?s=${busqueda}&apikey=9b7084cb`)

    .then(response => response.json())
        .then(data => {
            console.log(data)
            const peliculas = data.Search;

            peliculas.forEach(pelicula => {
                informacion += `
                 <div class="col-md-4 espacio">
                     <div class="card" style="width: 18rem;">
                       <img class="card-img-top" src="${pelicula.Poster}">
                         <div class="card-body">
                               <h5 class="card-title">${pelicula.Title}</h5>
                               <p class="card-text">${pelicula.Type}</p>
                               <a href="#" class="btn btn-primary">Ver Movie</a>
                        </div>
                     </div>
                   </div> `;
            })

            document.getElementById("content").innerHTML = informacion;
        })
        .catch(err => console.log(err))
}