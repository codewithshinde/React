import styled, { css } from "styled-components";
import { getTheme, ITheme } from '@fluentui/react';
const theme: ITheme = getTheme();

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 200px 200px 200px;
    grid-template-rows: auto 50px auto 200px 500px;
    column-gap: 20px;
    row-gap: 20px;
    padding: 20px;
    margin: 20px;
`;

export const BigText = styled.h1`
    font-size: 135px;
    line-height: 0px;
    font-weight: 300;
    color: ${theme.palette.white};
`;

export const Heading = styled.h1`
    grid-column: 1/-1;
`;

const BoxStyles = css`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
cursor: pointer;
box-shadow: 10px 10px 65px -4px rgba(0,0,0,0.5);
`;

export const ActionBarWrapper = styled.div`
    grid-column: 1/-1;
`;

export const SickLeaves = styled.div`
    ${BoxStyles};
    background-color: ${theme.palette.themeDark};
`;

export const CasualLeaves = styled.div`
    ${BoxStyles};
    background-color: ${theme.palette.magenta};
`;

export const OtherLeaves = styled.div`
    ${BoxStyles};
    background-color: ${theme.palette.orangeLight};
`;

export const LeaveDetails = styled.div`
    grid-column: 1/-1;
`;