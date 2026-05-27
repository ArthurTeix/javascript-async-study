const request = obj => {
    const xhr = new XMLHttpRequest() // o nome da constante 'xhr' é uma nomenclatura padrão da comunidade, que representa uma abreviação para XMLHttpRequest
    
    // xhr.open('Método http', 'URL',   TRUE -> Assíncrono || FALSE -> Síncrono)
    xhr.open(obj.method, obj.url, true)

    // xhr.send() <- é obrigatório em todos os métodos, incluindo GET. A diferença é que no POST você passa o corpo da requisição dentro dele

    // GET:  xhr.send()         → sem corpo, dados vão na URL
    // POST: xhr.send(dados)    → dados vão no corpo da requisição

    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300){ // os códigos http entre 200 e 300 representam sucesso, ou seja, a requisição ocorreu bem

            obj.success(xhr.responseText) // tudo que buscarmos num documento 

        } else {
            obj.error(xhr.statusText) // caso a requisição GET não funcione, envio qual foi o status do erro em texto
        }
    })

    xhr.send()
}

document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if (tag === 'a') {
        e.preventDefault()
        carregaPag(el)
    }
})

function carregaPag(el) {
    const href = el.getAttribute('href') // capturando (get) o atributo

    request({
        method: 'GET',
        url: href,

        success(response) { // função criado lá no load do xhr
            carregaResult(response)
        },
        error(errorText) { // função criado lá no load do xhr
            console.log(errorText)
        }
    })
}

function carregaResult(response) { // função que vai exibir minha página na minha div.resultado

    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response // no lugar da div irá ser exibida a página selecionada
}