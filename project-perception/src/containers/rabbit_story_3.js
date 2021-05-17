import React from 'react';
import StoryTitle from '../components/story/story_title';
import StoryImage from '../components/story/story_image';
import { Link } from 'react-router-dom';
import AddChoiceToDB from "../components/story/add_choice_db";

export default function RabbitStory3Container() {
    let popupDataLack = {
        "ending": "Lack of Genetic Diversity",
        "desc": "10,000 years ago the Columbia Basin pygmy rabbit became genetically isolated. Disease can easily kill off their species as there is only one known colony left in Washington with 50 individuals. Their lack of genetic diversity and inbreeding decreases their chance of survival when faced with major changes in diet or disease. Here are some ways to help:",
        "steps": ["Support environmental organizations that work to reestablish species population", "Read up on the recovery plan"],
        "volunteerLink": "",
        "recoveryLink": "https://ecos.fws.gov/docs/recovery_plan/Columbia%20Basin%20Pygmy%20Rabbit%20Final%20RP.pdf",
        "sourceText": "Washington Fish and Wildlife",
        "source": "https://www.fws.gov/wafwo/articles.cfm?id=149489590",
        "source2Text": "",
        "source2": ""
    };
    let popupDataSurvival = {
        "ending": "Survival",
        "desc": "The large scale loss of native shrub is the primary role of the decline of the Columbia Basin Pygmy Rabbit. Because of their small population, things can easily wipe their species out such as extreme weather, predation, disease, demographic limitations, or inbreeding.  Here’s some ways to help increase the survival of the pygmy rabbit:",
        "steps": ["Reduce water waste indoors and outdoors", "Help conserve habitat and protect shrub landscape", "Partner with Conservation Projects"],
        "volunteerLink": "",
        "recoveryLink": "",
        "conservationLink": "https://www.conservationnw.org/conserving-the-cutest-sagelands-critter/",
        "sourceText": "Conservation Northwest",
        "source": "https://www.conservationnw.org/our-work/wildlife/pygmy-rabbit/",
        "source2Text": "",
        "source2": ""
    };
    return(
        <div>
            <StoryTitle title="SEARCHING" />
            <div className="story-container margins">
                <StoryImage id="fox-plain" className="gif jellyfish" src="img/fox-plain.jpg" alt="A fox looking around in a plain" />
                <div className="story-content jellyfish">
                    <p className="story-paragraph2">
                        You find a spot to hide within the grass and remain completely still. A fox comes out from the grass and sniffs the air, then walks away.
                        After you check the coast is clear, you continue your journey. Finally, you come across a bunchgrass that you think looks good to eat.
                    </p>
                    <p className="story-question">Will you eat it?</p>
                    <div className="choice-container">
                        <button onClick={(e) => AddChoiceToDB(e, true, "Lack of Genetic Diversity", popupDataLack)} className="choice-btn-container">
                            <Link to="/story-rabbit-3-1" className="choice-btn">You're so hungry you just eat this grass.</Link>
                        </button>
                        <button onClick={(e) => AddChoiceToDB(e, true, "Survival", popupDataSurvival)} className="choice-btn-container">
                            <Link to="/story-rabbit-3-2" className="choice-btn">There might be a sagebrush in the distance if you wait a little longer.</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}