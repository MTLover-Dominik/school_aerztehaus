
let loginButton = document.getElementById('login');

loginButton.addEventListener('click', (e) => {
    handleSubmit(e);
})
function handleSubmit(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Hier kannst du das machen, was du möchtest, z.B. Daten verarbeiten oder an eine API senden
    
}