export const Card = (product) => {

    return `
        <div class="card">
            <img src="${product.imagem}" alt="Imagem do produto ${product.nome}" class="card-image"/>
            <div class="card-body">
                <h3 class="card-title">${product.nome}</h3>
                <p class="card-price">R$ ${product.preco}</p>
            </div>
        </div>
    `;
};