import { ThemeProvider, CSSReset } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import './App.css'
function App() {
  return (
   <ThemeProvider>
     <CSSReset/>
     <Navbar/>
     <h1 style={{color:'red', fontSize:200, textAlign:'center'}}>Wenovate</h1>
     <h1 style={{color:'blue', fontSize:100, textAlign:'center'}}>David Start Working!!</h1>

   </ThemeProvider>
  );
}

export default App;
