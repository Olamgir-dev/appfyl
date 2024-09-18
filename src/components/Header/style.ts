import { Row } from "react-grid-system";
import styled from "styled-components";


export const HeaderStyle = styled(Row)`
 margin-top: 8%;
 /* height: '1000px'; */
 /* margin-bottom: 300px; */
  background-color: #FAFAFA;
  .header-texts{
    color: #1c1c1c;
    font-size: 18px;
    font-family: 'SFDN', Arial, sans-serif;
    line-height: 1.25;
    font-weight: 600;
    background-position: center center;
    border-color: transparent;
    border-style: solid;
    @media (max-width: 576px) {
        font-size: 14px;
    }
  }

`
export const TextStyle = styled.p`
    color: #1c1c1c;
    font-size: 76px;
    font-family: 'SFDN', Arial, sans-serif;
    line-height: 1.1;
    font-weight: 700;
    background-position: center center;
    border-color: transparent;
    border-style: solid;
    @media (max-width: 576px) {
      font-size : 14px;
      text-align: left;
    }
    @media (max-width: 768px) {
        font-size:38px;
        /* text-align: center; */
    } 
    @media (max-width: 992px) {
        font-size: 38px;
        /* text-align: center; */
    }  
`