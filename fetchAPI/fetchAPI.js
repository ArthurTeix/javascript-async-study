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

document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if (tag === 'a') {
        e.preventDefault()
        carregaPag(el)
    }
})

async function carregaPag(el) {
    try {
        const href = el.getAttribute('href')
        const response = await fetch(href)

        if (response.status !== 200) { throw new Error("ERROR 404!") }

        const html = await response.text()
        carregaResult(html)
    } catch(e) { console.log(e) }
}

function carregaResult(response) {
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}
