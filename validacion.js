document.getElementById('boton').addEventListener('click', (e) => {
    e.preventDefault();


    let email = document.querySelector('#email').value;
    let emailconfirm = document.querySelector('#emailconfirm').value;

    let contador = 0;
    if (
        email.charAt(email.length - 4) != '.' &&
        email.charAt(email.length - 3) != '.'
    ) {
        
        document.getElementById('salida').innerHTML = 'El email ha tener "." ';
       
    }
    for (let i = 0; i < email.length; i++) {
        if (email[i] == '@') {
            contador++;
        }
    }
    if (contador != 1) {
        document.getElementById('salida').innerHTML = 'No es un formato valido, has de introducir @ ';
    }

    if (emailconfirm != email) {
        document.getElementById('salida').innerHTML = 'Los emails no coinciden ';

    }

});