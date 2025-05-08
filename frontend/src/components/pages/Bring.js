import React from 'react'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { bringData } from '../../assets/data';

const Bring = () => {

    const weights = Array.from({length:40}, (_, i) => (i + 1)*25);
    const floors = ['groundFloor', 'Ifloor', 'IIfloor', 'IIIfloor', 'IVfloor', 'forFloor'];

  return (
    <TableContainer component={Paper}
    sx={{
      mt:{lg:'0', xs:'60px'},
      boxShadow:{lg:'var(--light-shadow)', xs:'none'},
        bgcolor:'transparent',
        minWidth: {md: 600, xs:300},
        maxWidth:{xs:'100%', lg:'80%'},
        m:'0 auto',
        maxHeight: '600px',
        overflow: 'auto',
        p:'20px', 
        scrollbarWidth:'none',
        msOverflowStyle:'none',
        '&::-webkit-scrollbar': { display: 'none' },
    }}>
    <Table sx={{ 
        color:'var(--cadet-gray)',
        tableLayout:'fixed',
         }} aria-label="simple table">
      <TableHead sx={{ position: 'sticky', top: 0, bgcolor: 'var(--gunmetal)', zIndex: 1 }}>
        <TableRow sx={{color:'inherit'}}>
            <TableCell sx={{color:'inherit',fontSize:{xs:'10px', lg:'16px'},}}>Waga</TableCell>
            <TableCell sx={{color:'inherit',fontSize:{xs:'10px', lg:'16px'},}}>Parter</TableCell>
            <TableCell sx={{color:'inherit',fontSize:{xs:'10px', lg:'16px'},}}>Pierwsze<br/> piętro<br/>Piwnica</TableCell>
            <TableCell sx={{color:'inherit',fontSize:{xs:'10px', lg:'16px'},}}>Drugie<br/> piętro</TableCell>
            <TableCell sx={{color:'inherit',fontSize:{xs:'10px', lg:'16px'},}}>Trzecie<br/> piętro</TableCell>
            <TableCell sx={{color:'inherit',fontSize:{xs:'10px', lg:'16px'},}}>Czwarte<br/> piętro</TableCell>
            <TableCell sx={{color:'inherit',fontSize:{xs:'10px', lg:'16px'},}}>Każde<br/>kolejne<br/> piętro</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {weights.map((weight, index) => (
                        <TableRow key={index} sx={{ color: 'inherit' }}>
                            <TableCell sx={{ color: 'inherit', fontSize:{xs:'10px', lg:'16px'}, }}>{weight}</TableCell>
                            {floors.map((floor, i) => (
                                <TableCell key={i} sx={{ color: 'inherit', fontSize:{xs:'10px', lg:'16px'}, }}>
                                    {bringData[floor] * (index + 1)}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Bring