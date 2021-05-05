import React, {useState} from 'react';
import JourneyCardsContainer from "./journeycards";
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';
import { scroller } from "react-scroll";

export default function TurtleStoryPlasticDeathContainer() {
    const [journeyHidden, setJourneyHidden] = useState(false);

    let className = 'hidden';
    let margins = 'margins';
    let buttonText = "View your Past Stories";
    if (journeyHidden) {
        className = '';
        margins = '';
        buttonText = "Hide your Past Stories";
    }

    // when button is clicked
    const handleClick = () => { //TODO: figure out why it only works when u want to hide
        if (!journeyHidden) {
            scroller.scrollTo("journey-container", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
            });
        }
        setJourneyHidden(!journeyHidden);
    }

    const scrollToTop = () => {
        scroller.scrollTo("navbar-main", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      };
    return(
        <div>
            <StoryTitle title={"NESTING"} />
            <div className={"story-container " + margins}>
                <StoryImage id="plastic-img" className="gif ending" src="img/plastic.jpg" alt="A plastic image" />
                <div className="story-content ending">
                    <p className="story-paragraph">
                        You swim towards the "jellyfish" and use your pointed tooth-like cusps and sharp-edged jaws to eat it.
                        The backward-pointing spines in your mouth and throat lodge the "jellyfish" in your mouth. 
                    </p>
                    <p className="story-paragraph2"> 
                        <span className="death"><strong>It ends up being a plastic bag and you are unable to digest it properly. You have died.</strong></span>
                    </p>
                    <p className="explanation separation"><strong>You got the "Ocean Pollution/Marine Debris" ending.</strong></p>
                    <p className="explanation">
                        Pollution affects the habits of all sea animals, sea turtles included. Leatherback turtles can die from
                        swallowing fishing lines, ballons, plastic bags, or other plastic debris because it is mistaken for food.
                    </p>
                    <TryAgain to="/story-turtle-1" href="https://www.fisheries.noaa.gov/species/leatherback-turtle" handleClick={handleClick} buttonText={buttonText} learnMore="Learn more about the Leatherback Sea Turtle" />
                </div>
            </div>
            <div className={"journey-divider " + className}></div>
            <div className={"journey-container " + className}>
                <JourneyCardsContainer title={"NESTING"} />
                <div className="back-to-top-btn" onClick={scrollToTop}>
                    <svg width="39" height="25" viewBox="0 0 39 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.15625 24.0781L19.5 9.76563L33.8438 24.0781L38.25 19.6719L19.5 0.921875L0.75 19.6719L5.15625 24.0781Z" fill="#E9E3CB"/>
                    </svg>
                    <p>back to top</p>
                </div>
            </div>
        </div>
    );
}