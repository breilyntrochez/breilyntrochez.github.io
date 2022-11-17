input = document.querySelector("input");
button = document.querySelector("button");


function mostrarDatos() {

    fetch('https://api.github.com/users')
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson) {
            var content = document.getElementById('content');
            var informacion = "";
            console.log(myJson)

            for (let i = 0; i < myJson.length; i++) {
                informacion += `
                     <div class="col-md-4 espacio">
                         <div class="card" style="width: 18rem;">
                           <img class="card-img-top" src="${myJson[i].avatar_url}">
                             <div class="card-body">
                                   <h5 class="card-title">${myJson[i].login}</h5>
                                   <p class="card-text">${myJson[i].type}</p>
                                   <a href="#" class="btn btn-primary">Ver Movie</a>
                            </div>
                         </div>
                       </div> `;
            }

            document.getElementById("content").innerHTML = informacion;
        });
}

mostrarDatos();


function buscar() {
    let busqueda = document.getElementById("buscar").value;
    informacion = "";
    fetch(`https://api.github.com/users/${busqueda}`)

    .then(response => response.json())
        .then(data => {
            console.log(data)

            for (let j = 0; j < data.length; j++) {

                informacion += `
                     <div class="col-md-4 espacio">
                         <div class="card" style="width: 18rem;">
                           <img class="card-img-top" src="${data[j].avatar_url}">
                             <div class="card-body">
                                   <h5 class="card-title">${data[j].login}</h5>
                                   <p class="card-text">${data[j].type}</p>
                                   <a href="#" class="btn btn-primary">Ver Movie</a>
                            </div>
                         </div>
                       </div> `
            }

            document.getElementById("content").innerHTML = informacion;
        })
        .catch(err => console.log(err))


}