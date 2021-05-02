import React, { useState } from "react";
import { StoriesList, StoriesDetail } from "../components/stories/index";

export default function StoriesContainer(props) {
    const [hide, setHide] = useState(false);
    const hideStories = () => {
        let hideCopy = hide;
        if (!hideCopy) {
            hideCopy = true;     
        } else {
            hideCopy = false;
        }
        setHide(hideCopy);
    }
    let stories = <StoriesList hideStories={hideStories} />
    if (hide) {
        stories = <StoriesDetail hideStories={hideStories} />
    } else {
        stories = <StoriesList hideStories={hideStories} />
    }
    return (
        <div>
            {stories}
        </div>
    )
}