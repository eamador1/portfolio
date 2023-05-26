function emailValidation(email){
    var expreg = /[A-Z]/;
    var validate = expreg.test(email);
    if (validate !== true ) {
        alert('email should be in lower case')
    }
}