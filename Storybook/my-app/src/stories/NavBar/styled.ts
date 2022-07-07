import styled, { css } from "styled-components";
import { colors, font } from "../theme";

export const NavigationBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${font.size.px18};
  background: linear-gradient(
    90deg,
    rgb(110, 94, 254) 0%,
    rgba(73, 63, 252, 1) 100%
  );
  box-shadow: 0 0.75rem 0.5rem -0.5rem rgba(0, 0, 0, 0.2);
  @media only screen and (max-width: 960px) {
    position: relative;
  }
`;

export const LogoText = styled.h1`
  color: ${colors.white};
  justify-self: start;
  margin-left: ${font.size.px20};
  cursor: pointer;
  &:img {
    margin-left: 0.5rem;
    font-size: 1.6rem;
  }
`;

const MenuMobile = css`
  background: #6668f4;
  left: 0;
  opacity: 1;
  transition: all 0.5s ease;
  z-index: 1;
`;

export const Menu = styled.ul<{ viewInMobile: boolean }>`
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 20px;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: end;
  margin-right: 2rem;
  @media only screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 80px;
    left: -100%;
    opacity: 1;
    transition: all 0.5s ease;
    padding: 0;
    ${({ viewInMobile }) => viewInMobile && MenuMobile};
  }
`;

export const MenuItems = styled.li`
  display: flex;
`;

export const MenuLinks = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  &:hover {
    background-color: #6d76f7;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }

  @media only screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    flex: 1;
    justify-content: center;
    align-items: center;
    &:hover {
      background-color: #7577fa;
      border-radius: 0;
    }
  }
`;

export const BurgerIcon = styled.div`
  display: none;
  @media only screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
