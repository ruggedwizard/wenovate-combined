import { ThemeProvider, CSSReset } from '@chakra-ui/react'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';


function App() {
  return (
   <ThemeProvider overflow="none">
     <CSSReset/>
     <Navbar/>
      <Body/>
    <Footer />
   </ThemeProvider>
  );
}

export default App;
