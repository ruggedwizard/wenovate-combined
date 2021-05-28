import React from 'react'


const Footernew = () => {
    return (
    <div style={{height:300,backgroundColor:'#070941', color:'white', marginTop:"50px"}}>
        <div className="container">
            <div className="row" style={{padding:'3em'}}>
                <div className="col-sm-6">
                    <h4 style={{ color:'white'}}>A product of team wenovate</h4>
                </div>
                <div className="col-sm-6">
                    <ul style={{ color:'white', listStyleType:'none'}}>
                        <li style={{ color:'white'}}>Communities</li>
                        <li style={{ color:'white'}}>About Us</li>
                        <li style={{ color:'white'}}>FAQs</li>
                        <li style={{ color:'white'}}>Mission</li>
                        <li style={{ color:'white'}}>Testimonies</li>
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
