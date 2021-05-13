import { ThemeProvider, CSSReset } from '@chakra-ui/react'
function App() {
  return (
   <ThemeProvider>
     <CSSReset/>
     <h1 style={{color:'red', fontSize:200, textAlign:'center'}}>Wenovate</h1>
     <h1 style={{color:'blue', fontSize:100, textAlign:'center'}}>Damilare Start Working!!</h1>

   </ThemeProvider>
  );
}

export default App;
