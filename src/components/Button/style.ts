import styled from "styled-components";
interface Props {
    padding?: string;
    border?: boolean;
}

export const ButtonStyle = styled.button<Props>`
    padding:${({ padding }: Props) => padding || " 6px 18px"};
    color: #ffffff;
    font-size: 14px;
    font-family: 'SFDN', Arial, sans-serif;
    line-height: 1.55;
    font-weight: 700;
    border-width: 2px;
    border-radius: 30px;
    background-color: #1f5bff;
    background-position: center center;
    border-color: transparent;
    border-style: solid;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out, border-color 0.2s ease-in-out;
    &:hover{
        background-color: #000000;
        /* color: #1f5bff; */
        border-color:${({ border }: Props) => border && '#c4c2c2'}
    }
`