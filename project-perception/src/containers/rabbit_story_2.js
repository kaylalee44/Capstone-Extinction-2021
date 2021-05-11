import React from 'react';
import StoryTitle from '../components/story/story_title';
import StoryImage from '../components/story/story_image';
import { Link } from 'react-router-dom';
import AddChoiceToDB from "../components/story/add_choice_db";

export default function RabbitStory2Container() {
    return(
        <div>
            <StoryTitle title="SEARCHING" />
            <div className="story-container margins">
                <StoryImage id="grass-gif" className="gif jellyfish" src="img/grass.gif" alt="A grass gif" />
                <div className="story-content jellyfish">
                    <p className="story-paragraph2">
                        You are in the middle of your trek to find food, and you hear a rustling sound coming from a distant patch of grass.
                    </p>
                    <p className="story-question">Where will you go?</p>
                    <div className="choice-container">
                        <button onClick={AddChoiceToDB} className="choice-btn">
                            <Link to="/story-rabbit-2-1">Run Away.</Link>
                        </button>
                        <button onClick={AddChoiceToDB} className="choice-btn">
                            <Link to="/story-rabbit-3">Hide.</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}