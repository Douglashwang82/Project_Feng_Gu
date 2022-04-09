import { FC } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import cardimage from '../../static/img/download.jpg';
import useStyles from './styles';
import {Link} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
  MyCard,
  MyCardBtn

} from './InfoElements';

const BrandIntro: FC = () => {
    const classes = useStyles();
    return (
        <>
<div>
<MyCard>
  <MyCard.Title>123</MyCard.Title>
  <MyCard.Body>
    <MyCard.Text>
      domethins
      domethins
      domethins
      domethins
    </MyCard.Text>
    <MyCardBtn>123</MyCardBtn>
  </MyCard.Body>
</MyCard>
</div>
        </>
    );
}

export default BrandIntro 