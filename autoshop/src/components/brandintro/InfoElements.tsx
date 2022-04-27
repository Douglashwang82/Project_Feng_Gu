import styled from 'styled-components';
// import Button from 'react-bootstrap/Button'
import Button from '@mui/material/Button';
import {Trail as PreTrail} from './helpers/PreTrail';
import Image from 'react-bootstrap/Image';

export const Container = styled.div`
// background-color: #FFB511;
background-color: #457EDA;
// background: radial-gradient(circle at -26% -36%, #FFB511, lightyellow);
display: grid;
align-items: center;
/* height: 100%; */
justify-content: center;
height: 600px;
grid-template-columns:auto auto;
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
position:relative;
// margin-top:-100px;
z-index:10;
column-gap:200px;
row-gap:100px;
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



export  const Img = styled(Image)`
width:80%;
position:absolute;
top:0;
bottom:0;
left:0;
right:0;
margin:auto;
`

export const ImageFrame = styled.div`
height: 250px;
background:white;
width: 500px;
position:relative;
border-top-right-radius:50px;
border-bottom-right-radius:50px;
border-bottom-left-radius:50px;
margin-top:100px;
`