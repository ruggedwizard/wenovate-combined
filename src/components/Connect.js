import { Button, Container } from "react-bootstrap"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import ConnectNav from './ConnectNav/ConnectNav'
import Connections from './ConnectNav/Connections'
import People from './ConnectNav/People'
import MarketPlace from './ConnectNav/MarketPlace'
import SupplyChain from './ConnectNav/SupplyChain'


const Connect = ()=>{
    return (
        <Router>
            <Container>
                <div className='connect-text col-sm-6 col-lg-8 mb-4' >
                    <h1>Introducing <span className='green-text'>connect,</span> an easy way to reach <span className='green-text'>people</span> accross farming communities.</h1>
                </div>
                <Button variant='primary' style={{marginLeft:"15px"}}>Learn more</Button> 
                <br/>
                <br/>
                <ConnectNav />
            
                    <Route exact path='/connections' component={Connections} />
                    <Route path='/people' component={People} />
                    <Route path='/market' component={MarketPlace} />
                    <Route path='/supply' component={SupplyChain} />
         
            </Container>
        </Router>
    )
}
export default Connect