import React, { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/material';


import axios from 'axios';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  const handleSearch = () => {
    axios.post('http://localhost:5000/api/search', { searchTerm })
      .then(response => {
        setData(response.data); // Ustawia dane z odpowiedzi
      })
      .catch(error => {
        console.error('Błąd:', error);
      });

      console.log(data);
  };

  return (
    <Box>
      <Box>
      <input 
        type="text" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        placeholder="Wpisz frazę..."
      />
      <button onClick={handleSearch}>Szukaj</button>
      </Box>

      <TableContainer component={Paper}
    sx={{
        bgcolor:'transparent',
        minWidth: 600,
        maxHeight: '600px',
        overflow: 'auto',
        p:'20px',
        scrollbarWidth:'none',
        msOverflowStyle:'none',
        '&::-webkit-scrollbar': { display: 'none' }
    }}>
    <Table sx={{ 
        color:'var(--cadet-gray)'
         }} aria-label="simple table">
      <TableHead sx={{ position: 'sticky', top: 0, bgcolor: 'var(--gunmetal)', zIndex: 1 }}>
        <TableRow sx={{color:'inherit'}}>
        <TableCell sx={{color:'inherit'}} >lp</TableCell>
        <TableCell  sx={{color:'inherit'}} align="right">Użytkownik</TableCell>
        <TableCell  sx={{color:'inherit'}} align="right">Imię</TableCell>
        <TableCell  sx={{color:'inherit'}} align="right">Email</TableCell>
        <TableCell  sx={{color:'inherit'}} align="right">Hasło</TableCell>
        <TableCell  sx={{color:'inherit'}} align="right">Data</TableCell>
           
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item, index) =>(
        
          <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell key={item} sx={{color:'inherit'}} component="th" scope="row">{item.user_name}</TableCell>
            <TableCell key={item} sx={{color:'inherit'}} component="th" scope="row">{item.first_name}</TableCell>
            <TableCell key={item} sx={{color:'inherit'}} component="th" scope="row">{item.e_mail}</TableCell>
            <TableCell key={item} sx={{color:'inherit'}} component="th" scope="row">{item.password}</TableCell>
            <TableCell key={item} sx={{color:'inherit'}} component="th" scope="row">{item.data}</TableCell>
          </TableRow>
            ))}
            
  
      </TableBody>
    </Table>
  </TableContainer>
    </Box>
  );
};

export default SearchComponent;
