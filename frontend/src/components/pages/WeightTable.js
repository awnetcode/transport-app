import React, { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, TextField, Button, Switch } from '@mui/material';


import axios from 'axios';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [data, setData] = useState([]);
  const [dataArray, setDataArray] = useState([]);

  const handleSearch = () => {
    axios.post('http://localhost:5000/api/search', { searchTerm })
      .then(response => {
        setData(response.data); // Ustawia dane z odpowiedzi
        setDataArray(prevArray => [...prevArray, response.data]);
      })
      .catch(error => {
        console.error('Błąd:', error);
      });
  };

  const fillDataArray = () =>{
   // setDataArray(prevArray => [...prevArray, data]);
    console.log(dataArray);
  }

  return (
    <Box>
      <Box>
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
              value={quantity}
              variant="outlined"
              onChange={(event) => { 
                setQuantity(Number(event.target.value));
                console.log(quantity);    
              }} >
        </TextField>
        <Button
        variant='outlined'
        onClick={() =>{
          handleSearch(); 
          fillDataArray()
        }
}
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
        <TableCell  sx={{color:'inherit'}} align="left">ILOŚĆ</TableCell>
        <TableCell  sx={{color:'inherit'}} align="right">SUMA</TableCell>
        <TableCell  sx={{color:'inherit'}} align="right">KASUJ<br/>LINIĘ</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {dataArray.map((row, index) => {console.log("row:", row);

  return (
    <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      {row.map((item, i) => {
        const itemEntries = Object.entries(item); // [[key1, value1], [key2, value2], ...]

        return itemEntries.map(([key, value], idx) => (
          <TableCell 
          key={key + idx} 
          sx={{ color: 'inherit' }} 
          component="th" scope="row" 
          align='center'>
            {value}
          </TableCell>
        ));
      })}
      <TableCell sx={{ color: 'inherit' }}  align='center'>24</TableCell>
      <TableCell sx={{ color: 'inherit' }} align='center'>1</TableCell>
      <TableCell sx={{ color: 'inherit' }} align='right'>
        <Switch/>
        </TableCell>
    </TableRow>
  );
})}
<TableRow>
  <TableCell sx={{ color: 'inherit' }} >RAZEM</TableCell>
  <TableCell sx={{ color: 'inherit' }} ></TableCell>
  <TableCell sx={{ color: 'inherit' }} ></TableCell>
  <TableCell sx={{ color: 'inherit' }} ></TableCell>
  <TableCell sx={{ color: 'inherit' }} ></TableCell>
  <TableCell sx={{ color: 'inherit' }} align='right'>{}KG</TableCell>
  <TableCell align='right'>
  <Button
        variant='outlined'
        onClick={() =>{
        }
}
        >usuń</Button>
  </TableCell>
</TableRow>
     </TableBody>
    </Table>
  </TableContainer>
    </Box>
  );
};

export default SearchComponent;
