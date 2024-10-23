button = document.getElementById("doSomething");
textArea = document.getElementById("doSomethingText");
customerList = document.getElementById("customerList");
testCustomer = document.getElementById("testCustomer");

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
            const customers = await response.json(); // oder .json() falls die API JSON sendet
            console.log('Erfolg:', customers);
            displayCustomers(customers);
        } else {
            const status = await response.status;
            const text = await response.statusText;
            customerList.innerHTML = status + " " + text;
            console.error('Fehler:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Fehler:', error);
        document.getElementById('result').textContent = 'Fehler bei der Verbindung zur API.';
    }
});

function displayCustomers(customers) {
    let i = 0;
    do {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<div><b>Kunde ${customers[i].kunnr}</b><br>
            ${customers[i].vorname} ${customers[i].name}<br>
            ${customers[i].strasse}<br>
            ${customers[i].plz} ${customers[i].ort}</div>`;
        customerList.appendChild(listItem);
        i++;
    } while (customers.length > i);
}