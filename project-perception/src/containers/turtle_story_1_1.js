import React from 'react';
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';

export default function TurtleStoryPlasticDeathContainer() {
    return(
        <div>
            <StoryTitle title={"NESTING"} />
            <div className="story-container">
                <StoryImage id="plastic-img" className="gif ending" src="img/plastic.jpg" alt="A plastic image" />
                <div className="story-content ending">
                    <p className="story-paragraph">
                        You swim towards the "jellyfish" and use your pointed tooth-like cusps and sharp-edged jaws to eat it.
                        The backward-pointing spines in your mouth and throat lodge the "jellyfish" in your mouth. <span className="death"><strong>It ends up being a plastic bag and you are unable to digest it properly. You have died.</strong></span>
                    </p>
                    <p className="explanation separation"><strong>You got the "Ocean Pollution/Marine Debris" ending.</strong></p>
                    <p className="explanation">
                        Pollution affects the habits of all sea animals, sea turtles included. Leatherback turtles can die from
                        swallowing fishing lines, ballons, plastic bags, or other plastic debris because it is mistaken for food.
                    </p>
                    <TryAgain />
                </div>
            </div>    
        </div>
    );
}