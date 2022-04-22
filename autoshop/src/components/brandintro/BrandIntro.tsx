import { FC } from 'react'
import cardimage from '../../static/img/car-outline-md.png';
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
        <Img src={cardimage} style={{"height":"200px"}}></Img>
      <AppointmentBtn>Make an Appointment</AppointmentBtn>
      </Container>
  );
}

export default BrandIntro 