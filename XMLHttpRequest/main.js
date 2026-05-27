const request = obj => {
    const xhr = new XMLHttpRequest() // o nome da constante 'xhr' é uma nomenclatura padrão da comunidade, que representa uma abreviação para XMLHttpRequest
    
    // xhr.open('Método http', 'URL',   TRUE -> Assíncrono || FALSE -> Síncrono)
    xhr.open(obj.method, obj.url, true)

    // xhr.send() <- usado em POST

    xhr.addEventListener('load', () => {
        if (xhr.status >= 200 && xhr.status < 300){ // os códigos http entre 200 e 300 representam sucesso, ou seja, a requisição ocorreu bem

            obj.sucess(xhr.responseText) // tudo que buscarmos num documento 

        } else {
            obj.error(xhr.statusText) // caso a requisição GET não funcione, envio qual foi o status do erro em texto
        }
    })
}