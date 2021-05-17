import React from 'react';
import StoryTitle from '../components/story/story_title';
import StoryImage from '../components/story/story_image';
import { Link } from 'react-router-dom';
import AddChoiceToDB from "../components/story/add_choice_db";

export default function CaribouStory3Container() {
    let popupData = {
        "ending": "Survival",
        "desc": "Caribou need intact forests to be able to freely roam and hide in order to thrive. Deforestation, habitat fragmentation, and climate change are the greatest ecological threats creating “holes” in their habitats. Though they can survive alone, they are also equipped to survive in small herds. Here’s some ways to help increase the survival of the caribou:",
        "steps": ["Improve health of forest areas", "Reduce disturbances of forest areas", "Limit paper waste"],
        "volunteerLink": "",
        "sourceText": "PEW Environment",
        "source": "https://www.pewtrusts.org/en/research-and-analysis/articles/2014/03/02/save-the-boreal-save-the-caribou",
        "source2Text": "",
        "source2": ""
    };
    return(
        <div>
            <StoryTitle title="SURVIVAL" />
            <div className="story-container margins">
                <StoryImage id="sunset-trees" className="gif jellyfish" src="img/sunset-trees.jpg" alt="A groups of trees in a sunset" />
                <div className="story-content jellyfish">
                    <p className="story-paragraph2">
                        The small herd of woodland caribou lets you join them and you cross the open space as a herd together. You were able to find some food,
                        but the rea of trees was much smaller than expected. A group of humans is coming toward the herd and you are wary and afraid.
                    </p>
                    <p className="story-question">What do you do?</p>
                    <div className="choice-container">
                        <button onClick={(e) => AddChoiceToDB(e, true, "Survival", popupData)} className="choice-btn-container caribou-btn">
                            <Link to="/story-caribou-3-1" className="choice-btn">Decide to run away with the herd.</Link>
                        </button>
                        <button onClick={(e) => AddChoiceToDB(e, true, "Survival", popupData)} className="choice-btn-container caribou-btn">
                            <Link to="/story-caribou-3-2" className="choice-btn">Go up to the humans.</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}