let $nameField = document.querySelector('.name');
let $mailField = document.querySelector('.email');
let $textField = document.querySelector('.message');

    let information = {
        $userName: '',
        $userMail: '',
        $textMessage: '',     
    }

    window.onload = () => {
        const $sessionData = localStorage.getItem('userData');
        if ($sessionData != null) {
          const obj = JSON.parse($sessionData);
          $nameField.value = obj.$userName;
          $mailField.value = obj.$userMail;
          $textField.value = obj.$textMessage;
          information.$userName = obj.$userName;
          information.$userMail = obj.$userMail;
          information.$textMessage = obj.$textMessage;
        }
      };
    
      const storeData = ($sessionData) => {
        const str = JSON.stringify($sessionData);
        localStorage.setItem('userData', str);
      };
      
      $nameField.addEventListener('change', (event) => {
        information.$userName = event.target.value;
        storeData(information);
      });
      
      $mailField.addEventListener('change', (event) => {
        information.$userMail = event.target.value;
        storeData(information);
      });
      
      $textField.addEventListener('change', (event) => {
        information.$textMessage = event.target.value;
        storeData(information);
      });