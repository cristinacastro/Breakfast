'use strict';

class Login{
    constructor (){
        this.emailInput = document.querySelector("#email");
        this.passwordInput = document.querySelector("#password");
        this.loginButton = document.querySelector("#login-button");
        this.messageContainer = document.querySelector(".message-container")
    }

    submit = (event) => {
        event.preventDefault(); //evitem que la pàgina es recarregui, ja que no enviem realment les dades enlloc, al no recarregar no perdem la informació
        //des de la base de dades comprovem l'enviament de les dades del input
        const userDB = db.getAllUsers();

        const email = this.emailInput.value;
        const password = this.passwordInput.value;

        // ara mirem si les dades exiseixen
        const user = userDB.find((userObj) => {
            if(userOBj.email === email && userObj.password === password){
                return true;
            }
        })
        this.showMessage(user);
    }
        //configurem el missatge

    showMessage = (user) => {
        this.messageContainer.innerHTML="";
        const message = document.createElement('p');
        if(user){ //if user vol dir que esta validat, es a dir que existeix
            message.innerHTML=`Hola, ${user.email}`;
            message.classList.add("correct-message");
        } else {
            message.innerHTML="El email y/o password son incorrectos";
        }
        this.messageContainer.appendChild(message);
        
        if(user) this.redirect();
    }

    redirect = () => {
        setTimeout ( () => location.assign('index.html'), 3000);
    }
}

const login = new Login();
login.loginButton.addEventListener("click", login.submit);
