import ExampleMath from "../../../assets/examples/ExampleMath.jpg";
import CardStatic from "../../cards/card_static";
import BtnPrimary from "../../buttons/btn_primary";
import { Typewriter } from "react-simple-typewriter";

const HeroSectionHP: React.FC = () => {
  function handleOnClick() {}
  return (
    <div className="flex flex-col lg:flex-row items-center mt-20">
      <div className="flex flex-col gap-5 justify-center lg:justify-start">
        <div className="flex items-center font-intertight gap-2 justify-center lg:justify-start">
          <h1 className="font-intertight text-2xl md:text-4xl">
            <Typewriter
              words={[
                "Lerne durch Animationen",
                "Visualisiere Wissen",
                "Interaktive Übungen",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h1>
        </div>
        <p className="font-inter sm:text-sm md:text-md text-center md:text-start">
          Entdecke komplexe Konzepte durch lebendige Visualisierungen und
          erlange Wissen auf eine spannende Weise.
        </p>
        <div id="" className="flex justify-center lg:justify-start">
          <BtnPrimary label="Kostenlos testen" onClick={handleOnClick} />
        </div>
      </div>
      <CardStatic content={ExampleMath} />
    </div>
  );
};

export default HeroSectionHP;
