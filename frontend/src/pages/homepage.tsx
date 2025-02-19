/// <reference types="vite-plugin-svgr/client" />
import { useState } from "react";

import BtnMainMenu from "../components/buttons/btn_main_menu";
import BtnSubMenu from "../components/buttons/btn_submenu";
import BtnTab from "../components/buttons/btn_tab";
import BtnTech from "../components/buttons/btn_tech";
import BtnAnimation from "../components/buttons/btn_animation";
import BtnToggle from "../components/buttons/btn_toggle"
import BtnPrimary from "../components/buttons/btn_primary"
import BtnSecondary from "../components/buttons/btn_secondary"
import BtnNext from "../components/buttons/btn_next"
import BtnNextSmall from "../components/buttons/btn_next_small"

const Homepage = () => {
  const [isActive, setIsActive] = useState(false);

  function handleOnClick() {
    setIsActive((prev) => !prev);
  }

  return (
<div className="flex gap-2 items-center m-3">
  <BtnMainMenu label="Kurse" onClick={handleOnClick} isActiveEffect={isActive} />
  <BtnSubMenu label="Button" onClick={handleOnClick} isActiveEffect={isActive} />
  <BtnTab label="Konto" onClick={handleOnClick} isActiveEffect={isActive} />
  <BtnTech label="Aktualisieren" onClick={handleOnClick} isActiveEffect={isActive} />
  <BtnAnimation label="Start" onClick={handleOnClick} isActiveEffect={isActive} />
  <BtnToggle label="Grundlagen" onClick={handleOnClick} isActiveEffect={isActive} />
  <BtnPrimary label="Registrieren" onClick={handleOnClick} isActiveEffect={isActive} />
  <BtnSecondary label="Anmelden" onClick={handleOnClick} isActiveEffect={isActive} />
  <BtnNext label="weiter Lernen" onClick={handleOnClick} />
  <BtnNextSmall label="weiter zu Leaderboard" onClick={handleOnClick} />
</div>

  );
};

export default Homepage;
