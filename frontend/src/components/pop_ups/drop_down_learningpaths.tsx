import DropDownBase from "./drop_down_base";

import Math from "../../assets/icons/Math.svg?react";
import Physics from "../../assets/icons/Physics.svg?react";
import ComputerScience from "../../assets/icons/ComputerScience.svg?react";
import GraduateHat from "../../assets/icons/GraduateHat.svg?react";

interface DropDownLearningpathsProps {
  openStatus: boolean;
  onChange?: (isActive: boolean) => void;
}

const DropDownLearningpaths: React.FC<DropDownLearningpathsProps> = ({
  openStatus,
  onChange,
}) => {
  return (
    <div className="flex w-auto">
      <DropDownBase openStatus={openStatus} onChange={onChange}>
        <div className="flex flex-col gap-5">
          <div className="flex">
            <div className="flex gap-3">
              <Math />
              <div className="flex flex-col gap-3">
                <h1 className="font-intertight">Mathe</h1>
                <nav>
                  <ul className="flex flex-col gap-1 font-manrope">
                    <li>Vektoren</li>
                    <li>Integralrechnung</li>
                    <li>Funktionen</li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="flex gap-3">
              <Physics />
              <div className="flex flex-col gap-3">
                <h1 className="font-intertight">Physik</h1>
                <nav>
                  <ul className="flex flex-col gap-1 font-manrope">
                    <li>Vektoren</li>
                    <li>Integralrechnung</li>
                    <li>Funktionen</li>
                  </ul>
                </nav>
              </div>
            </div>

            <div className="flex gap-3">
              <ComputerScience />
              <div className="flex flex-col gap-3">
                <h1 className="font-intertight">Informatik</h1>
                <nav>
                  <ul className="flex flex-col gap-1 font-manrope">
                    <li>Vektoren</li>
                    <li>Integralrechnung</li>
                    <li>Funktionen</li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <GraduateHat />
            <nav>
              <ul>
                <li className="font-intertight">Alle Lernpfade</li>
              </ul>
            </nav>
          </div>
        </div>
      </DropDownBase>
    </div>
  );
};
export default DropDownLearningpaths;
