import './App.css';

import { useState } from 'react';

import Navigation from './components/Navigation';
import MainContent from './components/MainContent';

function App() {
  const [content, setContent] = useState('');
  return (
    <div className="container">
      <Navigation setContent= {setContent}/>
      <MainContent content = {content}/>
    </div>
  );
}

export default App;
