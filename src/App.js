import React from 'react';
import './App.css';
import WithFadeWhenInView from './components/withFadeInWhenInView/withFadeInWhenInView';


function App() {
  return (
    <div 
      className="App"
      style={{
        height:`2000px`
      }}
    >
      <WithFadeWhenInView width={10}/>
    </div>
  );
}

export default App;
