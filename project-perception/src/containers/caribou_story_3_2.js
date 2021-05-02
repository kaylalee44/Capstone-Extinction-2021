import React from 'react';
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';

export default function CaribouStorySurviveHumanContainer() {
    return(
        <div>
            <StoryTitle title="SURVIVAL" />
            <div className="story-container">
                <StoryImage id="sunset-tree-gif" className="gif jellyfish" src="img/sunset-tree.gif" alt="A tree with a sunset in the background" />
                <div className="story-content jellyfish">
                    <p className="story-paragraph">
                        As you approach the humans, you are hesitant, but they are people here to help. They are here to transport you to a much larger area filled with a large amount of acres of trees and other woodland caribous. <span className="survive"><strong>These humans are giving you a higher chance of survival </strong></span> 
                        to live and hopefully an opportunity to populate and increase the number of woodland caribous.
                    </p>
                    <p className="explanation separation"><strong>You got the good ending and managed to survive.</strong></p>
                    <TryAgain to="story-caribou-3" href="https://naturecanada.ca/discover-nature/endangered-species/woodland-caribou/" learnMore="Learn more about the Woodland Caribou" />
                </div>
            </div>    
        </div>
    );
}