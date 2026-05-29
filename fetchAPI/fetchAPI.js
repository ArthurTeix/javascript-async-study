// REFATORAR A FUNÇÃO 'REQUEST' USANDO FETCH API

/*
        ANTES
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)

        xhr.send()

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText)

            } else {
                reject(xhr.statusText)
            }
        })
    }) 
}

        DEPOIS*/
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(obj.method, obj.url, true)

        xhr.send()

        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText)

            } else {
                reject(xhr.statusText)
            }
        })
    }) 
}


// PARTE INALTERADA DO CÓDIGO
document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if (tag === 'a') {
        e.preventDefault()
        carregaPag(el)
    }
})

async function carregaPag(el) {
    const href = el.getAttribute('href')

    const objConfig = {
        method: 'GET',
        url: href,
    }

    try {
        const response = await request(objConfig)
        carregaResult(response)
    } catch(err) {
        console.log(err)
    }
}

function carregaResult(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}