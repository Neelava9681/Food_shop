import React from 'react'

export default function Carousal() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" style={{height:"80vh", overflow:"hidden"}}>
                
                <div className="carousel-indicators">
                    
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner" id="carousal">
                    <div class="carousel-caption" style={{zIndex:"2"}}>
                    
                        <form class="d-flex" >
                           
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                                <button class="btn btn-outline-success test-white bg-success text-light" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900x700/?burger" height="560px" width="auto" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?pastry" height="560px" width="auto" className="d-block w-100" style={{filter:"brightness(30%)"}} alt="..."></img>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?burger" height="560px" width="auto" className="d-block w-100" style={{filter:"brightness(30%)"}}  alt="..."></img>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
