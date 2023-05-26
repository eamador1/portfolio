const $form = document.querySelector('.contactform')
const $mail = document.querySelector('.email')
const $message = document.querySelector('.warnings')
const $closemenu = document.querySelector('.x-warning'); 
const $container = document.querySelector('.hide')   
    
$form.addEventListener('submit', e => {
    e.preventDefault()
    let restriction = /[A-Z]/
    let warnings = ""
    let enter = false



if (restriction.test($mail.value)) {
    warnings+=`Warning: Please use only lower case for email`
    enter = true
}

if (enter){
    $message.innerHTML = warnings;
    $container.classList.remove('hide')
}


})     