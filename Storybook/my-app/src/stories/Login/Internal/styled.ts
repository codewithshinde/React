import styled from "styled-components";
import { colors } from "../../theme";

export const FormConatiner = styled.div`
  width: 400px;
  height: auto;
  background-color: ${colors.white};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap:10px;
  & .loginBtn {
      width: 100px;
  };

  & .welcomeMessage {
    font-weight: bold;
  }
  `;