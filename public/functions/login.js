
let usertype = document.getElementById("usertype");
let registerButton = document.getElementById('register');
let loginButton = document.getElementById('loginButton');

usertype.addEventListener('change', event => {
    let currentUsertype = usertype.value;
    window.alert("Sie sind ein " + currentUsertype);
});

loginButton.addEventListener('click', (e) => {
    handleLogin(e);
});

registerButton.addEventListener('click', (e) => {
    handleRegister(e);
});

function handleLogin(event) {
    event.preventDefault();

    const form = document.getElementById("login");

    // Überprüfe, ob das Formular die HTML-Validierungsanforderungen erfüllt
    if (form.checkValidity()) {
        // Wenn das Formular valide ist, kannst du deine eigene Logik ausführen
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Hier kannst du das machen, was du möchtest, z.B. Daten verarbeiten oder an eine API senden
        //TODO add check for "username" and "password"
        //checkCredentials(username, password);
        //TODO create file in "apiFunctions" to process data and check them
        
    } else {
        // Wenn das Formular nicht valide ist, wird die Standard-HTML-Validierung ausgeführt
        form.reportValidity(); // Zeigt die Standard-Hinweise an
    }
    
}

function handleRegister(event) {
    event.preventDefault();
    
}