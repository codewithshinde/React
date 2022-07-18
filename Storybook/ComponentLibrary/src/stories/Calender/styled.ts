import styled from "styled-components";

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 100px);
    grid-template-rows: repeat(8, 100px);
    gap: 10px;
    padding: 10px;
    p {
        text-align: center;
    }
`;

export const DateBox = styled.div`
    height: 100px;
    width: 100%;
    background-color: #dadae5;
    p {
        text-align: start;
        margin: 0;
        padding: 10px;
    }
    &:hover {
        border: 2px solid #9d9d9d;
        cursor: pointer;
    }
`;

export const EmptyBox = styled.div`
    height: 100px;
    width: 100%;
`;