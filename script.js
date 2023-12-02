//-Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. -Utilizzare setTimeout per simulare un'operazione asincrona.

function Simple(number){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(number > 20) {
                resolve(`${number} è maggiore di 20`)
            } else {
                reject(`${number} è minore di 20`)
            }
        },1000)
})
}

Simple(22)
.then((data) => console.log(data))
.catch((error) => console.log(error))