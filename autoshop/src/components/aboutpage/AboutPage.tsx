import { FC } from 'react'

import {
    Container,
    SubCard,
    MyImage,
    TextSection,
} from './AboutPageElements';

const AboutPage: FC = () => {

  return (
    <Container>
      <SubCard>
        <TextSection>
          <h1>Feng Gu</h1>
          <p>Something...</p>
          <p>Something...</p>
          <p>Something...</p>
        </TextSection>
        <MyImage />
      </SubCard>
      </Container>
  );
}

export default AboutPage 