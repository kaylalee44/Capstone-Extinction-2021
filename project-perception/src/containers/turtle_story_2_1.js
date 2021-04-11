import React from 'react';
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';

export default function TurtleStoryVesselDeathContainer() {
    return(
        <div>
            <StoryTitle title={"NESTING"} />
            <div className="story-container">
                <StoryImage id="boat-gif" className="gif jellyfish" src="img/boat.gif" alt="A boat gif" />
                <div className="story-content jellyfish">
                    <p className="story-paragraph">
                        You swim straight up and collide with a boat. <span className="death"><strong>You have become seriously injured and die within the next few days.</strong></span>
                    </p>
                    <p className="explanation separation"><strong>You got the "Vessel Strikes" ending.</strong></p>
                    <p className="explanation">
                        Many types of water vehicles can kill or injure leatherback turtles when they come near the surface of the water. This
                        threat accounts for about one third of leatherback strandings in the eastern United States.
                    </p>
                    <TryAgain />
                </div>
            </div>    
        </div>
    );
}