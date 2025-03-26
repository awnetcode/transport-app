import React from 'react'

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
            pageContent = 'Strona Infowa';
            break;
        case 'weight':
            pageContent = 'Strona Wagowa';
            break;

    default: pageContent = 'Strona Domyślna'
    }
  return (
    <div>{pageContent}</div>
  )
}

export default MainContent