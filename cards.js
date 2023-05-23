import { projectInfo } from './data.js';
const cards = document.queryselector('container-cards');
const template = document.getElementById('template-card').content;
const fragment = document.createDocumentFragment();

projectInfo.forEach(el => {
  template.queryselector('img').SetAttribute('src', el.image);
  template.queryselector('.card-heading').textContent = el.title;
  template.queryselector('.card-paragraph').textContent = el.text;
  
}
  )
