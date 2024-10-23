

async function check_connection(db, req, res) {
    try {
        const message = await db.checkConnection();
        res.status(200).send(message);
    } catch (error) {
        res.status(500).send(error);
        console.log("error code 500")
    } finally {
        db.closeConnection(); // Schließe die Verbindung nach der Überprüfung
    }
}

export default check_connection;