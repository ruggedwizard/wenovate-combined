import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation';
import Footernew from './components/Footernew';
import Bodynew from './components/Bodynew'
import Admin from './components/Admin';
import Body from './components/Body'
import Connect from './components/Connect'
import Blog from './components/Blog'
import {BrowserRouter as  Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Index'
// import Connect from './pages/Connect/index'


const App = () =>  {
  return (
    <>
       <Router>
           <Navigation/>
        {/* <Admin/> */}

            <Route exact path="/" component = {Bodynew} />
            <Route path="/body" component = {Body} />
            <Route path="/connect" component = {Connect} />
            <Route path="/blog" component = {Blog} />
        </Router>

      <Footernew/>
    </>
  );
}

export default App;
