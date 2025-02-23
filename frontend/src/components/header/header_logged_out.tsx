import BtnMainMenu from "../buttons/btn_main_menu";
import BtnPrimary from "../buttons/btn_primary";
import BtnSecondary from "../buttons/btn_secondary";

import Logo from "../../assets/icons/Logo.svg?react";

interface HeaderLoggedOutProps {}

const HeaderLoggedOut: React.FC<HeaderLoggedOutProps> = () => {
  function navToHomepage() {}

  function handleOnClick() {
    return null;
  }

  return (
    <div className="flex items-center justify-between gap-15">
      <Logo className="" />
        <div className="flex gap-x-[2.25rem]">
          <BtnMainMenu label="Warum wir?" onClick={navToHomepage} />
          <BtnMainMenu label="Kurse" />
          <BtnMainMenu label="Lernpfade" />
        </div>
        <div className="flex gap-3">
          <BtnPrimary label="Registrieren" onClick={handleOnClick} />
          <BtnSecondary label="Anmelden" onClick={handleOnClick} />
        </div>
    </div>
  );
};
export default HeaderLoggedOut;
