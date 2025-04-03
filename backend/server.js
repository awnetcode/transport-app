const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors({ origin: '*', methods: ['GET', 'POST'] }));
app.use(express.json());

// Połączenie z bazą danych MySQL
const db = mysql.createConnection({
  host: 'localhost', // np. 'localhost'
  port: '3306',
  user: 'root',
  database: 'claw99'
  //-----baza--na--seohost--->
  // host: '188.210.221.51',
  // port: '3306',
  // user: 'srv83215_kapitan',
  // password: 'bombatrotylemjestem',
  // database: 'srv83215_towary'
});

// Testowanie połączenia z bazą
db.connect((err) => {
  if (err) {
    console.error('Błąd połączenia z bazą danych:', err);
    return;
  }
  console.log('Połączono z bazą danych MySQL!');
});


// Endpoint do pobierania danych z filtrem
app.post('/api/search', (req, res) => {
  const { searchTerm } = req.body; // Pobranie wartości wysłanej z frontendu

  if (!searchTerm) {
    return res.status(400).json({ error: 'Brak parametru searchTerm' });
  }

  const sqlQuery = 'SELECT * FROM wagi_towarow WHERE casto LIKE ?';
  db.query(sqlQuery, [`%${searchTerm}%`], (err, results) => {
    if (err) {
      console.error('Błąd zapytania:', err);
      return res.status(500).json({ error: 'Błąd serwera' });
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});