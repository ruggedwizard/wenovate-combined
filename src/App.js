import React from 'react';
import './App.css'
import Blog from './components/Blog'
import { ThemeProvider, CSSReset } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';


function App() {
  return (

   <ThemeProvider>
     <CSSReset/>
     <Navbar/>
      <Body/>
      <Blog/>
    <Footer />
   </ThemeProvider>
 
  );
}

export default App;
