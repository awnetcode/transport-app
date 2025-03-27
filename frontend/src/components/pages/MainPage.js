import React from 'react';
import { useState } from 'react';

import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TextField } from '@mui/material';

const MainPage = () => {

    const [transport, setTransport] = useState('');

    const handleChange = (event) => {
        setTransport(event.target.value);
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
                value={transport}
                label="Tran"
                onChange={handleChange}
                sx={{
                    color:'var(--cadet-gray)',
                    outlineOffset:'50px'
                }}
              >
                <MenuItem color='inherit' value={'lekki'}>Lekki</MenuItem>
                <MenuItem color='inherit' value={'małyHds'}>Mały HDS</MenuItem>
                <MenuItem color='inherit' value={'średniHds'}>Średni HDS</MenuItem>
                <MenuItem color='inherit' value={'dużyHds'}>Duży HDS</MenuItem>
              </Select>
         </FormControl>
     </Box>
     <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Dystans" variant="outlined" />
    </Box>
    <Box
      component="form"
      sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Wynik" variant="outlined" />
    </Box>
    </Box>
  )
}

export default MainPage