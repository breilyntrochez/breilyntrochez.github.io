let jugador = "X"
let color = "verde"

function jugada(casilla) {
    //casilla.style.background = color;


    document.getElementById("nombreJugador").innerHTML = jugador
    document.getElementById("colorJugador").innerHTML = color

    if (jugador == "X") {
        jugador = "0"
        casilla.innerHTML =
            '<div class="imagen" ><img src="https://upload.wikimedia.org/wikipedia/commons/a/a2/X_mark.svg" /></div>';
        casilla.setAttribute("valor", "x");

    } else if (jugador == "0") {
        jugador = "X"
        casilla.innerHTML =
            '<div class="imagen" ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Z%C3%A9ro.svg/1200px-Z%C3%A9ro.svg.png" /></div>';
        casilla.setAttribute("valor", "0");
    }


    // if (color == "red") {
    //     color = "green";



    // } else if (color == "green") {
    //     color = "red"
    // }

    deshabilitar(casilla);

    ganador();

}

function deshabilitar(des) {
    des.disabled = true;
    des.style.opacity = 0.5;
    des.style.pointerEvents = "none"
}

function pararJuego() {
    document.querySelectorAll(".column").forEach(c => c.style.pointerEvents = "none")
}

function eliminar() {
    location.reload();
}

function comprobarGanador(valores) {
    if (valores == "xxx") {
        alert("X Gana!")
        pararJuego();
        return true;
    }

    if (valores == "000") {
        alert("0 Gana!")
        pararJuego();
        return true;
    }
}

function ganador() {
    //Horizontales
    for (let i = 1; i <= 3; i++) {
        let valores = "";
        for (let j = 1; j <= 3; j++) {
            const casilla = document.getElementById(`${i}-${j}`)
            const valor = casilla.getAttribute("valor");
            if (valor)
                valores += valor
        }
        if (comprobarGanador(valores)) return;

        valores = "";
        for (let j = 1; j <= 3; j++) {
            const casilla = document.getElementById(`${j}-${i}`)
            const valor = casilla.getAttribute("valor");
            if (valor)
                valores += valor
        }
        if (comprobarGanador(valores)) return;

        valores = "";
        const casillasDiagonales = ["1-1", "2-2", "3-3"];
        const casillasDiagonalesInv = ["3-1", "2-2", "1-3"];

        casillasDiagonales.forEach(c => {
            const valor = document.getElementById(c).getAttribute("valor");
            if (valor)
                valores += valor
        })
        if (comprobarGanador(valores)) return;

        valores = "";
        casillasDiagonalesInv.forEach(c => {
            const valor = document.getElementById(c).getAttribute("valor");
            if (valor)
                valores += valor
        })
        if (comprobarGanador(valores)) return;
    }
}

// function ganador() {
//     var b1, b2, b3, b4, b5, b6, b7, b8, b9;

//     b1 = document.getElementById("col1").value;
//     b2 = document.getElementById("col2").value;
//     b3 = document.getElementById("col3").value;
//     b4 = document.getElementById("col4").value;
//     b5 = document.getElementById("col5").value;
//     b6 = document.getElementById("col6").value;
//     b7 = document.getElementById("col7").value;
//     b8 = document.getElementById("col8").value;
//     b9 = document.getElementById("col9").value;

//     if ((b1 == 'x') && (b2 == 'x') && (b3 == 'x')) {
//         document.getElementById('print')
//             .innerHTML = "Jugador Will Gana";
//         window.alert('Player Will Gana');
//         b4.disabled = true;
//         b5.disabled = true;
//         b6.disabled = true;
//         b7.disabled = true;
//         b8.disabled = true;
//         b9.disabled = true;

//     } else if ((b4 == 'x') && (b5 == 'x') && (b6 == 'x')) {
//         document.getElementById('print')
//             .innerHTML = "Jugador Will Gana";
//         window.alert('Player Will Gana');
//         b1.disabled = true;
//         b2.disabled = true;
//         b3.disabled = true;
//         b7.disabled = true;
//         b8.disabled = true;
//         b9.disabled = true;
//     } else if ((b7 == 'x') && (b8 == 'x') && (b9 == 'x')) {
//         document.getElementById('print')
//             .innerHTML = "Jugador Will Gana";
//         window.alert('Player Will Gana');
//         b1.disabled = true;
//         b2.disabled = true;
//         b3.disabled = true;
//         b4.disabled = true;
//         b5.disabled = true;
//         b6.disabled = true;
//     } else if ((b1 == 'x') && (b4 == 'x') && (b7 == 'x')) {
//         document.getElementById('print')
//             .innerHTML = "Jugador Will Gana";
//         window.alert('Player Will Gana');
//         b9.disabled = true;
//         b2.disabled = true;
//         b3.disabled = true;
//         b8.disabled = true;
//         b5.disabled = true;
//         b6.disabled = true;
//     } else if ((b2 == 'x') && (b5 == 'x') && (b8 == 'x')) {
//         document.getElementById('print')
//             .innerHTML = "Jugador Will Gana";
//         window.alert('Player Will Gana');
//         b1.disabled = true;
//         b2.disabled = true;
//         b3.disabled = true;
//         b7.disabled = true;
//         b4.disabled = true;
//         b6.disabled = true;
//     } else if ((b3 == 'x') && (b6 == 'x') && (b9 == 'x')) {
//         document.getElementById('print')
//             .innerHTML = "Jugador Will Gana";
//         window.alert('Player Will Gana');
//         b1.disabled = true;
//         b2.disabled = true;
//         b5.disabled = true;
//         b7.disabled = true;
//         b4.disabled = true;
//         b8.disabled = true;
//     } else if ((b1 == 'x') && (b5 == 'x') && (b9 == 'x')) {
//         document.getElementById('print')
//             .innerHTML = "Jugador Will Gana";
//         window.alert('Player Will Gana');
//         b3.disabled = true;
//         b2.disabled = true;
//         b6.disabled = true;
//         b7.disabled = true;
//         b4.disabled = true;
//         b8.disabled = true;
//     } else if ((b3 == 'x') && (b5 == 'x') && (b7 == 'x')) {
//         document.getElementById('print')
//             .innerHTML = "Jugador Will Gana";
//         window.alert('Player Will Gana');
//         b1.disabled = true;
//         b2.disabled = true;
//         b6.disabled = true;
//         b9.disabled = true;
//         b4.disabled = true;
//         b8.disabled = true;
//     }

//     //Determinando si 0 es ganador
//     else if ((b1 == 'o') && (b2 == 'o') && (b3 == 'o')) {
//         document.getElementById('print')
//             .innerHTML = "Jugador Breilyn Gana";
//         window.alert('Player Breilyn Gana');
//         b4.disabled = true;
//         b5.disabled = true;
//         b6.disabled = true;
//         b7.disabled = true;
//         b8.disabled = true;
//         b9.disabled = true;

//     } else if ((b4 == 'o') && (b5 == 'o') && (b6 == 'o')) {
//         document.getElementById('print')
//             .innerHTML = "Jugador Breilyn Gana";
//         window.alert('Player Breilyn Gana');
//         b1.disabled = true;
//         b2.disabled = true;
//         b3.disabled = true;
//         b7.disabled = true;
//         b8.disabled = true;
//         b9.disabled = true;
//     } else if ((b7 == 'o') && (b8 == 'o') && (b9 == 'o')) {
//         document.getElementById('print')
//             .innerHTML = "Jugador Breilyn Gana";
//         window.alert('Player Breilyn Gana');
//         b1.disabled = true;
//         b2.disabled = true;
//         b3.disabled = true;
//         b4.disabled = true;
//         b5.disabled = true;
//         b6.disabled = true;
//     } else if ((b1 == 'o') && (b4 == 'o') && (b7 == 'o')) {
//         document.getElementById('print')
//             .innerHTML = "Jugador Breilyn Gana";
//         window.alert('Player Breilyn Gana');
//         b9.disabled = true;
//         b2.disabled = true;
//         b3.disabled = true;
//         b8.disabled = true;
//         b5.disabled = true;
//         b6.disabled = true;
//     } else if ((b2 == 'o') && (b5 == 'o') && (b8 == 'o')) {
//         document.getElementById('print')
//             .innerHTML = "Jugador Breilyn Gana";
//         window.alert('Player Breilyn Gana');
//         b1.disabled = true;
//         b2.disabled = true;
//         b3.disabled = true;
//         b7.disabled = true;
//         b4.disabled = true;
//         b6.disabled = true;
//     } else if ((b3 == 'o') && (b6 == 'o') && (b9 == 'o')) {
//         document.getElementById('print')
//             .innerHTML = "Jugador Breilyn Gana";
//         window.alert('Player Breilyn Gana');
//         b1.disabled = true;
//         b2.disabled = true;
//         b5.disabled = true;
//         b7.disabled = true;
//         b4.disabled = true;
//         b8.disabled = true;
//     } else if ((b1 == 'o') && (b5 == 'o') && (b9 == 'o')) {
//         document.getElementById('print')
//             .innerHTML = "Jugador Breilyn Gana";
//         window.alert('Player Breilyn Gana');
//         b3.disabled = true;
//         b2.disabled = true;
//         b6.disabled = true;
//         b7.disabled = true;
//         b4.disabled = true;
//         b8.disabled = true;
//     } else if ((b3 == 'o') && (b5 == 'o') && (b7 == 'o')) {
//         document.getElementById('print')
//             .innerHTML = "Jugador Breilyn Gana";
//         window.alert('Player Breilyn Gana');
//         b1.disabled = true;
//         b2.disabled = true;
//         b6.disabled = true;
//         b9.disabled = true;
//         b4.disabled = true;
//         b8.disabled = true;
//     }
// }