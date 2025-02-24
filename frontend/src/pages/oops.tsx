import Robot from "../assets/icons/Computer-Robot-Thinking--Streamline-Manchester 1.svg?react";
import BtnPrimary from "../components/buttons/btn_primary";
import { useNavigate } from "react-router-dom";

const OOPS = () => {
  const navigateHP = useNavigate();

  function handleOnClick() {
    navigateHP("/");
  }

  return (
    <div className="flex items-center justify-center m-70 gap-10">
      <Robot />

      <div className="flex flex-col gap-5">
        <h1 className="font-intertight text-9xl">404</h1>
        <h2 className="font-intertight text-4xl">
          Ups, etwas ist schiefgelaufen!
        </h2>
        <p className="font-inter text-lg">
          Die von Ihnen gesuchte Seite ist leider nicht mehr verfügbar.
        </p>
        <BtnPrimary label="zur Startseite" onClick={handleOnClick} />
      </div>
    </div>
  );
};

export default OOPS;
