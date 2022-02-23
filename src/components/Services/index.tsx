import { ServicesContainer, ServicesH1, 
  ServicesWrapper, ServicesCard , ServicesIcon,
  ServicesH2 , ServicesP } from "./ServicesElements";
import {FaBars} from 'react-icons/fa';
import {INavBarItem} from "../../global/types/NavBarItem";

import Office from '../../assets/images/Office.svg'
import OffRoad from '../../assets/images/OffRoad.svg'
import Benefits from '../../assets/images/Benefits.svg'

export const Services = () => {

  return(
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={OffRoad}/>
          <ServicesH2>Reduce expenses</ServicesH2>
          <ServicesP>We Help reduce your fees and increase your overall revenue,</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Office}/>
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP>You can access out platform online anywhere in the world.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Benefits}/>
          <ServicesH2>Premium Benefits</ServicesH2>
          <ServicesP>Unlock our special membership card that returns 5%</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}