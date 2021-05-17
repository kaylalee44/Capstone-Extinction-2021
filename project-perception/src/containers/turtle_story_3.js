import React from 'react';
import StoryTitle from '../components/story/story_title';
import StoryImage from '../components/story/story_image';
import { Link } from 'react-router-dom';
import AddChoiceToDB from "../components/story/add_choice_db";

export default function TurtleStory3Container() {
    let popupDataSurvival = {
        "ending": "Survival",
        "desc": "After an adult female sea turtle nests, she returns to the sea, leaving her nest and the eggs within it to develop on their own. The amount of time the egg takes to hatch varies among the different species and is influenced by environmental conditions such as the temperature of the sand. The hatchlings do not have sex chromosomes so their gender is determined by the temperature within the nest. Here’s some ways to help increase the survival of the hatchlings:",
        "steps": ["Remove any leftover trash on the beach", "Avoid leaving pet food (intended for domesticated animals) outside as these food sources also may attract predatory wildlife", "Remember to minimize obstacles on your coastal property"],
        "volunteerLink": "https://www.coastsavers.org/index.php/wcc-cleanup/",
        "sourceText": "SEE Turtles",
        "source": "https://www.seeturtles.org/baby-turtles",
        "source2Text": "Dune Doctors",
        "source2": "https://dunedoctors.com/help-save-baby-sea-turtles/"
    };
    let popupDataLoss = {
        "ending": "Loss and Degradation of Nesting Habit",
        "desc": "Sea turtles use beaches and the lower dunes to nest and lay their eggs. Sea turtles deposit an average of about 100 eggs in each nest and lay between 3 and 7 nests during the nesting season. Here are some ways to help:",
        "steps": ["Reduce marine debris", "Volunteer to do beach clean-ups", "Carry reusable water bottles and shopping bags", "Do not disturb nesting turtles, nests, or hatchlings", "Fill in holes and knock down sandcastles before leaving the beach", "Refrain from releasing balloons, as they usually end up in the ocean"],
        "volunteerLink": "https://www.coastsavers.org/index.php/wcc-cleanup/",
        "sourceText": "NOAA Fisheries",
        "source": "https://www.fisheries.noaa.gov/feature-story/what-can-you-do-save-sea-turtles",
        "source2Text": "",
        "source2": ""
    };
    let popupDataHarvest = {
        "ending": "Direct Harvest of Turtles and Eggs",
        "desc": "Although sea turtles have spiritual or mythological importance in many cultures around the world, this has not prevented humans from consuming their eggs or meat. In many coastal communities, especially in Central America and Asia, sea turtles are considered a food source. During the nesting season, hunters comb the beaches at night looking for nesting females. Often, they will wait until the female has deposited her eggs to kill her. Then, they take both the eggs and meat. In some countries, sea turtle eggs are prized as an aphrodisiac. Others customarily consume sea turtle meat in observance of religious holidays. Here are some ways to help:",
        "steps": ["Educate people about the effects of sea turtles going extinct and how endangered they are", "Patrol nesting beaches", "Relocating eggs to hatchers in locations where no other solution will work", "Push the government to impose limits on consumption"],
        "volunteerLink": "https://www.coastsavers.org/index.php/wcc-cleanup/",
        "sourceText": "Conserve Turtles",
        "source": "https://conserveturtles.org/information-sea-turtles-threats-harvest-consumption/",
        "source2Text": "",
        "source2": ""
    };
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
                        <button onClick={(e) => AddChoiceToDB(e, true, "Survival", popupDataSurvival)} className="choice-btn-container">
                            <Link to="/story-turtle-3-1" className="choice-btn">To the right of the beach.</Link>
                        </button>
                        <button onClick={(e) => AddChoiceToDB(e, true, "Loss and Degradation of Nesting Habit", popupDataLoss)} className="choice-btn-container">
                            <Link to="/story-turtle-3-2" className="choice-btn">Towards the middle of the beach.</Link>
                        </button>
                        <button onClick={(e) => AddChoiceToDB(e, true, "Direct Harvest of Turtles and Eggs", popupDataHarvest)} className="choice-btn-container">
                            <Link to="/story-turtle-3-3" className="choice-btn">To the left of the beach.</Link>
                        </button>
                    </div>
                </div>
            </div>     
        </div>
    );
}