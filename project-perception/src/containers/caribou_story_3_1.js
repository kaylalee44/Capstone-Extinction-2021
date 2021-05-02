import React from 'react';
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';

export default function CaribouStorySurviveRunContainer() {
    return(
        <div>
            <StoryTitle title="SURVIVAL" />
            <div className="story-container">
                <StoryImage id="caribou-herd" className="gif jellyfish" src="img/caribou-herd.jpg" alt="A herd of caribou in snow" />
                <div className="story-content jellyfish">
                    <p className="story-paragraph">
                        You run away from the humans and go with the herd. You are able to survive, but in the area that you are in, the <span className="survive"><strong>chance of survival is very slim. </strong></span> 
                        You need a bigger amount of acres of trees for the herd and yourself to be able to sustain and live.
                    </p>
                    <p className="explanation separation"><strong>You got the good ending and managed to survive.</strong></p>
                    <TryAgain to="story-caribou-3" href="https://naturecanada.ca/discover-nature/endangered-species/woodland-caribou/" learnMore="Learn more about the Woodland Caribou" />
                </div>
            </div>    
        </div>
    );
}