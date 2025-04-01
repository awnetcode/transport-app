const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 5000;

const cors = require('cors');
app.use(cors());

// Połączenie z bazą danych MySQL
const db = mysql.createConnection({
  host: '188.210.221.51', // np. 'localhost'
  port: '3306',
  user: 'srv83215_awnet";',
  password: 'PaterNoster13',
  database: 'srv83215_towary'
});

// Testowanie połączenia z bazą
db.connect((err) => {
  if (err) {
    console.error('Błąd połączenia z bazą danych:', err);
    return;
  }
  console.log('Połączono z bazą danych MySQL!');
});

// Endpoint do pobierania danych
app.get('/api/data', (req, res) => {
  db.query('SELECT * FROM tabela', (err, results) => {
    if (err) {
      console.error('Błąd zapytania do bazy:', err);
      return res.status(500).send('Błąd serwera');
    }
    res.json(results); // Zwrócenie wyników jako JSON
  });
});

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});
