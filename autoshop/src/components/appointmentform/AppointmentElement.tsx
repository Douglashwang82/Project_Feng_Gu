import Card from '@mui/material/Card';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
export const MyContainer = styled.div`
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
margin-top:-50px;
z-index:3;
`


// Pickers for services
export const PickerOption = styled(Card)`
    width: 100%;
    height:100px;
    justify-content: center;
    align-items: center;
    display:grid;
    grid-template: "auto auto";
    border-style:ridge;
`


export const PickerGroup = styled.div`
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    row-gap:10px;
    column-gap: 10px;
`


export const MyCheckBox = styled.input.attrs({ type: 'checkbox' })`
    width: 20px;
    height: 20px;

`


export const PickerLabel = styled(Typography)`
    font-style:bold;
    max-width: 200px;
    min-width: 200px;
    text-align: center;
    
`

export const MyForm = styled(Form)`
width: 1000px;
`