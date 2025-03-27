import React from 'react'
import { Box } from '@mui/material';

import Info from './pages/Info';
import MainPage from './pages/MainPage';

const MainContent = ({content}) => {
    let pageContent;
    switch(content){
        case 'main':
            pageContent = <MainPage/>;
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

    default: pageContent = <MainPage/>;
    }
  return (
    <Box sx={{
        width:{lg:'70%', sm:'100%'},
        
    }}>
        {pageContent}
    </Box>
  )
}

export default MainContent