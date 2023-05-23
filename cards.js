import { projectInfo } from './data.js';

const projectCards = document.querySelector('.container-cards');

function showCards() {
  let cardsHTML = '';

  projectInfo.forEach((project, index) => {
  
    const cardHTML = `

    <div class="card">
    <div class="container-card-image">
    <img class="card-image" src="${project.image}">
    <div>
    <div class="container-card-heading">
    <h4 class="card-heading">${project.title}</h4>
    </div>    
    </div>
    `;
  
    cardsHTML += cardHTML;
  }); 