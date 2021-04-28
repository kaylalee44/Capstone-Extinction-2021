import React from 'react';
import { Link } from 'react-router-dom';

export default function StoryTitle(props) {
    return(
        <div>
            <div className="story-title">
                <div>
                    <Link to="/stories" className="back-to-stories">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M21.8749 4.375C23.3374 4.375 24.8624 4.5625 26.2499 5C27.1874 5.3125 27.9999 5.6875 28.7499 6.25V24.5C28.7499 24.8125 28.4374 25.125 28.1249 25.125C27.9999 25.125 27.9374 25.125 27.8124 25.0625C26.0624 24.125 23.9374 23.75 21.8749 23.75C19.7499 23.75 16.6874 24.5625 14.9999 25.625C13.1874 24.25 10.5624 23.75 8.12494 23.75C6.31244 23.75 3.87494 24.3125 2.18744 25.125C2.12494 25.125 2.07806 25.1406 2.03119 25.1563C1.98431 25.1719 1.93744 25.1875 1.87494 25.1875C1.56244 25.1875 1.24994 24.875 1.24994 24.5625V6.25C3.06244 4.875 5.68744 4.375 8.12494 4.375C10.5624 4.375 13.1874 4.875 14.9999 6.25C16.8124 4.875 19.4374 4.375 21.8749 4.375ZM21.875 21.25C23.375 21.25 24.875 21.4375 26.25 21.875V7.49996C24.875 7.06246 23.375 6.87496 21.875 6.87496C19.75 6.87496 16.6875 7.68746 15 8.74996V23.125C16.6875 22.0625 19.75 21.25 21.875 21.25Z" fill="#E9E3CB"/>
                        </svg>
                        back to stories
                    </Link>
                </div>
                <div className="story-heading">{props.title}</div>
                <svg className="audio-logo" width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.13728 0.503174L0.49353 3.14692L8.66853 11.3219L8.12478 11.8844H0.62478V23.1344H8.12478L17.4998 32.5094V20.1532L25.3373 27.9907C24.1185 28.9094 22.7498 29.6407 21.2498 30.0719V33.9344C23.7623 33.3719 26.0685 32.2094 28.0185 30.6532L31.8623 34.4969L34.506 31.8532L3.13728 0.503174ZM13.75 23.4531L9.68129 19.3844H4.37504V15.6344H9.68129L11.3313 13.9844L13.75 16.4031V23.4531ZM29.8563 21.897C30.3438 20.5282 30.625 19.047 30.625 17.5095C30.625 11.5657 26.6688 6.54071 21.25 4.92821V1.06571C28.7688 2.77196 34.375 9.48446 34.375 17.5095C34.375 20.1157 33.775 22.572 32.725 24.7657L29.8563 21.897ZM17.5001 2.50939L13.975 6.03439L17.5001 9.55939V2.50939ZM21.25 9.95321C24.025 11.3407 25.9375 14.1907 25.9375 17.5095C25.9375 17.6595 25.9188 17.8095 25.9 17.9595L21.25 13.3095V9.95321Z" fill="#E9E3CB"/>
                </svg>
            </div>
        </div>
    );
}