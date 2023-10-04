const mysql = require('mysql2/promise'); // ou la bibliothèque de base de données que vous utilisez

async function testDatabaseConnection() {
  const connection = await mysql.createConnection({
    host: 'localhost', // Remplacez par l'hôte de votre base de données
    user: 'votre_utilisateur', // Remplacez par votre nom d'utilisateur
    password: 'votre_mot_de_passe', // Remplacez par votre mot de passe
    database: 'votre_base_de_données', // Remplacez par le nom de votre base de données
  });

  try {
    await connection.connect();
    console.log('Connexion à la base de données réussie');
    // Vous pouvez effectuer d'autres opérations ici
  } catch (error) {
    console.error('Erreur de connexion à la base de données :', error);
  } finally {
    await connection.end();
  }
}

testDatabaseConnection();
