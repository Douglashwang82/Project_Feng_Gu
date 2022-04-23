import styled from 'styled-components';
// import Button from 'react-bootstrap/Button'
import Button from '@mui/material/Button';
import {Trail as PreTrail} from './helpers/PreTrail';

export const Container = styled.div`
// background-color: #FFB511;
// background-color: white;
background: radial-gradient(circle at -26% -36%, #FFB511, lightyellow);
display: grid;
align-items: center;
/* height: 100%; */
justify-content: center;
height: 800px;
grid-template-columns:auto auto;
border-bottom-left-radius: 50px;
border-bottom-right-radius: 50px;
position:relative;
margin-top:-100px;
z-index:3;
`

export const AppointmentBtn = styled.button`
//background: #1295d8;
    height: 40px;
    background: #000;
    opacify: 0.1;
    color: #fff;
    border-radius: 40px;
    font-weight:700;
    margin-top: -200px;
    &:hover {
        background:#BABABA;
        box-shadow: none;
    }
    &:focus {
      background:#BABABA;
      box-shadow: none;
    }
    &:active {
      box-shadow: none;
    }
    &:visited {
      shadow-none: true;
      box-shadow: 1px 1px 1px black;
    }
    &:link {
      box-shadow: none;
    }
`

export const Trail = styled(PreTrail)`

`


export const Span = styled.span``

export  const Img = styled.img`
margin-top:150px;
`