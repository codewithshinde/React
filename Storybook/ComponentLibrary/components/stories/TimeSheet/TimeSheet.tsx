import * as React from 'react';
import TimeBar from '../TimeBar';
import { getTheme } from '@fluentui/react';
import { Heading, TimeSheetWrapper } from './styled';


const TimeSheet: React.FunctionComponent = () => {
    const theme = getTheme();
    console.log(theme.palette);
    return (
        <TimeSheetWrapper>
            <Heading>My Timesheet</Heading>
            <TimeBar />
            <TimeBar />
            <TimeBar />
            <TimeBar />
            <TimeBar />
        </TimeSheetWrapper>);
};

export default TimeSheet;
