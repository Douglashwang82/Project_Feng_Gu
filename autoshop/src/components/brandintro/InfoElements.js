import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'

export const MyCard = styled(Card)`s
    color: #fff;
    width: 80%;
    margin:auto;
    height: 400px;
    min-width:500px;
    font-size:30px;
    border: solid;
`

export const MyCardBtn = styled(Button)`
    background:#000;
    z-index:10;
    display:flex;
    top:100px;
    width:100px;
    
`