import { useState } from "react";
import { Hero } from "../../components/HeroSection";
import { Info } from "../../components/InfoSection";
import { Navbar } from "../../components/Navbar";
import { SideBar } from "../../components/Sidebar";
import { NAVBAR_ITEMS } from "../../global/constants/NavBarItems";
import { HOME_OBJ, HOME_OBJ2 ,HOME_OBJ3 } from '../../global/constants/Data'
import { Services } from "../../components/Services";
import { Footer } from "../../components/Footer";

export function Home(){
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () =>{
    setIsOpen(!isOpen);
  }

  return(
    <>
      <SideBar navBarItems={NAVBAR_ITEMS} isOpen={isOpen} toggle={toggle}/>
      <Navbar navBarItems={NAVBAR_ITEMS} toggle={toggle}/>
      <Hero/>
      <Info {...HOME_OBJ}/>
      <Info {...HOME_OBJ2}/>
      <Services/>
      <Info {...HOME_OBJ3}/>
      <Footer/>
    </>
  )
}