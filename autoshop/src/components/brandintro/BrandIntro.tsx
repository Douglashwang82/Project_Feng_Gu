import { FC } from 'react'
import cardimage from '../../static/img/car-outline-md.png';
import brandpic from '../../static/img/redorange.png';
import Image from 'react-bootstrap/Image';
import {
  AppointmentBtn,
  Trail,
  Container,
  Span,
  Img,
  ImageFrame,
  
} from './InfoElements';

const BrandIntro: FC = () => {

  return (
    <Container>
      <div>
        <Trail >
          <Span>Maintenance</Span>
          <Span>&</Span>
          <Span>Repair</Span>
          <Span>for Cars.</Span>
        </Trail>
        </div>
        {/* <Img src={cardimage} style={{"height":"400"}}></Img> */}
        <ImageFrame>

          <Img src={brandpic}></Img>
        </ImageFrame>

      <AppointmentBtn>Make an Appointment</AppointmentBtn>
      </Container>
  );
}

export default BrandIntro 