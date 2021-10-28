import React, { Component } from 'react'
import img1 from './forAbout.png'


export class About extends Component {
    
    render() {
        return (
            <div className="container my-5">
                <div className="row">
                    <div style={{width:"700px",margin:"auto"}}>
                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="2000">
                                <div className="carousel-caption d-none d-md-block">
                                     <p style={{fontSize:"50px"}}><strong>WELCOME</strong></p>
                                    <p style={{marginBottom:"250px",fontSize:"50px"}}><strong></strong></p>
                                    </div>
                                    <img src={img1} className="d-block w-100" alt="..."/>
                                    
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src={img1} className="d-block w-100" alt="..."/>
                                    <div className="carousel-caption d-none d-md-block">
                                    <p style={{fontSize:"50px"}}><strong>Developed By :</strong></p>
                                    <p style={{marginBottom:"250px",fontSize:"50px"}}><strong>Pranav Patil</strong></p>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src={img1} className="d-block w-100" alt="..."/>
                                    <div className="carousel-caption d-none d-md-block">
                                    <p style={{fontSize:"50px"}}><strong>College :</strong></p>
                                    <p style={{marginBottom:"150px",fontSize:"50px"}}><strong>Lovely Professional University</strong></p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div style={{height:"30px"}}>

                    </div>
                </div>
            </div>
        )
    }
}

export default About
