import { ThemeProvider, CSSReset } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';
import BasicUsage from './components/Modal';


function App() {
  return (
   <ThemeProvider>
     <CSSReset/>
     <BasicUsage/>
     <Navbar/>
      <Body/>
    <Footer />
   </ThemeProvider>
  );
}

export default App;
