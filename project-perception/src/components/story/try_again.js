import React from 'react';

export default function TryAgain() {
    return(
        <div>
            <a href="https://www.fisheries.noaa.gov/species/leatherback-turtle" target="_blank" className="learn-more">Learn more about the Leatherback Sea Turtle</a>
            <div className="ending-container">
                <button className="ending-btn">View your Past Stories</button>
                <button className="try-again ending-btn">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 7.5V2.5L8.75 8.75L15 15V10C19.1375 10 22.5 13.3625 22.5 17.5C22.5 21.6375 19.1375 25 15 25C10.8625 25 7.5 21.6375 7.5 17.5H5C5 23.025 9.475 27.5 15 27.5C20.525 27.5 25 23.025 25 17.5C25 11.975 20.525 7.5 15 7.5Z" fill="#3A444D"/>
                    </svg>
                    Try Again
                </button>
            </div>
        </div>
    );
}