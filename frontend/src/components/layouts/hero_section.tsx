import ExampleMath from "../../assets/icons/ExampleMath.jpg";
import CardStatic from "../cards/card_static";
import BtnPrimary from "../buttons/btn_primary";
import { Typewriter } from "react-simple-typewriter";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = ({}) => {
  const colorMap: Record<string, string> = {
    Animationen: "text-red-500",
    Wissen: "text-blue-500",
    Erklärungen: "text-green-500",
  };
  function handleOnClick() {}
  return (
    <div className="flex items-center m-20 w-300">
      <div className="flex flex-col gap-5">
        <div className="flex items-center text-[2.25rem] font-intertight gap-2">
          <h1 className="font-intertight font-bold">
            <Typewriter
              words={[
                "Lerne durch Animationen",
                "Visualisiere Wissen",
                "Interaktive Erklärungen",
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
        <p className="font-inter">
          Entdecke komplexe Konzepte durch lebendige Visualisierungen und
          erlange Wissen auf eine spannende Weise.
        </p>
        <div>
          <BtnPrimary label="Kostenlos testen" onClick={handleOnClick} />
        </div>
      </div>
      <CardStatic content={ExampleMath} />
    </div>
  );
};

export default HeroSection;
