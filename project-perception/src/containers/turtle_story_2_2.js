import React from 'react';
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';

export default function TurtleStoryBycatchDeathContainer() {
    return(
        <div>
            <StoryTitle title={"NESTING"} />
            <div className="story-container">
                <StoryImage id="net-img" className="gif ocean" src="img/bycatch.jpg" alt="A net image" />
                <div className="story-content ocean">
                    <p className="story-paragraph">
                        You swim to the right and up and get entangled in buoy lines attached to a <span className="highlight">fishing pot.</span> <span className="death"><strong>You have become seriously injured and die within the next few days.</strong></span>
                    </p>
                    <p className="explanation separation"><strong>You got the "Bycatch in Fishing Gear" ending.</strong></p>
                    <p className="explanation">
                        A primary threat to sea turtles is the unintended capture in fishing gear which can result in drowning or injury (such as swallowing hooks). 
                        Known as bycatch, this situation is a problem for sea turtles around the world due to equipment such as gillnets, longlines, and buoy lines.
                    </p>
                    <TryAgain />
                </div>
            </div>    
        </div>
    );
}