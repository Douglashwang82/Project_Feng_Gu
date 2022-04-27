import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
import { ImStarEmpty, ImStarFull } from "react-icons/im";
import { Button } from '@mui/material';
import { Link } from '@mui/material';

export const ReviewArea = styled.div`
    height:550px;
    width:100%;
    margin:auto;
    background:#141414;
    margin-top: -100px;
    position: relative;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    background:#6C45DA;
    z-index: 8;
    ${'' /* background: radial-gradient(circle at -26% -36%, lightyellow, darkblue); */}
`

export const ReviewGroup = styled.div`
    display:grid;
    grid-template-columns: auto auto auto auto auto;
    width: 80%;
    column-gap: 50px;
    padding-top:150px;
    margin:auto;
`

export const ReviewFrame = styled.div`
    border-bottom-right-radius:10px;
    border-bottom-left-radius:5px;
    border-top-right-radius:10px;
    border-top-left-radius:10px;
    background:white;
    padding-top:10px;
    position:relative;
    z-index:8;

    // glass effect ...
    // background-color: rgba(255, 255, 255, .15);  
    // backdrop-filter: blur(5px);

    
    
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

export const ReviewMiddle = styled.div`

`

export const ReviewShadow1 = styled.div`
padding-left:10px;
padding-bottom:10px;
background:darkblue;
border-top-left-radius: 15px;
border-bottom-right-radius:15px;
border-bottom-left-radius:10px;
`

export const ReviewShadow2 = styled.div`
padding-right:10px;
padding-bottom:10px;
background:darkblue;
border-top-right-radius: 15px;
border-bottom-right-radius:15px;
border-bottom-left-radius:10px;
`

export const ReviewShadow3 = styled.div`
${'' /* padding-right:10px;
padding-bottom:10px;
// background:lightgreen;
border-top-right-radius: 15px;
border-top-left-radius: 15px;
border-bottom-right-radius:15px;
border-bottom-left-radius:12px;
background: radial-gradient(circle at -26% -36%, grey, #BABABA); */}

`

export const ReviewGlass = styled.div`
    ${'' /* position: relative;
    z-index: 20;
    width:100%;
    height:100%;
    top: -100%; */}
    
`