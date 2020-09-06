import React from 'react';

import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    //Using BEM for the first time
    <div className="app">
      <div className = "app__body">
        <Sidebar /> 

        {/* chat */}

      </div>
    </div>
  );
}

export default App;
   