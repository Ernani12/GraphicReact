import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PointComponemt from './PointService';

function App() {
  return (
    <div>
      <header className="container">
         <PointComponemt />
      </header>
    </div>
  );
}

export default App;