import React from 'react';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';
import Header from './Header/Header';
import './App.css';

function App() {
      return (
            <div className="App">
                  <Header></Header>
                  <SortingVisualizer></SortingVisualizer>
            </div >
      );
}

export default App;
