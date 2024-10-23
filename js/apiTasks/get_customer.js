import mysql from 'mysql2/promise';

async function get_customer(db, req, res) {
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
}

export default get_customer;