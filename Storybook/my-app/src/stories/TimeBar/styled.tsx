import styled from "styled-components";
import { kscolors } from "../lib/colors";
import { hoursProps } from "./types";

export const DayBox = styled.div`
    width: 200px;
    height: auto;
    border: 1px solid ${kscolors.darkGrey}
`

export const HourBox = styled.div<hoursProps>(({selected}) => `
display: flex;
flex:1;
height: 50px;
border: 1px solid ${kscolors.lightGrey};
cursor: pointer;
background-color: ${selected && kscolors.oceanBlue};
&:hover {
    background-color: ${kscolors.oceanBlue}
}
`);

