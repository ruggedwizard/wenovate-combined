// import Navbar from './components/Navbar';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Storyboard from './components/Storyboard'
import Connect from './components/Connect'
import { Jumbotron } from 'react-bootstrap';
function App() {
  return (
    <>
    <Jumbotron className='storyboard-holder'>
    <Storyboard/>
    </Jumbotron>
    <Connect/>
    </>
  );
}

export default App;
