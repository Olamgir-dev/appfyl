import { Row } from "react-grid-system";
import styled from "styled-components";

export const SkelsStyle = styled(Row)`
  background-color : #ffffff;
  position: absolute;
  margin-bottom: '100px';
  /* margin-top: 100px; */
  z-index: 3;
  width: 100%;
  height: 300px;
  @media (max-width: 768px) {
    position: static;
    z-index: 0;
  }
`
export const TitleSkels = styled.p`
    margin-top: 60px;
    color: #000000;
    font-size: 52px;
    font-family: 'SFDN', Arial, sans-serif;
    line-height: 1.25;
    font-weight: 700;
    background-position: center center;
    border-color: transparent;
    border-style: solid;
    @media (max-width: 768px) {
        font-size: 38px;
    }
`