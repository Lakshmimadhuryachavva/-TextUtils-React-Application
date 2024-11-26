import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

function App() {
  const [mode, setMode] = useState('light'); 
  const [alert, setAlert] = useState(null);
  const showAlert =(message,type)=>{
    setAlert({
      msg:message,
      type: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#192734';
      document.body.style.color = 'white'; 
      showAlert("dark Mode enabled","success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'; 
      document.body.style.color = 'black';
      showAlert("light Mode enabled","primary");
    }
  };

  return (
    <>
      <Router>
      <Navbar title="TextUtils" aboutTitle="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" showAlert={showAlert} mode={mode}/>} />
          <Route path="/about" element={<About/>} />
          
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
