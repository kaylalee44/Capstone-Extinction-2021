import React from 'react';
import StoryTitle from '../components/story/story_title';
import StoryImage from '../components/story/story_image';
import Choices from '../components/story/choices';

export default function TurtleStory3Container() {
    return(
        <div>
            <StoryTitle title={"NESTING"} />
            <div className="story-container">
                <StoryImage id="waves-gif" className="gif ocean" src="img/waves.gif" alt="A waves gif" />
                <div className="story-content ocean">
                    <p className="story-paragraph2">You swim to the left and up and are able to catch a breath.</p>
                    <p className="story-paragraph2">
                        After you catch a breath, you continue swimming towards the beach and are soon within reach.
                    </p>
                    <p className="story-question">Where will you go?</p>
                    <Choices choices={["To the right of the beach.", "Towards the middle of the beach.", "To the left of the beach."]} />
                </div>
            </div>     
        </div>
    );
}