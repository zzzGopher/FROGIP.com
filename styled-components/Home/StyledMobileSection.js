/** @format */

import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 8px;
  background-color: #f6f6f6;
  height: auto;
  margin-inline: auto;
`;

export const MobileFlexColumns = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${(props) => props.theme.screen.large}) {
    display: grid;
    grid-template-areas: "a c c c" "a c c c";
    justify-items: start;
  }
`;

//TODO fix grid.

export const HeroText = styled.div`
  font-size: ${(props) => props.theme.font.md};
  font-weight: 700;
  align-self: baseline;
  padding: 8px;
  margin-left: -400px;
  grid-area: a;
  @media (min-width: ${(props) => props.theme.screen.large}) {
    padding: 8px;
    margin-left: 0;
    margin-bottom: 200px;
    place-self: start;
  }
`;

export const MobileBottomText = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: 300;
  padding: 8px;
  grid-area: a;
  @media (min-width: ${(props) => props.theme.screen.large}) {
    text-align: left;
  }
`;
