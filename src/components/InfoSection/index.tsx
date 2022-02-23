import { InfoContainer,
   InfoWrapper,
    InfoRow,
    Column1,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle, 
    BtnWrap
  ,Column2, Img, ImgWrap } from "./InfoElements";
import Video from '../../assets/videos/video.mp4'
import { useState } from "react";
import { Button } from '../Buttons/ButtonsElements'
import { ISectionData } from "../../global/types/SectionData";

export const Info = ( props : ISectionData) => {
 
  const { id ,lightBg ,lightText , lightTextDesc, topLine, headline, description, buttonLabel, imgStart, img,  alt, dark, primary, darkText } = props
  console.log(id)
  return(
    <InfoContainer lightBg={lightBg} id={id}>
      <InfoWrapper>
        <InfoRow imgStart={imgStart}>
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText}>{headline}</Heading>
              <Subtitle darkText={darkText}>{description}</Subtitle>
              <BtnWrap>
                <Button to='home'
                smooth
                duration={500}
                spy
                // exact={true}
                offset={-80}
                primary={primary}
                dark={ dark }
                >{buttonLabel}</Button>
              </BtnWrap>
            </TextWrapper>
          </Column1>
          <Column2>
          <ImgWrap>
            <Img src={img} alt={alt}/>
          </ImgWrap>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}