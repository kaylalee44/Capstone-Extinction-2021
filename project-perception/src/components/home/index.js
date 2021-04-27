import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom";

export function Home() {
    return(
        <div>
            <Map />
            <div className="divider"></div>
            <Slides />
        </div>
    );
}

function Map() {
    return (
        <div className="map-container">
            <h1 className="map-title">Enter An Interactive Story</h1>
            <p className="map-header">Click on the region that you live in to learn about the endangered species in your area</p>
            <img className="map-img" src="img/Map.png" alt="Image of Washington State with different regions" useMap="#storymap-map"/>

            {/* {document.getElementsByClassName("map-img").getBoundingClientRect()} */}

            <map name="storymap-map">
                <area shape="rect" coords="34,44,270,350" alt="West region on map"/>
            </map>
        </div>
    );
}

function Slides() {
    return (
        <Carousel className="carousel">
            <Carousel.Item className="slide slide-1">
                <img
                    className="d-block w-100 slide-img"
                    src="img/leatherback-sea-turtle.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className="slide-cap slide-1-cap">
                    <h1 className="slide-title">There are over <strong>1,300 endangered</strong> or threatened species in the United States</h1>
                    <p>In order to bring more awareness to this growing crisis, we wanted to create a platform to that brings 
                        light to endangered species that are not widely popularized and commonly overlooked. By learning about 
                        the different species that live around your area, it could help better understand how important these 
                        creatures are for the ecosystem, and learn ways to protect them too. Small actions can make a big 
                        impact in our ecosystems.</p>
                    <Link to="/about"><button className="slide-btn">Read more about our mission</button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slide slide-2">
                <img
                    className="d-block w-100 slide-img"
                    src="img/caribou.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption className="slide-cap slide-2-cap">
                <h1 className="slide-title">Woodland Caribou</h1>
                <p>Only 51 herds remain in the wild</p>
                <Link to="/stories"><button className="slide-btn">Learn More</button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slide slide-3">
                <img
                    className="d-block w-100 slide-img"
                    src="img/albatross.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption className="slide-cap slide-3-cap">
                    <h1 className="slide-title">Short-tailed Albatross</h1>
                    <Link to="/stories"><button className="slide-btn">Learn More</button></Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}