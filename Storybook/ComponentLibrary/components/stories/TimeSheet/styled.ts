import styled from "styled-components";

export const TimeSheetWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 140px);
    column-gap: 10px;
    padding: 20px;
    margin: 20px;
`
export const Heading = styled.h1`
    grid-column: 1/-1;
`