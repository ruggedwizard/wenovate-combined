import React from 'react'
import { Link } from 'react-router-dom'


const Footernew = () => {

    const style = {
        fontSize:"20px",
        color:'white'
    }

    return (
    <div style={{ height:300, backgroundColor:'#070941', color:'white', marginTop:"50px"}}>
        <div className="container">
            <div className="row" style={{padding:'3em'}}>
                <div className="col-sm-6">
                    <h4 style={{ color:'white'}}>A product of team wenovate</h4>
                </div>
                <div className="col-sm-6">
                    <ul style={{ color:'white', listStyleType:'none'}}>
                        <li><Link to="/community"  style={style}>Communities</Link></li>
                        <li><Link to="/about"  style={style}>About Us</Link></li>
                        <li><Link to="/faq"  style={style}>FAQs</Link></li>
                        <li><Link to="/mission"  style={style}>Mission</Link></li>
                        <li><Link to="/testimony"  style={style}>Testimonies</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row">
                <div className="col-md-12" style={{textAlign:'center', color:'white'} }>
                    &copy; Team Wenovate for SDG 2020
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Footernew
