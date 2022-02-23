import React from "react";

import { SideBarContainer, Icon, CloseIcon , SideBarWrapper , SideBarMenu , SideBtnWrap , SideBarRoute , SideBarLink} from "./SideBarElements";
import {INavBarItem} from "../../global/types/NavBarItem";

interface IProps {
  isOpen: boolean;
  toggle: () => void;
  navBarItems: INavBarItem[] ;
}

export const SideBar = ({isOpen , toggle , navBarItems} : IProps) => {

  return(
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon/>
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          {navBarItems.map((item,idx) => 
            <SideBarLink 
            smooth={true}
            duration={500}
            spy={true}
            offset={-80} key={item.url + idx}  to={item.url} onClick={toggle}>
              {item.name}
            </SideBarLink>
          )}
        </SideBarMenu>
        <SideBtnWrap>
          <SideBarRoute to="/signin">
            Sign In
          </SideBarRoute>
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  )
}