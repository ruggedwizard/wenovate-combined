import React from 'react'
import Story from './Story'
import Carousel from 'react-elastic-carousel'
const Storylist = () => {
    const breakPoints = [
        {width:500, itemsToShow:1},
        {width:768, itemsToShow:3},
        {width:800, itemsToShow:3},
        {width:1500, itemsToShow:5},

    ]

    return (
        <div >
            <h3 style={{textAlign:'center'}}>Testimonies</h3>
                <Carousel breakPoints={breakPoints}>
                <Story/>    
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                <Story/>
                </Carousel>
        </div>
    )
}

export default Storylist
