import styled from "styled-components";
import { bg4 } from "../Images";

export const Background = styled.div`
  height: 100%;
  width: 100%;
  background: url(${bg4});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex: 1;
`;

export const Left = styled.div`
  flex:1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Right = styled.div`
  flex:1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const RightContent = styled.div`
  width: 400px;
  height: 600px;
`;
