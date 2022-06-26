import styled from "styled-components";
import { kscolors } from "../lib/colors";
import { hoursProps } from "./types";

export const TimeBoxWrapper = styled.div`
    width: 130px;
    display: flex;
    flex-direction: row;
`
export const DayBox = styled.div`
    width: 100px;
    height: auto;
`

export const HourBox = styled.div<hoursProps>(({selected, hovered}) => `
    display: flex;
    flex: 1;
    height: 50px;
    ${selected || hovered ?
     `${selected && `border-bottom: 1px solid #146dad;`}`:
     `border: 1px solid ${kscolors.lightGrey};`
     };
    background-color: ${hovered && kscolors.steelBlueLight || selected && kscolors.steelBlue};
    &:hover {
        background-color: ${hovered && kscolors.steelBlueLight};
        cursor: pointer;
    }
`);

export const StatusBar = styled.div`
    width: 10px;
    background-color: ${kscolors.amber};
    transform: rotate(180deg);   
`
export const VerticalText = styled.p`
    writing-mode: vertical-rl;
    display: flex;
    justify-content: center;
    text-align:center;
    padding: 2px;
    font-weight: bold;
`

