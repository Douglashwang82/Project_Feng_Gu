import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


export const Container = styled.div`
//background-color: #FFB511;
// background: radial-gradient(circle at -26% -36%, #FFB511, lightyellow);
background: white;
display: grid;
align-items: center;
/* height: 100%; */
justify-content: center;
height: 800px;
grid-template-columns: auto auto;
// grid-template: 150px/ auto auto;
border-bottom-left-radius: 50px;
border-bottom-right-radius: 50px;
position:relative;
margin-top:-100px;
z-index:3;
column-gap: 200px;
`


export const CardFrame = styled(Card)`
display:grid;
width:150%;
height: 300px;
`

export const Icon = styled.img``

export const Text = styled.p`
text-align: center;
margin:auto;
`

export const MyLink =  styled(Link)``

export const Section = styled.div`
 display: grid;
 grid-template: "1rem 1rem";
 column-gap:10px;
 justify-content: left;
 align-items: center;
 font-weight:700;
`

export const MyIframe = styled.iframe`
    width:400px;
    height:300px;
`