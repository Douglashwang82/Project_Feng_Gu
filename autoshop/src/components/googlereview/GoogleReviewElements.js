import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import { Button } from '@mui/material';
import { Link } from '@mui/material';
export const ReviewGroup = styled.div`
    display:grid;
    grid-template-columns: 20% 20% 20% 20% 20%;
    width: 70%;
    column-gap: 50px;
    padding-top:150px;
`

export const ReviewFrame = styled(Card)`

`
export const ReviewSection = styled.div`
    // background: purple;
    display:grid;
    grid-template-columns: 1px auto;
    align-items: center;
    margin-top:10px;
    margin-left:10px;
    column-gap: 50px;
`

export const ReviewName = styled(Typography)`
    font-weight: bold;
`

export const ReviewAvatar = styled(Avatar)`
    // margin-top: 10px;
    // margin-left:10px;
`

export const ReviewStars = styled.div`
// background:yellow;
    display:grid;
    grid-template-columns: 20px 20px 20px 20px 20px;
    margin-left:10px;
    margin-top:10px;
`

export const ReviewText = styled(Typography)`
    padding-left: 10px;
`

export const ReviewStarFull =styled(ImStarFull)`
    fill: #f2c81d;
`
export const ReviewStarEmpty = styled(ImStarFull)`
    fill: #BABABA;
`
export const ReviewExpandButton = styled(Link)`
    color: blue;
    padding-left:10px;
`

export const ReviewArea = styled.div`
    height:600px;
    width:100%;
    margin:auto;
    background:#141414;
    margin-top: -100px;
    z-index: 2;
    position: relative;
    border-bottom-left-radius: 50px;
    border-bottom-right-radius: 50px;
`
export const ReviewMiddle = styled.div`

`