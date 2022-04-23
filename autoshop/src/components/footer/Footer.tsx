import { FC } from 'react'
import Card from 'react-bootstrap/Card';
import useStyles from './styles';
import Button from 'react-bootstrap/Button';
import AseLogo from '../../static/img/ase-logo.png';

const Footer: FC = () => {

    const classes = useStyles();

    return (
        <div className={classes.footer}>
            <div className={classes.section1}>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            <p>123</p>
            </div>
            <Button  style={{"position":"absolute", "left":"10%"}}>Feng Gu</Button>
            <img src={AseLogo} style={{"height":"100px", "position":"absolute", "left":"80%"}} alt="no value"></img>
        </div>
    );
}

export default Footer 