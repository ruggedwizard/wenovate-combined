import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation';
import Footernew from './components/Footernew';
import Bodynew from './components/Bodynew'
import Admin from './components/Admin';
import {BrowserRouter as  Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Index'
import Connect from './pages/Connect/index'


// import NavLinks from './components/NavLinks';


function App() {
  return (
    <>
      <Navigation/>
      
       <Connect/>
      <Footernew/>
    </>
  );
}

export default App;
