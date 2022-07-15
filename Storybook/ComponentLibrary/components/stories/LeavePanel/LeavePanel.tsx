import React from "react";
import { Grid, SickLeaves, CasualLeaves, OtherLeaves, LeaveDetails, Heading, BigText, ActionBarWrapper } from "./styled";
import { IStyleSet, Label, ILabelStyles, Pivot, PivotItem } from '@fluentui/react';
import ActionBar from "./ActionBar";

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
    root: { marginTop: 10 },
};

const LeavePanel: React.FC<{}> = () => {
    return (
        <Grid>
            <Heading>Leave Panel</Heading>
            <ActionBarWrapper>
                <ActionBar />
            </ActionBarWrapper>
            <p>Sick leaves</p>
            <p>Casual leaves</p>
            <p>Other leaves</p>
            <SickLeaves>
                <BigText>30</BigText>
            </SickLeaves>
            <CasualLeaves>
                <BigText>10</BigText>
            </CasualLeaves>
            <OtherLeaves >
                <BigText>2</BigText>
            </OtherLeaves>
            <LeaveDetails>
                <Pivot aria-label="Basic Pivot Example">
                    <PivotItem headerText="Leave Requests" >
                        <Label styles={labelStyles}>Pivot #1</Label>
                    </PivotItem>
                    <PivotItem headerText="History">
                        <Label styles={labelStyles}>Pivot #2</Label>
                    </PivotItem>
                    <PivotItem headerText="Holidays list">
                        <Label styles={labelStyles}>Pivot #3</Label>
                    </PivotItem>
                </Pivot>
            </LeaveDetails>
        </Grid>
    );
};

export default LeavePanel;
