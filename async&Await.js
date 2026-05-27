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


// async - serve para marcar uma função como assíncrona, ou seja, ela pode conter código assíncrono dentro dela. 

async function executa() {

    try { // para englobar e fazer apenas um catch
        
        const fase1 = await esperaAi('Fase 1', random()) // await - serve para esperar a resolução de uma promessa. Ele pausa a execução da função assíncrona até que a promessa seja resolvida e retorna o valor resolvido.
        console.log(fase1)
        
        const fase2 = await esperaAi('Fase 2', random())
        console.log(fase2)

        const fase3 = await esperaAi('Fase 3', random())
        console.log(fase3)

        console.log('Terminamos na fase: ' + fase3)
    } catch(err) { // Este catch é global e serve para todos os await, mas posso fazer um catch para cada
        console.log(err)
    }
    
}

executa() // executa de forma ordenada mais organizada