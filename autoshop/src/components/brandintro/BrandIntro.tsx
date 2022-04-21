import { FC } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import cardimage from '../../static/img/car-outline-md.png';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { useTrail, a } from '@react-spring/web';
import styles from './styless.module.css';
import React, { useState } from 'react';
// import carImage from '../../static/img/carimage.png';
import {
  MyCard,
  MyCardBtn,
  AppointmentBtn

} from './InfoElements';

const Trail: React.FC<{}> = ({ children }) => {
  const items = React.Children.toArray(children)
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    to: { opacity: 1, x: 0, height: 80 },
    from: { opacity: 0, x: 20, height: 0 },
  })
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} className={styles.trailsText} style={style}>
          <a.div style={{ height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  )
}



const BrandIntro: FC = () => {

  return (
    <div className={styles.container} >
      <div>
        <Trail >
          <span>Maintaince</span>
          <span>&</span>
          <span>Repair</span>
          <span>for Cars.</span>
        </Trail>
      </div>
      <div>
        <img src={cardimage} style={{"height":"200px"}}>
        </img>
      </div>
      <div>
      <AppointmentBtn>Make an Appointment</AppointmentBtn>
      </div>
    </div>
  );
}

export default BrandIntro 