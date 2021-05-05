import React, {useState} from 'react';
import JourneyCardsContainer from "./journeycards";
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';

export default function TurtleStoryVesselDeathContainer() {
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
                <StoryImage id="boat-gif" className="gif jellyfish" src="img/boat.gif" alt="A boat gif" />
                <div className="story-content jellyfish">
                    <p className="story-paragraph">
                        You swim straight up and collide with a boat.
                    </p>
                    <p className="story-paragraph2">
                        <span className="death"><strong>You have become seriously injured and die within the next few days.</strong></span>
                    </p>
                    <p className="explanation separation"><strong>You got the "Vessel Strikes" ending.</strong></p>
                    <p className="explanation">
                        Many types of water vehicles can kill or injure leatherback turtles when they come near the surface of the water. This
                        threat accounts for about one third of leatherback strandings in the eastern United States.
                    </p>
                    <TryAgain to="story-turtle-2" href="https://www.fisheries.noaa.gov/species/leatherback-turtle" handleClick={handleClick} buttonText={buttonText} learnMore="Learn more about the Leatherback Sea Turtle"/>
                </div>
            </div>
            <div className={"journey-container " + className}>
                <div className="journey-divider"></div>
                <JourneyCardsContainer title={"NESTING"} />
            </div>
        </div>
    );
}