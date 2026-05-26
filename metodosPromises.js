function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject('CAÍ NO ERRO')
            return
        }

        setTimeout(() => {
            resolve(msg.toUpperCase() + ' - Passei na Promise')
        }, tempo)
    })
}

const promises = [
    'Primero valor',
    esperaAi('Promise 1', 1000),
    esperaAi('Promise 2', 500),
    //esperaAi(1000, 1000), // Retorna erro, pois não é string
    'Último valor'
]

//============================================

// Promise.all
// Resolve todas as promessas e retorna depois os valores
// Muito útil quando só se deve retornar se todas as Promises forem válidas

// Promise.all(promises)
//     .then(valor => {
//         console.log(valor)
//     })
//     .catch(err => { console.log(err) })

//============================================

// Promise.race
// Passa vários valores no array e retorna sempre o primeiro valor que já foi resolvido

const exemp = [
    esperaAi('primeiro', 1000),
    esperaAi('segundo', 500), // Retorna primeiro pois o tempo de conclusão é menor
    // 'VALOR ALEATORIO' // valor que será retornado mesmo não sendo o primeiro, pois não é uma promise
]

Promise.race(exemp)
    .then(valor => { console.log(valor) })
    .catch(err => { console.log(err) })