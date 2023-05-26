
const projects = [
  {
    images: './img/img-placeholder1.png',
    image1: 'img/image-hover.png',
    title:'Professional Art Printing',
    paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    languages: ['html', 'bootstrap', 'Ruby'],
    seeBtn: 'See Project'
  },

  {
    images: './img/image-background2.png',
    image1: 'img/image-hover.png',
    title:'Data Dashboard Healthcare',
    paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    languages: ['html', 'bootstrap', 'Ruby'],
    seeBtn: 'See Project'
  },

  {
    images: './img/image-background3.png',
    image1: 'img/image-hover.png',
    title:'Website Portfolio',
    paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    languages: ['html', 'boostrap', 'Ruby'],
    seeBtn: 'See Project'
  },

  {
    images: './img/img-placeholder1.png',
    image1: 'img/image-hover.png',
    title:'Professional Art Printing',
    paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    languages: ['html', 'bootstrap', 'Ruby'],
    seeBtn: 'See Project'
  },

  {
    images: './img/image-background2.png',
    image1: 'img/image-hover.png',
    title:'Data Dashboard Healthcare',
    paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    languages: ['html', 'bootstrap', 'Ruby'],
    seeBtn: 'See Project'
  },

  {
    images: './img/image-background3.png',
    image1: 'img/image-hover.png',
    title:'Website Portfolio',
    paragraph: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industrys standard',
    languages: ['html', 'bootstrap', 'Ruby'],
    seeBtn: 'See Project'
  }
]
//CODE TO DISPLAY CARDS
 
let $cardWorks = document.querySelector('.card-works');

projects.forEach((project, index) => {
  
    // Create the elements
    let $images = document.createElement('img');
    let $hoverImage = document.createElement('img');
    let $cardContainer = document.createElement('div');
    let $projectTitle = document.createElement('h2');
    let $projectDescrption = document.createElement('p');
    let $ul = document.createElement('ul');
    let $button = document.createElement('button');
    const $cardClassName = `container-${(index % 3) +1}`;

    // Giving clasess
    $images.classList.add('card-image');
    $hoverImage.classList.add('hover-image');
    $cardContainer.classList.add($cardClassName);
    $projectTitle.classList.add('project-title');
    $projectDescrption.classList.add('project-description');
    $ul.classList.add('project-tools');
    $button.classList.add('project-button');

    // Assign values 
    $images.setAttribute("src", project.images);
    $hoverImage.setAttribute("src", project.image1);
    $projectTitle.textContent = project.title;
    $projectDescrption.textContent = project.paragraph;
    $button.textContent = project.seeBtn;

    project.languages.forEach((language) => {
        let $li = document.createElement('li');
        $li.classList.add('project-tools-list');
        $li.textContent = language;
        $ul.appendChild($li);
    })
  
    /* Append elements to cardContainer */

    $cardContainer.appendChild($projectTitle);
    $cardContainer.appendChild($projectDescrption);
    $cardContainer.appendChild($ul);
    $cardContainer.appendChild($button);
    $cardContainer.appendChild($images);
    $cardContainer.appendChild($hoverImage);
    $cardContainer.appendChild($button);

    $cardWorks.appendChild($cardContainer);

})

// DISPLAY MODAL WINDOW //

let $modal = document.querySelector('.modal');

projects.forEach((project, index) => {

  // Create the elements for in the modal section //

})