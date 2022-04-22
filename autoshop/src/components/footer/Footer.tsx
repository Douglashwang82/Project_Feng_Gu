import { FC } from 'react'
import Card from 'react-bootstrap/Card';
import useStyles from './styles';
import Button from 'react-bootstrap/Button';
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
        </div>
    );
}

export default Footer 