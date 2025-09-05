import { Card } from './Card.js';

export const ListCards = (products) => {
    const cardsHtml = products.map(product => Card(product)).join('');
    
    return `
        <div class="card-container">
            ${cardsHtml}
        </div>
    `;
};