import { Nav, NavbarContainer, 
  NavLogo, MobileIcon , NavMenu,
  NavItem , NavLinks , NavBtn ,
  NavBtnLink} from "./NavbarElements";
import {FaBars} from 'react-icons/fa';
import { IconContext } from "react-icons/lib";
import {INavBarItem} from "../../global/types/NavBarItem";
import { useEffect, useState } from "react";
import { toggleHome } from '../../utils/ScrollToTop'

interface IProps {
  toggle: () => void;
  navBarItems: INavBarItem[] ;
}

export const Navbar = ({ navBarItems, toggle}: IProps) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80){
      setScrollNav(true)
    }else{
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll' , changeNav)
  })

  return(
    <>
    <IconContext.Provider value={{color:'#fff'}}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to={"/"} onClick={toggleHome}>
              dolla
            </NavLogo>
            <MobileIcon onClick={toggle}>
              <FaBars/>
            </MobileIcon>
            <NavMenu>
              {navBarItems.map((item,idx) => 
                <NavItem  key={item.name + idx}>
                <NavLinks to={item.url}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                >
                  {item.name}
                </NavLinks>
              </NavItem>
              )}          
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/signin">Sign In</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  )
}