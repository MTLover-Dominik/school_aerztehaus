const express = require('express');
const fs = require('fs');
const Database = require('./database.js');  // Verweis auf die Datenbankklasse

const app = express();
const port = 3000;

// Lade die Anmeldeinformationen aus der JSON-Datei
const credentials = JSON.parse(fs.readFileSync('H:/ITP/lilHecht/gui/credentials.json', 'utf8'));

// Erstelle eine Instanz der Datenbankklasse
const db = new Database(credentials);

// API-Endpoint zum Überprüfen der Datenbankverbindung
app.get('/api/check-database', async (req, res) => {
    try {
        const message = await db.checkConnection();
        res.status(200).send(message);
    } catch (error) {
        res.status(500).send(error);
    } finally {
        db.closeConnection(); // Schließe die Verbindung nach der Überprüfung
    }
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
