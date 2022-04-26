import { FC } from 'react'
import cardimage from '../../static/img/car-outline-md.png';
import brandpic from '../../static/img/brandpic1.jpg';
import Image from 'react-bootstrap/Image';
import {
  AppointmentBtn,
  Trail,
  Container,
  Span,
  Img,
} from './InfoElements';

const BrandIntro: FC = () => {

  return (
    <Container>
        <Trail >
          <Span>Maintenance</Span>
          <Span>&</Span>
          <Span>Repair</Span>
          <Span>for Cars.</Span>
        </Trail>
        <Img src={cardimage} style={{"height":"400"}}></Img>
        {/* <Image src={brandpic} style={{"height":"400px"}}></Image> */}
      <AppointmentBtn>Make an Appointment</AppointmentBtn>
      </Container>
  );
}

export default BrandIntro 