import React from 'react';
import { useState, useEffect } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

import Transport from '../../assets/data';

const MainPage = () => {

    const [transportName, setTransportName] = useState('');
    const [transportLastZone, setTransportLastZone] = useState(0);
    const [transportLastZonePrice, setTransportLastZonePrice] = useState(0);
    const [transportPriceForKm, setTransportPriceForKm] = useState(0);
    const [zonesPrices, setZonesPrices] = useState([]);
    const [distance, setDistance] = useState(0);
    const [price, setPrice] = useState(0);

  // 🟢 Obsługa zmiany transportu (ustawia TYLKO nazwę)
  const selectTransportOption = (event) => {
    setTransportName(event.target.value);
    calculatePrice();
  };

    // useEffect ustawia wartości po zmianie transportName
    useEffect(() => {

      calculatePrice();

      if (!transportName) return;
      let lastZone = Transport.lastZone;
      let priceForKm = Transport.priceForKm;
      let lastZonePrice = Transport.lastZonePrice;
      let zonesPrices = Transport.zonesPrices;
    
      switch (transportName) {
        case 'light':
          lastZone = 30;
          priceForKm = 8;
          lastZonePrice = 185;
          zonesPrices = [85, 135, 185];
          break;
        case 'medium':
          lastZone = 30;
          priceForKm = 12;
          lastZonePrice = 370;
          zonesPrices = [85, 135, 185];
          break;
        case 'smallTruck':
          lastZone = 10;
          priceForKm = 13;
          lastZonePrice = 250;
          break;
        case 'mediumTruck':
          lastZone = 10;
          priceForKm = 13;
          lastZonePrice = 310;
          break;
        case 'heavyTruck':
          lastZone = 10;
          priceForKm = 15;
          lastZonePrice = 430;
          break;
        default:
          lastZone = 0;
          priceForKm = 0;
          lastZonePrice = 0;
      }
    
      setTransportLastZone(lastZone);
      setTransportPriceForKm(priceForKm);
      setTransportLastZonePrice(lastZonePrice);
      setZonesPrices(zonesPrices);
    
    }, [transportName]);

    // Teraz useEffect do obliczania ceny wykona się dopiero po aktualizacji wartości
useEffect(() => {
  if (distance <= 0) {
    setPrice(0);
    return;
  }

  if (!transportPriceForKm && !transportLastZonePrice) {
    setPrice(0);
    return;
  }

  let calculatedPrice;

  if(distance > 0 || distance <= 10){
    calculatedPrice = zonesPrices[0];
  }
  else if(distance > 10  || distance <= 20){
    calculatedPrice = zonesPrices[1]
  }
  else if(distance > 20  || distance <= 30){
    calculatedPrice = zonesPrices[2]
  }
  else{
    calculatedPrice = (distance - transportLastZone) * transportPriceForKm + transportLastZonePrice; 
  }


  


  if (!isNaN(calculatedPrice)) {
    setPrice(calculatedPrice);
  }
}, [distance, transportLastZone, transportPriceForKm, transportLastZonePrice]);

 
   // Funkcja do obliczania ceny
   const calculatePrice = () => {
    if (distance <= 0) {
      setPrice(0);
      return;
    }

    if (!transportPriceForKm && !transportLastZonePrice) {
      setPrice(0);
      return;
    }

    const calculatedTransport = new Transport(
      transportLastZone,
      transportPriceForKm,
      transportLastZonePrice,
      zonesPrices
    );

    const calculatedPrice =
      (distance - calculatedTransport.lastZone) * calculatedTransport.priceForKm +
      calculatedTransport.lastZonePrice;

    if (!isNaN(calculatedPrice)) {
      setPrice(calculatedPrice);
    }
  };

  return (
    <Box sx={{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-around'
    }}>
        <Box sx={{ 
            minWidth: 120,
            maxWidth:{sm:'100%', lg:'300px'},
            color:'var(--cadet-gray)',
             }}>
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Rodzaj</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={transportName}
                label="Transport"
                onChange={selectTransportOption}
                sx={{
                    color:'var(--cadet-gray)',
                    outlineOffset:'50px'
                }}
              >
                <MenuItem color='inherit' value={'light'}>Lekki</MenuItem>
                <MenuItem color='inherit' value={'medium'}>Średni</MenuItem>
                <MenuItem color='inherit' value={'smallTruck'}>Mały HDS</MenuItem>
                <MenuItem color='inherit' value={'mediumTruck'}>Średni HDS</MenuItem>
                <MenuItem color='inherit' value={'heavyTruck'}>Duży HDS</MenuItem>
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
      id="outlined-basic" 
      label="Wynik" 
      variant="outlined" 
      value={price}
      />
    </Box>
    </Box>
  )
}

export default MainPage