import BtnPrimary from "../../buttons/btn_primary";
import ExampleMathVideo from "../../../assets/examples/ExampleMathVideo.png";
import Smiley from "../../../assets/icons/Smiley.png";
import Diagram from "../../../assets/icons/diagram.png";
import Brain from "../../../assets/icons/brain.png";
import Rocket from "../../../assets/icons/rocket.png";

interface CallToActionProps {}

const CallToAction: React.FC<CallToActionProps> = ({}) => {
  function handleOnClick() {}

  return (
    <div className=" bg-blue-100 ">
      <div className="flex flex-col w-screen min-h-screen items-center justify-center gap-5 mb-10">
        <h1 className="font-intertight text-[2.25rem]">
          Richtig lernen, richtig verstehen
        </h1>
        <p className="flex flex-col items-center font-inter">
          <span>
            Warum sind so viele Schüler frustriert? Weil sie in neun von zehn
            Malen auf
          </span>
          <span>die falsche Weise unterrichtet wurden.</span>
        </p>
        <div className="flex items-center justify-between gap-28">
          <div className="flex flex-col items-center gap-2">
            <img src={Smiley} />
            <p className="flex flex-col items-center font-inter">
              <span>Ausführliche</span>
              <span>Erklärungen</span>
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src={Diagram} />
            <p className="flex flex-col items-center font-inter">
              <span>Visualisierungen</span>
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src={Brain} />
            <p className="flex flex-col items-center font-inter">
              <span>Interaktive</span>
              <span>Übungen</span>
            </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <img src={Rocket} />
            <p className="flex flex-col items-center font-inter">
              <span>Lernpfade</span>
            </p>
          </div>
        </div>
        <img className="" src={ExampleMathVideo} />
        <BtnPrimary label="Kostenlos testen" onClick={handleOnClick} />
      </div>
    </div>
    
  );
};

export default CallToAction;
