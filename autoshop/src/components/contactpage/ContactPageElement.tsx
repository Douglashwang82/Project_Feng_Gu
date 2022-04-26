import styled from 'styled-components';
import Card from 'react-bootstrap/Card';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


export const Container = styled.div`
//background-color: #FFB511;
// background: radial-gradient(circle at -26% -36%, #FFB511, lightyellow);
background: white;
// display: grid;
// align-items: center;
// height: 100%;
// justify-content: center;
height: 800px;
    // grid-template:
    // "a a"
    // "b c"
    // "b c"
    // "b c"
    // "b c"/ 450px 150px;
border-bottom-left-radius: 50px;
border-bottom-right-radius: 50px;
position:relative;
z-index:3;
// column-gap:200px;
padding-top:50px;
`
export const SubCard = styled.div`
// display:grid;
// border:solid;
// grid-template:
// "a a" 100px
// "b c"/ 450px 150px;
// justify-content:center;
width: 60%;
// margin:auto;
// align-items:center;
// column-gap:100px;
// border:solid;
margin:auto;
`
export const InfoArea = styled.div`
    display:grid;
    grid-template-columns: 60% 30%;
    padding-top:100px;
    column-gap:50px;
`



export const CardFrame = styled(Card)`
display:grid;
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
    width:600px;
    height:400px;
`