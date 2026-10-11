import getProdutos from "./getProdutos.js"
const cards = document.querySelector('.alocacao')

const exibirProdutos = (item) => {
    let divCards = document.createElement('div')
    divCards.className = 'card'

    let categoria = document.createElement('span')
    categoria.innerText = item.category

    let img = document.createElement('img')
    img.setAttribute('src', item.image)
    
    let h2 = document.createElement('h2')
    h2.innerText = item.title

    let avaliacao = document.createElement('div')
    avaliacao.className = 'avaliacao'
    avaliacao.innerText = `⭐ ${item.rating.rate} (${item.rating.count} avaliações)`

    let descricao = document.createElement('p')
    descricao.innerText = item.description

    let preco = document.createElement('span')
    preco.innerText = `R$: ${item.price.toFixed(2)}`  // Formato de moeda

    let divButtons = document.createElement('div')
    divButtons.className = 'buttons'

    let addAoCarrinho = document.createElement('a')
    addAoCarrinho.innerText = 'Adicionar ao carrinho'

    let comprar = document.createElement('a')
    comprar.innerText = 'Comprar'

    divButtons.append(addAoCarrinho, comprar)
    divCards.append(categoria, img, h2, avaliacao, descricao, preco, divButtons)

    return divCards
}

const mostrarProdutos = async () => {
    try {
        const produtosDaApi = await getProdutos()

        if (produtosDaApi.length === 0) {
            cards.innerHTML = `<p style="color: #dc2626;">Erro ao carregar produtos</p>`
            return
        }

        for (let produto of produtosDaApi) {
            cards.append(exibirProdutos(produto))
        }
    } catch (erro) {
        console.log(`Erro: ${erro.message}`)
        cards.innerHTML = `<p style="color: #dc2626;">Erro ao carregar produtos</p>`
    }
}

mostrarProdutos()