import React, { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, TextField, Button, Switch } from '@mui/material';

import WeightProgress from '../WeightProgress';


import axios from 'axios';

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [dataArray, setDataArray] = useState([]);
  const [totalWeight, setTotalWeight] = useState(0);
  const [transportName, setTransportName] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.post('https://awnetcode.pl/NowyTransport-backend/api/search', { searchTerm });
      return response.data; 
    } catch (error) {
      console.error('Błąd:', error);
      return null;
    }
  };
  
//zapisuje w tablicy kolejne zapytania do bazy
  const fillDataArray = async () => {
    const responseData = await handleSearch();
    if (!responseData) return;
  
    const rowWeight = parseInt(responseData[0].waga) * quantity;
    const expandedResponse = {
      ...responseData,
      ilość: quantity,
      suma: rowWeight,
      active: true,
      isRemoving: false,
    };
  
    setDataArray(prevArray => {
      const updated = [...prevArray, expandedResponse];
      setTotalWeight(calculateTotalWeight(updated));
      return updated;
    });
  
    // Czyści pola formularza
    setSearchTerm('');
    setQuantity(1);
  };

  //oblicza całkowitą wagę tabeli
  const calculateTotalWeight = (array) => {
    return array.reduce((sum, item) => sum + (parseFloat(item.suma) || 0), 0);
  };

  //ustawia kolor tekstu dla pola całkowitej wagi
  const setWeighColor = (transportName) => {
    switch (transportName) {
      case ('Lekki Transport'): return '#2ecc71';  
      case ('Średni Transport'): return '#a2d96a';
      case ('Mały HDS'): return '#f1c40f';       
      case ('Średni HDS'): return '#e67e22';       
      case ('Duży HDS'): return '#e74c3c';       
      default: return '#2ecc71';                 
    }
  };
  
//usuwa wiersz tabeli po prezsunięciu switcha
  const deleteTableRow = (rowIndex) => {
    const updatedArray = [...dataArray];
    updatedArray.splice(rowIndex, 1); // usuwa jeden element w danym indeksie
    setTotalWeight(calculateTotalWeight(updatedArray));
    setDataArray(updatedArray);
  };

//wysyła zapytanie po wciścięciu entera
const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    fillDataArray();
  }
};

    useEffect(() =>{
        if(totalWeight > 0 && totalWeight <= 1500) {
            setTransportName('Lekki Transport');
        }else if(totalWeight > 0 && totalWeight >= 1500 && totalWeight <= 3000){
            setTransportName('Średni Transport');
        }else if(totalWeight >= 3000 && totalWeight <= 4000 ){
            setTransportName('Mały HDS');
        }else if(totalWeight >= 4000 && totalWeight <= 8000 ){
            setTransportName('Średni HDS');
        }else if(totalWeight >= 8000 && totalWeight <= 10000 ){
            setTransportName('Duży HDS');
        }else if(totalWeight > 10000){
            setTransportName('Za dużo!');
        }

    },[totalWeight])

  return (
    <Box>
      <Box>
      </Box>
      <Box
      sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        gap:'24px',
        mb: '24px'
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
              onKeyDown={handleKeyDown} 
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
              onChange={(event) => {setQuantity(Number(event.target.value));}}
              onFocus={()=>{setQuantity('');}}
              onKeyDown={handleKeyDown}
              >
        </TextField>
        <Button
        variant='outlined'
        onClick={() =>{
          fillDataArray();
        }
}
        >Szukaj</Button>
      </Box>

      <TableContainer component={Paper}
    sx={{
        bgcolor:'transparent',
        minWidth: {lg:'600px', sm:'300px'},
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
  {dataArray.map((row, index) => (
    <TableRow key={index} sx={{ 
    '&:last-child td, &:last-child th': { border: 0 },
    opacity: row.isRemoving ? 0 : 1,
    maxHeight: row.isRemoving ? 0 : '100px',
    overflow: 'hidden',
    transition: 'opacity 0.8s ease, max-height 0.8s ease',
     }}>
      <TableCell sx={{ color: 'inherit' }}>{row[0].casto}</TableCell>
      <TableCell sx={{ color: 'inherit' }}>{row[0].ean}</TableCell>
      <TableCell sx={{ color: 'inherit' }}>{row[0].nazwa}</TableCell>
      <TableCell sx={{ color: 'inherit' }} align="right">{row[0].waga}</TableCell>
      <TableCell sx={{ color: 'inherit' }} align='center'>{row.ilość}</TableCell>
      <TableCell sx={{ color: 'inherit' }} align="right">{row.suma} KG</TableCell>
      <TableCell sx={{ color: 'inherit' }} align="right">
        <Switch
          checked={row.active}
          onChange={() => {
            const updatedArray = [...dataArray];
            updatedArray[index].active = false; // przesuwa w lewo
            updatedArray[index].isRemoving = true;
            setDataArray(updatedArray);
        
            setTimeout(() => {
              deleteTableRow(index); // usuwa po 1.1s
            }, 800);
          }}
        />
      </TableCell>
    </TableRow>
  ))}

  {/* Wiersz podsumowania */}
  <TableRow>
    <TableCell sx={{ color: 'inherit' }}>RAZEM</TableCell>
    <TableCell sx={{ color: 'inherit' }}></TableCell>
    <TableCell sx={{ color: 'inherit' }}></TableCell>
    <TableCell sx={{ color: 'inherit' }}></TableCell>
    <TableCell sx={{ color: 'inherit' }}></TableCell>
    <TableCell sx={{ 
      color: setWeighColor(transportName)
    }} align="right">
      {totalWeight} KG
    </TableCell>
    <TableCell align="right">
      <Button
        variant='outlined'
        onClick={() => {
          setDataArray([]);
          setTransportName('');
          setTotalWeight(0);
        }}
      >
        wyczyść
      </Button>
    </TableCell>
  </TableRow>
</TableBody>

    </Table>
  </TableContainer>
  <WeightProgress totalWeight={totalWeight} transportName={transportName}/>
    </Box>
  );
};

export default SearchComponent;
