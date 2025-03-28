import React from 'react';
import { useState } from 'react';

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
    const [distance, setDistance] = useState(0);
    const [price, setPrice] = useState(0)

    const selectTransportOption = (event) =>{

      setTransportName(event.target.value);

      switch(transportName){
        case 'light':
          setTransportLastZone(30);
          setTransportPriceForKm(8);
          setTransportLastZonePrice(185)
          break;

          default:
      }  
    }
 

    const calculatePrice = () =>{
      const calculatedTransport = new Transport(transportLastZone, transportPriceForKm,transportLastZonePrice);
      const calculatedPrice = (distance - calculatedTransport.lastZone) * calculatedTransport.priceForKm + calculatedTransport.lastZonePrice;
      setPrice(calculatedPrice);
    }

    // const handleChange = (event) => {
    //     setTransportName(event.target.value);
    //   };

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
                label="Tran"
                onChange={selectTransportOption}
                sx={{
                    color:'var(--cadet-gray)',
                    outlineOffset:'50px'
                }}
              >
                <MenuItem color='inherit' value={'light'}>Lekki</MenuItem>
                <MenuItem color='inherit' value={'medium'}>Lekki</MenuItem>
                <MenuItem color='inherit' value={'smallTruck'}>Mały HDS</MenuItem>
                <MenuItem color='inherit' value={'MediumTruck'}>Średni HDS</MenuItem>
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
        setDistance(event.target.value);
        calculatePrice()
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