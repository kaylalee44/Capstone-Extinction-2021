import React from 'react';

export function Home() {
    return(
        <div>
            <Map />
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

//https://dev.to/willamesoares/how-to-build-an-image-carousel-with-react--24na
function Carousel() {
    return (
        <div className="carousel">
            <ImageSlide url="" />
        </div>
    );
}

function ImageSlide() {
    const ImageSlide = ({ url }) => {
        const styles = {
          backgroundImage: `url(${url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        };
      
        return (
          <div className="image-slide" style={styles}></div>
        );
      }
}

function Arrow() {
    const Arrow = ({ direction, clickFunction, glyph }) => (
        <div
          className={ `slide-arrow ${direction}` }
          onClick={ clickFunction }>
          { glyph }
        </div>
      );
      
}

function Screen1() {
    return (
        <div>
            <h3>There are over 1,300 endangered or threatened species in the United States</h3>
            <p>In order to bring more awareness to this growing crisis, we wanted to create a platform to that brings 
                light to endangered species that are not widely popularized and commonly overlooked. By learning about 
                the different species that live around your area, it could help better understand how important these 
                creatures are for the ecosystem, and learn ways to protect them too. Small actions can make a big 
                impact in our ecosystems.</p>
                <button>Read more about our mission</button>
        </div>
    );
}

function Screen2() {
    return (
         <div>
             <img src="img/albatross.jpg"/>
             <h5>Short-tailed Albatross</h5>
             <button>Learn More</button>
         </div>
    );
}

function Screen3() {
    return (
        <div>
            <img src="img/caribou.jpg"/>
            <h5>Woodland Caribou</h5>
            <p>Only 51 herds remain in the wild</p>
            <button>Learn More</button>
        </div>
   );
}