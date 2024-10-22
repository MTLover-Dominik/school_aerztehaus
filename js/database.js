const mysql = require('mysql2'); // mysql2-Paket verwenden

class Database {
    constructor(credentials) {
        this.host = credentials.host;          // z.B. "127.0.0.1"
        this.user = credentials.username;      // z.B. "root"
        this.password = credentials.password;  // z.B. "deinPasswort"
        this.database = credentials.database;  // z.B. "deineDatenbank"
        this.port = credentials.port

        // Erstelle die Verbindung
        this.connection = mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database,
            port: this.port // Port als separates Feld
        });
    }

    // Methode zum Überprüfen der Verbindung
    checkConnection() {
        return new Promise((resolve, reject) => {
            this.connection.connect((err) => {
                if (err) {
                    return reject('Verbindung zur Datenbank fehlgeschlagen: ' + err.message);
                }
                resolve('Verbindung zur Datenbank erfolgreich hergestellt.');
            });
        });
    }

    // Methode zum Schließen der Verbindung
    closeConnection() {
        this.connection.end((err) => {
            if (err) {
                console.error('Fehler beim Schließen der Verbindung: ' + err.message);
            }
        });
    }
}

module.exports = Database;
