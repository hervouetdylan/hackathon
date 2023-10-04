const mysql = require("mysql2/promise");

const database = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

database
  .getConnection()
  .then((connection) => {
    console.info("Connected to the database");

    // Exemple d'utilisation d'une requête SQL
    const sql = "SELECT * FROM votre_table";
    return connection.query(sql);
  })
  .then(([rows, fields]) => {
    console.info("Fetched data from the database", rows);
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

module.exports = database;
