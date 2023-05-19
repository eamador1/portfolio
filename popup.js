import { projectInfo } from './data.js';

const projectCards = document.querySelector('.container-cards');

function showCards() {
  let cardsHTML = '';

  projectInfo.forEach((project) => {
    for (let i=1; i<=6; i++) {

  
    const cardHTML = `

      <div class="card">
        <div class="container-card-heading">
          <h4 class="card-heading">${project.title}</h4>
        </div>
        <div class="container-card-paragraph">
          <p class="card paragraph">${project.text}</p>
        </div>
        <ul class="cardlist card1">
          ${project.tools.map(tool => `<li class="list bootstrap">${tool}</li>`).join('')}
        </ul>
        <div class="container-seeproject-button">
          <button class="button seeproject2">See Project</button>
        </div>
      </div>
    `;
}   
    cardsHTML += cardHTML;
  });

  projectCards.innerHTML = cardsHTML;
}

showCards();