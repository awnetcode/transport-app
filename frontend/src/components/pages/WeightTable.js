import React, { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, TextField, Button } from '@mui/material';


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

      {/* <input 
        // type="text" 
        // value={searchTerm} 
        // onChange={(e) => setSearchTerm(e.target.value)} 
        // placeholder="Wpisz frazę..."
      />
      <button onClick={handleSearch}>Szukaj</button> */}
      </Box>
      <Box
      sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'24px'
      }}>
        <TextField
                sx={{
                  '& .MuiInputBase-input': {color: 'var(--cadet-gray)', cursor:'pointer'},
                  '& .MuiInputLabel-root': {color: 'var(--cadet-gray)'},
                }}
              id="outlined-basic" 
              variant="outlined"
              label="Casto lub Ean..." 
              value={searchTerm} 
              onChange={(e) => setSearchTerm(e.target.value)} 
              >
        </TextField>
        <TextField
                sx={{
                  '& .MuiInputBase-input': {color: 'var(--cadet-gray)', cursor:'pointer'},
                  '& .MuiInputLabel-root': {color: 'var(--cadet-gray)'},
                }}
              id="outlined-basic" 
              label="Ilość..." 
              variant="outlined"
              onInput={(event) => {
               
              }} >
        </TextField>
        <Button
        variant='outlined'
        onClick={handleSearch}
        >Szukaj</Button>
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
        <TableCell sx={{color:'inherit'}} align="left">CASTO</TableCell>
        <TableCell  sx={{color:'inherit'}} align="left">EAN</TableCell>
        <TableCell  sx={{color:'inherit'}} align="left">NAZWA</TableCell>
        <TableCell  sx={{color:'inherit'}} align="right">WAGA</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((item, index) =>(
        
          <TableRow key={item} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell key={item.casto} sx={{color:'inherit'}} component="th" scope="row">{item.casto}</TableCell>
            <TableCell key={item.ean} sx={{color:'inherit'}} component="th" scope="row">{index}=={item.ean}</TableCell>
            <TableCell key={item.nazwa} sx={{color:'inherit'}} component="th" scope="row">{index}=={item.nazwa}</TableCell>
            <TableCell key={item.waga} sx={{color:'inherit'}} component="th" scope="row" align="right">{index}=={item.waga}</TableCell>
          </TableRow>
            ))}
      </TableBody>
    </Table>
  </TableContainer>
    </Box>
  );
};

export default SearchComponent;
