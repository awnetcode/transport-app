import React from 'react';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField, Button } from '@mui/material';

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

 const inputCustomStyle = {
  // Kolor labela bez focusa
  '& label': {
    color: 'var(--cadet-gray)',
    cursor: 'pointer',
  },
  // Kolor labela po focusie
  '& label.Mui-focused': {
    color: 'primary.main',
  },
  // Stylowanie kontenera inputa (z obramowaniem)
  '& .MuiOutlinedInput-root': {
    color: 'var(--cadet-gray)',        // kolor tekstu
    cursor: 'pointer',                 // kursor
    '& fieldset': {
      borderColor: 'var(--cadet-gray)' // obramowanie bez focusa
    },
    '&:hover fieldset': {
      borderColor: 'var(--cadet-gray)' // obramowanie po hoverze
    },
    '&.Mui-focused fieldset': {
      borderColor: 'primary.main'      // obramowanie po focusie
    },
  },
}

  return (
  <Box sx={{
    maxWidth:{lg:'70%', md:'80%', xs:'90%'},
    m:'0 auto',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    boxShadow:{lg:'var(--light-shadow)', xs:'none'},
    p:'24px',
    gap:'24px'
  }}>

    <Box sx={{
      width:'100%',
        display:'flex',
        flexWrap:'wrap',
        alignItems:'center',
        justifyContent:'space-around', 
        pt:'20px',
        pb:'20px',
        color:'white'
    }}>
        <Box sx={{ 
            minWidth: 120,
            maxWidth:{sm:'100%', lg:'900px'},
            color:'var(--cadet-gray)',
             }}>
          <FormControl sx={inputCustomStyle} fullWidth>
              <InputLabel id="demo-simple-select-label" 
              >Transport</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={transportName}
                label="Transport"
                onChange={(e) => setTransportName(e.target.value)}
                sx={inputCustomStyle}
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
        sx={inputCustomStyle}
      id="outlined-basic" 
      label="Dystans" 
      variant="outlined"
      onInput={(event) => {
        const inputValue = event.target.value;
        setDistance(inputValue ? parseInt(inputValue) : 0);
      } } 
      />
    </Box>
      <TextField 
      sx={[inputCustomStyle,
        {
        '& .MuiInputBase-input': {color: 'var(--cadet-gray)', textAlign:'center'},
        pointerEvents:'none',    
      }]}
      id="outlined-basic" 
      label="Cena" 
      variant="outlined" 
      value={price}
      />
    </Box>
    <Button variant='outlined'
      href="https://www.google.com/maps/dir/Castorama,+Narodowych+Si%C5%82+Zbrojnych+13,+15-690+Bia%C5%82ystok//@53.147964,23.006565,11z/data=!4m9!4m8!1m5!1m1!1s0x471ffc977b45eebf:0x7c51add8e625e61f!2m2!1d23.0766045!2d53.1478819!1m0!3e0?hl=pl&entry=ttu&g_ep=EgoyMDI1MDUwNi4wIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D" 
      target="_blank" 
      rel="noopener noreferrer"
     sx={{
      justifySelf:'center',
      maxWidth:'100px'
    }}>Mapa</Button>
  </Box>

  )
}

export default MainPage