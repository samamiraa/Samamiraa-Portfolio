import React from 'react';
import './App.css';
import Header from './components/Header';
import Display from './components/Display';
import Footer from './components/Footer'

function App() {
  return (
    <div className="main-conntainer">
    <Header  />
    <Display />
    <Footer />
    </div>
  );
}

export default App;
