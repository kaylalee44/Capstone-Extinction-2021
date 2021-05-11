import React from 'react';
import StoryTitle from '../components/story/story_title';
import StoryImage from '../components/story/story_image';
import { Link } from 'react-router-dom';
import AddChoiceToDB from "../components/story/add_choice_db";

export default function TurtleStory3Container() {
    return(
        <div>
            <StoryTitle title={"NESTING"} />
            <div className="story-container margins">
                <StoryImage id="waves-gif" className="gif ocean" src="img/waves.gif" alt="A waves gif" />
                <div className="story-content ocean">
                    <p className="story-paragraph2">You swim to the left and up and are able to catch a breath.</p>
                    <p className="story-paragraph2">
                        After you catch a breath, you continue swimming towards the beach and are soon within reach.
                    </p>
                    <p className="story-question">Where will you go?</p>
                    <div className="choice-container">
                        <button onClick={AddChoiceToDB} className="choice-btn">
                            <Link to="/story-turtle-3-1">To the right of the beach.</Link>
                        </button>
                        <button onClick={AddChoiceToDB} className="choice-btn">
                            <Link to="/story-turtle-3-2">Towards the middle of the beach.</Link>
                        </button>
                        <button onClick={AddChoiceToDB} className="choice-btn">
                            <Link to="/story-turtle-3-3">To the left of the beach.</Link>
                        </button>
                    </div>
                </div>
            </div>     
        </div>
    );
}