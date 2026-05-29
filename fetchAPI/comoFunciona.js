// O método fetch() é uma função nativa do JavaScript que permite fazer requisições HTTP de forma simples e fácil. ELE RETORNA UMA PROMISE que resolve para a resposta da requisição, permitindo que você trabalhe com os dados retornados de maneira assíncrona.

fetch('pagina2.html') // Posso usar qualquer URL, sendo ela Local ou Remota, para fazer a requisição
    .then(resposta => {
        if(resposta.status !== 200) throw new Error('ERRO 404 NOSSO!') // se a resposta for diferente de 200, ou seja, diferente de sucesso, o código irá lançar um erro

        return resposta.text()
    })
    .then(html => console.log(html)) // se a resposta for bem-sucedida, o código irá extrair o conteúdo da resposta como texto e exibi-lo no console

    .catch(err => console.error(err)) // caso haja um erro, ele será capturado aqui e exibido no console

/* O código acima é uma forma de fazer uma requisição HTTP usando o método fetch(). Ele tenta buscar o arquivo 'pagina1.html' e, se a resposta tiver um status diferente de 200 (sucesso), ele lança um erro personalizado. Se houver algum erro durante a requisição, ele será capturado e exibido no console. */