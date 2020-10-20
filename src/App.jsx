import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

function App() {
        return (
            <div className="App">
               <Header />
               <NavBar />
               <Router>
               </Router>
               <Footer />
            </div>
        );
};

export default App;