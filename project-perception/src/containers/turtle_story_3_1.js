import React from 'react';
import StoryImage from '../components/story/story_image';
import StoryTitle from '../components/story/story_title';
import TryAgain from '../components/story/try_again';

export default function TurtleStorySurviveContainer() {
    return(
        <div>
            <StoryTitle title={"NESTING"} />
            <div className="story-container">
                <StoryImage id="turtle-sand-img" className="gif jellyfish" src="img/turtle-survival.jpg" alt="A leatherback sea turtle on the sand image" />
                <div className="story-content jellyfish">
                    <p className="story-paragraph">
                        You swim to the right side of the beach and shuffle your way onto the sand. You are able to nest and lay a clutch of 100 eggs. The eggs will incubate for approximately two months before emerging from the nest. <span className="survive"><strong>You hope for their survival.</strong></span>
                    </p>
                    <p className="explanation separation"><strong>You got the good ending and managed to survive.</strong></p>
                    <TryAgain to="story-turtle-1" href="https://www.fisheries.noaa.gov/species/leatherback-turtle" learnMore="Learn more about the Leatherback Sea Turtle" />
                </div>
            </div>    
        </div>
    );
}