import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) {
        console.error("error koneksi database", err);
        return;
    }
    console.log("mysql berhasil connect");
});

export default db;