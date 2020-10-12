'use strict';

class Signup {
    constructor(){
        this.nameInput = document.querySelector("#name");
        this.emailInput = document.querySelector("#email");
        this.passwordInput = document.querySelector("#password");
        this.repeatPasswordInput = document.querySelector("#repeat-password");

        this.buttonInput = document.querySelector("#signup-button");
        this.errorsWrapper  = document.querySelector(".message-container");
    }

// gestionem info que entra a email
handleEmailInput = (event) => {
    const email = event.target.value;

    validator.validateValidEmail(email);

    const errors = validator.getErrors(); // var on acomularem els errors trobats

    if(!errors.invalidEmailError){ //si no hi ha errors
        validator.validateUniqueEmail(email); //valida despres que sigui únic
    }
    this.setErrorMessages();
    this.checkButton();
}


// gestionem info que entra a pass
handlePasswordInput = (event) => {
    const password = event.target.value;
    const passwordRepeat = this.repeatPasswordInput.value;

    validator.validatePassword(password);
    validator.validatePasswordRepeat(password, passwordRepeat);

    this.setErrorMessages();// comprovem si hi han errors, si no hi ha activa el botó sign up
    this.checkButton();
}


// gestionem info que entra a pass repeat
handleRepeatPasswordInput = (event) => {
    const passwordRepeat = event.target.value;
    const password = this.passwordInput.value;

    validator.validatePassword(password);
    validator.validatePasswordRepeat(password, passwordRepeat);

    this.setErrorMessages();
    this.checkButton();
}


// gestionem enviament de dades
saveData = (event) => {
    event.preventDefault();

    const name = this.nameInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    const repeatPassword = this.repeatPasswordInput.value;

    const newUser = new User(name, email, password);
    db.saveNewUser(newUser); //ho guardem a la data base ficticia

    //buidem el form
    this.nameInput.value="";
    this.emailInput.value="";
    this.passwordInput.value="";
    this.repeatPasswordInput.value="";

    this.showSuccessMessage();
    this.removeMessages();

    validator.resetValidator();
    this.buttonInput.disabled = true;
}

addListeners = () => {
    this.emailInput.addEventListener("input" , this.handleEmailInput);
    this.passwordInput.addEventListener("input", this.handlePasswordInput);
    this.repeatPasswordInput.addEventListener("input", this.handleRepeatPasswordInput);

    this.buttonInput.addEventListener("click", this.saveData);
}

showSuccessMessage = () => {
    this.errorsWrapper.innerHTML="";

    const errorsObj = validator.getErrors();
    const errorStringsArr = Object.values(errorsObj); //creem una array de strings amb el Object.values

    if (errorsStringsArr.length > 1){
        return;
    }

    const successMessageP = document.createElement('p');
    successMessageP.innerHTML="La cuenta ha sido creada con éxito";

    this.errorsWrapper.appendChild(successMessageP);
}

//activar o desactivar el botó de sign up
checkButton = () =>{
    const errorsObj = validator.getErrors();
    const errorsArr = Object.values(errorsObj);

    if(errorsArr.length > 0){
        this.buttonInput.disabled = true;
    } else {
        this.buttonInput.disabled = false;
    }
}

removeMessages = () => {
    setTimeout(() => {
        this.errorsWrapper.innerHTML="";

    }, 3000);
} 


setErrorMessages = () => {
    this.errorsWrapper.innerHTML=""; //buidem els missatges per tal que no es sumin

    const errorsObj = validator.getErrors();
    const errorsStringsArr= Object.values(errorsObj);

    errorsStringsArr.forEach((errorStr) => {
        const errorMessageP =  document.createElement('p');
        errorMessageP.innerHTML= errorStr;

        this.errorsWrapper.appendChild(errorMessageP);
        
    })
  }
}

const signup = new Signup();

window.addEventListener("load", signup.addListeners);



