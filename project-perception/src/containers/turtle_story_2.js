import React from 'react';
import StoryTitle from '../components/story/story_title';
import StoryImage from '../components/story/story_image';
import { Link } from 'react-router-dom';

export default function TurtleStory2Container() {
    return(
        <div>
            <StoryTitle title={"NESTING"} />
            <div className="story-container">
                <StoryImage id="ocean-gif" className="gif ocean" src="img/ocean.gif" alt="An ocean gif" />
                <div className="story-content ocean">
                    <p className="story-paragraph2">You decide to pass on the jellyfish and continue swimming towards the beach.</p>
                    <p className="story-paragraph2">
                        You swim with ease due to your unique proportionally long flippers and paddle-shaped back flippers that help you swim for
                        long distance foraging migrations. After swimming under water for about 85 minutes, you need to go up to the surface to
                        breathe.
                    </p>
                    <p className="story-question">Where will you swim?</p>
                    <div className="choice-container">
                        <Link to="/story-turtle-2-1" className="choice-btn">Swim straight up.</Link>
                        <Link to="/story-turtle-2-2" className="choice-btn">Swim to the right and up.</Link>
                        <Link to="/story-turtle-3" className="choice-btn">Swim to the left and up.</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}