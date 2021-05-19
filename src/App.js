// import Navbar from './components/Navbar';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Storyboard from './components/Storyboard'
import { Jumbotron } from 'react-bootstrap';
function App() {
  return (
    <Jumbotron className='storyboard-holder'>
    <Storyboard/>
    </Jumbotron>
  );
}

export default App;
