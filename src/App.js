import React from 'react';  
import WebcamCapture from './components/WebcamCapture';  
import './App.css';  
function App() {  
  return (  
    <div className="App">  
      <header className="App-header">  
        <h1>AI Skin Cancer Detection</h1>  
        <WebcamCapture />  
      </header>  
    </div>  
  );  
}  
export default App;