import show_allCustomers from "../functions/show_allCustomers.js";

async function get_allCustomers(listElement) {
    try {
        // Sende eine GET-Anfrage an die API
        const response = await fetch('/api/get-customer');

        if (response.ok) { // response.ok prüft, ob der Statuscode zwischen 200 und 299 liegt
            const customers = await response.json(); // oder .json() falls die API JSON sendet
            show_allCustomers(customers, listElement);
        } else {
            const status = await response.status;
            const text = await response.statusText;
            listElement.innerHTML = status + " " + text;
        }
    } catch (error) {
        console.error('Fehler:', error);
        document.getElementById('result').textContent = 'Fehler bei der Verbindung zur API.';
    }
}

export default get_allCustomers;