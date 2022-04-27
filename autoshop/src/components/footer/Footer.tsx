import { FC } from 'react'
import Card from 'react-bootstrap/Card';
import useStyles from './styles';
import Button from 'react-bootstrap/Button';
import AseLogo from '../../static/img/ase-logo.png';

import {
    Container,
} from './FooterElements';

const Footer: FC = () => {

    const classes = useStyles();

    return (
        <>
        <Container>
            <div style={{"border":"solid","color":"white","padding":"5px"}}>
                <h1 style={{"color":"white"}}>Cars Repair</h1>
            </div>
            <div>
                <div style={{"display":"grid", "gridTemplateColumns":"auto auto auto","color":"white","columnGap":"150px"}}>
                    <div>
                        <h6>About</h6>
                            <p>123</p>
                            <p>123</p>
                            <p>123</p>
                    </div>
                    <div>
                        <h6>Services</h6>
                            <p>123</p>
                            <p>123</p>
                            <p>123</p>
                    </div>                    <div>
                        <h6>Contact</h6>
                            <p>123</p>
                            <p>123</p>
                            <p>123</p>
                    </div>
                </div>
            </div>
            <div style={{"color":"white"}}>&copy; Copyright 2022 CARSREPAIR, Inc.
</div>
        </Container>
        </>
        // <div className={classes.footer}>
        //     <div className={classes.section1}>
        //     <p>123</p>
        //     <p>123</p>
        //     <p>123</p>
        //     <p>123</p>
        //     <p>123</p>
        //     <p>123</p>
        //     <p>123</p>
        //     <p>123</p>
        //     <p>123</p>
        //     <p>123</p>
        //     <p>123</p>
        //     <p>123</p>
        //     </div>
        //     <Button  style={{"position":"absolute", "left":"10%"}}>Feng Gu</Button>
        //     <img src={AseLogo} style={{"height":"100px", "position":"absolute", "left":"80%"}} alt="no value"></img>
        // </div>
    );
}

export default Footer 