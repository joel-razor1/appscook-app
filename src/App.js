import React, { Component } from 'react';
import Gallery from './Components/Gallery/Gallery';
import Library from './Components/Library/Library';
import Marksheet from './Components/Marksheet/Marksheet';
import Modal from  './Components/Modal/Modal';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <div>
        {/* <Gallery />
        
        <Marksheet />
        <Modal />
         */}
         <Library />
      </div>
    );
  }
}

export default App;
