import { projectInfo } from './data.js';

const $containerCards = document.querySelector('.container-cards');
projectInfo.forEach((project, index) => {



// Creating Elements //
const $cards = document.createElement('div');
const $image = document.createElement('img');
const $heading = document.createElement('h4');
const $paragraph = document.createElement('p');
const $ul = document.createElement('ul');
const $button = document.createElement ('button');
const $cardClassName =  `container-${(index %3) +1}`;

// Assigning Classes to the Elements //
$cards.classList.add($cardClassName);
$image.classList.add('card-image');
$heading.classList.add('project-title');
$ul.classList.add('project-button');

//Asigning values
$image.setAttribute('src', project.image);
$heading.textContent = project.title;
$paragraph.textContent = project.text;
$button.textContent = 'See project';

project.tools.forEach ((tool) => {
  const $li = document.createElement('li');
  $li.classList.add('project-tools-list');
  $li.textContent = tool;
  $ul.appendChild($li);
})

$cards.appendChild($image);
$cards.appendChild($heading);
$cards.appendChild($paragraph);
$cards.appendChild($ul);
$cards.appendChild($li);
$cards.appendChild($button);
$containerCards.appendChild($cards);
})



