import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navigation from './components/Navigation';
import Footernew from './components/Footernew';
import Bodynew from './components/Bodynew'
import Admin from './components/Admin';
import Body from './components/Body'
import Connect from './components/Connect'
import Blog from './components/Blog'
import {BrowserRouter as  Router, Route } from 'react-router-dom'
// import Home from './pages/Home/Index'
import Community from './components/FooterLinks/Community'
import About from './components/FooterLinks/About.js'
import Faq from './components/FooterLinks/Faq'
import Mission from './components/FooterLinks/Mission'
import Testimony from './components/FooterLinks/Testimony.js'
import AdminLogin from './components/AdminLogin'
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
            <Route path="/admin" component = {Admin} />
            <Route path="/admin-login" component = {AdminLogin} />

            <Route path="/community" component = {Community} />
            <Route path="/about" component = {About} />
            <Route path="/faq" component = {Faq} />
            <Route path="/mission" component = {Mission} />
            <Route path="/testimony" component = {Testimony} />

          <Footernew/>
        </Router>
    </>
  );
}

export default App;
