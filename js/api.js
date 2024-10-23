const express = require('express');
const mysql = require('mysql2/promise'); // Versprechen-basierte MySQL-Verbindung
const fs = require('fs');
const Database = require('./database.js');  // Verweis auf die Datenbankklasse

const app = express();
const port = 3000;

// Lade die Anmeldeinformationen aus der JSON-Datei TODO credentials anpassen
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
        console.log("error code 500")
    } finally {
        db.closeConnection(); // Schließe die Verbindung nach der Überprüfung
    }
});

app.get('/api/get-customer', async (req, res) => {
    let connection;
    try {
        // Verbindung zur Datenbank herstellen
        connection = await mysql.createConnection(db);

        // Datenbankabfrage: SELECT * FROM customer
        const [results] = await connection.query('SELECT * FROM kunde'); // Tabelle "kunde" anpassen

        // Kundendaten als JSON zurückgeben
        res.status(200).json(results);
    } catch (error) {
        console.error('Datenbankfehler:', error);
        res.status(500).send('Fehler bei der Verbindung zur Datenbank');
    } finally {
        if (connection) {
            // Verbindung schließen
            await connection.end();
        }
    }
});

// Stelle statische Dateien im Ordner 'public' bereit
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
