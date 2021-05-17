import React from 'react';
import StoryTitle from '../components/story/story_title';
import StoryImage from '../components/story/story_image';
import { Link } from 'react-router-dom';
import AddChoiceToDB from "../components/story/add_choice_db";

export default function TurtleStory2Container() {
    let popupDataVessel = {
        "ending": "Vessel Strikes",
        "desc": "A vessel strike is a collision between any type of boat and a marine animal in the ocean. All sizes and types of vessels—from large ships to jet skis—have the potential to collide with nearly any marine species. Strikes that result in death or injury to the animal may go unnoticed by the vessel operator or unreported to researchers that keep track of such incidents. Here are some ways to help:",
        "steps": ["Keep a sharp lookout", "Watch your speed", "Keep your distance", "Reduce vehicle pollution", "Slow your boat immediately and put it in neutral"],
        "volunteerLink": "",
        "sourceText": "NOAA Fisheries",
        "source": "https://www.fisheries.noaa.gov/insight/understanding-vessel-strikes",
        "source2Text": "",
        "source2": ""
    };
    let popupDataBycatch = {
        "ending": "Bycatch in Fishing Gea",
        "desc": "Incidental capture in fishing gear (also known as bycatch) is likely the greatest threat to sea turtles and many other species worldwide. Approximately 40% of all animals caught in fisheries are discarded as trash. Marine mammals, sea turtles, seabirds, and other species are caught and discarded, usually dead. For those animals that are caught and released injured but still alive, their fate after being released is unknown. Here are some ways to help:",
        "steps": ["Choose seafood that is sustainable and fished according to regulation", "Purchase alternative gear that are less likely to be swallowed or tangle turtles"],
        "volunteerLink": "",
        "sourceText": "World Wildlife Fund",
        "source": "https://www.worldwildlife.org/threats/bycatch",
        "source2Text": "SEE Turtles",
        "source2": "https://www.seeturtles.org/fisheries-bycatch"
    };
    return(
        <div>
            <StoryTitle title={"NESTING"} />
            <div className="story-container margins">
                <StoryImage id="ocean-gif" className="gif ocean" src="img/ocean.gif" alt="An ocean gif" />
                <div className="story-content ocean">
                    <p className="story-paragraph2">You decide to pass on the jellyfish and continue swimming towards the beach.</p>
                    <p className="story-paragraph2">
                        You swim with ease due to your unique proportionally long flippers and paddle-shaped back flippers that help you swim for
                        long distance foraging migrations. After swimming under water for about 85 minutes, you need to go up to the surface to
                        breathe.
                    </p>
                    <p className="story-question">Where will you swim?</p>
                    <div className="choice-container">
                        <button onClick={(e) => AddChoiceToDB(e, true, "Vessel Strikes", popupDataVessel)} className="choice-btn-container">
                            <Link to="/story-turtle-2-1" className="choice-btn">Swim straight up.</Link>
                        </button>
                        <button onClick={(e) => AddChoiceToDB(e, true, "Bycatch in Fishing Gear", popupDataBycatch)} className="choice-btn-container">
                            <Link to="/story-turtle-2-2" className="choice-btn">Swim to the right and up.</Link>
                        </button>
                        <button onClick={(e) => AddChoiceToDB(e, false, "", "")} className="choice-btn-container">
                            <Link to="/story-turtle-3" className="choice-btn">Swim to the left and up.</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}