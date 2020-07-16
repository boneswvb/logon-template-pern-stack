import React from 'react';
import './App.css';

//Components
import Header from './components/Header';
import Menu from './components/Menu';

function App({ register }) {
  //state for components
  
  return (
    <div>
      <Header />
      <Menu />
    </div>
  );
}

export default App;
