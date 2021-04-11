import React from 'react';
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';

export default function TurtleStoryClimateDeathContainer() {
    return(
        <div>
            <StoryTitle title={"NESTING"} />
            <div className="story-container">
                <StoryImage id="rock-beach-gif" className="gif ocean" src="img/rock-beach.gif" alt="A rock beach gif" />
                <div className="story-content ocean">
                    <p className="story-paragraph">
                        You decide to swim towards the middle of the beach to nest. Unfortunately, there is a lack of suitable dry sand due to <span className="highlight">shoreline armoring.</span> <span className="death"><strong>You are unable to nest and venture back out into the water to try to find a different beach.</strong></span>
                    </p>
                    <p className="explanation separation"><strong>You got the "Loss and Degradation of Nesting Habit" ending.</strong></p>
                    <p className="explanation">
                        Climate change, along with the effects of it such as rising sea levels lead to nesting habitat loss. Humans are also contributing factor
                        due to creating sea walls that remove all dry sand, or artificial lighting that disorients hatchlings or nesting females.
                    </p>
                    <TryAgain />
                </div>
            </div>    
        </div>
    );
}