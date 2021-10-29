import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, MainHeading } from "../../globalStyles";
import {
  HeroVideo,
  HeroSection,
  HeroText,
  ButtonWrapper,
  HeroButton,
} from "./HeroStyle";

const Hero = () => {
  return (
    <HeroSection>
      <HeroVideo src="./hero.mp4" />
      <Container>
        <MainHeading>Your data is secure with us</MainHeading>
        <HeroText>
          We provide the best security systems for clients all over the world
        </HeroText>
        <ButtonWrapper>
          <Link to="signup">
            <Button>Get started</Button>
          </Link>
          <Link to="pricing">
            <Button>Find More</Button>
          </Link>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
