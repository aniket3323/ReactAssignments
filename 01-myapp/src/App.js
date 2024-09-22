import React from 'react';
import './App.css';
import AppHeader from './component/Header';
import Footer from './component/Footer';
import List from './component/list';


function App() {
  return (
    <>
        <div className="header">
          <AppHeader></AppHeader>
        </div>
        <div className='footer'>
          <Footer></Footer>
        </div>
        <div className='list'>
        <List></List>
        </div>
        
    </>
  );
}

export default App;
