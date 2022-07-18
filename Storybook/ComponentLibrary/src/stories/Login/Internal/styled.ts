import styled from "styled-components";
import { colors } from "../../theme";

export const FormConatiner = styled.div`
  width: 400px;
  height: auto;
  background-color: ${colors.white};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  & .loginBtn {
    width: 100px;
  }

  & .welcomeMessage {
    font-weight: bold;
  }
`;

export const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 20% 70%;
  grid-template-rows: 10vh 80vh 10vh;
  background-color: ${colors.darkGrey};
`;

export const ViewItem = styled.div`
  width: 500px;
  height: 500px;
  background-color: ${colors.richBlack};
`;

export const GridItem = styled.div``;

export const Blue = styled.div`
  background-color: ${colors.richBlack};
  grid-column: 1 / -1;
`;
export const Green = styled.div`
  background-color: ${colors.amber};
`;
export const Yellow = styled.div`
  background-color: ${colors.steelBlue};
`;
