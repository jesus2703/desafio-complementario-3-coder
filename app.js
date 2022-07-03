const cortesCarne = [
    {id: 1, nombre: "cuadrl", precio: 1180},
    {id: 2, nombre: "costilla", precio: 1080},
    {id: 3, nombre: "lomo", precio: 1450},
    {id: 4, nombre: "peceto", precio: 1400},
    {id: 5, nombre: "nalga", precio: 1200}

]

for (const cortes of cortesCarne) {

    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h2>${cortes.nombre}</h2>
                            <p>${cortes.precio}</p>`

    document.body.appendChild(contenedor);
    
}
