export const Footer = (products) => {
    const totalValue = products.reduce((acc, product) => acc + product.preco, 0);

//    const footer = document.createElement('footer')
//    const total = produtos.reduce((acc, prod)=> acc + prod.preco, 0)
//    footer.innerHTML = `Total: R$ ${total}`    
//    return footer;

    return `
        <p>Valor Total de Todos os Produtos: <strong>R$ ${totalValue}</strong></p>
    `;
};