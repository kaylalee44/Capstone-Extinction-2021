import React from 'react';
import StoryTitle from '../components/story/story_title';
import StoryImage from '../components/story/story_image';
import { Link } from 'react-router-dom';
import AddChoiceToDB from "../components/story/add_choice_db";

export default function CaribouStory2Container() {
    let popupData = {
        "ending": "Logging/Hunter",
        "desc": "Logging has been proven to be one of the major causes of caribou habitat degradation. Not only do these explorations remove trees, but it also supports the construction of new roads in the forest. These roads are providing access to recreational hunters, poachers, and snowmobiles. Here are some ways to help:",
        "steps": ["Support environmental organizations that protect wildlife habitats", "Be aware of forestry development projects", "Recycle and reduce use of paper", "Read up on recovery strategies and action plans", "Get involved with legislation, sign petitions"],
        "volunteerLink": "https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/recovery-strategies/woodland-caribou-boreal-population-2012.html",
        "sourceText": "Government of Canada",
        "source": "https://www.nrcan.gc.ca/our-natural-resources/forests/sustainable-forest-management/conservation-and-protection-canadas-forests/woodland-caribou-boreal-population/13201",
        "source2Text": "",
        "source2": ""
    };
    return(
        <div>
            <StoryTitle title="SURVIVAL" />
            <div className="story-container margins">
                <StoryImage id="caribou-chilling" className="gif jellyfish" src="img/caribou-lounge.jpg" alt="A couple of caribou sitting on a patch of grass" />
                <div className="story-content jellyfish">
                    <p className="story-paragraph2">
                        There are not many acres left in the forest for you to continue your search. Many of the tress have been destroyed due to
                        their collection of timber. In the distance, you see a herd of other woodland caribou.
                    </p>
                    <p className="story-question">Where do you go?</p>
                    <div className="choice-container">
                        <button onClick={(e) => AddChoiceToDB(e, true, "Logging/Hunter", popupData)} className="choice-btn-container caribou-btn">
                            <Link to="/story-caribou-2-1" className="choice-btn">Continue to go alone.</Link>
                        </button>
                        <button onClick={(e) => AddChoiceToDB(e, false, "", "")} className="choice-btn-container caribou-btn">
                            <Link to="/story-caribou-3" className="choice-btn">Go up to them in hopes to join their herd.</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}