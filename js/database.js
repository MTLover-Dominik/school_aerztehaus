const mysql = require('mysql2');

class Database {
    constructor(credentials) {
        this.host = credentials.host;
        this.user = credentials.username;
        this.password = credentials.password;
        this.database = credentials.database;

        // Erstelle die Verbindung
        this.connection = mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        });
    }

    // Methode zum Überprüfen der Verbindung
    checkConnection() {
        return new Promise((resolve, reject) => {
            this.connection.connect((err) => {
                if (err) {
                    reject(`Fehler bei der Verbindung zur Datenbank: ${err.stack}`);
                } else {
                    resolve('Verbindung zur Datenbank erfolgreich');
                }
            });
        });
    }

    // Methode zum Schließen der Verbindung
    closeConnection() {
        this.connection.end((err) => {
            if (err) {
                console.error('Fehler beim Schließen der Verbindung: ', err);
            } else {
                console.log('Datenbankverbindung geschlossen.');
            }
        });
    }
}

module.exports = Database;
