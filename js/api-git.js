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
                         <div class="card" style="width: 18rem;" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                           <img class="card-img-top" src="${myJson[i].avatar_url}">
                             <div class="card-body">
                                   <h5 class="card-title">${myJson[i].login}</h5>
                                   <p class="card-text">${myJson[i].type}</p>
                             </div>
                        </div>                      
                       
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                      <div class="modal-header">
                                          <h1 class="modal-title fs-5" id="staticBackdropLabel">${myJson[i].login}</h1>
                                         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                      </div>
                                      <div class="modal-body">
                                          <img class="card-img-top" src="${myJson[i].avatar_url}">
                                          <p>Tipo de Cuenta: ${myJson[i].type} <br>
                                         </p>
                                       </div>
                                      <div class="modal-footer">
                                          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                                         <a  href="${myJson[i].html_url}" class="btn btn-primary" target="_blank">Ver Perfil</a>
                                     </div>
                                 </div>
                            
                                </div>
                         </div> 
                     </div>
                     `;
            }

            document.getElementById("content").innerHTML = informacion;
        });
}

mostrarDatos();


function buscar() {
    let busqueda = document.getElementById("buscar").value;
    informacion = "";

    fetch(`https://api.github.com/users/${busqueda}`)
        .then((res) => res.json())
        .then((data) => {
            usuarios(data);
            console.log(data)
        });

}


function usuarios(busqueda) {
    var message;

    if (busqueda.message == "Not Found") {
        document.getElementById("content").innerHTML = "Usuario No Existe"
    } else {
        var informacion = `
        <div class="col-md-4 espacio"> 
            <div class="card" style="width: 18rem;" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
              <img class="card-img-top" src="${busqueda.avatar_url}">
                <div class="card-body">
                      <h5 class="card-title">${busqueda.login}</h5>
                      <p class="card-text">${busqueda.type}</p>
               </div>
            </div>
          </div> 
          
          <!-- Modal -->
           <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                          <div class="modal-header">
                          <h1 class="modal-title fs-5" id="staticBackdropLabel">${busqueda.name}</h1>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     </div>
                     <div class="modal-body">
                     <img class="card-img-top" src="${busqueda.avatar_url}">
                     <p>Pais: ${busqueda.location} <br>
                        Seguidores: ${busqueda.followers}<br>
                        Repositorios Públicos: ${busqueda.public_repos}
                     </p>
       
                     </div>
                    <div class="modal-footer">
                       <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                       <a  href="${busqueda.html_url}" class="btn btn-primary" target="_blank">Ver Perfil</a>
                  </div>
             </div>
         </div>
     </div> `;

        document.getElementById("content").innerHTML = informacion;
    }




}
