import React from 'react';
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import Choices from '../components/story/choices';

export default function TurtleStory1Container() {
    return(
        <div>
            <StoryTitle title={"NESTING"} />
            <div className="story-container">
                <StoryImage id="jelly-gif" className="gif jellyfish" src="img/jellyfish.gif" alt="A jellyfish gif" />
                <div className="story-content jellyfish">
                    <p className="story-paragraph">2 years after you last nested you are returning to the beach to nest again. Your tough rubbery skin helps you glide
                        through the water, as it did for past generations ever since the dinosaur age. On your way, you spot what you believe
                        is a jellyfish. It looks good to eat!
                    </p>
                    <p className="story-question">What will you do?</p>
                    <Choices choices={["Eat it.", "Pass - I'm full."]} />
                </div>
            </div>     
        </div>
    );
}