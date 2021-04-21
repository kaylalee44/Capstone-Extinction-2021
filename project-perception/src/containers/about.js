import React from 'react';
import { MissionStatement, HowToHelp, MeetTheTeam } from '../components/about/about';

export default function AboutContainer() {
    return(
        <div>
            <MissionStatement />
            <HowToHelp />
            <MeetTheTeam />
        </div>
    );
}
