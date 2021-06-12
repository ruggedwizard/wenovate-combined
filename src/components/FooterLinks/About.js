import React from 'react'
import { Container } from 'react-bootstrap'


const About = () => {
    return (
        <div>
{/*         
        <Container>
            <h1>About</h1>
            <section id="about">
                <div className="row">
                    <div className="col-sm-12">
                    <div className="card" style={{backgroundColor:"#eee", borderRadius:"10px"}}>
                        <div className="card-header">
                        <h5>Personal Information</h5>
                        </div>
                        <div className="card-content">
                        <div className="card-body">
                            <div className="mb-3">
                            <span className="text-bold-500 primary">About Me:</span>
                            <span className="d-block overflow-hidden">Hi, I’m Jose, I’m 29 and I work as a Ninja Developer for the
                                “PIXINVENT” Creative Studio. In my research, I follow the flow of early medieval slavery from viking
                                raids in the west, through the booming ports of the Scandinavian north, and out into the Islamic world.
                                Reading texts against the grain and seeing artifacts as traces of the past can make their lives once
                                again visible to us today. This website documents my efforts to do just that, and I hope it will prove
                                a resource and an inspiration for others in similar pursuits.
                            </span>
                            </div>
                            <hr/>
                            <div className="row">
                            <div className="col-12 col-md-6 col-lg-4">
                                <ul className="no-list-style">
                                <li className="mb-2">
                                    <span className="text-bold-500 primary"><a href="google.com"><i className="icon-present font-small-3"></i> Birthday:</a></span>
                                    <span className="d-block overflow-hidden">June 10th, 1988</span>
                                </li>
                                <li className="mb-2">
                                    <span className="text-bold-500 primary"><a href="#"><i className="ft-map-pin font-small-3"></i> Birthplace:</a></span>
                                    <span className="d-block overflow-hidden">New Jersey, USA</span>
                                </li>
                                <li className="mb-2">
                                    <span className="text-bold-500 primary"><a href="#"><i className="ft-globe font-small-3"></i> Lives in:</a></span>
                                    <span className="d-block overflow-hidden">Denver, USA</span>
                                </li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <ul className="no-list-style">
                                <li className="mb-2">
                                    <span className="text-bold-500 primary"><a href="#"><i className="ft-user font-small-3"></i> Gender:</a></span>
                                    <span className="d-block overflow-hidden">Male</span>
                                </li>
                                <li className="mb-2">
                                    <span className="text-bold-500 primary"><a href="#"><i className="ft-mail font-small-3"></i> Email:</a></span>
                                    <a className="d-block overflow-hidden">jose@yourmail.com</a>
                                </li>
                                <li className="mb-2">
                                    <span className="text-bold-500 primary"><a href="#"><i className="ft-monitor font-small-3"></i> Website:</a></span>
                                    <a className="d-block overflow-hidden">pixinvent.com</a>
                                </li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-6 col-lg-4">
                                <ul className="no-list-style">
                                <li className="mb-2">
                                    <span className="text-bold-500 primary"><a href="#"><i className="ft-smartphone font-small-3"></i> Phone Number:</a></span>
                                    <span className="d-block overflow-hidden">(012) 345 - 678 - 9910</span>
                                </li>
                                <li className="mb-2">
                                    <span className="text-bold-500 primary"><a href="#"><i className="ft-briefcase font-small-3"></i> Occupation:</a></span>
                                    <span className="d-block overflow-hidden">Ninja Developer</span>
                                </li>
                                <li className="mb-2">
                                    <span className="text-bold-500 primary"><a href="#"><i className="ft-book font-small-3"></i> Joined:</a></span>
                                    <span className="d-block overflow-hidden">April 1st, 2012</span>
                                </li>
                                </ul>
                            </div>
                            </div>
                            <hr/>
                            <div className="mt-3">
                            <span className="text-bold-500 primary">Hobbies:</span>
                            <span className="d-block overflow-hidden">I like to ride the cycle to work, swimming, listning music and
                                working out. I also like reading magazines, go to museums, watching good movies and eat spicy food
                                while
                                it’s raining outside.Twin siblings Dipper and Mabel Pines spend the summer at their uncle's tourist
                                trap
                                in the enigmatic town of Gravity Falls.A mysterious Hollywood stuntman and mechanic moonlights as a
                                getaway driver.Scuba Diving, Skiing, Surfing, Photography, Long drive.
                            </span>
                            </div>
                            <div className="mt-2 overflow-hidden">
                            <span className="mr-3 mt-2 text-center float-left width-100"> <i className="icon-plane danger font-large-2"></i>
                                <div className="mt-2">Travelling</div>
                            </span>
                            <span className="mr-3 mt-2 text-center float-left width-100"> <i className="icon-speedometer danger font-large-2"></i>
                                <div className="mt-2">Driving</div>
                            </span>
                            <span className="mr-3 mt-2 text-center float-left width-100"> <i className="icon-camera danger font-large-2"></i>
                                <div className="mt-2">Photography</div>
                            </span>
                            <span className="mr-3 mt-2 text-center float-left width-100"> <i className="icon-game-controller danger font-large-2"></i>
                                <div className="mt-2">Gaming</div>
                            </span>
                            <span className="mr-3 mt-2 text-center float-left width-100"> <i className="icon-music-tone-alt danger font-large-2"></i>
                                <div className="mt-2">Music</div>
                            </span>
                            <span className="mr-3 mt-2 text-center float-left width-100"> < i className="ft-monitor danger font-large-2"></i>
                                <div className="mt-2">Surfing</div>
                            </span>
                            <span className="mr-3 mt-2 text-center float-left width-100"> <i className="ft-pie-chart danger font-large-2"></i>
                                <div className="mt-2">Foodie</div>
                            </span>
                            <span className="mr-3 mt-2 text-center float-left width-100"> <i className="ft-tv danger font-large-2"></i>
                                <div className="mt-2">TV</div>
                            </span>
                            <span className="mr-3 mt-2 text-center float-left width-100"> <i className="icon-basket-loaded danger font-large-2"></i>
                                <div className="mt-2">Shopping</div>
                            </span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    </div>
                </section>
        </Container>
         */}

        </div>
    )
}

export default About
