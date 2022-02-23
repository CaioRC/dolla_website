import { HeroContainer , HeroBg , VideoBg , HeroContent , HeroH1 , HeroP, HeroBtnWrapper, ArrowFoward, ArrowRight} from "./HeroElements";
import Video from '../../assets/videos/video.mp4'
import { useState } from "react";
import { Button } from '../Buttons/ButtonsElements'

export const Hero = () => {
  const [hover , setHover] = useState<boolean>(false);

  const onHover = () : void => {
    setHover(!hover);
  }

  return(
    <HeroContainer id={'home'}>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} />
      </HeroBg>
      <HeroContent>
        <HeroH1>
          Virtual Banking Made Easy
        </HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 in credit towards your next payment.
        </HeroP>
        <HeroBtnWrapper >
          <Button 
          primary={true}
          dark={true}
          to={'signup'} 
          smooth={true}
          duration={500}
          spy={true}
          offset={-80}
          onMouseEnter={onHover} 
          onMouseLeave={onHover}>
            Get Started {hover ? <ArrowFoward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}