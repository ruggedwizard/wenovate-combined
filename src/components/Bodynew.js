import React from 'react'
import { Container, Image } from 'react-bootstrap'
import salesImg from '../assets/sales.jpg'
import farmers from '../assets/farmerstalk.jpg'
const Bodynew = ()=>{
    return (
        <div>
            <Container>
                <div className='jumbotron two-sided-text' >
                <div>
                <strong>connect, make sales and sell</strong>
                <h1>
                    in the <span className='green-text'>best </span> online <br/>
                    Community for <span className='green-text'>farmers</span>
                </h1>
                    <h2>access quality information</h2>
                    <p>about farming best practice to boost your farm production</p>
                </div>
                <Image src={farmers}/>
                </div>
                <div className='dummy-text'>
                    <div className='side-bar'></div>
                    <div className='text-sider'>
                        <h1 className='white-text'>A great platform to make sales</h1>
                        <strong className='white-text'>and make valuable connection with other farmers and investors</strong>
                    </div>
                    <div>
                        <Image src={salesImg} className='sales-image' />
                    </div>
                </div>
                <div className='sales-story container'>
                    <h2 style={{textAlign:'center'}}>How to make sales</h2>
                    <strong>Step 1</strong>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odit, sit laborum suscipit consectetur dolorem voluptatum similique totam voluptatibus reiciendis. </p>
                    <strong>Step 2</strong>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed corrupti eaque voluptatum! Dicta atque pariatur qui magnam nulla soluta animi. </p>
                    <strong>Step 3</strong>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt provident repellendus voluptatum qui velit reprehenderit nemo quasi consequatur. Voluptates ullam quae officiis sed minima provident. </p>
                    <strong>Step 4</strong>
                    <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate veritatis asperiores sint autem, est minus error hic similique deleniti assumenda rerum enim, quibusdam alias eveniet. </p>
                </div>
            </Container>
        </div>
    )
}
export default Bodynew