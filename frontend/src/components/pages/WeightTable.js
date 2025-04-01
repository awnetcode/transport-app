import React, { useState, useEffect } from 'react';
import axios from 'axios';

const WeightTable = () => {
  const [data, setData] = useState([]); // Stan do przechowywania wyników zapytania
  const [loading, setLoading] = useState(true); // Stan ładowania danych
  const [error, setError] = useState(null); // Stan błędu

  useEffect(() => {
    // Wysyłamy zapytanie do serwera
    axios.get('188.210.221.51:3306') // Adres backendu
      .then(response => {
        setData(response.data); // Ustawiamy dane w stanie
        setLoading(false); // Zmieniamy stan na załadowane
      })
      .catch(err => {
        setError('Błąd pobierania danych'); // W przypadku błędu
        setLoading(false); // Zmieniamy stan na załadowane, mimo błędu
      });
  }, []); // Tablica zależności pusta, żeby zapytanie wysłało się tylko raz po załadowaniu komponentu

  if (loading) return <p>Ładowanie danych...</p>;
  if (error) return <p>{error}</p>;

  return (
    <table>
      <thead>
        <tr>
          {/* Przykład nagłówków tabeli */}
          <th>ID</th>
          <th>Imię</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td> {/* Załóżmy, że wynik zawiera kolumny 'id', 'imie' i 'email' */}
            <td>{item.imie}</td>
            <td>{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default WeightTable;
