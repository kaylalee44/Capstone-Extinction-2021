import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

// smooth scrolling: https://www.codegrepper.com/code-examples/javascript/onclick+scroll+to+div+react
export function Home() {
    const scrollToSection = () => {
        scroller.scrollTo("carousel", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      };
    return(
        <div>
            <Map />
            <div className="divider">
                <button className="divide-arrow-btn" onClick={scrollToSection}>
                    <svg className="divide-arrow" width="60" height="38" viewBox="0 0 60 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M52.95 0.474899L30 23.3749L7.05 0.474899L0 7.5249L30 37.5249L60 7.5249L52.95 0.474899Z" fill="#E9E3CB"/>
                    </svg>
                </button>
            </div>
            <Slides />
        </div>
    );
}

// https://www.w3schools.com/html/html_images_imagemap.asp
// https://www.w3schools.com/howto/howto_css_button_on_image.asp
// https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_areamap
// https://css-tricks.com/the-many-ways-to-link-up-shapes-and-images-with-html-and-css/
function Map() {
    // let list = "";
    // const showCoords = (event) => {
    //     var x = event.clientX;
    //     var y = event.clientY;
    //     // var coords = "X coords: " + x + ", Y coords: " + y;
    //     var coords = "," + x + "," + y + ",";
    //     list += coords;
    //     console.log(list);
    //     // document.getElementById("demo").innerHTML = coords;
    // }
    return (
        <div className="map-container">
            <h1 className="map-title">Enter An Interactive Story</h1>
            <p className="map-header">Click on the region that you live in to learn about the endangered species in your area</p>
            <div className="map-btn-container">
                <img className="map-img" src="img/new_map.png" alt="Washington State with different regions" useMap="#storymap-map"/>
                <a href="/stories"><button className="turtle-region-btn"></button></a>
            </div>

            {/* <map name="storymap-map">
                <area href="#" shape="rect" class="turtle-region" 
                    coords="552,282,782,538" 
                    />
                <area href="#" shape="poly" class="bird-region" coords="399,269,681,268,673,468,227,455" />
                <area href="#" shape="poly" class="bat-region" coords="685,267,934,267,1134,473,676,468" />
                <area href="#" shape="poly" class="mouse-region" coords="220,458,33,641,378,640,540,465,224,458" />
                <area href="#" shape="poly" class="lizard-region" coords="542,467,380,643,975,641,802,471,547,467" />
            </map> */}
        </div>
    );
}

function Slides() {
    return (
        <Carousel className="home-carousel">
            <Carousel.Item className="slide slide-1">
                <img
                    className="d-block w-100 slide-img"
                    src="img/turtle.jpg"
                    alt="First slide"
                />
                <Carousel.Caption className="slide-cap slide-1-cap">
                    <h1 className="slide-title slide-title-turtle">There are over <strong>1,300 endangered</strong> or threatened species in the United States</h1>
                    <p>In order to bring more awareness to this growing crisis, we wanted to create a platform to that brings 
                        light to endangered species that are not widely popularized and commonly overlooked. By learning about 
                        the different species that live around your area, it could help better understand how important these 
                        creatures are for the ecosystem, and learn ways to protect them too. Small actions can make a big 
                        impact in our ecosystems.</p>
                    <Link to="/"><button className="slide-btn slide-btn-turtle">Read more about our mission</button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slide slide-2">
                <img
                    className="d-block w-100 slide-img"
                    src="img/caribou2.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption className="slide-cap slide-2-cap">
                <h1 className="slide-title slide-title-caribou">Woodland Caribou</h1>
                <p>Only 51 herds remain in the wild</p>
                <Link to="/stories"><button className="slide-btn slide-btn-caribou">Learn More</button></Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="slide slide-3">
                <img
                    className="d-block w-100 slide-img"
                    src="img/rabbit2.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption className="slide-cap slide-3-cap">
                    <h1 className="slide-title slide-title-rabbit">Columbia Basin Pygmy Rabbit</h1>
                    <Link to="/stories"><button className="slide-btn slide-btn-rabbit">Learn More</button></Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}