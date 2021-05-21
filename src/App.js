import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import { ThemeProvider, CSSReset } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';
import Bodynew from './components/Bodynew'
import Loginmodal from './components/Loginmodal';


function App() {
  return (
    <>
    <Bodynew/>  
   <Loginmodal/>
    </>
  );
}

export default App;
