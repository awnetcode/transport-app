const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const path = require('path'); 

const app = express();

app.use(cors({
    origin: '*', // lub konkretny adres np. 'http://localhost:3000'
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));


// Middleware
app.use(express.json()); // odczytuje dane JSON z requestu

/*
--------localhost na xampp
    host: 'localhost',
    port: '3306
    user: 'root',
    password: '',
    database: 'claw99'

*/

// Konfiguracja bazy danych
const db = mysql.createConnection({
    host: 'localhost',
    user: 'srv83215_awnet',
    password: 'PaterNoster13',
    database: 'srv83215_towary'
});

// Połączenie z bazą
db.connect((err) => {
    if (err) {
        console.error('Błąd połączenia z bazą:', err);
    } else {
        console.log('Połączono z bazą danych');
    }
});

// UTWÓRZ router z prefiksem
const router = express.Router();

router.post('/api/search', (req, res) => {
  const { searchTerm } = req.body;

  if (!searchTerm || typeof searchTerm !== 'string') {
    return res.status(400).json({ error: 'Brak lub nieprawidłowy parametr wyszukiwania' });
  }

  const sanitizedTerm = searchTerm.trim();

  const allowedLengths = [5, 6, 13];
  if (!/^\d+$/.test(sanitizedTerm) || !allowedLengths.includes(sanitizedTerm.length)) {
    return res.status(400).json({ error: 'Nieprawidłowy kod CASTO lub EAN' });
  }

  const sqlQuery = 'SELECT * FROM wagi_towarow WHERE casto = ? OR ean = ?';

  db.query(sqlQuery, [sanitizedTerm, sanitizedTerm], (err, results) => {
    if (err) {
      console.error('Błąd zapytania:', err);
      return res.status(500).json({ error: 'Błąd serwera' });
    }
    res.json(results);
  });
});

app.listen(3001, () => {
  console.log('Serwer działa na porcie 3001');
});

// ✅ WAŻNE: dodaj router z prefiksem
app.use('/NowyTransport-backend', router);