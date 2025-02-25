import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BtnMainMenu from "../buttons/btn_main_menu";
import BtnPrimary from "../buttons/btn_primary";
import BtnSecondary from "../buttons/btn_secondary";
import DropDownLearningpaths from "../pop_ups/drop_down_learningpaths";
import DropDownCoursePaths from "../pop_ups/drop_down_coursepaths";
import Logo from "../../assets/icons/Logo.svg?react";

interface HeaderLoggedOutProps {}

const HeaderLoggedOut: React.FC<HeaderLoggedOutProps> = () => {
  const navigate = useNavigate();

  const [isActivLearningPaths, setIsActivLearningPaths] = useState(false);
  const [isActivCoursePaths, setIsActivCoursePaths] = useState(false);

  function openCoursePaths() {
    setIsActivCoursePaths((prev) => !prev);
  }

  function openLearningPaths() {
    setIsActivLearningPaths((prev) => !prev);
  }

  function handleCoursePathsChange(isActive: boolean) {
    setIsActivCoursePaths(isActive);
  }

  function handleLearningPathsChange(isActive: boolean) {
    setIsActivLearningPaths(isActive);
  }

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-x-5 sm:gap-x-9 p-4">
        <Logo className="block md:block w-24" />

        <div className="flex flex-wrap gap-x-3 sm:gap-x-[2.25rem] justify-center">
          <BtnMainMenu label="Warum wir?" onClick={() => navigate("/")} />

          <div className="relative w-full md:w-auto">
            <BtnMainMenu label="Kurse" onClick={openCoursePaths} />
            {isActivCoursePaths && (
              <div className="absolute w-full md:w-auto">
                <DropDownCoursePaths
                  openStatus={isActivCoursePaths}
                  onChange={handleCoursePathsChange}
                />
              </div>
            )}
          </div>

          <div className="relative w-full md:w-auto">
            <BtnMainMenu label="Lernpfade" onClick={openLearningPaths} />
            {isActivLearningPaths && (
              <div className="absolute z-50 w-full md:w-auto">
                <DropDownLearningpaths
                  openStatus={isActivLearningPaths}
                  onChange={handleLearningPathsChange}
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <BtnPrimary label="Registrieren" onClick={() => {}} />
          <BtnSecondary label="Anmelden" onClick={() => {}} />
        </div>
      </div>
    </>
  );
};

export default HeaderLoggedOut;
