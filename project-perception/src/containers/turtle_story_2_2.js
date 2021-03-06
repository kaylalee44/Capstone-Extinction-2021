import React, {useState} from 'react';
import JourneyCardsContainer from "./journeycards";
import PopUp from '../components/story/popup';
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';
import { scroller } from "react-scroll";

export default function TurtleStoryBycatchDeathContainer() {
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

    if (!window.endingsGotTurtle.includes("Bycatch in Fishing Gear")) {
        window.endingsGotTurtle.push("Bycatch in Fishing Gear");
        window.numEndingsGotTurtle += 1;
    }
    return(
        <div>
            <StoryTitle title={"NESTING"} />
            <div className={"story-container " + margins}>
                <StoryImage id="net-img" className="gif ocean" src="img/bycatch.jpg" alt="A net image" />
                <div className="story-content ocean">
                    <p className="story-paragraph">
                        You swim to the right and up and get entangled in buoy lines attached to a <span className="highlight" onClick={togglePop}>fishing pot.</span>
                    </p>
                    <p className="story-paragraph2">
                        <span className="death"><strong>You have become seriously injured and die within the next few days.</strong></span>
                    </p>
                    <p className="explanation separation"><strong>You got the "Bycatch in Fishing Gear" ending.</strong></p>
                    <p className="explanation">
                        A primary threat to sea turtles is the unintended capture in fishing gear which can result in drowning or injury (such as swallowing hooks). 
                        Known as bycatch, this situation is a problem for sea turtles around the world due to equipment such as gillnets, longlines, and buoy lines.
                    </p>
                    <p className="num-endings-text">Number of endings gotten: {window.numEndingsGotTurtle}/6</p>
                    <TryAgain to="story-turtle-2" href="https://www.fisheries.noaa.gov/species/leatherback-turtle" handleClick={handleClick} buttonText={buttonText} learnMore="Learn more about the Leatherback Sea Turtle"/>
                </div>
            </div>
            <div className={"journey-divider " + className}></div>
            <div className={"journey-container " + className}>
                <JourneyCardsContainer 
                    title={"NESTING"} 
                />
                <div className="back-to-top-btn" onClick={scrollToTop}>
                    <svg width="39" height="25" viewBox="0 0 39 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.15625 24.0781L19.5 9.76563L33.8438 24.0781L38.25 19.6719L19.5 0.921875L0.75 19.6719L5.15625 24.0781Z" fill="#E9E3CB"/>
                    </svg>
                    <p>back to top</p>
                </div>
            </div>
            {seen ? <PopUp toggle={togglePop} definition="A fishing pot is a receptable for catching fish or shellfish." id="fishing-pot" className="fishing-pot" src="img/fishing-pot.jpeg" alt="A fishing pot image"/> : null} 
        </div>
    );
}