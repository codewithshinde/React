import styled from "styled-components";
import { kscolors, fonts } from "../lib";
import { hoursProps } from "./types";
import { getTheme, ITheme } from '@fluentui/react';

const theme: ITheme = getTheme();

export const Container = styled.div`
    width: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const TimeBoxWrapper = styled.div`
    flex: 1;
    flex-direction: row;
    border-top: 2px solid orange;
`

export const DayBox = styled.div`
    width: 100px;
    height: auto;
`

export const HourBox = styled.div<hoursProps>(({ selected, hovered }) => `
    display: flex;
    flex: 1;
    height: 50px;
    justify-content: center;
    align-item:center;
    ${selected || hovered ?
        `${selected && `border-bottom: 1px solid #146dad;`}` :
        `border: 1px solid ${kscolors.lightGrey};`
    };
    background-color: ${hovered && kscolors.steelBlueLight || selected && theme.palette.blueLight};
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
export const HourBlockText = styled.p`
    font-size: ${fonts.sizes.large};
`
export const VerticalText = styled.p`
    writing-mode: vertical-rl;
    display: flex;
    justify-content: center;
    text-align:center;
    padding: 2px;
    font-weight: bold;
`

