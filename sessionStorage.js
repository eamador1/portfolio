functionstore()

let $name = document.querySelector('.name');
let $mail = document.querySelector('.mail');
let $text = document.querySelector('.message');

    let information = {
        $name = $name,
        $mail = $mail,
        $text = $text,     
    }
    window.sessionStorage.setItem('information',JSON.stringify(information));  