import React from 'react'
import { Container, Carousel } from 'react-bootstrap'
import Storylist from './Storylist'
import salesImg from '../assets/sales.jpg'
import farmers from '../assets/farmerstalk.jpg'
import farmertwo from '../assets/farmer3.jpg'

const Bodynew = ()=>{
    return (
        <div>
            <Container>
                <Carousel>
                    <Carousel.Item>
                        <img className='d-block w-100 carousel-image' src={farmers} alt={farmers} style={{opacity:0.5}} />
                        <Carousel.Caption>
                        <div className='two-sided-text' >
                            <div> 
                             <strong>connect, make sales and sell</strong>
                            <h1>
                                in the <span className='green-text'>best </span> online <br/>
                                Community for <span className='green-text'>farmers</span>
                            </h1>
                            <h2>access quality information</h2>
                            <p>about farming best practice to boost your farm production</p>
                            </div>
                         </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={salesImg} alt={salesImg} className='d-block w-100 carousel-image' style={{opacity:0.5}} />
                    <Carousel.Caption>
                        <div className=' two-sided-text' >
                            <div>
                            <h1>
                                A Great online <span className='green-text'> Community</span> to <br/>
                                make Sales as <span className='green-text'>farmers</span>
                            </h1>
                                <h2>access a Larger Market</h2>
                                <p>Import and Export Made Easy for Local Farmers</p>
                            </div>
                        </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img src={farmertwo} alt={farmertwo} className='d-block w-100 carousel-image'style={{opacity:0.5}}/>
                        <Carousel.Caption>
                        <div className='two-sided-text' >
                        <div>
                         <strong>connect, make sales and sell</strong>
                        <h1>
                            in the <span className='green-text'>best </span> online <br/>
                            Community for <span className='green-text'>farmers</span>
                        </h1>
                            <h2>access quality information</h2>
                            <p>about farming best practice to boost your farm production</p>
                        </div>
                        </div>
                    </Carousel.Caption>
                    </Carousel.Item>
                    
                </Carousel>
                
                <div className="jumbotron story-list" >
                    <Storylist/>
                </div>
                
                <div className='sales-story container'>
                    <h2 style={{textAlign:'center'}}>How We Operate</h2>
                    <strong>Step 1</strong>
                    <p>Don't Have an Account Register, Already Have an Account Login</p>
                    <strong>Step 2</strong>
                    <p> Meet With Experts Like You Share Ideas on How to Make better produce </p>
                    <strong>Step 3</strong>
                    <p> Having Financial Issues? We Connect You with the Right Financial Institutions to Secure Agricultural Loans</p>
                    <strong>Step 4</strong>
                    <p></p>
                </div>
            </Container>
        </div>
    )
}
export default Bodynew