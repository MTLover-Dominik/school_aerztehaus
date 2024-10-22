button = document.getElementById("doSomething");
textArea = document.getElementById("doSomethingText");

const message = "Willkommen zu meinem TypeScript-Projekt!";

button.addEventListener("click", ()=> {
    textArea.innerHTML = message;
})


// Funktion, die bei Klick auf den Button die API aufruft
document.getElementById('checkDatabaseBtn').addEventListener('click', async function() {
    try {
        // Sende eine GET-Anfrage an die API
        const response = await fetch('/api/get-customer');

        if (response.ok) { // response.ok prüft, ob der Statuscode zwischen 200 und 299 liegt
            const message = await response.json(); // oder .json() falls die API JSON sendet
            console.log('Erfolg:', message);
        } else {
            console.error('Fehler:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Fehler:', error);
        document.getElementById('result').textContent = 'Fehler bei der Verbindung zur API.';
    }
});
