import { Row } from "react-grid-system";
import styled from "styled-components";


export const NavbarStyle = styled(Row)`
 align-items: center;
 background-color: #fafafa;
 padding-top: 20px;
/* .logo{
    height: ;
} */
    .absolute{
        p{
            position: fixed;
        }
    }
    a,span{
        font-family: 'SFDN', Arial, sans-serif;
        font-size: 16px;
        font-weight: 600;
        display: inline-block;
        margin: 0;
        color: #1c1c1c;
        /* /* white-space: nowrap; */
        -webkit-transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out;
    transition: color 0.3s ease-in-out, opacity 0.3s ease-in-out;
    position: relative;
    }
    @media (max-width: 576px) {
        background-color: #ffffff;
    }

`