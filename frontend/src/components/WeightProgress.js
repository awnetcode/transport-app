import React from 'react';

import { Box, Typography } from '@mui/material';

const WeightProgress = ({totalWeight, transportName}) => {

  return (
    <Box sx={{
        mt:'24px',
        display:'flex',
        gap:'4px'
    }}><Box 
        sx={{
            width:'36px',
            height:'24px',
            background:'#2ecc71',
            outline: transportName === 'Lekki Transport' ? '2px solid white' : 'none'
        }}></Box>
        <Box
        sx={{
            width:'36px',
            height:'24px',
            background:'#a2d96a',
            outline: transportName === 'Średni Transport' ? '2px solid white' : 'none'
        }}></Box>
        <Box         
        sx={{
            width:'36px',
            height:'24px',
            background:'#f1c40f',
            outline: transportName === 'Mały HDS' ? '2px solid white' : 'none'
        }}></Box>
        <Box
        sx={{
            width:'36px',
            height:'24px',
            background:'#e67e22',
            outline: transportName === 'Średni HDS' ? '2px solid white' : 'none'
        }}></Box>
        <Box
        sx={{
            width:'36px',
            height:'24px',
            background:'#e74c3c',
            outline: transportName === 'Duży HDS' ? '2px solid white' : 'none'
        }}></Box>
        <Box>
            <Typography sx={{
                ml: '10px',
                color: totalWeight <= 10000 ? 'inherit' : 'red',
                }}>{transportName}</Typography>
        </Box>
    </Box>
  )
}

export default WeightProgress