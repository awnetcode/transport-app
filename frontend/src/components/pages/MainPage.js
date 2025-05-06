import React from 'react';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

import transportData from '../../assets/data';

const MainPage = () => {

  const [transportName, setTransportName] = useState('');
  const [distance, setDistance] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (!transportName || distance <= 0) return setPrice('');
    
    const { lastZone, pricePerKm, lastZonePrice, zonesPrices } = transportData[transportName] || {};
    let calculatedPrice;

    if (zonesPrices.length === 3) {
      calculatedPrice = distance <= 10 ? zonesPrices[0] :
                       distance <= 20 ? zonesPrices[1] :
                       distance <= 30 ? zonesPrices[2] :
                       (distance - lastZone) * pricePerKm + lastZonePrice;
    } else {
      calculatedPrice = distance <= 10 ? zonesPrices[0] : (distance - lastZone) * pricePerKm + lastZonePrice;
    }

    setPrice(calculatedPrice);
  }, [transportName, distance]);

  return (
    <Box sx={{
        display:'flex',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'space-around',
        boxShadow:'var(--light-shadow)',
        pt:'20px',
        pb:'20px',
        color:'white'
    }}>
        <Box sx={{ 
            minWidth: 120,
            maxWidth:{sm:'100%', lg:'900px'},
            color:'var(--cadet-gray)',
             }}>
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label"
              >Transport</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={transportName}
                label="Transport"
                onChange={(e) => setTransportName(e.target.value)}
                sx={{
                  '& .MuiOutlinedInput-notchedOutline': {
                    borderColor: 'var(--cadet-gray)',
                  },
                  color: 'var(--cadet-gray)',
                }}
              >
              {Object.keys(transportData).map((key) => (
            <MenuItem key={key} value={key}>{transportData[key].polishName}</MenuItem>
          ))}
              </Select>
         </FormControl>
     </Box>
     <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField 
        sx={{
          '& .MuiInputBase-input': {
            color: 'var(--cadet-gray)', cursor:'pointer'},
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--cadet-gray)',
            },
            color: 'var(--cadet-gray)',
        
        }}
      id="outlined-basic" 
      label="Dystans" 
      variant="outlined"
      onInput={(event) => {
        const inputValue = event.target.value;
        setDistance(inputValue ? parseInt(inputValue) : 0);
      } } 
      />
    </Box>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      sx={{
        '& .MuiInputBase-input': {color: 'var(--cadet-gray)', textAlign:'center'},
        pointerEvents:'none',
        
      }}
      id="outlined-basic" 
      label="Cena" 
      variant="outlined" 
      value={price}
      />
    </Box>
    </Box>
  )
}

export default MainPage