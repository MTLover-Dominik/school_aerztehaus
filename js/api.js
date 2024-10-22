const express = require('express');
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
    try {
        // Hier wird die Datenbankabfrage ausgeführt
        await db.checkConnection();
        const [results] = await db.query('Select * From kunde'); // Verwende die Methode deiner Datenbankverbindung

        // Überprüfen, ob Ergebnisse vorhanden sind
        if (results.length > 0) {
            res.status(200).json(results); // Sende die Ergebnisse als JSON zurück
        } else {
            res.status(404).json({ message: 'Keine Kunden gefunden' }); // Keine Kunden gefunden
        }
    } catch (error) {
        // Bei einem Fehler wird der Fehlerstatus 500 gesendet
        res.status(500).json({ error: 'Interner Serverfehler', details: error.message });
        console.log('Fehler:', error); // Fehler im Server-Log ausgeben
    } finally {
        db.closeConnection();
    }
});

// Stelle statische Dateien im Ordner 'public' bereit
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
