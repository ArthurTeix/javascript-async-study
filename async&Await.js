function random(min=0, max=2) {
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max-min) + min)
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('Cai no erro')
                return
            }

            resolve(msg.toUpperCase() + ' - Passei na promise')
            return
        }, tempo);
    })
}

// encadeamento de then (um so acontece apos o outro)
esperaAi('Fase 1', random())
    .then(fase1 => { 
        console.log (fase1)
        return esperaAi('Fase 2', random())
    })
    .then(fase2 => {
        console.log(fase2)
        return esperaAi('Fase 3', random())
    })
    .then(fase3 => {
        console.log(fase3)
    })
    .catch(err => console.log(err))