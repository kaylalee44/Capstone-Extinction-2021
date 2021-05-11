import React from 'react';
import { MissionStatement, HowToHelp, MeetTheTeam, LandingPageHeader, NoticeStatement, KeyFeatures, StartAdventure } from '../components/landing-page/landing_page';

export default function LandingPageContainer() {
    return(
        <div>
            <LandingPageHeader />
            <HowToHelp />
            <MissionStatement />
            <div className="landing-page-divider"></div>
            <NoticeStatement />
            <KeyFeatures />
            <StartAdventure />
            <div className="landing-page-divider"></div>
            <MeetTheTeam />
        </div>
    );
}
