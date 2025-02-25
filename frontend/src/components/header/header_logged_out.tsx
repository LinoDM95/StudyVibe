import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BtnMainMenu from "../buttons/btn_main_menu";
import BtnPrimary from "../buttons/btn_primary";
import BtnSecondary from "../buttons/btn_secondary";
import DropDownLearningpaths from "../pop_ups/drop_down_learningpaths";
import DropDownCoursePaths from "../pop_ups/drop_down_coursepaths";
import Logo from "../../assets/icons/Logo.svg?react";

/**
 * HeaderLoggedOut Component
 * ==========================
 * This component represents the **header** for users who are not logged in.
 * It includes navigation buttons, a logo, and dropdown menus for **learning paths** and **course paths**.
 *
 * @prop {none} HeaderLoggedOutProps - This component does not accept any props.
 */

interface HeaderLoggedOutProps {}

const HeaderLoggedOut: React.FC<HeaderLoggedOutProps> = () => {
  // React Router navigation hook
  const navigate = useNavigate();

  // State to manage the visibility of the dropdowns
  const [isActivLearningPaths, setIsActivLearningPaths] = useState(false);
  const [isActivCoursePaths, setIsActivCoursePaths] = useState(false);

  /**
   * Toggles the Course Paths dropdown.
   */
  function openCoursePaths() {
    setIsActivCoursePaths((prev) => !prev);
  }

  /**
   * Toggles the Learning Paths dropdown.
   */
  function openLearningPaths() {
    setIsActivLearningPaths((prev) => !prev);
  }

  /**
   * Updates the Course Paths dropdown state when its visibility changes.
   *
   * @param {boolean} isActive - The updated visibility state of the Course Paths dropdown.
   */
  function handleCoursePathsChange(isActive: boolean) {
    setIsActivCoursePaths(isActive);
  }

  /**
   * Updates the Learning Paths dropdown state when its visibility changes.
   *
   * @param {boolean} isActive - The updated visibility state of the Learning Paths dropdown.
   */
  function handleLearningPathsChange(isActive: boolean) {
    setIsActivLearningPaths(isActive);
  }

  return (
    <>
      <div className="flex items-center justify-between gap-15">
        <Logo className="hidden md:block" />
        <div className="flex gap-x-[2.25rem]">
          <BtnMainMenu label="Warum wir?" onClick={() => navigate("/")} />

          {/* Course Paths Button & Dropdown */}
          <div className="relative">
            <BtnMainMenu label="Kurse" onClick={openCoursePaths} />
            {isActivCoursePaths && (
              <div className="absolute">
                <DropDownCoursePaths
                  openStatus={isActivCoursePaths}
                  onChange={handleCoursePathsChange}
                />
              </div>
            )}
          </div>

          {/* Learning Paths Button & Dropdown */}
          <div className="relative">
            <BtnMainMenu label="Lernpfade" onClick={openLearningPaths} />
            {isActivLearningPaths && (
              <div className="absolute z-50">
                <DropDownLearningpaths
                  openStatus={isActivLearningPaths}
                  onChange={handleLearningPathsChange}
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-3">
          <BtnPrimary label="Registrieren" onClick={() => {}} />
          <BtnSecondary label="Anmelden" onClick={() => {}} />
        </div>
      </div>
    </>
  );
};

export default HeaderLoggedOut;
