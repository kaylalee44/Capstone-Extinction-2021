import React, { useState } from "react";
import { StoriesList, StoriesDetail } from "../components/stories/index";

export default function StoriesContainer(props) {
    const [hide, setHide] = useState(false);
    const hideStories = () => {
        let hideCopy = hide;
        if (!hideCopy) {
            hideCopy = true;     
        }
        setHide(hideCopy);
        console.log("worked!");
    }
    let stories = <StoriesList hideStories={hideStories} />
    if (hide) {
        stories = <StoriesDetail />
    }
    return (
        <div>
            {stories}
        </div>
    )
}