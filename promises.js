//      FORMA ANTIGA USANDO CALLBACKS

function random(min, max) {
    // convertendo de ms para seg para enviar direto em segundos
    min *= 1000
    max *= 1000

    return Math.floor(Math.random() * (max-min) + min)
}

/*
function esperaAi(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg)
        if (cb) cb()
    }, tempo);
}

// Assim, independente do tempo de demora da 1º, a 2º apenas será executada após o fim da primeira (mesma regra para a 3º com a 2º)

// Mas esses esquemas que levam muito à direita podem ser maléficos e difíceis de corrigir

esperaAi('frase 1', random(1, 3), function() {
    esperaAi('frase 2', random(1, 3), function() {
        esperaAi('frase 3', random(1, 3)) 
    }) 
})
*/

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
    // Resolve -> quando a promessa for cumprida
    // Reject -> quando a promessa for rejeitada

        if (typeof msg !== 'string') { reject(new Error('BAD VALUE')) } // será enviado ao catch

        setTimeout(() => {
            resolve(msg) // será executada logo após a minha Promise se concretizar
        }, tempo);
    })
}

// O JS exibe as promises por último 

esperaAi('Conexão com BD', random(1, 3))
    .then(resposta => { // será executado quando chamarmos o resolve

        console.log(resposta) // pego a msg como parâm do resolve e ele passa para o then no parâm resposta e exibe

        return esperaAi('Buscando dados', random(1, 3)) // posso passar outra promise dentro de uma promise, logo, a 'Frase 2' apenas será exibida se a frase 1 ja tiver sido exibida
    })
    .then(resposta => { // then da segunda promise (frase 2)
        console.log(resposta) 
        return esperaAi(4, random(1, 3))
    })
    .then(resposta => { console.log(resposta) }) // exibindo a terceira frase
    .then(() => { console.log('Exibe dados')})

    .catch(err => {
        console.log(err)
    }) // será executado quando chamarmos o reject

console.log('Isso aqui será exibido antes das promises') // exibido primeiro, pois as promises vão ser esecutadas apenas depois de cumpridas
console.log('')