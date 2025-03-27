import React from 'react'
import { Box } from '@mui/material';

import Info from './pages/Info';

const MainContent = ({content}) => {
    let pageContent;
    switch(content){
        case 'main':
            pageContent = 'Strona Główna';
            break;
        case 'transport':
            pageContent = 'Strona Transportowa';
            break;
        case 'bring':
            pageContent = 'Strona Wniesieniowa';
            break;
        case 'info':
            pageContent = <Info />;
            break;
        case 'weight':
            pageContent = 'Strona Wagowa';
            break;

    default: pageContent = 'Strona Domyślna'
    }
  return (
    <Box sx={{
        width:{lg:'70%', sm:'100%'},
        mt:'32px',
        mt:{sm:'300px'}
        
    }}>
        {pageContent}
    </Box>
  )
}

export default MainContent