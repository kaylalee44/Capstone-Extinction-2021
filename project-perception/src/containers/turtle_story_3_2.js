import React, {useState} from 'react';
import JourneyCardsContainer from "./journeycards";
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';
import PopUp from '../components/story/popup';
import { scroller } from "react-scroll";

export default function TurtleStoryClimateDeathContainer() {
    const [seen, setSeen] = useState(false);
    const togglePop = () => {
        let seenCopy = seen;
        if (!seenCopy) {
            seenCopy = true; 
        } else {
            seenCopy = false;
        }
        setSeen(seenCopy);
    }
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
                <StoryImage id="rock-beach-gif" className="gif ocean" src="img/rock-beach.gif" alt="A rock beach gif" />
                <div className="story-content ocean">
                    <p className="story-paragraph">
                        You decide to swim towards the middle of the beach to nest. Unfortunately, there is a lack of suitable dry sand due to <span className="highlight" onClick={togglePop}>shoreline armoring.</span>
                    </p>
                    <p className="story-paragraph2">
                        <span className="death"><strong>You are unable to nest and venture back out into the water to try to find a different beach.</strong></span>
                    </p>
                    <p className="explanation separation"><strong>You got the "Loss and Degradation of Nesting Habit" ending.</strong></p>
                    <p className="explanation">
                        Climate change, along with the effects of it such as rising sea levels lead to nesting habitat loss. Humans are also contributing factor
                        due to creating sea walls that remove all dry sand, or artificial lighting that disorients hatchlings or nesting females.
                    </p>
                    <TryAgain to="story-turtle-3" href="https://www.fisheries.noaa.gov/species/leatherback-turtle" handleClick={handleClick} buttonText={buttonText} learnMore="Learn more about the Leatherback Sea Turtle" />
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
            {seen ? <PopUp toggle={togglePop} definition="&quot;Armoring&quot; is the practice of using physical structures to protect shorelines from coastal erosion." /> : null}    
        </div>
    );
}