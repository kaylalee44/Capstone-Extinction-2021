import React from "react";
import { StoriesList, StoriesDetail } from "../components/stories/index";

export default function StoriesContainer(props) {
    return (
        <div>
            <StoriesList />
            <StoriesDetail />
        </div>
    )
}