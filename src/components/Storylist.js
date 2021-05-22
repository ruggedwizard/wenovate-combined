import React from 'react'
import Story from './Story'
const Storylist = () => {
    return (
        <div className='container col-sm-6 row' >
            <h3 style={{textAlign:'center'}}>Testimonies</h3>
            <div style={{display:'flex'}}>
            <Story/>
            <Story/>
            <Story/>
            {/* <Story/>
            <Story/> */}
            </div>
        </div>
    )
}

export default Storylist
