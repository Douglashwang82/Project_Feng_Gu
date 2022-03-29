import { FC } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import cardimage from '../../static/img/download.jpg';
import useStyles from './styles';
import {Link} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
const BrandIntro: FC = () => {
    const classes = useStyles();
    return (
        <>
<div className={classes.card}>
<Card className="text-white">
  <Card.Img src={cardimage} alt="Card image"/>
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
    <LinkContainer to="/service">
    <Button>Make an Appointment</Button>
    </LinkContainer>
  </Card.ImgOverlay>
</Card>
</div>
        </>
    );
}

export default BrandIntro 