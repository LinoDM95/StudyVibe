import { useState, useEffect } from "react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  isActiveEffect?: boolean;
}

const BtnMainMenu: React.FC<ButtonProps> = ({
  label,
  onClick,
  isActiveEffect,
}) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActiveEffect !== undefined) {
      setIsActive(isActiveEffect);
    }
  }, [isActiveEffect]);

  return (
    <button
      className="relative group w-auto hover:cursor-pointer"
      onClick={onClick}
    >
      <span className="font-intertight text-lg text-studyvibe-dark">
        {label}
      </span>
      <span className="absolute left-0 bottom-0 h-[5px] bg-studyvibe-color7 transition-all duration-300 "></span>
      <span
        className={`absolute left-0 bottom-0 h-[5px] bg-studyvibe-color7 transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"} `}
      ></span>
    </button>
  );
};
export default BtnMainMenu;
