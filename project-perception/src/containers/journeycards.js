import React from "react";
import { JourneyList } from "../components/journey-cards/index";

export default function JourneyCardsContainer(props) {
    return (
        <div className="past-stories-container">
             <h2>Your Past "Nesting" Story Interactions</h2>
             <p>These previous journeys can help you see what endings you came across, to help prevent harm in the future.</p>
             <div className="journey-cards-row">
                 <p>Your last journey:</p>
                <JourneyList />
             </div>
        </div>
    )
}