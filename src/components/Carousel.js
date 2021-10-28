import React, { Component } from 'react'
import img2 from './forAbout-2.png'
export class Carousel extends Component {
    render() {
        return (
            <div className="my-3" >
                <div style={{ width: "1440px", margin: "auto" }}>
                    <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">

                        <div className="carousel-inner w-100">
                            <div className="carousel-item active" data-bs-interval="10000">
                                <img src={img2} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">

                                    <p className="text-light" style={{ marginBottom: "-21px" ,color:"white",fontSize:"20px"}}>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item" data-bs-interval="2000">
                                <img src={img2} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <p className="text-light" style={{ marginBottom: "-21px" ,color:"white",fontSize:"20px"}}>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={img2} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <p className="text-light" style={{ marginBottom: "-21px" ,color:"white",fontSize:"20px"}}>Some representative placeholder content for the first slide.</p>
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
            </div>
        )
    }
}

export default Carousel
