import styled from "styled-components";
import { bg3 } from "../Images";

export const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${bg3});
  display: flex;
  flex: 1;
`;

export const Left = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  padding: 20px;
`;

export const LeftContent = styled.div`
  width: 400px;
  height: 600px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 10px 10px 28px -15px rgba(255, 255, 255, 1);
`;

export const Right = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`;

export const RightContent = styled.div`
  width: 400px;
  height: 600px;
`;
