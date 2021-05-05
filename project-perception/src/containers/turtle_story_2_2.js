import React, {useState} from 'react';
import JourneyCardsContainer from "./journeycards";
import PopUp from '../components/story/popup';
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';

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
    const handleClick = () => {
        setJourneyHidden(!journeyHidden);
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
                    <TryAgain to="story-turtle-2" href="https://www.fisheries.noaa.gov/species/leatherback-turtle" handleClick={handleClick} buttonText={buttonText} learnMore="Learn more about the Leatherback Sea Turtle"/>
                </div>
            </div>
            <div className={"journey-container " + className}>
                <div className="journey-divider"></div>
                <JourneyCardsContainer title={"NESTING"} />
            </div>
            {seen ? <PopUp toggle={togglePop} definition="A fishing pot is a receptable for catching fish or shellfish." id="fishing-pot" className="fishing-pot" src="img/fishing-pot.jpeg" alt="A fishing pot image"/> : null} 
        </div>
    );
}