/// <reference types="vite-plugin-svgr/client" />
import BtnMainMenu from "../components/buttons/btn_main_menu";
import BtnSubMenu from "../components/buttons/btn_submenu";
import BtnTabMenu from "../components/buttons/btn_tab";
import Vector from "../assets/icons/Vector.svg?react";
import { useState } from "react";

const Homepage = () => {
  const [isActive, setIsActive] = useState(false);

  function handleOnClick() {
    setIsActive((prev) => !prev); 
  }

  return (
    <div className="flex gap-1">
      <BtnMainMenu label="Kurse" onClick={handleOnClick} isActiveEffect={isActive} />
      <BtnSubMenu label="Button" onClick={handleOnClick} img={<Vector />} isActiveEffect={isActive} />
      <BtnTabMenu label="Konto" onClick={handleOnClick} isActiveEffect={isActive} />
    </div>
  );
};

export default Homepage;
