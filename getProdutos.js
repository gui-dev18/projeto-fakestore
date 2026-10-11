const getProdutos = async () => {
    try {
    const url = 'https://fakestoreapi.com/products/'
    const res = await fetch(url)
    const dados = await res.json()
    return dados
    } catch (erro) {
        console.log(`Erro ao buscar produto: ${erro.message}`)
        return []
    }
}

export default getProdutos