import React from "react";
import JourneyList from "../components/journey-cards/index";

export default function JourneyCardsContainer(props) {
    return (
        <div>
            <JourneyList
                title={props.title}
            />
        </div>
    )
}