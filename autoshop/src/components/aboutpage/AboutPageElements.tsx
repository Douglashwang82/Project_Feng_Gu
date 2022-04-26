import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';

export const Container = styled.div`
// background-color: #FFB511;
// background: radial-gradient(circle at -26% -36%, #FFB511, lightyellow);
background: white;
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

export const SubCard = styled.div`
    border:solid;
    width: 100%;
    margin:auto;
    display: grid;
    grid-template-columns: auto auto;
    column-gap: 200px;
`

export const MyImage = styled(Image)`
    background:yellow;
    width: 400px;
    height:300px;
`

export const TextSection = styled(Card)`
background:green;
    width: 700px;
    height:300px;
`