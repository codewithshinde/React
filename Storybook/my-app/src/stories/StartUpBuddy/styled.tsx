import styled from "styled-components";
import { colors } from "../theme";

export const Grid = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 20% 80%;
  grid-template-rows: 10vh auto 10vh;
`;

export const Header = styled.div`
  background-color: ${colors.richBlack};
  grid-column: 1 / -1;
`;
export const SideBar = styled.div``;
export const Content = styled.div``;

export const Footer = styled.div`
  background-color: ${colors.alabaster};
  grid-column: 1 / -1;
`;
