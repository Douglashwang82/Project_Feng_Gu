import { FC } from 'react'
import { AiFillPhone, AiFillEnvironment, AiFillClockCircle } from "react-icons/ai";

import {
    Container,
    CardFrame,
    Text,
    Icon,
    MyLink,
    Section,
    MyIframe,
} from './ContactPageElement';

const AboutPage: FC = () => {

  return (
    <Container>
      <CardFrame>
        <Section>
        <AiFillPhone size={40}/>
        <Text>(222)-222-2222</Text>
        </Section>

        <Section>
        <AiFillEnvironment size={40}/>
        <MyLink href="https://goo.gl/maps/vLEK113CFzXgMpD5A">24072 Madeiros ave, Hayward, CA</MyLink>
        </Section>

        <Section>
        <AiFillClockCircle size={40}/>
        <Text>Monday - Friday: 7am - 5pm</Text>
        </Section>
      </CardFrame>
      <MyIframe style={{"border":"1"}} loading="lazy" src="https://www.google.com/maps/embed/v1/search?q=24072%20Madeiros%20Avenue%2C%20%E5%B8%8C%E6%B4%BB%E5%8A%A0%E5%88%A9%E7%A6%8F%E5%B0%BC%E4%BA%9E%E7%BE%8E%E5%9C%8B&key=AIzaSyBx7lbVSeDHjxp7cAMAENMZSNucBzW3Z4w"/>
    </Container>
  );
}

export default AboutPage 