import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button'

export const MyCard = styled(Card)`s
    color: #fff;
    width: 100%;
    margin:auto;
    height: 600px;
    min-width:500px;
    font-size:30px;
    background:#FFB511;
    z-index:10;
    border-style: none;
`

export const MyCardBtn = styled(Button)`
    top:50%;
    left: 70%;
    position: relative;
    width: 10%;
    min-width:100px;
    
`
export const AppointmentBtn = styled(Button)`
    background: #1295d8;
    color: #fff;
`