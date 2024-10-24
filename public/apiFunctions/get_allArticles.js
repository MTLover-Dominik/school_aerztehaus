import show_allArticles from "../functions/show_allArticles.js";

async function get_allArticles(listElement) {
    try {
        // Sende eine GET-Anfrage an die API
        const response = await fetch('/api/get-articles');

        if (response.ok) { // response.ok prüft, ob der Statuscode zwischen 200 und 299 liegt
            const articles = await response.json(); // oder .json() falls die API JSON sendet
            show_allArticles(articles, listElement);
            console.log("%c" + articles[0], "color: orange");
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

export default get_allArticles;