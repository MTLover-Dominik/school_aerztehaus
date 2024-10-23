import express from 'express';
import fs from 'fs';
import Database from './database.js';
import check_connection from './apiTasks/task_checkDatabase.js';
import get_customer from './apiTasks/get_customer.js';
import get_articles from "./apiTasks/get_articles.js";

const app = express();
const port = 3000;

// Lade die Anmeldeinformationen aus der JSON-Datei TODO credentials anpassen
const credentials = JSON.parse(fs.readFileSync('H:/ITP/lilHecht/gui/credentials.json', 'utf8'));

// Erstelle eine Instanz der Datenbankklasse
const db = new Database(credentials);

// API-Endpoint zum Überprüfen der Datenbankverbindung
app.get('/api/check-database', async (req, res) => {
    check_connection(db, req, res);
});

app.get('/api/get-customer', async (req, res) => {
    get_customer(db, req, res);
});

app.get('/api/get-articles', async (req, res) => {
    get_articles(db, req, res);
})

// Stelle statische Dateien im Ordner 'public' bereit
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
