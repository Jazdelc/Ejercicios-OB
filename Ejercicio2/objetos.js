const misDatos = {
    nombre: "Jazmin",
    apellido: "Sepulveda",
    edad: 32,
    altura: 1.60,
    eresDesarrollador: true
}

const prop = "edad"
console.log(misDatos[prop])

const lista = [
    {
        nombre: "Jazmin",
        apellido: "Sepulveda",
        edad: 32,
        altura: 1.60,
        eresDesarrollador: true
    }, {
        nombre: "Paulo",
        apellido: "Flores",
        edad: 28,
        altura: 1.74,
        eresDesarrollador: false
    }, {
        nombre: "Daniela",
        apellido: "Lopez",
        edad: 35,
        altura: 1.65,
        eresDesarrollador: true
    }
]

const listaEdad = lista.sort((a,b) => b.edad - a.edad)
console.log(listaEdad)